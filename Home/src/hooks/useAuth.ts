import { useEffect, useState } from "react";
import { useLoginContext } from "./UserContext";
import { UserStateType } from "@customTypes/UserData.types";

export const useAuth = () => {
    const { persistLoginFromObject } = useLoginContext();
    const [userLogged, setUserLogged] = useState<UserStateType | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const user = persistLoginFromObject();
      setUserLogged(user);
      setIsLoading(false);
    }, []);



    return {
        isAuth: isLoading,
        data: userLogged,
    }
}