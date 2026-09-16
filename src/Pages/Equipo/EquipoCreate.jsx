import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaDesktop,
    FaHashtag,
    FaTag,
    FaImage,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./EquipoCreate.css";

function EquipoCreate() {

    const navigate = useNavigate();

    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (event) => {

        const file = event.target.files[0];

        if (file) {
            setPhoto(URL.createObjectURL(file));
        }
    };

    return (
        <div className="equipment-create-container">

            <div className="equipment-create-card">

                {/* ENCABEZADO */}
                <div className="equipment-create-header">

                    <div className="equipment-create-icon">
                        <FaDesktop />
                    </div>

                    <div>
                        <h1>Registrar Equipo</h1>

                        <p>
                            Agrega un nuevo equipo al sistema
                        </p>
                    </div>

                </div>


                {/* CONTENIDO */}
                <div className="equipment-create-body">

                    <div className="equipment-create-title">

                        <h2>Información del equipo</h2>

                        <p>
                            Completa los siguientes campos para registrar el equipo.
                        </p>

                    </div>


                    <form>

                        {/* NÚMERO */}
                        <div className="equipment-form-group">

                            <label htmlFor="number">
                                <FaHashtag />
                                Número del Equipo
                            </label>

                            <input
                                type="text"
                                id="number"
                                name="number"
                                placeholder="Ejemplo: PC-001"
                            />

                            <small>
                                Ingresa el número o código asignado al equipo.
                            </small>

                        </div>


                        {/* MARCA */}
                        <div className="equipment-form-group">

                            <label htmlFor="brand">
                                <FaTag />
                                Marca
                            </label>

                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                placeholder="Ejemplo: HP"
                            />

                            <small>
                                Escribe la marca del equipo.
                            </small>

                        </div>


                        {/* FOTO */}
                        <div className="equipment-form-group">

                            <label htmlFor="photo">
                                <FaImage />
                                Foto del Equipo
                            </label>

                            <div className="equipment-photo-upload">

                                {photo ? (
                                    <img
                                        src={photo}
                                        alt="Vista previa del equipo"
                                        className="equipment-photo-preview"
                                    />
                                ) : (
                                    <div className="equipment-photo-placeholder">

                                        <FaImage />

                                        <span>
                                            Selecciona una foto del equipo
                                        </span>

                                    </div>
                                )}

                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                />

                            </div>

                            <small>
                                Selecciona una imagen del equipo.
                            </small>

                        </div>


                        {/* BOTONES */}
                        <div className="equipment-create-buttons">

                            <button
                                type="button"
                                className="equipment-cancel-button"
                                onClick={() => navigate("/equipo/list")}
                            >
                                <FaArrowLeft />
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="equipment-save-button"
                            >
                                <FaCheckCircle />
                                Guardar Equipo
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default EquipoCreate;