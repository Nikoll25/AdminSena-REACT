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
import TeacherIndex from "./Pages/Teacher/TeacherIndex"
import TeacherCreate from "./Pages/Teacher/TeacherCreate";
import TeacherEdit from "./Pages/Teacher/TeacherEdit";
import TeacherShow from "./Pages/Teacher/TeacherShow";
import CourseIndex from "./Pages/Course/CourseIndex";
import CourseCreate from "./Pages/Course/CourseCreate";
import CourseEdit from "./Pages/Course/CourseEdit";
import CourseShow from "./Pages/Course/CourseShow";
import ApprenticeIndex from "./Pages/Apprentice/ApprenticeIndex";
import ApprenticeCreate from "./Pages/Apprentice/ApprenticeCreate";
import ApprenticeEdit from "./Pages/Apprentice/ApprenticeEdit";
import ApprenticeShow from "./Pages/Apprentice/ApprenticeShow";
import OfferIndex from "./Pages/Offer/OfferIndex";
import OfferCreate from "./Pages/Offer/OfferCreate";
import OfferEdit from "./Pages/Offer/OfferEdit";
import OfferShow from "./Pages/Offer/OfferShow";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
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

                <Route path="/teacher/list" element={<TeacherIndex />} />
                <Route path="/teacher/create" element={<TeacherCreate />} />
                <Route path="/teacher/edit/:id" element={<TeacherEdit />} />
                <Route path="/teacher/show/:id" element={<TeacherShow />} />

                <Route path="/course/list" element={<CourseIndex />} />
                <Route path="/course/create" element={<CourseCreate />} />
                <Route path="/course/edit/:id" element={<CourseEdit />} />
                <Route path="/course/show/:id" element={<CourseShow />} />

                <Route path="/apprentice/list" element={<ApprenticeIndex />} />
                <Route path="/apprentice/create" element={<ApprenticeCreate />} />
                <Route path="/apprentice/edit/:id" element={<ApprenticeEdit />} />
                <Route path="/apprentice/show/:id" element={<ApprenticeShow />} />

                <Route path="/offer/list" element={<OfferIndex />} />
                <Route path="/offer/create" element={<OfferCreate />} />
                <Route path="/offer/edit/:id" element={<OfferEdit />} />
                <Route path="/offer/show/:id" element={<OfferShow />} />

                <Route path="/inicio" element={<Home />} />

            </Routes>
            <Footer/>

        </>
    );
}

export default App;