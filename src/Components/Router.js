import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Envelope from "../Routes/Envelope";
import TextRotator from "../Routes/TextRotator";


const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Envelope />} />
                <Route exact path="/TextRotator" element={<TextRotator />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;