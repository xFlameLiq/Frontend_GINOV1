import CreateNewPost from "@pages/Frontend/CreateNewPost"
import GetAllPost from "@pages/Frontend/GetAllPost"
import UpdatePost from "@pages/Frontend/UpdatePost"
import NavBar from "@components/NavBar"
import { Box, Container, Typography } from "@mui/material"
import { titleFrontend } from "../../styles/frontend.style"
import { GetAllPostsType } from "@services/services_types/GetAllPosts.types"
import { CreateNewPostType } from "@services/services_types/CreateNewPost.types"
import { UpdatePostByIdType } from "@services/services_types/UpdatePostById.types"


type Props = {
  GetAllPostsServices: GetAllPostsType;
  CreateNewPostType: CreateNewPostType;
  UpdatePostTypeById: UpdatePostByIdType;
}


const Frontend = ({GetAllPostsServices, CreateNewPostType, UpdatePostTypeById}: Props) => {



  return (
    <>
    <NavBar/>
    <Box component="div" sx={titleFrontend}>
       
        <Typography variant="h2" color="initial">Frontend</Typography>
    </Box>

    <Container maxWidth="lg" sx={{border: 1}}>
      <CreateNewPost CreateNewPostType={CreateNewPostType}></CreateNewPost>
      <UpdatePost UpdatePostTypeById={UpdatePostTypeById}></UpdatePost>
      <GetAllPost GetAllPostsServices={GetAllPostsServices}></GetAllPost>
    </Container>

    </>
  )
}

export default Frontend