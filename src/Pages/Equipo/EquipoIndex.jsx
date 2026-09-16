import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaPlusCircle,
    FaEye,
    FaEdit,
    FaTrash
} from "react-icons/fa";
import pc1 from "../../assets/pc1.jpg";
import pc2 from "../../assets/pc2.jpg";
import pc3 from "../../assets/pc3.jpg";
import pc4 from "../../assets/pc4.webp";

import "./EquipoIndex.css";

function EquipoIndex() {

    const navigate = useNavigate();

    // Datos de ejemplo
    const equipos = [
        {
            id: 1,
            number: "PC-001",
            brand: "HP",
            photo: pc1
        },
        {
            id: 2,
            number: "PC-002",
            brand: "Lenovo",
            photo: pc2
        },
        {
            id: 3,
            number: "PC-003",
            brand: "Dell",
            photo: pc3
        },
        {
            id: 4,
            number: "PC-004",
            brand: "Acer",
            photo: pc4
        }
    ];

    return (
        <div className="equipment-container">


            <div className="equipment-header">

                <div>
                    <h1>Lista de Equipos</h1>

                    <p>
                        Administración y consulta de los equipos registrados
                    </p>
                </div>

                <button
                    onClick={() => navigate("/equipo/create")}
                    className="equipment-add-button"
                >
                    <FaPlusCircle />
                    <span>Agregar Equipo</span>
                </button>

            </div>


            {/* TABLA */}
            <div className="equipment-card">

                <div className="equipment-table-container">

                    <table className="equipment-table">

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Foto</th>
                                <th>Número</th>
                                <th>Marca</th>
                                <th className="equipment-actions-header">
                                    Acciones
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {equipos.map((item) => (

                                <tr key={item.id}>

                                    {/* ID */}
                                    <td className="equipment-id">
                                        #{item.id}
                                    </td>

                                    {/* FOTO */}
                                    <td className="equipment-photo">

                                        <img
                                            src={item.photo}
                                            alt={`Equipo ${item.number}`}
                                        />

                                    </td>

                                    {/* NÚMERO */}
                                    <td className="equipment-number">
                                        {item.number}
                                    </td>

                                    {/* MARCA */}
                                    <td className="equipment-brand">
                                        {item.brand}
                                    </td>

                                    {/* ACCIONES */}
                                    <td className="equipment-actions">

                                        <div className="equipment-action-container">

                                            {/* VER */}
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/equipo/show/${item.id}`
                                                    )
                                                }
                                                className="equipment-action equipment-view"
                                                title="Ver"
                                            >
                                                <FaEye />
                                            </button>

                                            {/* EDITAR */}
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/equipo/edit/${item.id}`
                                                    )
                                                }
                                                className="equipment-action equipment-edit"
                                                title="Editar"
                                            >
                                                <FaEdit />
                                            </button>

                                            {/* ELIMINAR */}
                                            <button
                                                className="equipment-action equipment-delete"
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

export default EquipoIndex;