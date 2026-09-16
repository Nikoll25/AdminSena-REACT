import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Components/Header/Header"
import AreaIndex from "./Pages/Area/AreaIndex";
import AreaCreate from "./Pages/Area/AreaCreate";
import AreaEdit from "./Pages/Area/AreaEdit";
import AreaShow from "./Pages/Area/AreaShow";
import TrainingCenterIndex from "./Pages/TrainingCenter/TrainingCenterIndex";
import TrainingCenterCreate from "./Pages/TrainingCenter/TrainingCenterCreate";
import TrainingCenterEdit from "./Pages/TrainingCenter/TrainingCenterEdit";
import TrainingCenterShow from "./Pages/TrainingCenter/TrainingCenterShow";
import EquipoIndex from "./Pages/Equipo/EquipoIndex";
import EquipoCreate from "./Pages/Equipo/EquipoCreate";
import EquipoEdit from "./Pages/Equipo/EquipoEdit";
import EquipoShow from "./Pages/Equipo/EquipoShow";
function App() {
    return (
        <>

            {/* Header separado */}
            <Header />
            <Routes>
                <Route path='/area/list' element={<AreaIndex />} />
                <Route path='/area/create' element={<AreaCreate />} />
                <Route path="/area/edit/:id" element={<AreaEdit />} />
                <Route path="/area/show/:id" element={<AreaShow />} />

                <Route path="/trainingCenter/list" element={<TrainingCenterIndex />} />
                <Route path="/trainingCenter/create" element={<TrainingCenterCreate />} />
                <Route path="/trainingCenter/edit/:id" element={<TrainingCenterEdit />} />
                <Route path="/trainingCenter/show/:id" element={<TrainingCenterShow />} />

                <Route path="/equipo/list" element={<EquipoIndex />} />
                <Route path="/equipo/create" element={<EquipoCreate />} />
                <Route path="/equipo/edit/:id" element={<EquipoEdit />} />
                <Route path="/equipo/show/:id" element={<EquipoShow />} />

            </Routes>

        </>
    );
}

export default App;