import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Components/Inicio";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Menu from "./Components/Menu";
import Registrar from "./Components/Registrar";
function App() {
  return (
    <div className="container">
      <Router>
        <Menu></Menu>
        <Routes>
          <Route exact path="/"  element ={<Inicio/>}> </Route>
          <Route path="/admin" element ={<Admin/>}> </Route>
          <Route path="/login" element ={<Login/>}> </Route>
          <Route path="/registrar" element ={<Registrar/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
