import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaPlusCircle,
    FaEye,
    FaEdit,
    FaTrash,
    FaUserTie,
    FaEnvelope,
    FaBuilding
} from "react-icons/fa";

import "./TeacherIndex.css";

function TeacherIndex() {

    const navigate = useNavigate();

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

    return (
        <div className="teacher-container">

            {/* ENCABEZADO */}
            <div className="teacher-header">

                <div>
                    <h1>Lista de Instructores</h1>
                    <p>
                        Administración y consulta de los instructores registrados
                    </p>
                </div>

                <button
                    onClick={() => navigate("/teacher/create")}
                    className="teacher-add-button"
                >
                    <FaPlusCircle />
                    <span>Agregar Instructor</span>
                </button>

            </div>

            {/* TABLA */}
            <div className="teacher-card">

                <div className="teacher-table-container">

                    <table className="teacher-table">

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Área</th>
                                <th>Centro de Formación</th>
                                <th className="teacher-actions-header">
                                    Acciones
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {teachers.map((teacher) => (

                                <tr key={teacher.id}>

                                    {/* ID */}
                                    <td className="teacher-id">
                                        #{teacher.id}
                                    </td>

                                    {/* NOMBRE */}
                                    <td className="teacher-name">

                                        <div className="teacher-name-content">

                                            <div className="teacher-name-icon">
                                                <FaUserTie />
                                            </div>

                                            <span>
                                                {teacher.name}
                                            </span>

                                        </div>

                                    </td>

                                    {/* CORREO */}
                                    <td className="teacher-email">

                                        <div className="teacher-email-content">

                                            <FaEnvelope />

                                            <span>
                                                {teacher.email}
                                            </span>

                                        </div>

                                    </td>

                                    {/* ÁREA */}
                                    <td className="teacher-area">
                                        {teacher.area}
                                    </td>

                                    {/* CENTRO */}
                                    <td className="teacher-center">

                                        <div className="teacher-center-content">

                                            <FaBuilding />

                                            <span>
                                                {teacher.trainingCenter}
                                            </span>

                                        </div>

                                    </td>

                                    {/* ACCIONES */}
                                    <td className="teacher-actions">

                                        <div className="teacher-action-container">

                                            {/* VER */}
                                            <button
                                                onClick={() =>
                                                    navigate(`/teacher/show/${teacher.id}`)
                                                }
                                                className="teacher-action teacher-view"
                                                title="Ver"
                                            >
                                                <FaEye />
                                            </button>

                                            {/* EDITAR */}
                                            <button
                                                onClick={() =>
                                                    navigate(`/teacher/edit/${teacher.id}`)
                                                }
                                                className="teacher-action teacher-edit"
                                                title="Editar"
                                            >
                                                <FaEdit />
                                            </button>

                                            {/* ELIMINAR */}
                                            <button
                                                className="teacher-action teacher-delete"
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

export default TeacherIndex;