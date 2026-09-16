import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    FaEdit,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

import "./AreaEdit.css";

function AreaEdit() {

    const navigate = useNavigate();
    const { id } = useParams();

    // Datos de ejemplo
    const areas = [
    {
        id: 1,
        name: "Tecnología"
    },
    {
        id: 2,
        name: "Administración"
    },
    {
        id: 3,
        name: "Contabilidad"
    },
    {
        id: 4,
        name: "Salud"
    }
];

const area = areas.find(
    (area) => area.id === Number(id)
);


    return (
        <div className="area-edit-container">

            <div className="area-edit-card">

                {/* ENCABEZADO */}
                <div className="area-edit-header">

                    <div className="area-edit-icon">
                        <FaEdit />
                    </div>

                    <div>
                        <h1>Actualizar Área</h1>

                        <p>
                            Modifica la información del área seleccionada
                        </p>
                    </div>

                </div>


                {/* FORMULARIO */}
                <div className="area-edit-body">

                    <div className="area-edit-title">

                        <h2>Información del área</h2>

                        <p>
                            Actualiza el nombre del área de formación.
                        </p>

                    </div>


                    <form>

                        {/* NOMBRE DEL ÁREA */}
                        <div className="area-edit-group">

                            <label htmlFor="name">
                                Nombre del Área
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                defaultValue={area.name}
                                placeholder="Ingrese el nombre del área"
                            />

                            <small>
                                Modifica el nombre del área seleccionada.
                            </small>

                        </div>


                        {/* BOTONES */}
                        <div className="area-edit-buttons">

                            <button
                                type="button"
                                className="area-edit-cancel"
                                onClick={() => navigate("/area/list")}
                            >
                                <FaArrowLeft />
                                Cancelar
                            </button>


                            <button
                                type="button"
                                className="area-edit-save"
                            >
                                <FaCheckCircle />
                                Actualizar
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AreaEdit;