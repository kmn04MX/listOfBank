import { ThemeProvider } from "styled-components";
import { useState } from "react";
import React from "react";
import {BtnTema} from "./components/atomic/atoms/Btns/BtnTema";
import SwitcherThema from "./components/atomic/atoms/SwitcherThema";
import { temaClaro, temaOscuro } from "./components/temas";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/atomic/layouts/Header";
import Container from "./components/atomic/layouts/Container";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContainerBank from "./components/atomic/layouts/ContainerBank";

function App() {

  const [tema, setTema] = useState(true);
  const toggleTema = () =>{
    setTema((tema) => !tema);
  }
  return (
    <>
        <Router>
          <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
              <GlobalStyle />
              <BtnTema onClick={toggleTema}>
                  <SwitcherThema tema={tema}/>
              </BtnTema>
              <Header/>
              <Routes>
                <Route path="/" element={<Container/>}/>
                <Route path="/catom/api/challenge/banks/:bankName" element={<ContainerBank/>}/>
                <Route path="*" element={<h1>Not found</h1>}/>
              </Routes>
          </ThemeProvider>
        </Router>
    </>
  );
}

export default App;
