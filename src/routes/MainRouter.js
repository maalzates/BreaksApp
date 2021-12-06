
import { BrowserRouter } from "react-router-dom";
import DashboardScreen from "../components/DashboardScreen";

import React from 'react'

const MainRouter = () => {
    return (
        <BrowserRouter>
        <DashboardScreen />
      </BrowserRouter>
    )
}

export default MainRouter
