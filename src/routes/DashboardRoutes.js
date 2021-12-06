import { Route, Routes } from "react-router"
import DashboardScreen from "../components/DashboardScreen"
import NavBar from "../components/ui/NavBar"

const DashboardRoutes = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="" element={<DashboardScreen/>}/>
            </Routes>
        </>
    )
}

export default DashboardRoutes
