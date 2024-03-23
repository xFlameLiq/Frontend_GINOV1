import { UpdatePostByIdType } from "@services/services_types/UpdatePostById.types";
import axios, { AxiosError } from "axios"

export const JPHUpdatePostById: UpdatePostByIdType = async ({id, request: {title, body}}) => {

    try { 
        const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        data: {
          title: title,
          body: body,
        }
    });
    console.log(response.status);
    return response.status;
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
