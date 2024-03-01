import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Index from "./Components/Navbar";
import Cards from "./Components/Cards";
import Guide from "./Components/Guide";
function App() {
  return (
    <>
      <ChakraProvider>
        <Index />
        {/* <Cards /> */}
        <Guide />
      </ChakraProvider>
    </>
  );
}

export default App;
