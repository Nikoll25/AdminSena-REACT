import React from "react";
import { Link } from "react-router-dom";

// iconos usados en las diferentes secciones
import {
    FaArrowRight,
    FaBook,
    FaBuilding,
    FaCalendarAlt,
    FaChevronDown,
    FaGraduationCap,
    FaLayerGroup,
    FaLaptop,
    FaMapMarkerAlt,
    FaUserGraduate,
    FaUserTie,
    FaUsers,
    FaChartLine
} from "react-icons/fa";

// imagenes de las ofertas academicas
import oferta1 from "../../assets/oferta1.jpg";
import oferta2 from "../../assets/oferta2.jpg";
import oferta3 from "../../assets/oferta3.jpg";
import oferta4 from "../../assets/oferta4.jpg";

// estilos de la pagina principal
import "./Home.css";


function Home() {

    // informacion que se muestra en las tarjetas de estadisticas
    const estadisticas = [
        {
            numero: "04",
            titulo: "Áreas de formación",
            icono: <FaLayerGroup />
        },
        {
            numero: "04",
            titulo: "Centros registrados",
            icono: <FaBuilding />
        },
        {
            numero: "04",
            titulo: "Cursos activos",
            icono: <FaBook />
        },
        {
            numero: "04",
            titulo: "Ofertas publicadas",
            icono: <FaGraduationCap />
        }
    ];


    // accesos que permiten entrar directamente a cada modulo del sistema
    const accesos = [
        {
            titulo: "Áreas",
            descripcion: "Organiza las áreas de formación.",
            icono: <FaLayerGroup />,
            ruta: "/area/list"
        },
        {
            titulo: "Centros de formación",
            descripcion: "Consulta los centros registrados.",
            icono: <FaBuilding />,
            ruta: "/trainingcenter/list"
        },
        {
            titulo: "Cursos",
            descripcion: "Administra las fichas disponibles.",
            icono: <FaBook />,
            ruta: "/course/list"
        },
        {
            titulo: "Aprendices",
            descripcion: "Gestiona los aprendices.",
            icono: <FaUserGraduate />,
            ruta: "/apprentice/list"
        },
        {
            titulo: "Instructores",
            descripcion: "Consulta y administra instructores.",
            icono: <FaUserTie />,
            ruta: "/teacher/list"
        },
        {
            titulo: "Equipos",
            descripcion: "Controla los equipos registrados.",
            icono: <FaLaptop />,
            ruta: "/equipo/list"
        }
    ];


    // informacion de ejemplo que se muestra en las tarjetas de ofertas
    const ofertas = [
        {
            id: 1,
            nombre: "Análisis y Desarrollo de Software",
            descripcion:
                "Formación orientada al desarrollo de aplicaciones y soluciones tecnológicas.",
            modalidad: "Presencial",
            fechaInicio: "15/01/2026",
            fechaFin: "15/01/2027",
            cupos: 30,
            area: "Tecnología",
            centro: "Centro de Gestión Administrativa",
            imagen: oferta1
        },
        {
            id: 2,
            nombre: "Gestión Administrativa",
            descripcion:
                "Programa enfocado en procesos administrativos y empresariales.",
            modalidad: "Virtual",
            fechaInicio: "20/01/2026",
            fechaFin: "20/01/2027",
            cupos: 25,
            area: "Administración",
            centro: "Centro de Servicios Financieros",
            imagen: oferta2
        },
        {
            id: 3,
            nombre: "Contabilidad y Finanzas",
            descripcion:
                "Formación relacionada con procesos contables y financieros.",
            modalidad: "Presencial",
            fechaInicio: "01/02/2026",
            fechaFin: "01/02/2027",
            cupos: 35,
            area: "Contabilidad",
            centro: "Centro de Servicios Financieros",
            imagen: oferta3
        },
        {
            id: 4,
            nombre: "Servicios de Salud",
            descripcion:
                "Programa de formación orientado al área de servicios de salud.",
            modalidad: "Presencial",
            fechaInicio: "10/02/2026",
            fechaFin: "10/02/2027",
            cupos: 28,
            area: "Salud",
            centro: "Centro de Tecnología de la Manufactura Avanzada",
            imagen: oferta4
        }
    ];


    // lista de areas que aparecen en el filtro de ofertas
    const areas = [
        "Todas las áreas",
        "Tecnología",
        "Administración",
        "Contabilidad",
        "Salud"
    ];


    // lista de centros que aparecen en el filtro de ofertas
    const centros = [
        "Todos los centros",
        "Centro de Gestión Administrativa",
        "Centro de Electricidad, Electrónica y Telecomunicaciones",
        "Centro de Servicios Financieros",
        "Centro de Tecnología de la Manufactura Avanzada"
    ];


    return (
        <main className="home-container">

            {/* hero principal de la pagina */}
            <section className="home-hero">

                <div className="home-hero-content">

                    <span className="home-hero-label">
                        PANEL DE ADMINISTRACIÓN
                    </span>

                    <h1>
                        Administra el sistema
                        <br />
                        <strong>Admin SENA</strong>
                    </h1>

                    <p>
                        Un espacio centralizado para consultar,
                        organizar y administrar la información
                        académica del sistema.
                    </p>

                    {/* boton que lleva al listado de ofertas */}
                    <Link
                        to="/offer/list"
                        className="home-hero-button"
                    >
                        Explorar ofertas
                        <FaArrowRight />
                    </Link>

                </div>


                {/* tarjeta decorativa que acompaña el hero */}
                <div className="home-hero-decoration">

                    <div className="home-hero-circle circle-one"></div>
                    <div className="home-hero-circle circle-two"></div>

                    <div className="home-hero-card">

                        <div className="home-hero-card-top">
                            <span>ADMIN SENA</span>
                            <FaChartLine />
                        </div>

                        <div className="home-hero-card-number">
                            24
                        </div>

                        <p>
                            Registros de ejemplo
                        </p>

                        <div className="home-hero-line">
                            <span></span>
                        </div>

                    </div>

                </div>

            </section>


            {/* estadisticas generales del sistema */}
            <section className="home-statistics">

                {estadisticas.map((item) => (

                    <div
                        key={item.titulo}
                        className="home-stat"
                    >

                        <div className="home-stat-icon">
                            {item.icono}
                        </div>

                        <div>
                            <strong>{item.numero}</strong>

                            <span>{item.titulo}</span>
                        </div>

                    </div>

                ))}

            </section>


            {/* accesos principales a los diferentes modulos */}
            <section className="home-section">

                <div className="home-section-heading">

                    <div>
                        <span>ADMINISTRACIÓN</span>

                        <h2>
                            Accesos principales
                        </h2>

                        <p>
                            Las herramientas que utilizas para
                            administrar la información del sistema.
                        </p>
                    </div>

                </div>


                <div className="home-access-grid">

                    {/* se recorren los accesos para crear una tarjeta por cada modulo */}
                    {accesos.map((item, index) => (

                        <Link
                            key={item.titulo}
                            to={item.ruta}
                            className={
                                index === 0
                                    ? "home-access-card featured"
                                    : "home-access-card"
                            }
                        >

                            {/* numero que identifica cada acceso */}
                            <div className="home-access-number">
                                0{index + 1}
                            </div>

                            {/* icono del modulo */}
                            <div className="home-access-icon">
                                {item.icono}
                            </div>

                            <div className="home-access-content">

                                <h3>
                                    {item.titulo}
                                </h3>

                                <p>
                                    {item.descripcion}
                                </p>

                            </div>

                            {/* flecha que indica que se puede entrar al modulo */}
                            <div className="home-access-arrow">
                                <FaArrowRight />
                            </div>

                        </Link>

                    ))}

                </div>

            </section>


            {/* ofertas academicas disponibles */}
            <section className="home-offers-section">

                <div className="home-offers-heading">

                    <div>

                        <span>
                            CATÁLOGO ACADÉMICO
                        </span>

                        <h2>
                            Ofertas disponibles
                        </h2>

                        <p>
                            Consulta las ofertas académicas
                            registradas en el sistema.
                        </p>

                    </div>

                    {/* enlace para ver todas las ofertas */}
                    <Link
                        to="/offer/list"
                        className="home-see-all"
                    >
                        Ver catálogo completo
                        <FaArrowRight />
                    </Link>

                </div>


                {/* filtros para buscar ofertas por area o centro */}
                <div className="home-filters">

                    <div className="home-filter">

                        <label>
                            Área de formación
                        </label>

                        <div className="home-select-wrapper">

                            <FaLayerGroup />

                            <select defaultValue="">
                                <option value="" disabled>
                                    Seleccionar área
                                </option>

                                {/* se muestran las areas dentro del select */}
                                {areas.map((area) => (
                                    <option
                                        key={area}
                                        value={area}
                                    >
                                        {area}
                                    </option>
                                ))}

                            </select>

                            <FaChevronDown />

                        </div>

                    </div>


                    <div className="home-filter">

                        <label>
                            Centro de formación
                        </label>

                        <div className="home-select-wrapper">

                            <FaBuilding />

                            <select defaultValue="">
                                <option value="" disabled>
                                    Seleccionar centro
                                </option>

                                {/* se muestran los centros dentro del select */}
                                {centros.map((centro) => (
                                    <option
                                        key={centro}
                                        value={centro}
                                    >
                                        {centro}
                                    </option>
                                ))}

                            </select>

                            <FaChevronDown />

                        </div>

                    </div>

                </div>


                {/* tarjetas con la informacion de cada oferta */}
                <div className="home-offers-grid">

                    {/* se recorren las ofertas para mostrar cada una en una tarjeta */}
                    {ofertas.map((oferta) => (

                        <article
                            key={oferta.id}
                            className="home-offer-card"
                        >

                            {/* imagen y modalidad de la oferta */}
                            <div className="home-offer-image">

                                <img
                                    src={oferta.imagen}
                                    alt={oferta.nombre}
                                />

                                <span className="home-offer-modality">
                                    {oferta.modalidad}
                                </span>

                            </div>


                            {/* informacion principal de la oferta */}
                            <div className="home-offer-body">

                                <span className="home-offer-area">
                                    {oferta.area}
                                </span>

                                <h3>
                                    {oferta.nombre}
                                </h3>

                                <p className="home-offer-description">
                                    {oferta.descripcion}
                                </p>


                                {/* fecha de inicio y cantidad de cupos */}
                                <div className="home-offer-info">

                                    <div>
                                        <FaCalendarAlt />

                                        <span>
                                            <small>Inicio</small>
                                            {oferta.fechaInicio}
                                        </span>
                                    </div>


                                    <div>
                                        <FaUsers />

                                        <span>
                                            <small>Cupos</small>
                                            {oferta.cupos}
                                        </span>
                                    </div>

                                </div>


                                {/* centro donde se realiza la formacion */}
                                <div className="home-offer-center">

                                    <FaMapMarkerAlt />

                                    <span>
                                        {oferta.centro}
                                    </span>

                                </div>


                                {/* boton para consultar los detalles de la oferta */}
                                <Link
                                    to={`/offer/show/${oferta.id}`}
                                    className="home-offer-button"
                                >
                                    Ver oferta
                                    <FaArrowRight />
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* informacion general sobre admin sena */}
            <section className="home-about">

                <div className="home-about-main">

                    <span className="home-about-label">
                        SOBRE ADMIN SENA
                    </span>

                    <h2>
                        Toda la información
                        <br />
                        en un solo lugar.
                    </h2>

                    <p>
                        Admin SENA es una plataforma creada para
                        facilitar la administración de la información
                        relacionada con la formación del SENA.
                    </p>

                    <p>
                        El sistema permite organizar y consultar
                        áreas, centros de formación, cursos,
                        instructores, aprendices, equipos y ofertas
                        académicas.
                    </p>

                </div>


                {/* beneficios principales del sistema */}
                <div className="home-about-side">

                    <div className="home-about-side-item">

                        <span>01</span>

                        <div>
                            <strong>
                                Información organizada
                            </strong>

                            <p>
                                Todos los registros centralizados.
                            </p>
                        </div>

                    </div>


                    <div className="home-about-side-item">

                        <span>02</span>

                        <div>
                            <strong>
                                Gestión académica
                            </strong>

                            <p>
                                Control de cursos y formación.
                            </p>
                        </div>

                    </div>


                    <div className="home-about-side-item">

                        <span>03</span>

                        <div>
                            <strong>
                                Administración sencilla
                            </strong>

                            <p>
                                Acceso rápido a cada módulo.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* pie de pagina */}
            <footer className="home-footer">

                <div>
                    <strong>
                        Admin SENA
                    </strong>

                    <span>
                        Plataforma administrativa
                    </span>
                </div>

                <p>
                    Gestión de información académica
                </p>

            </footer>


        </main>
    );
}


export default Home;