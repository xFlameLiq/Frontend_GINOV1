import axios, { AxiosError } from "axios";
import { GetAllPostsType } from "@services/services_types/GetAllPosts.types";

export const JPHGetAllPosts: GetAllPostsType = async () => {
  try {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/posts/",
      {
        method: "GET",
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError?.response?.status === 404) {
          throw new Error("Error al obtener los posts");
        }
        throw new Error("Error inesperado, intente más tarde");
      }
      throw new Error("Error inesperado, intente más tarde");
    }
};
