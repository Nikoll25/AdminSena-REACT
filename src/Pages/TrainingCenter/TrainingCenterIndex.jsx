import React from "react";
import { useNavigate } from "react-router-dom";

import {
    FaPlusCircle,
    FaEye,
    FaEdit,
    FaTrash
} from "react-icons/fa";

import "./TrainingCenterIndex.css";

function TrainingCenterIndex() {

    const navigate = useNavigate();

    // Datos de ejemplo
    const trainingCenters = [
        {
            id: 1,
            name: "Centro de Gestión Administrativa",
            location: "Bogotá"
        },
        {
            id: 2,
            name: "Centro de Electricidad, Electrónica y Telecomunicaciones",
            location: "Bogotá"
        },
        {
            id: 3,
            name: "Centro de Servicios Financieros",
            location: "Bogotá"
        },
        {
            id: 4,
            name: "Centro de Tecnología de la Manufactura Avanzada",
            location: "Medellín"
        }
    ];

    return (
        <div className="training-container">

            {/* ENCABEZADO */}
            <div className="training-header">

                <div>
                    <h1>Lista de Centros de Formación</h1>

                    <p>
                        Administración y consulta de los centros de formación
                    </p>
                </div>

                <button
                    onClick={() => navigate("/trainingcenter/create")}
                    className="training-add-button"
                >
                    <FaPlusCircle />
                    <span>Agregar Centro</span>
                </button>

            </div>


            {/* TABLA */}
            <div className="training-card">

                <div className="training-table-container">

                    <table className="training-table">

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Ubicación</th>
                                <th className="training-actions-header">
                                    Acciones
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {trainingCenters.map((trainingCenter) => (

                                <tr key={trainingCenter.id}>

                                    {/* ID */}
                                    <td className="training-id">
                                        #{trainingCenter.id}
                                    </td>

                                    {/* NOMBRE */}
                                    <td className="training-name">
                                        {trainingCenter.name}
                                    </td>

                                    {/* UBICACIÓN */}
                                    <td className="training-location">
                                        {trainingCenter.location}
                                    </td>

                                    {/* ACCIONES */}
                                    <td className="training-actions">

                                        <div className="training-action-container">

                                            {/* VER */}
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/trainingcenter/show/${trainingCenter.id}`
                                                    )
                                                }
                                                className="training-action training-view"
                                                title="Ver"
                                            >
                                                <FaEye />
                                            </button>

                                            {/* EDITAR */}
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/trainingcenter/edit/${trainingCenter.id}`
                                                    )
                                                }
                                                className="training-action training-edit"
                                                title="Editar"
                                            >
                                                <FaEdit />
                                            </button>

                                            {/* ELIMINAR */}
                                            <button
                                                className="training-action training-delete"
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

export default TrainingCenterIndex;