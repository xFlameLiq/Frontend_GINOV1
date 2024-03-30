import NavBar from "@components/NavBar";
import { useLoginContext } from "@hooks/UserContext";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { useAuth } from "@hooks/useAuth";

const PokedexApp = () => {
  
  const {data: userLogged, isAuth} = useAuth();

  if (isAuth) {
    return null;
  }

  if (userLogged === undefined) {
    return <ProtectedRoutes noAuth={userLogged}/>;
  }


  return (
    <>
    <NavBar/>
    <div>PokedexApp</div>
    </>
  )
}

export default PokedexApp