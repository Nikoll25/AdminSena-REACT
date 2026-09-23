import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaPlusCircle,
    FaEye,
    FaEdit,
    FaTrash,
    FaUserGraduate,
    FaEnvelope,
    FaPhone,
    FaBook,
    FaDesktop
} from "react-icons/fa";

import "./ApprenticeIndex.css";

function ApprenticeIndex() {

    const navigate = useNavigate();

    const apprentices = [
        {
            id: 1,
            name: "Camila Rodríguez",
            email: "camila.rodriguez@sena.edu.co",
            phone: "3163031781",
            course: "2456789",
            computer: "HP"
        },
        {
            id: 2,
            name: "Esteban Martínez",
            email: "esteban.martinez@sena.edu.co",
            phone: "3104897194",
            course: "2456790",
            computer: "Lenovo"
        },
        {
            id: 3,
            name: "Valentina Gómez",
            email: "valentina.gomez@sena.edu.co",
            phone: "3156789045",
            course: "2456791",
            computer: "Dell"
        },
        {
            id: 4,
            name: "Juan Sebastián López",
            email: "juan.lopez@sena.edu.co",
            phone: "3204567891",
            course: "2456792",
            computer: "Acer"
        }
    ];

    return (
        <div className="apprentice-index-container">

            <div className="apprentice-index-header">

                <div>
                    <h1>Lista de Aprendices</h1>

                    <p>
                        Administra los aprendices registrados en el sistema.
                    </p>
                </div>

                <button
                    type="button"
                    className="apprentice-add-button"
                    onClick={() => navigate("/apprentice/create")}
                >
                    <FaPlusCircle />
                    Agregar Aprendiz
                </button>

            </div>

            <div className="apprentice-table-card">

                <div className="apprentice-table-wrapper">

                    <table className="apprentice-table">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Número de teléfono</th>
                                <th>Curso</th>
                                <th>Computador</th>
                                <th className="apprentice-actions-header">
                                    Acciones
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {apprentices.map((apprentice) => (

                                <tr key={apprentice.id}>

                                    <td>
                                        <span className="apprentice-id">
                                            {apprentice.id}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="apprentice-name">
                                            <div className="apprentice-name-icon">
                                                <FaUserGraduate />
                                            </div>

                                            <span>
                                                {apprentice.name}
                                            </span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="apprentice-email">
                                            <FaEnvelope />
                                            {apprentice.email}
                                        </div>
                                    </td>

                                    <td>
                                        <div className="apprentice-phone">
                                            <FaPhone />
                                            {apprentice.phone}
                                        </div>
                                    </td>

                                    <td>
                                        <div className="apprentice-data">
                                            <FaBook />
                                            {apprentice.course}
                                        </div>
                                    </td>

                                    <td>
                                        <div className="apprentice-data">
                                            <FaDesktop />
                                            {apprentice.computer}
                                        </div>
                                    </td>

                                    <td>
                                        <div className="apprentice-actions">

                                            <button
                                                type="button"
                                                className="apprentice-action apprentice-view"
                                                title="Ver"
                                                onClick={() =>
                                                    navigate(
                                                        `/apprentice/show/${apprentice.id}`
                                                    )
                                                }
                                            >
                                                <FaEye />
                                            </button>

                                            <button
                                                type="button"
                                                className="apprentice-action apprentice-edit"
                                                title="Editar"
                                                onClick={() =>
                                                    navigate(
                                                        `/apprentice/edit/${apprentice.id}`
                                                    )
                                                }
                                            >
                                                <FaEdit />
                                            </button>

                                            <button
                                                type="button"
                                                className="apprentice-action apprentice-delete"
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

export default ApprenticeIndex;