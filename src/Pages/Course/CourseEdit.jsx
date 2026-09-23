import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaBook,
    FaHashtag,
    FaCalendarDay,
    FaLayerGroup,
    FaBuilding,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./CourseEdit.css";

function CourseEdit() {

    const navigate = useNavigate();
    const { id } = useParams();

    const courses = [
        {
            id: 1,
            number: "2456789",
            day: "Lunes",
            area: 1,
            trainingCenter: 1
        },
        {
            id: 2,
            number: "2456790",
            day: "Martes",
            area: 2,
            trainingCenter: 3
        },
        {
            id: 3,
            number: "2456791",
            day: "Miércoles",
            area: 3,
            trainingCenter: 3
        },
        {
            id: 4,
            number: "2456792",
            day: "Jueves",
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

    const course = courses.find(
        (course) => course.id === Number(id)
    );

    const [number, setNumber] = useState(course?.number || "");
    const [day, setDay] = useState(course?.day || "");
    const [area, setArea] = useState(course?.area || "");
    const [trainingCenter, setTrainingCenter] = useState(
        course?.trainingCenter || ""
    );

    const actualizarCurso = () => {
        // Más adelante aquí conectaremos la API
    };

    return (
        <div className="course-edit-container">

            <div className="course-edit-card">

                {/* HEADER */}
                <div className="course-edit-header">

                    <div className="course-edit-header-icon">
                        <FaBook />
                    </div>

                    <div>
                        <h1>Actualizar Curso</h1>
                        <p>
                            Modifica la información del curso seleccionado
                        </p>
                    </div>

                </div>

                {/* BODY */}
                <div className="course-edit-body">

                    <div className="course-edit-title">
                        <h2>Información del curso</h2>
                        <p>
                            Actualiza los datos que deseas modificar.
                        </p>
                    </div>

                    <div className="course-edit-grid">

                        {/* Número */}
                        <div className="course-edit-group">

                            <label htmlFor="number">
                                <FaHashtag />
                                Número del curso
                            </label>

                            <div className="course-edit-input">

                                <FaHashtag />

                                <input
                                    type="text"
                                    id="number"
                                    value={number}
                                    onChange={(e) =>
                                        setNumber(e.target.value)
                                    }
                                    placeholder="Ingrese el número del curso"
                                />

                            </div>

                        </div>

                        {/* Día */}
                        <div className="course-edit-group">

                            <label htmlFor="day">
                                <FaCalendarDay />
                                Día
                            </label>

                            <div className="course-edit-input">

                                <FaCalendarDay />

                                <input
                                    type="text"
                                    id="day"
                                    value={day}
                                    onChange={(e) =>
                                        setDay(e.target.value)
                                    }
                                    placeholder="Ejemplo: Lunes"
                                />

                            </div>

                        </div>

                        {/* Área */}
                        <div className="course-edit-group">

                            <label htmlFor="area">
                                <FaLayerGroup />
                                Área
                            </label>

                            <div className="course-edit-input">

                                <FaLayerGroup />

                                <select
                                    id="area"
                                    value={area}
                                    onChange={(e) =>
                                        setArea(e.target.value)
                                    }
                                >

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
                        <div className="course-edit-group">

                            <label htmlFor="trainingCenter">
                                <FaBuilding />
                                Centro de formación
                            </label>

                            <div className="course-edit-input">

                                <FaBuilding />

                                <select
                                    id="trainingCenter"
                                    value={trainingCenter}
                                    onChange={(e) =>
                                        setTrainingCenter(e.target.value)
                                    }
                                >

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

                    </div>

                    {/* BOTONES */}
                    <div className="course-edit-buttons">

                        <button
                            type="button"
                            className="course-edit-cancel"
                            onClick={() => navigate("/course/list")}
                        >
                            <FaArrowLeft />
                            Cancelar
                        </button>

                        <button
                            type="button"
                            className="course-edit-save"
                            onClick={actualizarCurso}
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

export default CourseEdit;