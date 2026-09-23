import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaGraduationCap,
    FaTag,
    FaAlignLeft,
    FaChalkboardTeacher,
    FaCalendarAlt,
    FaCalendarCheck,
    FaUsers,
    FaImage,
    FaMapMarkerAlt,
    FaBuilding,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./OfferCreate.css";

function OfferCreate() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [modality, setModality] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [quota, setQuota] = useState("");
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState("");
    const [area, setArea] = useState("");
    const [trainingCenter, setTrainingCenter] = useState("");

    const areas = [
        { id: 1, name: "Tecnología" },
        { id: 2, name: "Administración" },
        { id: 3, name: "Contabilidad" },
        { id: 4, name: "Salud" }
    ];

    const trainingCenters = [
        {
            id: 1,
            name: "Centro de Gestión Administrativa"
        },
        {
            id: 2,
            name: "Centro de Electricidad, Electrónica y Telecomunicaciones"
        },
        {
            id: 3,
            name: "Centro de Servicios Financieros"
        },
        {
            id: 4,
            name: "Centro de Tecnología de la Manufactura Avanzada"
        }
    ];

    const seleccionarFoto = (e) => {

        const file = e.target.files[0];

        if (file) {
            setPhoto(file);
            setPhotoPreview(URL.createObjectURL(file));
        }

    };

    const guardarOferta = () => {
        // Más adelante aquí conectaremos la API
    };

    return (
        <div className="offer-create-container">

            <div className="offer-create-card">

                <div className="offer-create-header">

                    <div className="offer-create-header-icon">
                        <FaGraduationCap />
                    </div>

                    <div>
                        <h1>Registrar Oferta</h1>

                        <p>
                            Ingresa la información de la nueva oferta académica
                        </p>
                    </div>

                </div>

                <div className="offer-create-body">

                    <div className="offer-create-title">

                        <h2>Información de la oferta</h2>

                        <p>
                            Completa los siguientes campos para registrar la oferta.
                        </p>

                    </div>

                    <div className="offer-form-grid">

                        {/* Nombre */}

                        <div className="offer-form-group offer-full-width">

                            <label htmlFor="name">
                                <FaTag />
                                Nombre de la oferta
                            </label>

                            <div className="offer-input-container">

                                <FaTag />

                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Ingrese el nombre de la oferta"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* Descripción */}

                        <div className="offer-form-group offer-full-width">

                            <label htmlFor="description">
                                <FaAlignLeft />
                                Descripción
                            </label>

                            <div className="offer-input-container">

                                <FaAlignLeft />

                                <input
                                    type="text"
                                    id="description"
                                    placeholder="Ingrese la descripción de la oferta"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* Modalidad */}

                        <div className="offer-form-group">

                            <label htmlFor="modality">
                                <FaChalkboardTeacher />
                                Modalidad de formación
                            </label>

                            <div className="offer-input-container">

                                <FaChalkboardTeacher />

                                <select
                                    id="modality"
                                    value={modality}
                                    onChange={(e) =>
                                        setModality(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Seleccione una opción
                                    </option>

                                    <option value="presencial">
                                        Presencial
                                    </option>

                                    <option value="virtual">
                                        Virtual
                                    </option>

                                </select>

                            </div>

                        </div>

                        {/* Cupos */}

                        <div className="offer-form-group">

                            <label htmlFor="quota">
                                <FaUsers />
                                Cupos
                            </label>

                            <div className="offer-input-container">

                                <FaUsers />

                                <input
                                    type="number"
                                    id="quota"
                                    placeholder="Ingrese los cupos disponibles"
                                    value={quota}
                                    onChange={(e) =>
                                        setQuota(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* Fecha inicio */}

                        <div className="offer-form-group">

                            <label htmlFor="startDate">
                                <FaCalendarAlt />
                                Fecha de inicio
                            </label>

                            <div className="offer-input-container">

                                <FaCalendarAlt />

                                <input
                                    type="date"
                                    id="startDate"
                                    value={startDate}
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* Fecha fin */}

                        <div className="offer-form-group">

                            <label htmlFor="endDate">
                                <FaCalendarCheck />
                                Fecha de fin
                            </label>

                            <div className="offer-input-container">

                                <FaCalendarCheck />

                                <input
                                    type="date"
                                    id="endDate"
                                    value={endDate}
                                    onChange={(e) =>
                                        setEndDate(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* Área */}

                        <div className="offer-form-group">

                            <label htmlFor="area">
                                <FaMapMarkerAlt />
                                Área
                            </label>

                            <div className="offer-input-container">

                                <FaMapMarkerAlt />

                                <select
                                    id="area"
                                    value={area}
                                    onChange={(e) =>
                                        setArea(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Seleccione un área
                                    </option>

                                    {areas.map((area) => (
                                        <option
                                            key={area.id}
                                            value={area.id}
                                        >
                                            {area.name}
                                        </option>
                                    ))}

                                </select>

                            </div>

                        </div>

                        {/* Centro */}

                        <div className="offer-form-group">

                            <label htmlFor="trainingCenter">
                                <FaBuilding />
                                Centro de formación
                            </label>

                            <div className="offer-input-container">

                                <FaBuilding />

                                <select
                                    id="trainingCenter"
                                    value={trainingCenter}
                                    onChange={(e) =>
                                        setTrainingCenter(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Seleccione un centro de formación
                                    </option>

                                    {trainingCenters.map((center) => (
                                        <option
                                            key={center.id}
                                            value={center.id}
                                        >
                                            {center.name}
                                        </option>
                                    ))}

                                </select>

                            </div>

                        </div>

                        {/* Foto */}

                        <div className="offer-form-group offer-full-width">

                            <label htmlFor="photo">
                                <FaImage />
                                Foto de la oferta
                            </label>

                            <div className="offer-photo-section">

                                <div className="offer-file-container">

                                    <FaImage />

                                    <input
                                        type="file"
                                        id="photo"
                                        accept="image/*"
                                        onChange={seleccionarFoto}
                                    />

                                </div>

                                {photoPreview && (

                                    <div className="offer-photo-preview">

                                        <img
                                            src={photoPreview}
                                            alt="Vista previa de la oferta"
                                        />

                                        <div>
                                            <span>Vista previa</span>
                                            <p>{photo?.name}</p>
                                        </div>

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>

                    <div className="offer-create-buttons">

                        <button
                            type="button"
                            className="offer-cancel-button"
                            onClick={() => navigate("/offer/list")}
                        >
                            <FaArrowLeft />
                            Cancelar
                        </button>

                        <button
                            type="button"
                            className="offer-save-button"
                            onClick={guardarOferta}
                        >
                            <FaCheckCircle />
                            Guardar
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default OfferCreate;