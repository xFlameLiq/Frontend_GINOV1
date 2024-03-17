import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { getAllPostContainer, mockCardData } from "./GetAllPost.style";
import { GetAllPostsType } from "@services/services_types/GetAllPosts.types";
import { useQuery } from "@tanstack/react-query";

type Props = {
  GetAllPostsServices: GetAllPostsType;
};

const GetAllPost = ({ GetAllPostsServices }: Props) => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["GetAllPostsServices"],
    queryFn: () => GetAllPostsServices(),
  });

  if (isLoading) {
    return (
      <Box component="div" sx={getAllPostContainer}>
        <Box component="div">
          <Typography
            variant="h4"
            component="h2"
            color="initial"
            textAlign="center"
          >
            GetAllPosts
          </Typography>
        </Box>
        <Box component="div">
          <Typography variant="body1" color="initial" textAlign="center">
            Cargando datos....
          </Typography>
        </Box>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box component="div" sx={getAllPostContainer}>
        <Box component="div">
          <Typography
            variant="h4"
            component="h2"
            color="initial"
            textAlign="center"
          >
            GetAllPosts
          </Typography>
        </Box>
        <Box component="div">
          <Typography variant="body1" color="initial" textAlign="center">
            UPS!!! Ha habido un error al obtener los datos...
          </Typography>
          <Typography variant="body1" color="initial" textAlign="center">
            {error.message}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Box component="div" sx={getAllPostContainer}>
        <Box component="div">
          <Typography
            variant="h4"
            component="h2"
            color="initial"
            textAlign="center"
          >
            GetAllPosts
          </Typography>
        </Box>

        <Box component="div">
          <Typography variant="body1" color="initial"></Typography>
          <Box component="div" sx={mockCardData}>
            {posts?.map((post, index) => {
              return (
                <Card key={index}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      USER ID: {post.userId}
                    </Typography>
                    <Typography variant="h5" component="div">
                      POST ID: {post.id}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Title: {post.title}
                    </Typography>
                    <Typography variant="body2">
                      Content: {post.body}
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GetAllPost;
