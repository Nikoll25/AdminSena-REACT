import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    FaUserPlus,
    FaUser,
    FaEnvelope,
    FaLock,
    FaShieldAlt,
    FaTachometerAlt,
    FaDatabase,
    FaCheckCircle
} from "react-icons/fa";

import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulación de registro
        alert("Registro exitoso");

        navigate("/");
    };

    return (
        <div className="register-page">

            <div className="register-wrapper">

                <div className="register-card">

                    <div className="register-row">

                        {/* PANEL IZQUIERDO */}

                        <div className="register-column">

                            <div className="register-visual">

                                <div className="visual-content">

                                    <div className="register-icon">
                                        <FaUserPlus />
                                    </div>

                                    <h1>
                                        Crea tu cuenta en
                                        <br />
                                        AdminSena
                                    </h1>

                                    <p>
                                        Forma parte de la plataforma administrativa
                                        y accede a las herramientas necesarias para
                                        gestionar la información de manera organizada.
                                    </p>

                                    <div className="register-benefits">

                                        <div className="benefit">

                                            <div className="benefit-icon">
                                                <FaTachometerAlt />
                                            </div>

                                            <span>
                                                Administración rápida y sencilla
                                            </span>

                                        </div>

                                        <div className="benefit">

                                            <div className="benefit-icon">
                                                <FaDatabase />
                                            </div>

                                            <span>
                                                Información centralizada
                                            </span>

                                        </div>

                                        <div className="benefit">

                                            <div className="benefit-icon">
                                                <FaShieldAlt />
                                            </div>

                                            <span>
                                                Acceso seguro al sistema
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* FORMULARIO */}

                        <div className="register-column">

                            <div className="register-form">

                                <div className="form-heading">

                                    <div className="mini-title">
                                        Nuevo usuario
                                    </div>

                                    <h2>
                                        Crear una cuenta
                                    </h2>

                                    <p>
                                        Completa tus datos para registrarte.
                                    </p>

                                </div>


                                <form onSubmit={handleSubmit}>

                                    {/* NOMBRE */}

                                    <div className="form-group">

                                        <label htmlFor="name">
                                            Nombre completo
                                        </label>

                                        <div className="field-wrapper">

                                            <FaUser className="field-icon" />

                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Ingresa tu nombre completo"
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* CORREO */}

                                    <div className="form-group">

                                        <label htmlFor="email">
                                            Correo electrónico
                                        </label>

                                        <div className="field-wrapper">

                                            <FaEnvelope className="field-icon" />

                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="correo@ejemplo.com"
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* CONTRASEÑAS */}

                                    <div className="password-row">

                                        <div className="form-group">

                                            <label htmlFor="password">
                                                Contraseña
                                            </label>

                                            <div className="field-wrapper">

                                                <FaLock className="field-icon" />

                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Contraseña"
                                                    required
                                                />

                                            </div>

                                        </div>


                                        <div className="form-group">

                                            <label htmlFor="password_confirmation">
                                                Confirmar contraseña
                                            </label>

                                            <div className="field-wrapper">

                                                <FaShieldAlt className="field-icon" />

                                                <input
                                                    type="password"
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    placeholder="Repetir contraseña"
                                                    required
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    {/* TÉRMINOS */}

                                    <div className="terms-box">

                                        <div className="terms-content">

                                            <input
                                                type="checkbox"
                                                id="terms"
                                                name="terms"
                                                required
                                            />

                                            <label htmlFor="terms">

                                                Acepto los{" "}

                                                <a
                                                    href="#"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    términos y condiciones
                                                </a>

                                            </label>

                                        </div>

                                    </div>


                                    {/* BOTÓN */}

                                    <button
                                        type="submit"
                                        className="register-button"
                                    >

                                        <FaUserPlus />

                                        Crear cuenta

                                    </button>

                                </form>


                                {/* LOGIN */}

                                <div className="login-link">

                                    ¿Ya tienes una cuenta?{" "}

                                    <Link to="/login">
                                        Iniciar sesión
                                    </Link>

                                </div>


                                {/* SEGURIDAD */}

                                <div className="security-note">

                                    <FaCheckCircle />

                                    Tus datos serán tratados de forma segura

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;
