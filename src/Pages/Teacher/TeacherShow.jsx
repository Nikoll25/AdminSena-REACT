import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaUserTie,
    FaHashtag,
    FaUser,
    FaEnvelope,
    FaLayerGroup,
    FaBuilding,
    FaArrowLeft
} from "react-icons/fa";

import "./TeacherShow.css";

function TeacherShow() {

    const navigate = useNavigate();
    const { id } = useParams();

    const teachers = [
        {
            id: 1,
            name: "Carlos Martínez",
            email: "carlos.martinez@sena.edu.co",
            area: "Tecnología",
            trainingCenter: "Centro de Gestión Administrativa"
        },
        {
            id: 2,
            name: "Laura Gómez",
            email: "laura.gomez@sena.edu.co",
            area: "Administración",
            trainingCenter: "Centro de Servicios Financieros"
        },
        {
            id: 3,
            name: "Andrés Rodríguez",
            email: "andres.rodriguez@sena.edu.co",
            area: "Contabilidad",
            trainingCenter: "Centro de Servicios Financieros"
        },
        {
            id: 4,
            name: "María López",
            email: "maria.lopez@sena.edu.co",
            area: "Salud",
            trainingCenter: "Centro de Tecnología de la Manufactura Avanzada"
        }
    ];

    const teacher = teachers.find(
        (teacher) => teacher.id === Number(id)
    );

    return (
        <div className="teacher-show-container">

            <div className="teacher-show-card">

                {/* ENCABEZADO */}

                <div className="teacher-show-header">

                    <div className="teacher-show-icon">
                        <FaUserTie />
                    </div>

                    <div>
                        <h1>Información del Instructor</h1>

                        <p>
                            Consulta los datos del instructor seleccionado
                        </p>
                    </div>

                </div>

                {/* CONTENIDO */}

                <div className="teacher-show-body">

                    {/* PRESENTACIÓN */}

                    <div className="teacher-profile">

                        <div className="teacher-profile-icon">
                            <FaUserTie />
                        </div>

                        <div className="teacher-profile-info">

                            <h2>{teacher?.name}</h2>

                            <div className="teacher-profile-id">
                                <FaHashtag />
                                <span>ID {teacher?.id}</span>
                            </div>

                        </div>

                    </div>

                    <div className="teacher-section-title">
                        <h3>Datos del instructor</h3>
                        <p>
                            Información registrada actualmente en el sistema.
                        </p>
                    </div>

                    {/* INFORMACIÓN */}

                    <div className="teacher-info-grid">

                        {/* CORREO */}

                        <div className="teacher-info teacher-info-full">

                            <div className="teacher-info-icon">
                                <FaEnvelope />
                            </div>

                            <div className="teacher-info-content">

                                <span>Correo electrónico</span>

                                <strong>
                                    {teacher?.email}
                                </strong>

                            </div>

                        </div>

                        {/* ÁREA */}

                        <div className="teacher-info">

                            <div className="teacher-info-icon">
                                <FaLayerGroup />
                            </div>

                            <div className="teacher-info-content">

                                <span>Área</span>

                                <strong>
                                    {teacher?.area}
                                </strong>

                            </div>

                        </div>

                        {/* CENTRO */}

                        <div className="teacher-info">

                            <div className="teacher-info-icon">
                                <FaBuilding />
                            </div>

                            <div className="teacher-info-content">

                                <span>Centro de formación</span>

                                <strong>
                                    {teacher?.trainingCenter}
                                </strong>

                            </div>

                        </div>

                    </div>

                    {/* BOTÓN */}

                    <div className="teacher-show-buttons">

                        <button
                            type="button"
                            className="teacher-show-back"
                            onClick={() => navigate("/teacher/list")}
                        >
                            <FaArrowLeft />
                            Volver a los instructores
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default TeacherShow;