import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Index from "./Components/Navbar";
import Cards from "./Components/Cards";
import Guide from "./Components/Guide";
import Compiler from "./Components/Compiler";

function App() {
  return (
    <>
      <ChakraProvider>
        {/* <Index /> */}
        {/* <Cards /> */}
        {/* <Guide /> */}
        <Compiler/>
      </ChakraProvider>
    </>
  );
}

export default App;
