import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBook,
    FaHashtag,
    FaCalendarDay,
    FaLayerGroup,
    FaBuilding,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./CourseCreate.css";

function CourseCreate() {

    const navigate = useNavigate();

    const [number, setNumber] = useState("");
    const [day, setDay] = useState("");
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

    const guardarCurso = () => {
        // Más adelante aquí conectaremos la API
    };

    return (
        <div className="course-create-container">

            <div className="course-create-card">

                <div className="course-create-header">

                    <div className="course-create-header-icon">
                        <FaBook />
                    </div>

                    <div>
                        <h1>Registrar Curso</h1>
                        <p>Ingresa la información del nuevo curso</p>
                    </div>

                </div>

                <div className="course-create-body">

                    <div className="course-create-title">
                        <h2>Información del curso</h2>
                        <p>Completa los siguientes campos para registrar el curso.</p>
                    </div>

                    <div className="course-form-grid">

                        {/* Número de ficha */}
                        <div className="course-form-group">

                            <label htmlFor="number">
                                <FaHashtag />
                                Número de ficha
                            </label>

                            <div className="course-input-container">
                                <FaHashtag />

                                <input
                                    type="text"
                                    id="number"
                                    placeholder="Ingrese el número de ficha"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>

                            <small>
                                Ejemplo: 2456789
                            </small>

                        </div>

                        {/* Día */}
                        <div className="course-form-group">

                            <label htmlFor="day">
                                <FaCalendarDay />
                                Día
                            </label>

                            <div className="course-input-container">
                                <FaCalendarDay />

                                <input
                                    type="text"
                                    id="day"
                                    placeholder="Ingrese el día de formación"
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                />
                            </div>

                            <small>
                                Ejemplo: Lunes
                            </small>

                        </div>

                        {/* Área */}
                        <div className="course-form-group">

                            <label htmlFor="area">
                                <FaLayerGroup />
                                Área
                            </label>

                            <div className="course-input-container">

                                <FaLayerGroup />

                                <select
                                    id="area"
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
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

                            <small>
                                Selecciona el área correspondiente.
                            </small>

                        </div>

                        {/* Centro de formación */}
                        <div className="course-form-group">

                            <label htmlFor="trainingCenter">
                                <FaBuilding />
                                Centro de formación
                            </label>

                            <div className="course-input-container">

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

                            <small>
                                Selecciona el centro donde se desarrolla.
                            </small>

                        </div>

                    </div>

                    <div className="course-create-buttons">

                        <button
                            type="button"
                            className="course-cancel-button"
                            onClick={() => navigate("/course/list")}
                        >
                            <FaArrowLeft />
                            Cancelar
                        </button>

                        <button
                            type="button"
                            className="course-save-button"
                            onClick={guardarCurso}
                        >
                            <FaCheckCircle />
                            Guardar curso
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CourseCreate;