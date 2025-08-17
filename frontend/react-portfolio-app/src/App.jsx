import React from "react";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
  return (
    //BrowserRouter 要在最外层，包裹整个路由系统，监听url变化渲染不同page
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        {/* Routes 包裹所有的路由定义 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
