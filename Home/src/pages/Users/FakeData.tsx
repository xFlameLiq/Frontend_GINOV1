import { Box, Container } from "@mui/system";
import NavBar from "@components/NavBar";
import Typography from "@mui/material/Typography";

import Users from "@pages/Users/Users";
import TextField from "@mui/material/TextField";
import {
  btnSearch,
  errorId,
  searchContainer,
  searchDiv,
  searchUser,
} from "@pages/Users/UserCard.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useState } from "react";

type FormInputs = {
  search?: string;
};

const FakeData = () => {

  const [idUser, setIdUser] = useState<string | undefined>("");

  const schema = yup.object().shape({
    search: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });


  const search = watch('search');
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setIdUser(search);
    reset();

  });

  return (
    <>
      <NavBar />
      <Box component="div">
        <Typography
          variant="h3"
          component="h2"
          color="initial"
          textAlign="center"
          sx={{
            mb: "3rem",
            border: 1,
          }}
        >
          FakeData
        </Typography>
      </Box>
      <Container maxWidth="xl" sx={searchContainer}>
        <Box component="form" onSubmit={onSubmit}>
          <Box component="div" sx={errorId}>
            {errors.search && (
              <Typography variant="caption" display="block" color="#d32f2f">
                {errors.search.message}
              </Typography>
            )}
          </Box>
          <Box component="div" sx={searchDiv}>
            <TextField
              id="search"
              type="text"
              label="Buscar empleado por id..."
              size="small"
              sx={searchUser}
              {...register("search")}
            />
            <Button variant="outlined" type="submit" sx={btnSearch}>
              BUSCAR
            </Button>
          </Box>
        </Box>
      </Container>
      <Users idUser={idUser} />
    </>
  );
};

export default FakeData;
