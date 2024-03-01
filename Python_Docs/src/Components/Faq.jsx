import Index from "./Navbar";
import { SlArrowDown } from "react-icons/sl";
import { IoSearch } from "react-icons/io5"; 
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

const Faq = () => {
    const data = [{
        question: "What is a class in Python?",
        answer: "A class is a user-defined blueprint or prototype from which objects are created. Classes provide a means of bundling data and functionality together. Creating a new class creates a new type of object, allowing new instances of that type to be made. Each class instance can have attributes attached to it for maintaining its state. Class instances can also have methods (defined by their class) for modifying their state."
    },
    {
        question: " What are the benefits of using Python language as a tool in the present scenario?",
        answer: "Object-Oriented Language, High-Level Language, Dynamically Typed language, Extensive support Libraries, Presence of third-party modules, Open source and community development, Portable and Interactive,      Portable across Operating systems"
    },
    {
        question: "Is Python a compiled language or an interpreted language?",
        answer: "Actually, Python is a partially compiled language and partially interpreted language. The compilation part is done first when we execute our code and this will generate byte code internally this byte code gets converted by the Python virtual machine(p.v.m) according to the underlying platform(machine+operating system)."
    },
    {
        question: "What does the ‘#’ symbol do in Python?",
        answer: "‘#’ is used to comment on everything that comes after on the line."
    },
    {
        question: "What is the difference between a Mutable datatype and an Immutable data type?",
        answer: "Mutable data types can be edited i.e., they can change at runtime. Eg - List, Dictionary, etc.        Immutable data types can not be edited i.e., they can not change at runtime. Eg - String, Tuple, etc."
    },
    {
        question: "How are arguments passed by value or by reference in Python?",
        answer: "Everything in Python is an object and all variables hold references to the objects. The reference values are according to the functions; as a result, you cannot change the value of the references. However, you can change the objects if it is mutable."
    },
    {
        question: "What is the difference between a Set and Dictionary?",
        answer: "The set is an unordered collection of data types that is iterable, mutable and has no duplicate elements. A dictionary in Python is an ordered collection of data values, used to store data values like a map."
    },
    {
        question: " What is List Comprehension? Give an Example.",
        answer: "List comprehension is a syntax construction to ease the creation of a list based on existing iterable."


    },
    {
        question: " What is a pass in Python?",
        answer: "Pass means performing no operation or in other words, it is a placeholder in the compound statement, where there should be a blank left and nothing has to be written there."
    },
    {
        question: "How is Exceptional handling done in Python?",
        answer: "There are 3 main keywords i.e. try, except, and finally which are used to catch exceptions and handle the recovering mechanism accordingly. Try is the block of a code that is monitored for errors. Except block gets executed when an error occurs. The beauty of the final block is to execute the code after trying for an error. This block gets executed irrespective of whether an error occurred or not. Finally, block is used to do the required cleanup activities of objects/variables."
    }
];
    // const [show, setShow] = useState(Array(data.length).fill(false)); // Array to track the visibility of each item

    return (
        <>
            <Index/>
            <div style={{backgroundColor: "#011627",width: "100%",height: "100%",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",color: "white"}}>
                <div className="parentFaq">
                    <div style={{fontSize: "20px",display: "flex", flexDirection: "row"}}>
                        <input type="text" className="FaqSearch" style={{backgroundColor: "#1E2D3D",width: "40vw",height :"6vh",borderRadius: "15px",position: "absolute",border: "none",outline: "none",textAlign: "center"}}/>
                        <IoSearch style={{zIndex: "1",position: "relative",left: "92%",top: "1vh",fontSize: "30px"}}/>
                    </div>
                    <div style={{color: "white",margin:"10vh 0"}}>

                    <h2 style={{fontSize: "52px",fontWeight :"700"}}>FAQ</h2>
                    <p style={{color: "gray",lineHeight: "12px"}}>Frequently Asked Questions in Python</p>
                    </div>

                    <Accordion allowToggle>
  {data.map((e, i) => (
    <div style={{backgroundColor: "#1E2D3D",marginBottom: "3vh",borderRadius:"15px"}}>

    <AccordionItem key={i} border = "none" >
      <h1 style={{ width: "40vw", height: "9vh" ,border: "none",fontWeight: "700"}}>
        <AccordionButton >
          <Box flex="1" textAlign="left" marginTop="1.7vh">
            {e.question}
          </Box>
          <AccordionIcon  marginTop="1.7vh"/>
        </AccordionButton>
      </h1>
      <AccordionPanel pb={4}>
        <p style={{width: "35vw"}}>

        {e.answer}
        </p>
      </AccordionPanel>
    </AccordionItem>
    </div>
  ))}
</Accordion>
                </div>
            </div>
        </>
    );
};

export default Faq;