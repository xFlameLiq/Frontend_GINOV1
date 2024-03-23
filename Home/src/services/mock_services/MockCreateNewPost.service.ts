import { CreateNewPostType } from "@services/services_types/CreateNewPost.types";

export const MockCreateNewPost: CreateNewPostType = async({request: {id, userId, title, body}}) => {
    if(!id) throw new Error ("Missing id");
    if(!userId) throw new Error("Missing userId");
    if(!title) throw new Error ("Title required!");
    if(!body) throw new Error ("Body missing!");
    if (id===4) throw new Error("Error de prueba");
    if(userId===1) throw new Error("PUBLICACION CREADA!")
};