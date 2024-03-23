import { CreateNewPostType } from "@services/services_types/CreateNewPost.types";
import axios, { AxiosError } from "axios";

export const JPHCreateNewPost: CreateNewPostType = async ({
  request: { id, userId, title, body },
}) => {
  try {
    const response = await axios("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      data: {
        id: id,
        userId: userId,
        title: title,
        body: body,
      }
    });
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
