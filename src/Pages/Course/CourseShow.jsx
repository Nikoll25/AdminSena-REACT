import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaBook,
    FaHashtag,
    FaCalendarDay,
    FaLayerGroup,
    FaBuilding,
    FaArrowLeft
} from "react-icons/fa";

import "./CourseShow.css";

function CourseShow() {

    const navigate = useNavigate();
    const { id } = useParams();

    const courses = [
        {
            id: 1,
            number: "2456789",
            day: "Lunes",
            area: "Tecnología",
            trainingCenter: "Centro de Gestión Administrativa"
        },
        {
            id: 2,
            number: "2456790",
            day: "Martes",
            area: "Administración",
            trainingCenter: "Centro de Servicios Financieros"
        },
        {
            id: 3,
            number: "2456791",
            day: "Miércoles",
            area: "Contabilidad",
            trainingCenter: "Centro de Servicios Financieros"
        },
        {
            id: 4,
            number: "2456792",
            day: "Jueves",
            area: "Salud",
            trainingCenter: "Centro de Tecnología de la Manufactura Avanzada"
        }
    ];

    const course = courses.find(
        (course) => course.id === Number(id)
    );

    return (
        <div className="course-show-container">

            <div className="course-show-card">

                {/* HEADER */}
                <div className="course-show-header">

                    <div className="course-show-icon">
                        <FaBook />
                    </div>

                    <div>
                        <h1>Información del curso</h1>
                        <p>
                            Consulta los datos del curso seleccionado
                        </p>
                    </div>

                </div>

                {/* BODY */}
                <div className="course-show-body">

                    {/* IDENTIFICACIÓN DEL CURSO */}
                    <div className="course-profile">

                        <div className="course-profile-icon">
                            <FaBook />
                        </div>

                        <div className="course-profile-info">

                            <h2>
                                Ficha {course?.number}
                            </h2>

                            <div className="course-profile-id">

                                <FaHashtag />

                                <span>
                                    ID {course?.id}
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* TÍTULO */}
                    <div className="course-section-title">

                        <h3>Datos del curso</h3>

                        <p>
                            Información registrada actualmente en el sistema.
                        </p>

                    </div>

                    {/* INFORMACIÓN */}
                    <div className="course-info-grid">

                        {/* Número */}
                        <div className="course-info">

                            <div className="course-info-icon">
                                <FaHashtag />
                            </div>

                            <div className="course-info-content">

                                <span>Número de ficha</span>

                                <strong>
                                    {course?.number}
                                </strong>

                            </div>

                        </div>

                        {/* Día */}
                        <div className="course-info">

                            <div className="course-info-icon">
                                <FaCalendarDay />
                            </div>

                            <div className="course-info-content">

                                <span>Día de formación</span>

                                <strong>
                                    {course?.day}
                                </strong>

                            </div>

                        </div>

                        {/* Área */}
                        <div className="course-info">

                            <div className="course-info-icon">
                                <FaLayerGroup />
                            </div>

                            <div className="course-info-content">

                                <span>Área</span>

                                <strong>
                                    {course?.area}
                                </strong>

                            </div>

                        </div>

                        {/* Centro */}
                        <div className="course-info">

                            <div className="course-info-icon">
                                <FaBuilding />
                            </div>

                            <div className="course-info-content">

                                <span>Centro de formación</span>

                                <strong>
                                    {course?.trainingCenter}
                                </strong>

                            </div>

                        </div>

                    </div>

                    {/* BOTÓN */}
                    <div className="course-show-buttons">

                        <button
                            type="button"
                            className="course-show-back"
                            onClick={() => navigate("/course/list")}
                        >
                            <FaArrowLeft />
                            Volver a los cursos
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CourseShow;