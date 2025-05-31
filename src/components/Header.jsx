import React from "react";
import { SafeLink } from "./SafeLink";
import logo from "../assets/logo.png";

import "./Header.css";

function Header({ user }) {
  const handleLogout = () => {
    // Lógica de cierre de sesión
    console.log("Cerrar sesión");
  };
  const handleLogin = () => {
    // Lógica de inicio de sesión
    console.log("Iniciar sesión");
  };

  return (
    <header>
      <nav>
        <SafeLink to="/" style={{ marginRight: "1rem" }}>
          <img src={logo} alt="Logo" style={{ height: "3em" }} />
        </SafeLink>

        <SafeLink
          className="buscador"
          to="/lista"
          style={{ marginRight: "1rem" }}
        >
          Buscador
        </SafeLink>
        <SafeLink className="mapa" to="/mapa" style={{ marginRight: "1rem" }}>
          Mapa
        </SafeLink>
        <SafeLink className="about" to="/about">
          Acerca de
        </SafeLink>
        <SafeLink className="about" to="/about">
          Quienes somos
        </SafeLink>

        <span
          style={{ marginLeft: "auto", marginRight: "1rem", float: "right" }}
        >
          {!user && (
            <>
              <SafeLink
                className="login"
                to="/login"
                style={{ marginRight: "1rem" }}
              >
                Login
              </SafeLink>
              <SafeLink className="registro" to="/registro">
                Registro
              </SafeLink>
            </>
          )}
          {user && (
            <>
              <span style={{ marginRight: "1rem" }}>
                Bienvenido, <SafeLink to="/perfil">{user}</SafeLink>
              </span>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          )}
        </span>
      </nav>
    </header>
  );
}

export default Header;
