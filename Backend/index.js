// server.js

const express = require("express");
const cors = require("cors"); 
const app = express();
const PORT = 3000;
const connectDatabase = require('./Config/Config.js');
const errorHandler = require("./Middleware/ErrorHandler.js");
const UserRouter = require("./Routes/UserRouter.js");

app.use(errorHandler);
app.use(cors());
app.use(express.json());
app.use("/docs",UserRouter)


app.get("/", (req, res) => {
    connectDatabase()
        .then(() => {
            console.log('Connected to Database!!!')
        });
    res.status(200).send("Connected to Database!!!")
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

