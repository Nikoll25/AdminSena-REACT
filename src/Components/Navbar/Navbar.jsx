import React, { useState } from "react";
// importamos useNavigate que permite cambiar de página desde los botones del menú
import { useNavigate } from "react-router-dom";

// importamos iconos utilizados en las diferentes opciones del menú
import {
    FaHome,
    FaCog,
    FaGraduationCap,
    FaBriefcase,
    FaSearch,
    FaUser,
    FaChevronDown,
    FaBuilding,
    FaLaptop,
    FaChalkboardTeacher,
    FaBook,
    FaUsers,
    FaLink,
} from "react-icons/fa";

//importamos  Estilos propios del componente Navbar
import "./Navbar.css";

// Componente que contiene el menú principal de navegación
function Navbar() {

    //useNavigate Permite navegar entre las diferentes rutas de la aplicación
    const navigate = useNavigate();

    //creo estados para controlar la apertura de los menús desplegables
    const [administracionOpen, setAdministracionOpen] = useState(false);
    const [academicoOpen, setAcademicoOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* MENÚ PRINCIPAL */}
            <ul className="navbar-links">

                {/* INICIO */}
                <li>
                    <button
                        onClick={() => navigate("/")}
                        className="nav-button"
                    >
                        <FaHome />
                        <span>Inicio</span>
                    </button>
                </li>


                {/* MENÚ DE ADMINISTRACIÓN */}
                <li className="dropdown">

                    <button
                        onClick={() =>
                            setAdministracionOpen(!administracionOpen)
                        }
                        className="nav-button"
                    >
                        <FaCog />
                        <span>Administración</span>

                        {/* La flecha cambia de posición cuando se abre el menú */}
                        <FaChevronDown
                            className={
                                administracionOpen
                                    ? "arrow rotate"
                                    : "arrow"
                            }
                        />
                    </button>

                    {/* Opciones que aparecen al abrir Administración */}
                    {administracionOpen && (
                        <ul className="dropdown-menu">

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/area/list")
                                    }
                                >
                                    <FaBuilding />
                                    <span>Áreas</span>
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/trainingcenter/list")
                                    }
                                >
                                    <FaBuilding />
                                    <span>Centros de formación</span>
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/equipo/list")
                                    }
                                >
                                    <FaLaptop />
                                    <span>Equipos</span>
                                </button>
                            </li>

                        </ul>
                    )}

                </li>


                {/* MENÚ ACADÉMICO */}
                <li className="dropdown">

                    <button
                        onClick={() =>
                            setAcademicoOpen(!academicoOpen)
                        }
                        className="nav-button"
                    >
                        <FaGraduationCap />
                        <span>Académico</span>

                        {/* La flecha indica si el menú está abierto o cerrado */}
                        <FaChevronDown
                            className={
                                academicoOpen
                                    ? "arrow rotate"
                                    : "arrow"
                            }
                        />
                    </button>


                    {/* Opciones disponibles dentro del menú Académico */}
                    {academicoOpen && (
                        <ul className="dropdown-menu">

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/teacher/list")
                                    }
                                >
                                    <FaChalkboardTeacher />
                                    <span>Instructores</span>
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/course/list")
                                    }
                                >
                                    <FaBook />
                                    <span>Cursos</span>
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/apprentice/list")
                                    }
                                >
                                    <FaUsers />
                                    <span>Aprendices</span>
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/courseteacher/create")
                                    }
                                >
                                    <FaLink />
                                    <span>Asignaciones</span>
                                </button>
                            </li>

                        </ul>
                    )}

                </li>


                {/* ACCESO A LAS OFERTAS */}
                <li>
                    <button
                        onClick={() => navigate("/offer/list")}
                        className="nav-button"
                    >
                        <FaBriefcase />
                        <span>Ofertas</span>
                    </button>
                </li>

            </ul>


            {/* ELEMENTOS UBICADOS EN LA PARTE DERECHA */}
            <div className="navbar-right">

                {/* Campo de búsqueda del menú */}
                <form className="search-form">
                    <input
                        type="search"
                        placeholder="Buscar..."
                    />

                    <button type="button">
                        <FaSearch />
                    </button>
                </form>


                {/* BOTÓN PARA INICIAR SESIÓN */}
                <button
                    onClick={() => navigate("/login")}
                    className="login-button"
                >
                    <FaUser />
                    <span>Iniciar sesión</span>
                </button>

            </div>

        </nav>
    );
}

// Exportamos Navbar para poder utilizarlo en el Header
export default Navbar;