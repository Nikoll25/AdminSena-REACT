import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    FaBuilding,
    FaHashtag,
    FaMapMarkerAlt,
    FaArrowLeft
} from "react-icons/fa";

import "./TrainingCenterShow.css";

function TrainingCenterShow() {

    const navigate = useNavigate();
    const { id } = useParams();

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

    const trainingCenter = trainingCenters.find(
        (trainingCenter) => trainingCenter.id === Number(id)
    );

    return (
        <div className="training-show-container">

            <div className="training-show-card">

                {/* ENCABEZADO */}
                <div className="training-show-header">

                    <div className="training-show-icon">
                        <FaBuilding />
                    </div>

                    <div>
                        <h1>Información del Centro</h1>

                        <p>
                            Consulta los datos del centro seleccionado
                        </p>
                    </div>

                </div>


                {/* CONTENIDO */}
                <div className="training-show-body">

                    <div className="training-show-title">

                        <h2>Datos del centro</h2>

                        <p>
                            Información registrada en el sistema.
                        </p>

                    </div>


                    {/* ID */}
                    <div className="training-info">

                        <div className="training-info-icon">
                            <FaHashtag />
                        </div>

                        <div className="training-info-content">

                            <span>ID del Centro</span>

                            <strong>
                                #{trainingCenter?.id}
                            </strong>

                        </div>

                    </div>


                    {/* NOMBRE */}
                    <div className="training-info">

                        <div className="training-info-icon">
                            <FaBuilding />
                        </div>

                        <div className="training-info-content">

                            <span>Nombre del Centro</span>

                            <strong>
                                {trainingCenter?.name}
                            </strong>

                        </div>

                    </div>


                    {/* UBICACIÓN */}
                    <div className="training-info">

                        <div className="training-info-icon">
                            <FaMapMarkerAlt />
                        </div>

                        <div className="training-info-content">

                            <span>Ubicación</span>

                            <strong>
                                {trainingCenter?.location}
                            </strong>

                        </div>

                    </div>


                    {/* BOTÓN */}
                    <div className="training-show-buttons">

                        <button
                            type="button"
                            className="training-show-back"
                            onClick={() => navigate("/trainingcenter/list")}
                        >
                            <FaArrowLeft />
                            Volver a los centros
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default TrainingCenterShow;