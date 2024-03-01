import { Accordion } from '@chakra-ui/react'
import React from 'react'
import ChapterDropdown from './ChapterDropdown'

const topics1 = [
    "Welcome to the World of Computers",
    "Introduction to Programming",
    "Compilers: Making Computer Talk Simple",
    "Why Start with Python?",
    "Features of Python",
    "Difference Between Compiler and Interpreter:",
    "IDE(Integrated Development Environment) Setup:",
    "Introduction to Coding with Visual Studio Code"
]

const topics2 = [
    "Our First Program",
    "Simple Math Operations",
    "Expressions:"
]

const topics3 = [
    "Variables",
    "Working with Variables",
    "Taking Input From the User",
    "Data Types"
]

const topics4 = [
    "Operators",
    "Arithmetic Operators",
    "Comparision Operators",
    "Assignment and in-place Operators",
    "Logical Operators",
    "Membership Operators",
    "Logical Operators",
    "Unary Operators",
    "Bitwise Operators",
    "Shift Operators"
]

const topics5 = [
    "Introduction to Strings",
    "Escape Sequences",
    "String operations",
    "Slice a String",
    "String Built-in String Methods and Functions"
]

const topics6 = [
    "Introduction to Decision Control Statements",
    "If Statements",
    "If-Else Statements",
    "Nested If Statements",
    "If-Elif-Else Statements",
    "Matching Statements"
]

const topics7 = [
    "Basic Loop Structure",
    "While Loop",
    "For Loop"
]

const topics8 = [
    "Introduction to Functions:",
    "Advanced Function Concepts",
    "Recursion",
    "Function Arguments and Parameters",
]

const topics9 = [
    "Introduction to Data Structures",
    "Accessing Strings",
    "Lists",
    "Access Values in Lists",
    "Basic List Operations",
    "List methods",
    "List Functions",
    "Tuple",
    "Set",
    "Dictionary"
]

const topics10 = [
    "What is Object-Oriented",
    "Classes",
    "Objects",
    "Inheritance",
    "pleomorphism",
    "Abstraction",
    "Encapsulation"
]

const Guide = () => {
    return (
        <div>
            <Accordion allowMultiple w={"100"} bg={"#011627"} p={10}>
                <ChapterDropdown Chapter={"Introduction"} topicList={topics1}/>
                <ChapterDropdown Chapter={"Getting Started With Python"} topicList={topics2}/>
                <ChapterDropdown Chapter={"Variables"} topicList={topics3}/>
                <ChapterDropdown Chapter={"Operators"} topicList={topics4}/>
                <ChapterDropdown Chapter={"Strings"} topicList={topics5}/>
                <ChapterDropdown Chapter={"Decision Control Statements"} topicList={topics6}/>
                <ChapterDropdown Chapter={"Loops"} topicList={topics7}/>
                <ChapterDropdown Chapter={"User Defined Functions"} topicList={topics8}/>
                <ChapterDropdown Chapter={"Data Structures"} topicList={topics9}/>
                <ChapterDropdown Chapter={"Introduction to Object Oriented programming"} topicList={topics10}/>
            </Accordion>
        </div>
    )
}

export default Guide
