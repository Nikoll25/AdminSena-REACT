import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaUserTie,
    FaUser,
    FaEnvelope,
    FaLayerGroup,
    FaBuilding,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./TeacherEdit.css";

function TeacherEdit() {

    const navigate = useNavigate();
    const { id } = useParams();

    const teachers = [
        {
            id: 1,
            name: "Carlos Martínez",
            email: "carlos.martinez@sena.edu.co",
            area: 1,
            trainingCenter: 1
        },
        {
            id: 2,
            name: "Laura Gómez",
            email: "laura.gomez@sena.edu.co",
            area: 2,
            trainingCenter: 3
        },
        {
            id: 3,
            name: "Andrés Rodríguez",
            email: "andres.rodriguez@sena.edu.co",
            area: 3,
            trainingCenter: 3
        },
        {
            id: 4,
            name: "María López",
            email: "maria.lopez@sena.edu.co",
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

    const teacher = teachers.find(
        (teacher) => teacher.id === Number(id)
    );

    const [name, setName] = useState(teacher?.name || "");
    const [email, setEmail] = useState(teacher?.email || "");
    const [area, setArea] = useState(teacher?.area || "");
    const [trainingCenter, setTrainingCenter] = useState(
        teacher?.trainingCenter || ""
    );

    return (
        <div className="teacher-edit-container">

            <div className="teacher-edit-card">

                {/* ENCABEZADO */}

                <div className="teacher-edit-header">

                    <div className="teacher-edit-icon">
                        <FaUserTie />
                    </div>

                    <div>
                        <h1>Actualizar Instructor</h1>
                        <p>
                            Modifica la información del instructor seleccionado
                        </p>
                    </div>

                </div>

                {/* CUERPO */}

                <div className="teacher-edit-body">

                    <div className="teacher-edit-title">

                        <h2>Información del instructor</h2>

                        <p>
                            Actualiza los datos del instructor registrado.
                        </p>

                    </div>

                    <form>

                        {/* NOMBRE */}

                        <div className="teacher-edit-group">

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
                                Modifica el nombre completo del instructor.
                            </small>

                        </div>

                        {/* CORREO */}

                        <div className="teacher-edit-group">

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
                                Modifica el correo electrónico institucional.
                            </small>

                        </div>

                        {/* ÁREA */}

                        <div className="teacher-edit-group">

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
                                Selecciona el área del instructor.
                            </small>

                        </div>

                        {/* CENTRO DE FORMACIÓN */}

                        <div className="teacher-edit-group">

                            <label htmlFor="trainingCenter">
                                <FaBuilding />
                                Centro de Formación
                            </label>

                            <select
                                id="trainingCenter"
                                name="training_center_id"
                                value={trainingCenter}
                                onChange={(e) =>
                                    setTrainingCenter(e.target.value)
                                }
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

                        <div className="teacher-edit-buttons">

                            <button
                                type="button"
                                className="teacher-edit-cancel"
                                onClick={() => navigate("/teacher/list")}
                            >
                                <FaArrowLeft />
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="teacher-edit-save"
                            >
                                <FaCheckCircle />
                                Actualizar Instructor
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default TeacherEdit;