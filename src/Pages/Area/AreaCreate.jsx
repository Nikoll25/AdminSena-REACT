import React from "react";
import { useNavigate } from "react-router-dom";

import {
    FaBuilding,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./AreaCreate.css";

function AreaCreate() {

    const navigate = useNavigate();

    return (
        <div className="area-create-container">

            <div className="area-create-card">

                {/* ENCABEZADO */}
                <div className="area-create-header">

                    <div className="area-create-icon">
                        <FaBuilding />
                    </div>

                    <div>
                        <h1>Registrar Área</h1>

                        <p>
                            Agrega una nueva área de formación
                        </p>
                    </div>

                </div>


                {/* FORMULARIO */}
                <div className="area-create-body">

                    <div className="area-form-title">
                        <h2>Información del área</h2>

                        <p>
                            Completa el siguiente campo para registrar el área.
                        </p>
                    </div>


                    <form>

                        {/* NOMBRE */}
                        <div className="area-form-group">

                            <label htmlFor="name">
                                Nombre del Área
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ejemplo: Tecnología"
                            />

                            <small>
                                Escribe el nombre del área de formación.
                            </small>

                        </div>


                        {/* BOTONES */}
                        <div className="area-create-buttons">

                            <button
                                type="button"
                                className="area-cancel-button"
                                onClick={() => navigate("/area/list")}
                            >
                                <FaArrowLeft />
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="area-save-button"
                            >
                                <FaCheckCircle />
                                Guardar Área
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AreaCreate;