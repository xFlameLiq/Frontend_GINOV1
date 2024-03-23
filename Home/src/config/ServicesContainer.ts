import { MockCreateNewPost } from "@services/mock_services/MockCreateNewPost.service";
import { MockGetAllPosts } from "@services/mock_services/MockGetAllPosts.service";
import { MockUpdatePostById } from "@services/mock_services/MockUpdatePostById.service";

import { JPHGetAllPosts } from "@services/api_services/JPHGetAllPosts.service";
import { JPHCreateNewPost } from "@services/api_services/JPHCreateNewPost.service";
import { JPHUpdatePostById } from "@services/api_services/JPHUpdatePostById.service";

const ENVIRONMENT: string = import.meta.env.VITE_ENVIRONMENT; //DEV

let GetAllPostImpl = MockGetAllPosts;
let CreateNewPostImpl = MockCreateNewPost;
let UpdatePostByIdImpl = MockUpdatePostById;


if (ENVIRONMENT === "PROD"){ //PROD
    console.log(ENVIRONMENT);
    GetAllPostImpl = JPHGetAllPosts;
    CreateNewPostImpl = JPHCreateNewPost;
    UpdatePostByIdImpl = JPHUpdatePostById;
}

export {
    GetAllPostImpl,
    CreateNewPostImpl,
    UpdatePostByIdImpl,
}