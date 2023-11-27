import { Navigate } from "react-router-dom";
import useLocalStorage from "../utils/useLocalstorage";

const ProtectedRoute = ({children}) => {
    const user = useLocalStorage("user")

    if(user){
        return <>{children}</>
    }

    return <Navigate to="/sign-in"/>
}
 
export default ProtectedRoute;