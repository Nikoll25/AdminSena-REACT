import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    FaDesktop,
    FaHashtag,
    FaTag,
    FaImage,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import pc1 from "../../assets/pc1.jpg";
import pc2 from "../../assets/pc2.jpg";
import pc3 from "../../assets/pc3.jpg";
import pc4 from "../../assets/pc4.webp";

import "./EquipoEdit.css";

function EquipoEdit() {

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

    const equipo = equipos.find(
        (equipo) => equipo.id === Number(id)
    );

    // Foto seleccionada
    const [photo, setPhoto] = useState(equipo?.photo);

    // Cambiar foto
    const handlePhotoChange = (event) => {

        const file = event.target.files[0];

        if (file) {
            setPhoto(URL.createObjectURL(file));
        }
    };

    return (
        <div className="equipment-edit-container">

            <div className="equipment-edit-card">

                <div className="equipment-edit-header">

                    <div className="equipment-edit-icon">
                        <FaDesktop />
                    </div>

                    <div>
                        <h1>Actualizar Equipo</h1>

                        <p>
                            Modifica la información del equipo seleccionado
                        </p>
                    </div>

                </div>

                {/* CONTENIDO */}
                <div className="equipment-edit-body">

                    <div className="equipment-edit-title">

                        <h2>Información del equipo</h2>

                        <p>
                            Actualiza los datos del equipo registrado.
                        </p>

                    </div>

                    <form>

                        {/* NÚMERO */}
                        <div className="equipment-edit-group">

                            <label htmlFor="number">
                                <FaHashtag />
                                Número del Equipo
                            </label>

                            <input
                                type="text"
                                id="number"
                                name="number"
                                defaultValue={equipo?.number}
                                placeholder="Ingrese el número del equipo"
                            />

                            <small>
                                Modifica el número o código asignado al equipo.
                            </small>

                        </div>

                        {/* MARCA */}
                        <div className="equipment-edit-group">

                            <label htmlFor="brand">
                                <FaTag />
                                Marca
                            </label>

                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                defaultValue={equipo?.brand}
                                placeholder="Ingrese la marca del equipo"
                            />

                            <small>
                                Modifica la marca del equipo.
                            </small>

                        </div>

                        {/* FOTO */}
                        <div className="equipment-edit-group">

                            <label htmlFor="photo">
                                <FaImage />
                                Foto del Equipo
                            </label>

                            <div className="equipment-photo-upload">

                                {photo ? (
                                    <img
                                        src={photo}
                                        alt={`Equipo ${equipo?.number}`}
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
                                Selecciona una nueva imagen si deseas reemplazar la actual.
                            </small>

                        </div>

                        {/* BOTONES */}
                        <div className="equipment-edit-buttons">

                            <button
                                type="button"
                                className="equipment-edit-cancel"
                                onClick={() => navigate("/equipo/list")}
                            >
                                <FaArrowLeft />
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="equipment-edit-save"
                            >
                                <FaCheckCircle />
                                Actualizar Equipo
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default EquipoEdit;