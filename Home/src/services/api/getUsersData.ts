import axios from "axios";

export const getUsers = async () => {

  
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await axios({
    url: url,
    method: "GET",
  });

  const { data } = response;
  console.log(data);
  //throw new Error("error con la base de datos ")
  return data;
};

export const getUserById = async (id = "") => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await axios({
    url: url,
    method: "GET",
  });
  const { data } = response;

  console.log(data);
  //throw new Error("error con la base de datos ")
  return data;
};

export const getPicture = async () => {
  const url = "https://api.thecatapi.com/v1/images/search?limit=10";
  const response = await axios({
    url: url,
    method: "GET",
  });
  console.log(response);
  const { data } = response;
  return data;
};
