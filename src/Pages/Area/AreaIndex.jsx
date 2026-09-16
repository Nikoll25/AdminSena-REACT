import React from "react";
import { useNavigate } from "react-router-dom";

import {
    FaPlusCircle,
    FaEye,
    FaEdit,
    FaTrash
} from "react-icons/fa";

import "./AreaIndex.css";

function AreaIndex() {

    const navigate = useNavigate();

    // Datos de ejemplo
    const areas = [
        {
            id: 1,
            name: "Tecnología"
        },
        {
            id: 2,
            name: "Administración"
        },
        {
            id: 3,
            name: "Contabilidad"
        },
        {
            id: 4,
            name: "Salud"
        }
    ];

    return (
        <div className="area-container">

            {/* ENCABEZADO */}
            <div className="area-header">

                <div>
                    <h1>Lista de Áreas</h1>

                    <p>
                        Administración y consulta de las áreas de formación
                    </p>
                </div>

                <button
                    onClick={() => navigate("/area/create")}
                    className="area-add-button"
                >
                    <FaPlusCircle />
                    <span>Agregar Área</span>
                </button>

            </div>


            {/* TABLA */}
            <div className="area-card">

                <div className="area-table-container">

                    <table className="area-table">

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th className="area-actions-header">
                                    Acciones
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {areas.map((area) => (

                                <tr key={area.id}>

                                    {/* ID */}
                                    <td className="area-id">
                                        #{area.id}
                                    </td>

                                    {/* NOMBRE */}
                                    <td className="area-name">
                                        {area.name}
                                    </td>

                                    {/* ACCIONES */}
                                    <td className="area-actions">

                                        <div className="area-action-container">

                                            {/* VER */}
                                            <button
                                                onClick={() =>
                                                    navigate(`/area/show/${area.id}`)
                                                }
                                                className="area-action area-view"
                                                title="Ver"
                                            >
                                                <FaEye />
                                            </button>


                                            {/* EDITAR */}
                                            <button
                                                onClick={() =>
                                                    navigate(`/area/edit/${area.id}`)
                                                }
                                                className="area-action area-edit"
                                                title="Editar"
                                            >
                                                <FaEdit />
                                            </button>


                                            {/* ELIMINAR */}
                                            <button
                                                className="area-action area-delete"
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

export default AreaIndex;