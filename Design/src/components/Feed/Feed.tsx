import { Box } from "@mui/material"
import Post from "../Post/Post"
import { feed_post_container } from "./Feed.styles"


const Feed = () => {
  return (
    <Box
    sx={feed_post_container} 
    >
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>  
  
    </Box>
  )
}

export default Feed