import { useContext } from "react";
import LoginContext from "@contexts/UserDataContext";

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error(
      "useUserContext must be applied inside in UserContextProvider."
    );
  }
  const {userState, setUserState, isError, isPending, error, persistLoginFromObject, persist_login} = context;
  return {
    userState,
    setUserState,
    isError,
    isPending,
    error,
    persistLoginFromObject,
    persist_login,
  };
};
