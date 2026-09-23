import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaUserGraduate,
    FaHashtag,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBook,
    FaDesktop,
    FaArrowLeft
} from "react-icons/fa";

import "./ApprenticeShow.css";

function ApprenticeShow() {

    const navigate = useNavigate();
    const { id } = useParams();

    const apprentices = [
        {
            id: 1,
            name: "Camila Rodríguez",
            email: "camila.rodriguez@sena.edu.co",
            phone: "3163031781",
            course: "2456789",
            computer: "HP"
        },
        {
            id: 2,
            name: "Esteban Martínez",
            email: "esteban.martinez@sena.edu.co",
            phone: "3104897194",
            course: "2456790",
            computer: "Lenovo"
        },
        {
            id: 3,
            name: "Valentina Gómez",
            email: "valentina.gomez@sena.edu.co",
            phone: "3156789045",
            course: "2456791",
            computer: "Dell"
        },
        {
            id: 4,
            name: "Juan Sebastián López",
            email: "juan.lopez@sena.edu.co",
            phone: "3204567891",
            course: "2456792",
            computer: "Acer"
        }
    ];

    const apprentice = apprentices.find(
        (apprentice) => apprentice.id === Number(id)
    );

    return (
        <div className="apprentice-show-container">

            <div className="apprentice-show-card">

                <div className="apprentice-show-header">

                    <div className="apprentice-show-icon">
                        <FaUserGraduate />
                    </div>

                    <div>
                        <h1>Información del Aprendiz</h1>

                        <p>
                            Consulta los datos del aprendiz seleccionado
                        </p>
                    </div>

                </div>

                <div className="apprentice-show-body">

                    <div className="apprentice-profile">

                        <div className="apprentice-profile-icon">
                            <FaUserGraduate />
                        </div>

                        <div className="apprentice-profile-info">

                            <h2>{apprentice?.name}</h2>

                            <div className="apprentice-profile-id">
                                <FaHashtag />
                                <span>ID {apprentice?.id}</span>
                            </div>

                        </div>

                    </div>

                    <div className="apprentice-section-title">

                        <h3>Datos del aprendiz</h3>

                        <p>
                            Información registrada actualmente en el sistema.
                        </p>

                    </div>

                    <div className="apprentice-info-grid">

                        <div className="apprentice-info apprentice-info-full">

                            <div className="apprentice-info-icon">
                                <FaEnvelope />
                            </div>

                            <div className="apprentice-info-content">

                                <span>Correo electrónico</span>

                                <strong>
                                    {apprentice?.email}
                                </strong>

                            </div>

                        </div>

                        <div className="apprentice-info">

                            <div className="apprentice-info-icon">
                                <FaPhone />
                            </div>

                            <div className="apprentice-info-content">

                                <span>Número de teléfono</span>

                                <strong>
                                    {apprentice?.phone}
                                </strong>

                            </div>

                        </div>

                        <div className="apprentice-info">

                            <div className="apprentice-info-icon">
                                <FaBook />
                            </div>

                            <div className="apprentice-info-content">

                                <span>Curso</span>

                                <strong>
                                    {apprentice?.course}
                                </strong>

                            </div>

                        </div>

                        <div className="apprentice-info">

                            <div className="apprentice-info-icon">
                                <FaDesktop />
                            </div>

                            <div className="apprentice-info-content">

                                <span>Computador</span>

                                <strong>
                                    {apprentice?.computer}
                                </strong>

                            </div>

                        </div>

                    </div>

                    <div className="apprentice-show-buttons">

                        <button
                            type="button"
                            className="apprentice-show-back"
                            onClick={() => navigate("/apprentice/list")}
                        >
                            <FaArrowLeft />
                            Volver a los aprendices
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ApprenticeShow;