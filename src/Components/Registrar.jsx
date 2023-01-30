import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const Registrar = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Nombre,setNombre] = useState("");
    const [Apellido,setApellido] = useState("");
    const Redirigir = useNavigate();
    const LoginUsuario = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((r) => {
          {
            Redirigir("/");
          }
        })
        .catch((e) => {
          if (e.code == "auth/wrong-password") {
            alert("Credenciales icorrectas");
          }
        });
    };
    const RegistrarUser = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((r) => {
          {
            Redirigir("/");
          }
        })
        .catch((e) => {
          if (e.code == "auth/invalid-email") {
            alert("Email invalido");
          }
          if (e.code == "auth/weak-password") {
            alert("Contraseña invalida");
          }
        });
  
      {
      }
    };
    return(
      <div className="row mt-5">
      <h2 className="Titulo mt-5">Registrar</h2>
      <div className="col"></div>
      <div className="col">
        <form className="form-group mt-3" onSubmit={RegistrarUser}>
        <input
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            className="form-control"
            placeholder="Nombre"
            type="text"
          ></input>
          <input
            onChange={(e) => {
              setApellido(e.target.value);
            }}
            className="form-control mt-3"
            placeholder="Apellido"
            type="text"
          ></input>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="BorrarEmail"
            className="form-control mt-3"
            placeholder="Ingrese Email"
            type="email"
          ></input>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="BorrarPass"
            className="form-control mt-3"
            placeholder="Ingrese Contraseña"
            type="password"
          ></input>
          <div className="d-grid mt-3">
            <button className="btn btn-success " type="submit" value="Registrar">
              Registrar
            </button>
          </div>
        </form>
      </div>
      <div className="col"></div>
    </div>
    );
}
export default Registrar