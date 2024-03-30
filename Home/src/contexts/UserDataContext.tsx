import { UserLoginImpl } from "@config/ServicesContainer";
import { UserData, UserStateType } from "@customTypes/UserData.types";
import { useMutation } from "@tanstack/react-query";
import { ReactNode, createContext, useState } from "react";
import {getUser} from '@config/LocalStorage';

type UserContextProviderProps = {
  children: ReactNode;
  //AQUI VA LA OTRA INJECCIÓN DE USERLOGINIMPL
};

type UserContextType = {
  userState: UserStateType | undefined | null;
  setUserState: (params: UserStateType | undefined | null) => void;
  isPending: boolean;
  isError: boolean;
  error: unknown;
  persist_login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): void;
  persistLoginFromObject: () => UserStateType | undefined | null;
};

const LoginContext = createContext<UserContextType>({
    userState: undefined,
    setUserState: () => {},
    isPending: false,
    isError: false,
    error: null,
    persist_login: () => {},
    persistLoginFromObject: () =>  {
      return {
        admin_user: 0,
        access_token: false,
        full_name: '',
      }
    },
  });

export const LoginContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [userState, setUserState] = useState<UserStateType | undefined | null>({
    admin_user: 0,
    access_token: false,
    full_name: '',
  })
  
  const {data, mutateAsync, isPending, isError, error } = useMutation({
    mutationFn: UserLoginImpl,
    onSettled: (data) => setUserState(data)
  });

  const persist_login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    await mutateAsync({
        request: {
            email: username,
            password: password,
        }
    })
  };

  const persistLoginFromObject = (): UserStateType | undefined | null => {
    setUserState(getUser());
    const userLogInSession = getUser();
    console.log(userLogInSession);
    return userLogInSession;
  };


  return (
    <LoginContext.Provider
      value={{ userState, setUserState, isPending, isError, error, persist_login, persistLoginFromObject }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
