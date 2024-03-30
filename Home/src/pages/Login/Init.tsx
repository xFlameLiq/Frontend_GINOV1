
import { useAuth } from "@hooks/useAuth";
import ProtectedRoutes from "@pages/ProtectedRoutes";

const Init = () => {

  const {data: userLogged, isAuth} = useAuth();

  if (isAuth) {
    return null;
  }

  if (userLogged === undefined) {
    return <ProtectedRoutes noAuth={userLogged}/>;
  }


  return (
    <>

      {userLogged?.full_name && <p>{userLogged?.full_name}</p>}
      {userLogged?.access_token === true ? (
        <p>Sesion iniciada</p>
      ) : (
        <p>Sesion fallida</p>
      )}
    </>
  );
};

export default Init;
