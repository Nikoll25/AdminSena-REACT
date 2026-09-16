import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    FaBuilding,
    FaMapMarkerAlt,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./TrainingCenterEdit.css";

function TrainingCenterEdit() {

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
        <div className="training-edit-container">

            <div className="training-edit-card">

                {/* ENCABEZADO */}
                <div className="training-edit-header">

                    <div className="training-edit-icon">
                        <FaBuilding />
                    </div>

                    <div>
                        <h1>Actualizar Centro de Formación</h1>

                        <p>
                            Modifica la información del centro seleccionado
                        </p>
                    </div>

                </div>


                {/* CONTENIDO */}
                <div className="training-edit-body">

                    <div className="training-edit-title">

                        <h2>Información del centro</h2>

                        <p>
                            Actualiza los datos del centro de formación.
                        </p>

                    </div>


                    <form>

                        {/* NOMBRE */}
                        <div className="training-edit-group">

                            <label htmlFor="name">
                                <FaBuilding />
                                Nombre del Centro
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                defaultValue={trainingCenter?.name}
                                placeholder="Ingrese el nombre del centro"
                            />

                            <small>
                                Modifica el nombre completo del centro.
                            </small>

                        </div>


                        {/* UBICACIÓN */}
                        <div className="training-edit-group">

                            <label htmlFor="location">
                                <FaMapMarkerAlt />
                                Ubicación
                            </label>

                            <input
                                type="text"
                                id="location"
                                name="location"
                                defaultValue={trainingCenter?.location}
                                placeholder="Ingrese la ubicación"
                            />

                            <small>
                                Modifica la ciudad o ubicación del centro.
                            </small>

                        </div>


                        {/* BOTONES */}
                        <div className="training-edit-buttons">

                            <button
                                type="button"
                                className="training-edit-cancel"
                                onClick={() => navigate("/trainingcenter/list")}
                            >
                                <FaArrowLeft />
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="training-edit-save"
                            >
                                <FaCheckCircle />
                                Actualizar Centro
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default TrainingCenterEdit;