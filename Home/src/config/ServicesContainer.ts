import { MockCreateNewPost } from "@services/mock_services/MockCreateNewPost.service";
import { MockGetAllPosts } from "@services/mock_services/MockGetAllPosts.service";
import { MockUpdatePostById } from "@services/mock_services/MockUpdatePostById.service";

const ENVIRONMENT: string = "DEV"

let GetAllPostImpl = MockGetAllPosts;
let CreateNewPostImpl = MockCreateNewPost;
let UpdatePostByIdImpl = MockUpdatePostById;

if (ENVIRONMENT === "PROD"){
    
}

export {
    GetAllPostImpl,
    CreateNewPostImpl,
    UpdatePostByIdImpl,
}