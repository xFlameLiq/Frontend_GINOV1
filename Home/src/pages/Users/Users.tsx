import { Box, Container, Typography } from "@mui/material";
import UserCard from "./UserCard";
import { useQuery } from "@tanstack/react-query";
import {
  getPicture,
  getUserById,
  getUsers,
} from "../../services/api/getUsersData";
import { divUsers } from "./UserCard.style";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  picture?: string;
};

type Picture = {
  url: string;
};

type PropsUser = {
  idUser?: string;
};

const Users = ({ idUser }: PropsUser) => {


  const usersQuery = useQuery<User[]>({
    queryKey: ["Users"],
    queryFn: () => getUsers(),
  });

  const userQuery = useQuery<User>({
    queryKey: ["User", idUser],
    queryFn: () => getUserById(idUser),
  });

  const pictureQuery = useQuery<Picture[]>({
    queryKey: ["Photo"],
    queryFn: () => getPicture(),
  });

  const { data: user } = userQuery;
  const { data: users } = usersQuery;
  const { data: picture } = pictureQuery;

  const usersWithPictures = users?.map((user) => {
    return {
      ...user,
      picture: "https://cdn2.thecatapi.com/images/5qe.jpg",
    };
  });

  const userWithPicture = (user: User) => {
    return {
      ...user,
      picture: "https://cdn2.thecatapi.com/images/5qe.jpg",
    };
  };

  if (usersQuery.isLoading || userQuery.isLoading) {
    return (
      <>
        <Box component="div" textAlign="center">
          <Box component="div" textAlign="center">
            <Typography
              variant="h4"
              component="h4"
              color="initial"
              sx={{
                mb: "2rem",
              }}
            >
              Usuarios
            </Typography>
          </Box>
          <Typography variant="body1" component="p" color="initial">
            Cargando datos...
          </Typography>
        </Box>
      </>
    );
  }

  if (usersQuery.isError || userQuery.isError) {
    {
      return (
        <>
          <Box component="div" textAlign="center">
            <Box component="div" textAlign="center">
              <Typography
                variant="h4"
                component="h4"
                color="initial"
                sx={{
                  mb: "2rem",
                }}
              >
                Usuarios
              </Typography>
            </Box>
            <Typography variant="body1" component="p" color="initial">
              No se pudo recuperar los datos
            </Typography>
            <Typography variant="body1" component="p" color="initial">
              {usersQuery.error?.message || userQuery.error?.message}
            </Typography>
          </Box>
        </>
      );
    }
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        border: 1,
      }}
    >
      <Box component="div" textAlign="center">
        <Typography
          variant="h4"
          component="h4"
          color="initial"
          sx={{
            mb: "2rem",
          }}
        >
          Usuarios
        </Typography>
      </Box>
      <Box
        component="div"
        textAlign="center"
        sx={divUsers}
      >
        {idUser && user && (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            address={user.address.city}
            picture={userWithPicture(user).picture}
          />
        )}
           {!idUser &&
          usersWithPictures?.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
              address={user.address.city}
              picture={user.picture}
            />
          ))}
      </Box>
    </Container>
  );
};

export default Users;
