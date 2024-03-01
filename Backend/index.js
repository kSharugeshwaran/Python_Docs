// server.js

const express = require("express");
const cors = require("cors"); 
const app = express();
const PORT = 3000;
const connectDatabase = require('./Config/Config.js');
const errorHandler = require("./Middleware/ErrorHandler.js");

const {generateFile} = require("./generateFile")
const {executePython} = require("./executePython")

const UserRouter = require("./Routes/UserRouter.js");
const CommunityRouter = require("./Routes/CommunityRouter.js");

app.use(errorHandler);
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true})) 

app.use("/docs",UserRouter)
app.use("/docs",CommunityRouter)


app.get("/", (req, res) => {
    connectDatabase()
        .then(() => {
            console.log('Connected to Database!!!')
        });
    res.status(200).send("Connected to Database!!!")
});


app.post("/run", async (req,res,next) => {
    const {language , code} = req.body

    if(code === undefined){
        return res.status(400).json({success: false, error: "Empty Code Body"})
    }
    try{

        const filepath = await generateFile(language,code)
        // console.log(response)
        const output = await executePython(filepath)
        return res.json({filepath,output})
    }catch(err){
        res.status(500).json({err})
    }

})


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

