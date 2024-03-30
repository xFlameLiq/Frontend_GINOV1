import { UserData } from "@customTypes/UserData.types";
import {UserDataRequest } from "@services/services_types/Login.types";

export const Users: UserData[] = [
  {
    id: 1,
    email: "John@Google.com",
    password: "12345",
    name: "John",
    surname: "Toe Toe",
    age: 34,
    telephone: "1234567890",
    address: "Germany",
    isSession: false,
  },
  {
    id: 2,
    email: "Juan@flex.mx",
    password: "maria333",
    name: "Juan",
    surname: "Perez Smith",
    age: 15,
    telephone: "33990118822",
    address: "Mexico",
    isSession: false,
  },
  {
    id: 3,
    email: "John@Google.com",
    password: "helloworld",
    name: "Will",
    surname: "Mercedez Benz",
    age: 28,
    telephone: "9110234119",
    address: "EUA",
    isSession: false,
  },
];

export const findUser = ({email, password}: UserDataRequest) => {
  email = email.toLowerCase();
  return Users.find((user) => user.email.toLowerCase() === email && user.password === password)
}