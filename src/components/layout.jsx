import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar"
import Nav from "./nav"
import { useNavigate, redirect } from "react-router-dom";
import { useLayoutEffect, useEffect } from "react";
import useLocalStorage from "../utils/useLocalstorage";
import ProtectedRoute from "./protected";


const Layout = () => {
    const location = useLocation()
    const navigate = useNavigate()

    // useLayoutEffect(() => {
    //     if(!useLocalStorage("user") && checkIfProtectedRoute(location.pathname)){
    //         navigate("/sign-in")
    //     }
    // }, [location])

    return ( <>
    {checkIfProtectedRoute(location.pathname) ? <ProtectedRoute>
        <div className='min-h-screen w-full flex bg-body'>
            <Sidebar />
            <div className="w-full ml-[260px] min-h-screen">
                <Nav />
                <Outlet />
            </div>
        </div>
    </ProtectedRoute> : <Outlet />}
    </> );
}

const checkIfProtectedRoute = (path) => {
    if(path == "/sign-up" || path == "/sign-in"){
        return false
    }
    return true
}
 
export default Layout;