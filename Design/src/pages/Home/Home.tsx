import Feed from "@components/Feed/Feed";
import Navbar from "@components/Navbar/Navbar";
import Rightbar from "@components/Rightbar/Rightbar";
import Sidebar from "@components/Sidebar/Sidebar";
import { Box } from "@mui/material";
import { main_stack } from "./Home.styles";

import AddPost from "@components/AddPost/AddPost";


const Home = () => {


  



  return (
    <>
      <Box component="div">
        <Navbar/>
        <Box component="div" sx={main_stack}>
        <Sidebar/>
        <Feed />
        <Rightbar />
        </Box>
        <AddPost/>
      </Box>

    </>
  );
};

export default Home;
