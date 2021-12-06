import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardScreen from "../components/DashboardScreen";
import LoginRegisterScreen from "../components/auth/LoginRegisterScreen";

const MainRouter = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<DashboardScreen/>} />
            <Route path="/auth" element={<LoginRegisterScreen />} />
        </Routes>
    </BrowserRouter>
    )
}

export default MainRouter
