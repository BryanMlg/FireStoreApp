import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../CSS/Inicio.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Redirigir = useNavigate();

  const Registrar = (e) => {
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
      document.getElementById("BorrarEmail").value = "";
      document.getElementById("BorrarPass").value = "";
    }
  };

  const LoginUsuario = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((r) => {
        {
          Redirigir("/");
        }
      })
      .catch((e) => {
        if (e.code == "auth/wrong-password") {
          alert("Credenciales");
        }
      });
  };

  return (
    <div className="row mt-5">
      <h2 className="Titulo mt-5">Login</h2>
      <div className="col"></div>
      <div className="col">
        <form className="form-group mt-3" onSubmit={Registrar}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="BorrarEmail"
            className="form-control"
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
            <button className="btn btn-dark " type="submit" value="Registrar">
              Registrar
            </button>
          </div>
        </form>
        <div className="d-grid mt-3">
          <button className="btn btn-success " onClick={LoginUsuario}>
            Iniciar Sesion
          </button>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
