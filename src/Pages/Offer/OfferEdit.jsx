import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

import oferta1 from "../../assets/oferta1.jpg";
import oferta2 from "../../assets/oferta2.jpg";
import oferta3 from "../../assets/oferta3.jpg";
import oferta4 from "../../assets/oferta4.jpg";

import "./OfferEdit.css";

function OfferEdit() {

    const navigate = useNavigate();
    const { id } = useParams();

    const offers = [
        {
            id: 1,
            name: "Análisis y Desarrollo de Software",
            description: "Formación para desarrollar aplicaciones y soluciones de software.",
            modality: "presencial",
            startDate: "2026-01-15",
            endDate: "2027-01-15",
            quota: 30,
            photo: oferta1,
            area: 1,
            trainingCenter: 1
        },
        {
            id: 2,
            name: "Gestión Administrativa",
            description: "Programa enfocado en procesos administrativos y empresariales.",
            modality: "virtual",
            startDate: "2026-01-20",
            endDate: "2027-01-20",
            quota: 25,
            photo: oferta2,
            area: 2,
            trainingCenter: 3
        },
        {
            id: 3,
            name: "Contabilidad y Finanzas",
            description: "Formación en procesos contables, financieros y empresariales.",
            modality: "presencial",
            startDate: "2026-02-01",
            endDate: "2027-02-01",
            quota: 35,
            photo: oferta3,
            area: 3,
            trainingCenter: 3
        },
        {
            id: 4,
            name: "Servicios de Salud",
            description: "Programa de formación orientado al área de servicios de salud.",
            modality: "presencial",
            startDate: "2026-02-10",
            endDate: "2027-02-10",
            quota: 28,
            photo: oferta4,
            area: 4,
            trainingCenter: 4
        }
    ];

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

    const offer = offers.find(
        (offer) => offer.id === Number(id)
    );

    const [name, setName] = useState(offer?.name || "");
    const [description, setDescription] = useState(offer?.description || "");
    const [modality, setModality] = useState(offer?.modality || "");
    const [startDate, setStartDate] = useState(offer?.startDate || "");
    const [endDate, setEndDate] = useState(offer?.endDate || "");
    const [quota, setQuota] = useState(offer?.quota || "");
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(offer?.photo || "");
    const [area, setArea] = useState(offer?.area || "");
    const [trainingCenter, setTrainingCenter] = useState(
        offer?.trainingCenter || ""
    );

    const seleccionarFoto = (e) => {

        const file = e.target.files[0];

        if (file) {
            setPhoto(file);
            setPhotoPreview(URL.createObjectURL(file));
        }

    };

    const actualizarOferta = () => {
        // Más adelante aquí conectaremos la API
    };

    return (
        <div className="offer-edit-container">

            <div className="offer-edit-card">

                <div className="offer-edit-header">

                    <div className="offer-edit-header-icon">
                        <FaGraduationCap />
                    </div>

                    <div>
                        <h1>Actualizar Oferta</h1>

                        <p>
                            Modifica la información de la oferta seleccionada
                        </p>
                    </div>

                </div>

                <div className="offer-edit-body">

                    <div className="offer-edit-title">

                        <h2>Información de la oferta</h2>

                        <p>
                            Actualiza los datos que deseas modificar.
                        </p>

                    </div>

                    <div className="offer-edit-grid">

                        {/* Nombre */}

                        <div className="offer-edit-group offer-edit-full">

                            <label htmlFor="name">
                                <FaTag />
                                Nombre de la oferta
                            </label>

                            <div className="offer-edit-input">

                                <FaTag />

                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    placeholder="Ingrese el nombre de la oferta"
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* Descripción */}

                        <div className="offer-edit-group offer-edit-full">

                            <label htmlFor="description">
                                <FaAlignLeft />
                                Descripción
                            </label>

                            <div className="offer-edit-input">

                                <FaAlignLeft />

                                <input
                                    type="text"
                                    id="description"
                                    value={description}
                                    placeholder="Ingrese la descripción de la oferta"
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* Modalidad */}

                        <div className="offer-edit-group">

                            <label htmlFor="modality">
                                <FaChalkboardTeacher />
                                Modalidad de formación
                            </label>

                            <div className="offer-edit-input">

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

                        <div className="offer-edit-group">

                            <label htmlFor="quota">
                                <FaUsers />
                                Cupos
                            </label>

                            <div className="offer-edit-input">

                                <FaUsers />

                                <input
                                    type="number"
                                    id="quota"
                                    value={quota}
                                    placeholder="Ingrese los cupos disponibles"
                                    onChange={(e) =>
                                        setQuota(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* Fecha inicio */}

                        <div className="offer-edit-group">

                            <label htmlFor="startDate">
                                <FaCalendarAlt />
                                Fecha de inicio
                            </label>

                            <div className="offer-edit-input">

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

                        <div className="offer-edit-group">

                            <label htmlFor="endDate">
                                <FaCalendarCheck />
                                Fecha de fin
                            </label>

                            <div className="offer-edit-input">

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

                        <div className="offer-edit-group">

                            <label htmlFor="area">
                                <FaMapMarkerAlt />
                                Área
                            </label>

                            <div className="offer-edit-input">

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
                                            {area.id} - {area.name}
                                        </option>
                                    ))}

                                </select>

                            </div>

                        </div>

                        {/* Centro */}

                        <div className="offer-edit-group">

                            <label htmlFor="trainingCenter">
                                <FaBuilding />
                                Centro de formación
                            </label>

                            <div className="offer-edit-input">

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
                                            {center.id} - {center.name}
                                        </option>
                                    ))}

                                </select>

                            </div>

                        </div>

                        {/* Foto */}

                        <div className="offer-edit-group offer-edit-full">

                            <label htmlFor="photo">
                                <FaImage />
                                Foto de la oferta
                            </label>

                            <div className="offer-edit-photo-section">

                                <div className="offer-edit-file">

                                    <FaImage />

                                    <input
                                        type="file"
                                        id="photo"
                                        accept="image/*"
                                        onChange={seleccionarFoto}
                                    />

                                </div>

                                {photoPreview && (

                                    <div className="offer-edit-preview">

                                        <img
                                            src={photoPreview}
                                            alt="Vista previa de la oferta"
                                        />

                                        <div>

                                            <span>
                                                {photo
                                                    ? "Nueva imagen"
                                                    : "Imagen actual"}
                                            </span>

                                            <p>
                                                {photo
                                                    ? photo.name
                                                    : "Foto registrada de la oferta"}
                                            </p>

                                        </div>

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>

                    <div className="offer-edit-buttons">

                        <button
                            type="button"
                            className="offer-edit-cancel"
                            onClick={() => navigate("/offer/list")}
                        >
                            <FaArrowLeft />
                            Cancelar
                        </button>

                        <button
                            type="button"
                            className="offer-edit-save"
                            onClick={actualizarOferta}
                        >
                            <FaCheckCircle />
                            Actualizar
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default OfferEdit;