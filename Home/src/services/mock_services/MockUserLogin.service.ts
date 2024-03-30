import { FindUserType } from "@services/services_types/Login.types";
import { findUser } from "./data/MockLogin";

export const MockUserLogin: FindUserType = async ({request: {email, password}}) => {
    //CODIGO EN CASO DE FALLO
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if(!email) throw new Error("Email not received")
    if(!password) throw new Error ("Password not received")
    const userData = findUser({email, password});
    if(!userData) {
        throw new Error("No hay datos en el servidor")
    } 
    userData.isSession = true;
    return userData;

}