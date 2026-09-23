import React from "react";
//importo link que me ayuda con la navegación
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
//importo el navbar y el los estilos
import Navbar from "../Navbar/Navbar";
import "./Header.css";

// Componente principal del encabezado de la aplicación
function Header() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo y nombre de la aplicación */}
                <Link to="/inicio" className="header-brand">
                    <img
                        src={logo}
                        alt="Logo SENA"
                        className="header-logo"
                    />
                    <span>Admin SENA</span>
                </Link>
                {/*importo el navbar*/}
                <Navbar />
            </div>
        </header>
    );
}

// Exportamos el componente por defecto para poder utilizarlo en otras partes
export default Header;