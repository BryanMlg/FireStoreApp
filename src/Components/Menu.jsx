import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const Menu = () => {
  const [Conectado, setConectado] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setConectado(user.email);
        console.log(user.email);
      }
    });
  }, []);
  const CerrarSesion = () => {
    auth.signOut();
    setConectado(null);
  };

  return (
    <div>
      <nav className="navbar-text navbar navbar-expand-lg navbar-dark bg-dark ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            {!Conectado ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <span></span>
            )}
          </li>
          <li>
            {Conectado ? (
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            ) : (
              <span></span>
            )}
          </li>
          <li>
          {!Conectado ? (
              <Link className="nav-link" to="/Registrar">
                Registrar
              </Link>
            ) : (
              <span></span>
            )}
          </li>
        </ul>
        {Conectado ? (
          <div className="container">
            <button className="btn btn-danger" onClick={CerrarSesion}>
              Cerrar Sesion
            </button>
          </div>
        ) : (
          <span></span>
        )}
      </nav>
    </div>
  );
};

export default Menu;
