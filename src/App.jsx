import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Components/Header/Header"
function App() {
    return (
        <>

            {/* Header separado */}
            <Header />
            <Routes>
            </Routes>

        </>
    );
}

export default App;