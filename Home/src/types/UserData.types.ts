export type UserData  = {
    id: number,
    email: string,
    password: string,
    name: string,
    surname: string,
    age: number, 
    telephone: string,
    address: string,
    isSession: boolean,
}


export type UserStateType = {
    admin_user: number;
    access_token: boolean;
    full_name: string;
  };