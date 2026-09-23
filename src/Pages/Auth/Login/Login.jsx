import React from "react";
import { Link } from "react-router-dom";

// Importamos los iconos que vamos a utilizar en el login
import {
    FaGraduationCap,
    FaUsers,
    FaBook,
    FaDesktop,
    FaEnvelope,
    FaLock,
    FaSignInAlt,
    FaShieldAlt
} from "react-icons/fa";

// Importamos los estilos propios de este componente
import "./Login.css";


function Login() {

    return (

        // Contenedor principal de toda la pantalla del login
        <div className="login-page">

            {/* Tarjeta principal que contiene las dos partes del login */}
            <div className="login-card">


                {/* =================================================
                    PANEL IZQUIERDO
                ================================================== */}

                <div className="login-visual">

                    <div className="login-visual-content">

                        {/* Icono principal */}
                        <div className="login-sena-icon">

                            <FaGraduationCap />

                        </div>


                        {/* Título de bienvenida */}
                        <h1>

                            Bienvenido a
                            <br />

                            <strong>
                                AdminSena
                            </strong>

                        </h1>


                        {/* Descripción */}
                        <p>

                            Gestiona de manera sencilla y organizada
                            la información académica y administrativa
                            de tu centro de formación.

                        </p>


                        {/* Características principales */}
                        <div className="login-features">


                            {/* Gestión de aprendices */}
                            <div className="login-feature">

                                <div className="login-feature-icon">

                                    <FaUsers />

                                </div>

                                <span>
                                    Gestión de aprendices
                                </span>

                            </div>


                            {/* Administración de cursos */}
                            <div className="login-feature">

                                <div className="login-feature-icon">

                                    <FaBook />

                                </div>

                                <span>
                                    Administración de cursos
                                </span>

                            </div>


                            {/* Control de equipos */}
                            <div className="login-feature">

                                <div className="login-feature-icon">

                                    <FaDesktop />

                                </div>

                                <span>
                                    Control de equipos
                                </span>

                            </div>


                        </div>

                    </div>

                </div>


                {/* =================================================
                    FORMULARIO DE INICIO DE SESIÓN
                ================================================== */}

                <div className="login-form">


                    {/* Título del formulario */}
                    <div className="login-form-title">

                        <span>
                            PANEL ADMINISTRATIVO
                        </span>

                        <h2>
                            Iniciar sesión
                        </h2>

                        <p>
                            Ingresa tus credenciales para continuar.
                        </p>

                    </div>


                    {/* =================================================
                        FORMULARIO

                        El atributo required hace que los campos sean
                        obligatorios antes de poder enviar el formulario.

                        action="/inicio" hace que, después de completar
                        los campos, el formulario vaya a /inicio.

                        No estamos conectando todavía ninguna API.
                    ================================================== */}

                    <form
                        action="/inicio"
                        method="get"
                    >


                        {/* =================================================
                            CAMPO DE CORREO
                        ================================================== */}

                        <div className="login-field">

                            <label htmlFor="email">
                                Correo electrónico
                            </label>


                            <div className="login-input-wrapper">

                                <FaEnvelope className="login-input-icon" />


                                {/* required = campo obligatorio */}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="correo@ejemplo.com"
                                    required
                                />

                            </div>

                        </div>


                        {/* =================================================
                            CAMPO DE CONTRASEÑA
                        ================================================== */}

                        <div className="login-field">

                            <label htmlFor="password">
                                Contraseña
                            </label>


                            <div className="login-input-wrapper">

                                <FaLock className="login-input-icon" />


                                {/* required = campo obligatorio */}
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Ingresa tu contraseña"
                                    required
                                />

                            </div>

                        </div>


                        {/* =================================================
                            OPCIONES DEL LOGIN
                        ================================================== */}

                        <div className="login-options">

                            {/* Opción para recordar al usuario */}
                            <label className="login-remember">

                                <input
                                    type="checkbox"
                                />

                                <span>
                                    Recordarme
                                </span>

                            </label>


                            {/* Enlace visual de recuperación */}
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="login-forgot"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>

                        </div>


                        {/* =================================================
                            BOTÓN DE INICIAR SESIÓN

                            Ahora es un botón de formulario y no un Link.

                            El navegador revisará primero los campos
                            que tengan required.

                            Si están vacíos:
                            → No permite enviar.

                            Si están completos:
                            → Envía el formulario a /inicio.
                        ================================================== */}

                        <button
                            type="submit"
                            className="loginpage-button"
                        >

                            <FaSignInAlt />

                            Iniciar sesión

                        </button>


                    </form>


                    {/* =================================================
                        REGISTRO
                    ================================================== */}

                    <div className="login-register">

                        <span>
                            ¿Aún no tienes una cuenta?
                        </span>


                        <Link to="/register">
                            Crear una cuenta
                        </Link>

                    </div>


                    {/* =================================================
                        MENSAJE DE SEGURIDAD
                    ================================================== */}

                    <div className="login-security">

                        <FaShieldAlt />

                        <span>
                            Acceso seguro al sistema administrativo
                        </span>

                    </div>


                </div>

            </div>

        </div>
    );
}
export default Login;