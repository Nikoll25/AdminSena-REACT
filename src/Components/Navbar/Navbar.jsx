import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
                        Inicio
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
                        Administración
                        <span>⌄</span>
                    </button>


                    {administracionOpen && (
                        <ul className="dropdown-menu">

                            <li>
                                <button
                                    onClick={() => navigate("/area/list")}
                                >
                                    Áreas
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                    navigate("/trainingcenter/list")
                                    }
                                >
                                    Centros de formación
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/computer/list")
                                    }
                                >
                                    Computadores
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
                        Académico
                        <span>⌄</span>
                    </button>


                    {academicoOpen && (
                        <ul className="dropdown-menu">

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/teacher/list")
                                    }
                                >
                                    Instructores
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/course/list")
                                    }
                                >
                                    Cursos
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/apprentice/list")
                                    }
                                >
                                    Aprendices
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() =>
                                        navigate("/courseteacher/create")
                                    }
                                >
                                    Asignaciones
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
                        Ofertas
                    </button>
                </li>

            </ul>


            {/* PARTE DERECHA */}
            <div className="navbar-right">

                {/* BUSCADOR */}
                <form
                    className="search-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >

                    <input
                        type="search"
                        placeholder="Buscar..."
                    />

                    <button type="submit">
                        🔍
                    </button>

                </form>


                {/* INICIAR SESIÓN */}
                <button
                    onClick={() => irA("/login")}
                    className="login-button"
                >
                    👤 Iniciar sesión
                </button>

            </div>

        </nav>
    );
    
}

export default Navbar;