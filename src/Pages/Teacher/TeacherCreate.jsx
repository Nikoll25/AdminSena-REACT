import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaUserTie,
    FaUser,
    FaEnvelope,
    FaLayerGroup,
    FaBuilding,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./TeacherCreate.css";

function TeacherCreate() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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

    return (
        <div className="teacher-create-container">

            <div className="teacher-create-card">

                {/* ENCABEZADO */}

                <div className="teacher-create-header">

                    <div className="teacher-create-icon">
                        <FaUserTie />
                    </div>

                    <div>
                        <h1>Registrar Instructor</h1>
                        <p>
                            Agrega un nuevo instructor al sistema
                        </p>
                    </div>

                </div>

                {/* CUERPO */}

                <div className="teacher-create-body">

                    <div className="teacher-create-title">

                        <h2>Información del instructor</h2>

                        <p>
                            Completa los siguientes campos para registrar el instructor.
                        </p>

                    </div>

                    <form>

                        {/* NOMBRE */}

                        <div className="teacher-form-group">

                            <label htmlFor="name">
                                <FaUser />
                                Nombre del Instructor
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ingrese el nombre del instructor"
                                required
                            />

                            <small>
                                Ingresa el nombre completo del instructor.
                            </small>

                        </div>

                        {/* CORREO */}

                        <div className="teacher-form-group">

                            <label htmlFor="email">
                                <FaEnvelope />
                                Correo Electrónico
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Ingrese el correo electrónico"
                                required
                            />

                            <small>
                                Ingresa el correo electrónico institucional.
                            </small>

                        </div>

                        {/* ÁREA */}

                        <div className="teacher-form-group">

                            <label htmlFor="area">
                                <FaLayerGroup />
                                Área
                            </label>

                            <select
                                id="area"
                                name="area_id"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                required
                            >

                                <option value="">
                                    Seleccione un área
                                </option>

                                {areas.map((item) => (
                                    <option
                                        key={item.id}
                                        value={item.id}
                                    >
                                        {item.name}
                                    </option>
                                ))}

                            </select>

                            <small>
                                Selecciona el área a la que pertenece el instructor.
                            </small>

                        </div>

                        {/* CENTRO DE FORMACIÓN */}

                        <div className="teacher-form-group">

                            <label htmlFor="trainingCenter">
                                <FaBuilding />
                                Centro de Formación
                            </label>

                            <select
                                id="trainingCenter"
                                name="training_center_id"
                                value={trainingCenter}
                                onChange={(e) => setTrainingCenter(e.target.value)}
                                required
                            >

                                <option value="">
                                    Seleccione un centro de formación
                                </option>

                                {trainingCenters.map((item) => (
                                    <option
                                        key={item.id}
                                        value={item.id}
                                    >
                                        {item.name}
                                    </option>
                                ))}

                            </select>

                            <small>
                                Selecciona el centro de formación del instructor.
                            </small>

                        </div>

                        {/* BOTONES */}

                        <div className="teacher-create-buttons">

                            <button
                                type="button"
                                className="teacher-cancel-button"
                                onClick={() => navigate("/teacher/list")}
                            >
                                <FaArrowLeft />
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="teacher-save-button"
                            >
                                <FaCheckCircle />
                                Guardar Instructor
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default TeacherCreate;