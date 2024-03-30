import { MockCreateNewPost } from "@services/mock_services/MockCreateNewPost.service";
import { MockGetAllPosts } from "@services/mock_services/MockGetAllPosts.service";
import { MockUpdatePostById } from "@services/mock_services/MockUpdatePostById.service";
import { MockUserLogin } from "@services/mock_services/MockUserLogin.service";

import { JPHGetAllPosts } from "@services/api_services/JPHGetAllPosts.service";
import { JPHCreateNewPost } from "@services/api_services/JPHCreateNewPost.service";
import { JPHUpdatePostById } from "@services/api_services/JPHUpdatePostById.service";
import { getUser } from "./LocalStorage";


const ENVIRONMENT: string = import.meta.env.VITE_ENVIRONMENT; //DEV

let GetAllPostImpl = MockGetAllPosts;
let CreateNewPostImpl = MockCreateNewPost;
let UpdatePostByIdImpl = MockUpdatePostById;
let UserLoginImpl = MockUserLogin;
let UserLoginDataImpl = getUser();

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
    UserLoginImpl,
    UserLoginDataImpl,
}