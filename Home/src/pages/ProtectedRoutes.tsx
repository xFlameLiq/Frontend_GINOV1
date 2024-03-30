
import { Navigate, Outlet } from "react-router-dom";

  
type Props = {
    noAuth: undefined;
    redirectPath?: string;
}

const ProtectedRoutes = ({noAuth, redirectPath='/not-authorized'}: Props) => {

    if(!noAuth) {
        console.log(noAuth);
        return <Navigate to={redirectPath} replace/>
    }
};

export default ProtectedRoutes;
