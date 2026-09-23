import React from "react";
import { Link } from "react-router-dom";
import {
    FaPlusCircle,
    FaEye,
    FaEdit,
    FaTrash,
    FaCalendarAlt,
    FaCalendarCheck,
    FaMapMarkerAlt,
    FaBuilding
} from "react-icons/fa";

import "./OfferIndex.css";

import oferta1 from "../../assets/oferta1.jpg";
import oferta2 from "../../assets/oferta2.jpg";
import oferta3 from "../../assets/oferta3.jpg";
import oferta4 from "../../assets/oferta4.jpg";

function OfferIndex() {

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

    return (
        <div className="offer-index-container">

            <div className="offer-index-header">

                <div>
                    <h1>Lista de Ofertas</h1>

                    <p>
                        Administración y consulta del catálogo de ofertas académicas
                    </p>
                </div>

                <Link
                    to="/offer/create"
                    className="offer-add-button"
                >
                    <FaPlusCircle />
                    <span>Agregar Oferta</span>
                </Link>

            </div>


            <div className="offer-table-card">

                <div className="offer-table-responsive">

                    <table className="offer-table">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Modalidad</th>
                                <th>Fecha de inicio</th>
                                <th>Fecha de fin</th>

                                <th className="offer-center">
                                    Cupos
                                </th>

                                <th className="offer-center">
                                    Foto
                                </th>

                                <th>Área</th>

                                <th>
                                    Centro de Formación
                                </th>

                                <th className="offer-center">
                                    Acciones
                                </th>
                            </tr>
                        </thead>


                        <tbody>

                            {offers.map((offer) => (

                                <tr key={offer.id}>

                                    <td className="offer-id">
                                        #{offer.id}
                                    </td>


                                    <td className="offer-name">
                                        {offer.name}
                                    </td>


                                    <td className="offer-description">
                                        {offer.description}
                                    </td>


                                    <td>

                                        <span
                                            className={
                                                offer.modality === "Virtual"
                                                    ? "offer-modality virtual"
                                                    : "offer-modality"
                                            }
                                        >
                                            {offer.modality}
                                        </span>

                                    </td>


                                    <td>

                                        <div className="offer-date">

                                            <FaCalendarAlt />

                                            <span>
                                                {offer.startDate}
                                            </span>

                                        </div>

                                    </td>


                                    <td>

                                        <div className="offer-date offer-end-date">

                                            <FaCalendarCheck />

                                            <span>
                                                {offer.endDate}
                                            </span>

                                        </div>

                                    </td>


                                    <td className="offer-center">

                                        <span className="offer-quota">
                                            {offer.quota}
                                        </span>

                                    </td>


                                    <td className="offer-center">

                                        <img
                                            src={offer.photo}
                                            alt={`Foto de ${offer.name}`}
                                            className="offer-photo"
                                        />

                                    </td>


                                    <td>

                                        <div className="offer-area">

                                            <FaMapMarkerAlt />

                                            <span>
                                                {offer.area}
                                            </span>

                                        </div>

                                    </td>


                                    <td>

                                        <div className="offer-center-name">

                                            <FaBuilding />

                                            <span>
                                                {offer.trainingCenter}
                                            </span>

                                        </div>

                                    </td>


                                    <td className="offer-center">

                                        <div className="offer-actions">

                                            <Link
                                                to={`/offer/show/${offer.id}`}
                                                className="offer-action view"
                                                title="Ver"
                                            >
                                                <FaEye />
                                            </Link>


                                            <Link
                                                to={`/offer/edit/${offer.id}`}
                                                className="offer-action edit"
                                                title="Editar"
                                            >
                                                <FaEdit />
                                            </Link>


                                            <button
                                                type="button"
                                                className="offer-action delete"
                                                title="Eliminar"
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default OfferIndex;