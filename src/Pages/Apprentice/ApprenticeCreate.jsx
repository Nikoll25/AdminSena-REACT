import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaUserGraduate,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBook,
    FaDesktop,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./ApprenticeCreate.css";

function ApprenticeCreate() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [computer, setComputer] = useState("");

    const courses = [
        { id: 1, number: "2456789" },
        { id: 2, number: "2456790" },
        { id: 3, number: "2456791" },
        { id: 4, number: "2456792" }
    ];

    const computers = [
        { id: 1, number: "PC-001", brand: "HP" },
        { id: 2, number: "PC-002", brand: "Lenovo" },
        { id: 3, number: "PC-003", brand: "Dell" },
        { id: 4, number: "PC-004", brand: "Acer" }
    ];

    const guardarAprendiz = () => {
        // Más adelante aquí conectaremos la API
    };

    return (
        <div className="apprentice-create-container">

            <div className="apprentice-create-card">

                {/* HEADER */}

                <div className="apprentice-create-header">

                    <div className="apprentice-create-header-icon">
                        <FaUserGraduate />
                    </div>

                    <div>
                        <h1>Registrar Aprendiz</h1>

                        <p>
                            Ingresa la información del nuevo aprendiz
                        </p>
                    </div>

                </div>

                {/* BODY */}

                <div className="apprentice-create-body">

                    <div className="apprentice-create-title">

                        <h2>Información del aprendiz</h2>

                        <p>
                            Completa los siguientes campos para registrar el aprendiz.
                        </p>

                    </div>

                    <div className="apprentice-form-grid">

                        {/* NOMBRE */}

                        <div className="apprentice-form-group">

                            <label htmlFor="name">
                                <FaUser />
                                Nombre del aprendiz
                            </label>

                            <div className="apprentice-input-container">

                                <FaUser />

                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Ingrese el nombre del aprendiz"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* CORREO */}

                        <div className="apprentice-form-group">

                            <label htmlFor="email">
                                <FaEnvelope />
                                Correo electrónico
                            </label>

                            <div className="apprentice-input-container">

                                <FaEnvelope />

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Ingrese el correo electrónico"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* TELÉFONO */}

                        <div className="apprentice-form-group">

                            <label htmlFor="phone">
                                <FaPhone />
                                Número de teléfono
                            </label>

                            <div className="apprentice-input-container">

                                <FaPhone />

                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Ingrese el número de teléfono"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        {/* CURSO */}

                        <div className="apprentice-form-group">

                            <label htmlFor="course">
                                <FaBook />
                                Curso
                            </label>

                            <div className="apprentice-input-container">

                                <FaBook />

                                <select
                                    id="course"
                                    value={course}
                                    onChange={(e) =>
                                        setCourse(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Seleccione un curso
                                    </option>

                                    {courses.map((course) => (
                                        <option
                                            key={course.id}
                                            value={course.id}
                                        >
                                            {course.number}
                                        </option>
                                    ))}

                                </select>

                            </div>

                        </div>

                        {/* COMPUTADOR */}

                        <div className="apprentice-form-group">

                            <label htmlFor="computer">
                                <FaDesktop />
                                Computador
                            </label>

                            <div className="apprentice-input-container">

                                <FaDesktop />

                                <select
                                    id="computer"
                                    value={computer}
                                    onChange={(e) =>
                                        setComputer(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Seleccione un computador
                                    </option>

                                    {computers.map((computer) => (
                                        <option
                                            key={computer.id}
                                            value={computer.id}
                                        >
                                            {computer.number} - {computer.brand}
                                        </option>
                                    ))}

                                </select>

                            </div>

                        </div>

                    </div>

                    {/* BOTONES */}

                    <div className="apprentice-create-buttons">

                        <button
                            type="button"
                            className="apprentice-cancel-button"
                            onClick={() => navigate("/apprentice/list")}
                        >
                            <FaArrowLeft />
                            Cancelar
                        </button>

                        <button
                            type="button"
                            className="apprentice-save-button"
                            onClick={guardarAprendiz}
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

export default ApprenticeCreate;