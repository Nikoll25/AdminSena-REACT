import React from "react";
import { useNavigate } from "react-router-dom";

import {
    FaBuilding,
    FaMapMarkerAlt,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./TrainingCenterCreate.css";

//vamos a iniciar la funcion que nos permite registrar un nuevo centro

function TrainingCenterCreate() {

    //uso useNavigate para la navegación
    const navigate = useNavigate();

    return (
        <div className="training-create-container">

            <div className="training-create-card">

                <div className="training-create-header">

                    <div className="training-create-icon">
                        <FaBuilding />
                    </div>

                    <div>
                        <h1>Registrar Centro de Formación</h1>

                        <p>
                            Agrega un nuevo centro de formación
                        </p>
                    </div>

                </div>

                <div className="training-create-body">

                    <div className="training-create-title">

                        <h2>Información del centro</h2>

                        <p>
                            Completa los siguientes campos para registrar el centro.
                        </p>

                    </div>

                    {/* desde aqui empieza la estructura del formulario para un nuevo centro de formación*/}
                    <form>
                        <div className="training-form-group">

                            <label htmlFor="name">
                                <FaBuilding />
                                Nombre del Centro
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ejemplo: Centro de Gestión Administrativa"
                            />

                            <small>
                                Escribe el nombre completo del centro de formación.
                            </small>

                        </div>


                        {/* UBICACIÓN */}
                        <div className="training-form-group">

                            <label htmlFor="location">
                                <FaMapMarkerAlt />
                                Ubicación
                            </label>

                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Ejemplo: Bogotá"
                            />

                            <small>
                                Indica la ciudad o ubicación del centro.
                            </small>

                        </div>


                        {/* BOTONES */}
                        <div className="training-create-buttons">

                            <button
                                type="button"
                                className="training-cancel-button"
                                onClick={() => navigate("/trainingcenter/list")}
                            >
                                <FaArrowLeft />
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="training-save-button"
                            >
                                <FaCheckCircle />
                                Guardar Centro
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default TrainingCenterCreate;