import { GetAllPostsType } from "@services/services_types/GetAllPosts.types";
import { MockPosts } from "./data/MockPosts";

export const MockGetAllPosts: GetAllPostsType = async() => {
    await new Promise ((resolve) => setTimeout(resolve, 2000))
    //throw new Error("there is a problem with the server");
    return MockPosts;
}