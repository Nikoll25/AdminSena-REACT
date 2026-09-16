import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    FaBuilding,
    FaHashtag,
    FaTag,
    FaArrowLeft
} from "react-icons/fa";

import "./AreaShow.css";

function AreaShow() {

    const navigate = useNavigate();
    const { id } = useParams();

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

const area = areas.find(
    (area) => area.id === Number(id)
);

    return (
        <div className="area-show-container">

            <div className="area-show-card">

                {/* ENCABEZADO */}
                <div className="area-show-header">

                    <div className="area-show-icon">
                        <FaBuilding />
                    </div>

                    <div>
                        <h1>Información del Área</h1>

                        <p>
                            Consulta los datos del área seleccionada
                        </p>
                    </div>

                </div>


                {/* CONTENIDO */}
                <div className="area-show-body">

                    <div className="area-show-title">

                        <h2>Datos del área</h2>

                        <p>
                            Información registrada en el sistema.
                        </p>

                    </div>


                    {/* ID */}
                    <div className="area-info">

                        <div className="area-info-icon">
                            <FaHashtag />
                        </div>

                        <div className="area-info-content">

                            <span>
                                ID del Área
                            </span>

                            <strong>
                                #{area.id}
                            </strong>

                        </div>

                    </div>


                    {/* NOMBRE */}
                    <div className="area-info">

                        <div className="area-info-icon">
                            <FaTag />
                        </div>

                        <div className="area-info-content">

                            <span>
                                Nombre del Área
                            </span>

                            <strong>
                                {area.name}
                            </strong>

                        </div>

                    </div>


                    {/* BOTÓN */}
                    <div className="area-show-buttons">

                        <button
                            type="button"
                            className="area-show-back"
                            onClick={() => navigate("/area/list")}
                        >
                            <FaArrowLeft />
                            Volver a las áreas
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AreaShow;