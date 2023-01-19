import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../CSS/Inicio.css"
const Registrar = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Nombre,setNombre] = useState("");
    const [Apellido,setApellido] = useState("");
    return(
        <div className="Titulo"><h2>Registrar</h2></div>

    )
}
export default Registrar