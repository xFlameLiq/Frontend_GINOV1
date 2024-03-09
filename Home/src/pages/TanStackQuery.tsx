import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../services/mock_services/data";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TodoCard from "../components/TodoCard";


type FormInputs = {
  title: string,
  filter: string,

}

const TanStackQuery = () => {


  const [search, setSearch] = useState('');
  
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>();

  const queryClient = useQueryClient();



  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos", { search }],
    queryFn: () => fetchTodos(search),
  });

  const { mutateAsync: addTodoMutation,  } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onSubmit = handleSubmit(async ({title}: FormInputs) => {
    try {
      await addTodoMutation({ title });
    } catch (e) {
      console.error(e);
    }
    reset();
  });

  if (isLoading) {
    return (
      <>
      <NavBar />
      <Box component="h1">Is Loading...</Box>
      </>
    )
  }

  return (
    <>
      <NavBar />
      <Container
        maxWidth="sm"
        sx={{
          border: 1,
        }}
      >
        <Box component="div"
        >
          <Typography
            variant="h3"
            component="h1"
            color="initial"
            textAlign="center"
            sx={{
              mb: "2rem",
            }}
          >
            TANSTACK-QUERY
          </Typography>
        </Box>
        <Box component="div"
               sx={{
                display: "flex",
                flexDirection: "column",
              }}
        >
          <TextField
            id="filter"
            label="Realiza una búsqueda"
            fullWidth
            sx={{ mb: "2rem" }}
            {...register("filter")}
          />
          <Button
            variant="contained"
            sx={{
              mb: "2rem",
            }}
            onClick={() => {
              const filter = watch('filter');
              setSearch(filter);
              queryClient.invalidateQueries({ queryKey: ["todos"] });
            }}
          >
            FILTER
          </Button>
        </Box>
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {errors.title && (
            <Typography variant="body1" color="initial">
              {errors.title.message}
            </Typography>
          )}
          <TextField
            id="title"
            label="Coloca un titulo"
            fullWidth
            sx={{ mb: "2rem" }}
            {...register("title", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mb: "2rem",
            }}
          >
            Add Todo
          </Button>
        </Box>
        <Box
          component="div"
          sx={{
            textAlign: "center",
          }}
        >
          {todos?.map((todo) => {
            return <TodoCard key={todo.id} todo={todo} />;
          })}
        </Box>
      </Container>
      {JSON.stringify(watch())}
    </>
  );
};

export default TanStackQuery;
