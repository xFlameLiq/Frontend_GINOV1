import { UpdatePostByIdType } from "@services/services_types/UpdatePostById.types";

export const MockUpdatePostById: UpdatePostByIdType = async ({
    id,
    request: {body, title},
}) => {
    if (!id) throw new Error ("Missing id");
    if (!body) throw new Error("Missing body");
    if (!title) throw new Error("Missing title");
    if(id===1) throw new Error("POST ACTUALIZADO");
}