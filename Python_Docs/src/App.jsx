import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Index from "./Components/Navbar";
import Cards from "./Components/Cards";
function App() {
  return (
    <>
      <ChakraProvider>
        {/* <Index /> */}
        <Cards />
      </ChakraProvider>
    </>
  );
}

export default App;
