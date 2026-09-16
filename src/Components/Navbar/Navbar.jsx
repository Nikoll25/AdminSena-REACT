import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const [administracionOpen, setAdministracionOpen] = useState(false);
    const [academicoOpen, setAcademicoOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* MENÚ PRINCIPAL */}
            <ul className="navbar-links">

                {/* INICIO */}
                <li>
                    <button
                        onClick={() => navigate("/inicio")}
                        className="nav-button"
                    >
                        <FaHome />
                        <span>Inicio</span>
                    </button>
                </li>


                {/* ADMINISTRACIÓN */}
                <li className="dropdown">

                    <button
                        onClick={() =>
                            setAdministracionOpen(!administracionOpen)
                        }
                        className="nav-button"
                    >
                        <FaCog />
                        <span>Administración</span>
                        <FaChevronDown
                            className={
                                administracionOpen
                                    ? "arrow rotate"
                                    : "arrow"
                            }
                        />
                    </button>
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


                {/* ACADÉMICO */}
                <li className="dropdown">

                    <button
                        onClick={() =>
                            setAcademicoOpen(!academicoOpen)
                        }
                        className="nav-button"
                    >
                        <FaGraduationCap />
                        <span>Académico</span>
                        <FaChevronDown
                            className={
                                academicoOpen
                                    ? "arrow rotate"
                                    : "arrow"
                            }
                        />
                    </button>


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


                {/* OFERTAS */}
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


            {/* PARTE DERECHA */}
            <div className="navbar-right">

                <form className="search-form">
                    <input
                        type="search"
                        placeholder="Buscar..."
                    />

                    <button type="button">
                        <FaSearch />
                    </button>
                </form>


                {/* INICIAR SESIÓN */}
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

export default Navbar;