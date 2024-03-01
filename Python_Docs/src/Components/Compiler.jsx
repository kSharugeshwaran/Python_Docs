import React from 'react'
import { useState } from 'react'
import axios from "axios"
import Index from './Navbar'
import { Button } from '@chakra-ui/react'


const Compiler = () => {
    const [code,setCode] = useState("")
    const[displayOutput,setdisplayOutput] = useState("")
    const handleSubmit = async ()=> {
        const data = {
            language : "py",
            code        }
        const response = await axios.post("http://localhost:3000/run",data)
        console.log(response.data.output)
        setdisplayOutput(response.data.output)
        
    }
    return (
        <div style={{backgroundColor:"rgb(0,27,48)"}} >    
            <Index/>
            <center>
            <div style={{height:"93.5vh",marginLeft:"240px",marginTop:"30px",color:"white"}} >
                <textarea style={{borderRadius:"12px",backgroundColor:"rgb(1,32,49)",fontSize:"16px",padding:"20px",width:"60vw"}} name="" id="" cols="75" rows="20" onChange={(e) => {
                    setCode(e.target.value)
                    }} ></textarea><br />
                <div style={{display:"flex",flexDirection:"column",backgroundColor:"rgb(1,32,49)",width:"60vw",height:"25vh",marginTop:"20px",borderRadius:"10px"}} >
                    <Button style={{width:"130px",margin:"20px",marginTop:"30px",backgroundColor:"rgb(255, 203, 30)",color:"rgb(52, 122, 180)"}} onClick={handleSubmit}>Run the Code</Button>
                    <p style={{textAlign:"start",textIndent:"30px",fontSize:"30px",marginTop:"20px"}} >Output : {displayOutput}</p>
                </div>
            </div>
            </center>
        </div>
)
}

export default Compiler