import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
    return (
        <header className="header">

            <div className="header-container">

                {/* LOGO */}
                <Link to="/inicio" className="header-brand">

                    <img
                        src={logo}
                        alt="Logo SENA"
                        className="header-logo"
                    />

                    <span>Admin SENA</span>

                </Link>

                {/* NAVBAR */}
                <Navbar />

            </div>

        </header>
    );
}

export default Header;