import React from "react";
//importo routes y route para la navegación de mi proyecto
import {Routes,Route} from "react-router-dom";
//importo los componentes globales como header y footer 
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";

//importo las pages de home y el auth que se compone por login y register
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";

//importo las pages de Area que son index, create, edit y show 
import AreaIndex from "./Pages/Area/AreaIndex";
import AreaCreate from "./Pages/Area/AreaCreate";
import AreaEdit from "./Pages/Area/AreaEdit";
import AreaShow from "./Pages/Area/AreaShow";

//importo las pages de Trainingcenter que son index, create, edit y show 
import TrainingCenterIndex from "./Pages/TrainingCenter/TrainingCenterIndex";
import TrainingCenterCreate from "./Pages/TrainingCenter/TrainingCenterCreate";
import TrainingCenterEdit from "./Pages/TrainingCenter/TrainingCenterEdit";
import TrainingCenterShow from "./Pages/TrainingCenter/TrainingCenterShow";

//importo las pages de equipo que son index, create, edit y show 
import EquipoIndex from "./Pages/Equipo/EquipoIndex";
import EquipoCreate from "./Pages/Equipo/EquipoCreate";
import EquipoEdit from "./Pages/Equipo/EquipoEdit";
import EquipoShow from "./Pages/Equipo/EquipoShow";

//importo las pages de teacher que son index, create, edit y show 
import TeacherIndex from "./Pages/Teacher/TeacherIndex"
import TeacherCreate from "./Pages/Teacher/TeacherCreate";
import TeacherEdit from "./Pages/Teacher/TeacherEdit";
import TeacherShow from "./Pages/Teacher/TeacherShow";

//importo las pages de course que son index, create, edit y show 
import CourseIndex from "./Pages/Course/CourseIndex";
import CourseCreate from "./Pages/Course/CourseCreate";
import CourseEdit from "./Pages/Course/CourseEdit";
import CourseShow from "./Pages/Course/CourseShow";

//importo las pages de apprentice que son index, create, edit y show 
import ApprenticeIndex from "./Pages/Apprentice/ApprenticeIndex";
import ApprenticeCreate from "./Pages/Apprentice/ApprenticeCreate";
import ApprenticeEdit from "./Pages/Apprentice/ApprenticeEdit";
import ApprenticeShow from "./Pages/Apprentice/ApprenticeShow";

//importo las pages de offer que son index, create, edit y show 
import OfferIndex from "./Pages/Offer/OfferIndex";
import OfferCreate from "./Pages/Offer/OfferCreate";
import OfferEdit from "./Pages/Offer/OfferEdit";
import OfferShow from "./Pages/Offer/OfferShow";

function App() {
    return (
        <>

            {/* importo el header que tambien contiene el navbar, al estar fuera de Routes, aparecerá en todas
                las páginas */}
            <Header />
            {/* Aquí colocamos todas las rutas de nuestra aplicación*/}
            <Routes>
                {/*esta ruta es la pagina principal */}
                <Route path="/" element={<Home />} />

                {/*estas rutas son las de autenticación */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/*Cada Route relaciona una dirección URL con una page de area*/}
                <Route path='/area/list' element={<AreaIndex />} />
                <Route path='/area/create' element={<AreaCreate />} />
                <Route path="/area/edit/:id" element={<AreaEdit />} />
                <Route path="/area/show/:id" element={<AreaShow />} />

                {/*Cada Route relaciona una dirección URL con una page de trainingcenter*/}
                <Route path="/trainingCenter/list" element={<TrainingCenterIndex />} />
                <Route path="/trainingCenter/create" element={<TrainingCenterCreate />} />
                <Route path="/trainingCenter/edit/:id" element={<TrainingCenterEdit />} />
                <Route path="/trainingCenter/show/:id" element={<TrainingCenterShow />} />

                {/*Cada Route relaciona una dirección URL con una page de equipo*/}
                <Route path="/equipo/list" element={<EquipoIndex />} />
                <Route path="/equipo/create" element={<EquipoCreate />} />
                <Route path="/equipo/edit/:id" element={<EquipoEdit />} />
                <Route path="/equipo/show/:id" element={<EquipoShow />} />

                {/*Cada Route relaciona una dirección URL con una page de teacher*/}
                <Route path="/teacher/list" element={<TeacherIndex />} />
                <Route path="/teacher/create" element={<TeacherCreate />} />
                <Route path="/teacher/edit/:id" element={<TeacherEdit />} />
                <Route path="/teacher/show/:id" element={<TeacherShow />} />
                
                {/*Cada Route relaciona una dirección URL con una page de course*/}
                <Route path="/course/list" element={<CourseIndex />} />
                <Route path="/course/create" element={<CourseCreate />} />
                <Route path="/course/edit/:id" element={<CourseEdit />} />
                <Route path="/course/show/:id" element={<CourseShow />} />

                {/*Cada Route relaciona una dirección URL con una page de apprentice*/}
                <Route path="/apprentice/list" element={<ApprenticeIndex />} />
                <Route path="/apprentice/create" element={<ApprenticeCreate />} />
                <Route path="/apprentice/edit/:id" element={<ApprenticeEdit />} />
                <Route path="/apprentice/show/:id" element={<ApprenticeShow />} />

                {/*Cada Route relaciona una dirección URL con una page de offer*/}
                <Route path="/offer/list" element={<OfferIndex />} />
                <Route path="/offer/create" element={<OfferCreate />} />
                <Route path="/offer/edit/:id" element={<OfferEdit />} />
                <Route path="/offer/show/:id" element={<OfferShow />} />
            </Routes>

            {/*Footer Es el pie de página de nuestra aplicación*/}
            <Footer/>

        </>
    );
}

//exporto por defecto app
export default App;