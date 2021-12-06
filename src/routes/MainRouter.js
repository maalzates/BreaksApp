import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginRegisterScreen from "../components/auth/LoginRegisterScreen";
import DashboardRoutes from './DashboardRoutes';
/*
We're using V6 of React Router Dom.
component={} no longer exist.
Instead use element{<ComponentName/>} Sintax
*/

/* 
Basic elements needed for creating routes.
BroserRouter>Routes>Route
*/

const MainRouter = () => {
    return (


    <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<LoginRegisterScreen />} />
            <Route path="/*" element={<DashboardRoutes/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default MainRouter
