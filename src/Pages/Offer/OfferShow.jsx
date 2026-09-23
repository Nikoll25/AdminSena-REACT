import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaGraduationCap,
    FaHashtag,
    FaTag,
    FaAlignLeft,
    FaChalkboardTeacher,
    FaCalendarAlt,
    FaCalendarCheck,
    FaUsers,
    FaImage,
    FaMapMarkerAlt,
    FaBuilding,
    FaArrowLeft
} from "react-icons/fa";

import oferta1 from "../../assets/oferta1.jpg";
import oferta2 from "../../assets/oferta2.jpg";
import oferta3 from "../../assets/oferta3.jpg";
import oferta4 from "../../assets/oferta4.jpg";

import "./OfferShow.css";

function OfferShow() {

    const navigate = useNavigate();
    const { id } = useParams();

    const offers = [
        {
            id: 1,
            name: "Análisis y Desarrollo de Software",
            description: "Formación para desarrollar aplicaciones y soluciones de software.",
            modality: "Presencial",
            startDate: "15/01/2026",
            endDate: "15/01/2027",
            quota: 30,
            photo: oferta1,
            area: "Tecnología",
            trainingCenter: "Centro de Gestión Administrativa"
        },
        {
            id: 2,
            name: "Gestión Administrativa",
            description: "Programa enfocado en procesos administrativos y empresariales.",
            modality: "Virtual",
            startDate: "20/01/2026",
            endDate: "20/01/2027",
            quota: 25,
            photo: oferta2,
            area: "Administración",
            trainingCenter: "Centro de Servicios Financieros"
        },
        {
            id: 3,
            name: "Contabilidad y Finanzas",
            description: "Formación en procesos contables, financieros y empresariales.",
            modality: "Presencial",
            startDate: "01/02/2026",
            endDate: "01/02/2027",
            quota: 35,
            photo: oferta3,
            area: "Contabilidad",
            trainingCenter: "Centro de Servicios Financieros"
        },
        {
            id: 4,
            name: "Servicios de Salud",
            description: "Programa de formación orientado al área de servicios de salud.",
            modality: "Presencial",
            startDate: "10/02/2026",
            endDate: "10/02/2027",
            quota: 28,
            photo: oferta4,
            area: "Salud",
            trainingCenter: "Centro de Tecnología de la Manufactura Avanzada"
        }
    ];

    const offer = offers.find(
        (offer) => offer.id === Number(id)
    );

    return (
        <div className="offer-show-container">

            <div className="offer-show-card">

                <div className="offer-show-header">

                    <div className="offer-show-header-icon">
                        <FaGraduationCap />
                    </div>

                    <div>
                        <h1>Información de la oferta</h1>
                        <p>
                            Consulta los datos de la oferta seleccionada
                        </p>
                    </div>

                </div>

                <div className="offer-show-body">

                    <div className="offer-profile">

                        <div className="offer-profile-image">
                            <img
                                src={offer?.photo}
                                alt={offer?.name}
                            />
                        </div>

                        <div className="offer-profile-info">

                            <h2>{offer?.name}</h2>

                            <div className="offer-profile-id">
                                <FaHashtag />
                                <span>ID {offer?.id}</span>
                            </div>

                        </div>

                    </div>


                    <div className="offer-section-title">

                        <h3>Datos de la oferta</h3>

                        <p>
                            Información registrada actualmente en el sistema.
                        </p>

                    </div>


                    <div className="offer-info-grid">

                        <div className="offer-info offer-info-full">

                            <div className="offer-info-icon">
                                <FaTag />
                            </div>

                            <div className="offer-info-content">

                                <span>Nombre de la oferta</span>

                                <strong>
                                    {offer?.name}
                                </strong>

                            </div>

                        </div>


                        <div className="offer-info offer-info-full">

                            <div className="offer-info-icon">
                                <FaAlignLeft />
                            </div>

                            <div className="offer-info-content">

                                <span>Descripción</span>

                                <strong>
                                    {offer?.description}
                                </strong>

                            </div>

                        </div>


                        <div className="offer-info">

                            <div className="offer-info-icon">
                                <FaChalkboardTeacher />
                            </div>

                            <div className="offer-info-content">

                                <span>Modalidad</span>

                                <strong>
                                    {offer?.modality}
                                </strong>

                            </div>

                        </div>


                        <div className="offer-info">

                            <div className="offer-info-icon">
                                <FaUsers />
                            </div>

                            <div className="offer-info-content">

                                <span>Cupos disponibles</span>

                                <strong>
                                    {offer?.quota}
                                </strong>

                            </div>

                        </div>


                        <div className="offer-info">

                            <div className="offer-info-icon">
                                <FaCalendarAlt />
                            </div>

                            <div className="offer-info-content">

                                <span>Fecha de inicio</span>

                                <strong>
                                    {offer?.startDate}
                                </strong>

                            </div>

                        </div>


                        <div className="offer-info">

                            <div className="offer-info-icon">
                                <FaCalendarCheck />
                            </div>

                            <div className="offer-info-content">

                                <span>Fecha de fin</span>

                                <strong>
                                    {offer?.endDate}
                                </strong>

                            </div>

                        </div>


                        <div className="offer-info">

                            <div className="offer-info-icon">
                                <FaMapMarkerAlt />
                            </div>

                            <div className="offer-info-content">

                                <span>Área</span>

                                <strong>
                                    {offer?.area}
                                </strong>

                            </div>

                        </div>


                        <div className="offer-info">

                            <div className="offer-info-icon">
                                <FaBuilding />
                            </div>

                            <div className="offer-info-content">

                                <span>Centro de formación</span>

                                <strong>
                                    {offer?.trainingCenter}
                                </strong>

                            </div>

                        </div>

                    </div>


                    <div className="offer-photo-section">

                        <div className="offer-photo-title">

                            <div className="offer-photo-icon">
                                <FaImage />
                            </div>

                            <div>
                                <h3>Imagen de la oferta</h3>
                                <p>Imagen registrada actualmente</p>
                            </div>

                        </div>

                        <img
                            src={offer?.photo}
                            alt={offer?.name}
                            className="offer-show-photo"
                        />

                    </div>


                    <div className="offer-show-buttons">

                        <button
                            type="button"
                            className="offer-show-back"
                            onClick={() => navigate("/offer/list")}
                        >
                            <FaArrowLeft />
                            Volver a las ofertas
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default OfferShow;