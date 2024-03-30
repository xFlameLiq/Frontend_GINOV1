import { UserStateType } from "@customTypes/UserData.types";

export const getUser = ():UserStateType | undefined | null => {
    const userString = localStorage.getItem('user');
    if(!userString) {
        return undefined
    }
    return JSON.parse(userString as string);
};