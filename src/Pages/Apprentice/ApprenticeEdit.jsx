import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

import "./ApprenticeEdit.css";

function ApprenticeEdit() {

    const navigate = useNavigate();
    const { id } = useParams();

    const apprentices = [
        {
            id: 1,
            name: "Camila Rodríguez",
            email: "camila.rodriguez@sena.edu.co",
            phone: "3163031781",
            course: 1,
            computer: 1
        },
        {
            id: 2,
            name: "Esteban Martínez",
            email: "esteban.martinez@sena.edu.co",
            phone: "3104897194",
            course: 2,
            computer: 2
        },
        {
            id: 3,
            name: "Valentina Gómez",
            email: "valentina.gomez@sena.edu.co",
            phone: "3156789045",
            course: 3,
            computer: 3
        },
        {
            id: 4,
            name: "Juan Sebastián López",
            email: "juan.lopez@sena.edu.co",
            phone: "3204567891",
            course: 4,
            computer: 4
        }
    ];

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

    const apprentice = apprentices.find(
        (apprentice) => apprentice.id === Number(id)
    );

    const [name, setName] = useState(apprentice?.name || "");
    const [email, setEmail] = useState(apprentice?.email || "");
    const [phone, setPhone] = useState(apprentice?.phone || "");
    const [course, setCourse] = useState(apprentice?.course || "");
    const [computer, setComputer] = useState(apprentice?.computer || "");

    const actualizarAprendiz = () => {
        // Más adelante aquí conectaremos la API
    };

    return (
        <div className="apprentice-edit-container">

            <div className="apprentice-edit-card">

                <div className="apprentice-edit-header">

                    <div className="apprentice-edit-header-icon">
                        <FaUserGraduate />
                    </div>

                    <div>
                        <h1>Actualizar Aprendiz</h1>

                        <p>
                            Modifica la información del aprendiz seleccionado
                        </p>
                    </div>

                </div>

                <div className="apprentice-edit-body">

                    <div className="apprentice-edit-title">

                        <h2>Información del aprendiz</h2>

                        <p>
                            Actualiza los datos que deseas modificar.
                        </p>

                    </div>

                    <div className="apprentice-edit-grid">

                        <div className="apprentice-edit-group">

                            <label htmlFor="name">
                                <FaUser />
                                Nombre del aprendiz
                            </label>

                            <div className="apprentice-edit-input">

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

                        <div className="apprentice-edit-group">

                            <label htmlFor="email">
                                <FaEnvelope />
                                Correo electrónico
                            </label>

                            <div className="apprentice-edit-input">

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

                        <div className="apprentice-edit-group">

                            <label htmlFor="phone">
                                <FaPhone />
                                Número de teléfono
                            </label>

                            <div className="apprentice-edit-input">

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

                        <div className="apprentice-edit-group">

                            <label htmlFor="course">
                                <FaBook />
                                Curso
                            </label>

                            <div className="apprentice-edit-input">

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

                        <div className="apprentice-edit-group">

                            <label htmlFor="computer">
                                <FaDesktop />
                                Computador
                            </label>

                            <div className="apprentice-edit-input">

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

                    <div className="apprentice-edit-buttons">

                        <button
                            type="button"
                            className="apprentice-edit-cancel"
                            onClick={() => navigate("/apprentice/list")}
                        >
                            <FaArrowLeft />
                            Cancelar
                        </button>

                        <button
                            type="button"
                            className="apprentice-edit-save"
                            onClick={actualizarAprendiz}
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

export default ApprenticeEdit;