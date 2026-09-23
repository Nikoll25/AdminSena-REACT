import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-column footer-info">
                    <h3>-Admin SENA-</h3>

                    <p>
                        Sistema para la gestión de áreas, cursos,
                        instructores, aprendices y centros de formación.
                    </p>
                </div>


                <div className="footer-column">

                    <h4>Módulos</h4>

                    <Link to="/area/list">
                        Áreas
                    </Link>

                    <Link to="/course/list">
                        Cursos
                    </Link>

                    <Link to="/teacher/list">
                        Instructores
                    </Link>

                </div>


                <div className="footer-column">

                    <h4>Administración</h4>

                    <Link to="/apprentice/list">
                        Aprendices
                    </Link>

                    <Link to="/trainingcenter/list">
                        Centros de formación
                    </Link>

                    <Link to="/equipo/list">
                        Equipos
                    </Link>

                </div>


                <div className="footer-column">

                    <h4>Tecnologías</h4>

                    <span>Laravel 10</span>
                    <span>React</span>
                    <span>MySQL</span>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()}{" "}
                    <strong>Admin SENA</strong>
                    {" | "}
                    Proyecto Académico
                </p>

            </div>

        </footer>
    );
}

export default Footer;