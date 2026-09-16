import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    FaDesktop,
    FaHashtag,
    FaTag,
    FaArrowLeft,
    FaImage
} from "react-icons/fa";

import pc1 from "../../assets/pc1.jpg";
import pc2 from "../../assets/pc2.jpg";
import pc3 from "../../assets/pc3.jpg";
import pc4 from "../../assets/pc4.webp";

import "./EquipoShow.css";

function EquipoShow() {

    const navigate = useNavigate();
    const { id } = useParams();

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

    // Buscar el equipo según el ID
    const equipo = equipos.find(
        (equipo) => equipo.id === Number(id)
    );

    return (
        <div className="equipment-show-container">

            <div className="equipment-show-card">

                {/* ENCABEZADO */}
                <div className="equipment-show-header">

                    <div className="equipment-show-icon">
                        <FaDesktop />
                    </div>

                    <div>
                        <h1>Información del Equipo</h1>

                        <p>
                            Consulta los datos del equipo seleccionado
                        </p>
                    </div>

                </div>
                <div className="equipment-show-body">

                    <div className="equipment-show-title">

                        <div>
                            <h2>{equipo?.number}</h2>

                            <p>
                                Información registrada en el sistema
                            </p>
                        </div>

                    </div>

                    <div className="equipment-main-info">

                        <div className="equipment-photo-section">

                            <div className="equipment-photo-box">

                                <img
                                    src={equipo?.photo}
                                    alt={`Equipo ${equipo?.number}`}
                                />

                            </div>

                            <div className="equipment-photo-label">

                                <FaImage />

                                <span>Foto del equipo</span>

                            </div>

                        </div>
                        <div className="equipment-details">

                            <div className="equipment-details-title">

                                <h3>Datos generales</h3>

                                <p>
                                    Características principales del equipo.
                                </p>

                            </div>

                            <div className="equipment-info-grid">

                                <div className="equipment-info">

                                    <div className="equipment-info-icon">
                                        <FaHashtag />
                                    </div>

                                    <div className="equipment-info-content">

                                        <span>ID</span>

                                        <strong>
                                            #{equipo?.id}
                                        </strong>

                                    </div>

                                </div>
                                <div className="equipment-info">

                                    <div className="equipment-info-icon">
                                        <FaDesktop />
                                    </div>

                                    <div className="equipment-info-content">

                                        <span>Número</span>

                                        <strong>
                                            {equipo?.number}
                                        </strong>

                                    </div>

                                </div>

                                {/* MARCA */}
                                <div className="equipment-info">

                                    <div className="equipment-info-icon">
                                        <FaTag />
                                    </div>

                                    <div className="equipment-info-content">

                                        <span>Marca</span>

                                        <strong>
                                            {equipo?.brand}
                                        </strong>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="equipment-show-buttons">

                        <button
                            type="button"
                            className="equipment-show-back"
                            onClick={() => navigate("/equipo/list")}
                        >
                            <FaArrowLeft />
                            Volver a los equipos
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}
export default EquipoShow;