import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaPlusCircle,
    FaEye,
    FaEdit,
    FaTrash,
    FaBook,
    FaHashtag,
    FaCalendarDay,
    FaLayerGroup,
    FaBuilding
} from "react-icons/fa";

import "./CourseIndex.css";

function CourseIndex() {

    const navigate = useNavigate();

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

    return (
        <div className="course-container">

            {/* ENCABEZADO */}

            <div className="course-header">

                <div>
                    <h1>Lista de Cursos</h1>

                    <p>
                        Administración y consulta de los cursos registrados
                    </p>
                </div>

                <button
                    onClick={() => navigate("/course/create")}
                    className="course-add-button"
                >
                    <FaPlusCircle />
                    <span>Agregar Curso</span>
                </button>

            </div>

            {/* TABLA */}

            <div className="course-card">

                <div className="course-table-container">

                    <table className="course-table">

                        <thead>

                            <tr>

                                <th>Id</th>
                                <th>Número</th>
                                <th>Día</th>
                                <th>Área</th>
                                <th>Centro de Formación</th>

                                <th className="course-actions-header">
                                    Acciones
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {courses.map((course) => (

                                <tr key={course.id}>

                                    {/* ID */}

                                    <td className="course-id">
                                        #{course.id}
                                    </td>

                                    {/* NÚMERO */}

                                    <td className="course-number">

                                        <div className="course-number-content">

                                            <div className="course-number-icon">
                                                <FaBook />
                                            </div>

                                            <span>
                                                {course.number}
                                            </span>

                                        </div>

                                    </td>

                                    {/* DÍA */}

                                    <td className="course-day">

                                        <div className="course-day-content">

                                            <FaCalendarDay />

                                            <span>
                                                {course.day}
                                            </span>

                                        </div>

                                    </td>

                                    {/* ÁREA */}

                                    <td className="course-area">

                                        <div className="course-area-content">

                                            <FaLayerGroup />

                                            <span>
                                                {course.area}
                                            </span>

                                        </div>

                                    </td>

                                    {/* CENTRO */}

                                    <td className="course-center">

                                        <div className="course-center-content">

                                            <FaBuilding />

                                            <span>
                                                {course.trainingCenter}
                                            </span>

                                        </div>

                                    </td>

                                    {/* ACCIONES */}

                                    <td className="course-actions">

                                        <div className="course-action-container">

                                            {/* VER */}

                                            <button
                                                onClick={() =>
                                                    navigate(`/course/show/${course.id}`)
                                                }
                                                className="course-action course-view"
                                                title="Ver"
                                            >
                                                <FaEye />
                                            </button>

                                            {/* EDITAR */}

                                            <button
                                                onClick={() =>
                                                    navigate(`/course/edit/${course.id}`)
                                                }
                                                className="course-action course-edit"
                                                title="Editar"
                                            >
                                                <FaEdit />
                                            </button>

                                            {/* ELIMINAR */}

                                            <button
                                                className="course-action course-delete"
                                                title="Eliminar"
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default CourseIndex;