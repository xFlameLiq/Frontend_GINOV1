import { Box, Typography, TextField, Button } from "@mui/material";
import { CreateNewPostContainer, description, divInputs, inputs, submitBtn } from "./CreateNewPost.style";
import { CreateNewPostType } from "@services/services_types/CreateNewPost.types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

type Props = {
  CreateNewPostType: CreateNewPostType;
};

type FormInputs = {
  userId: number;
  id: number;
  title?: string;
  body: string;
};

const CreateNewPost = ({ CreateNewPostType }: Props) => {

  const [counter, setCounter] = useState<number>(3);

  const {mutateAsync, isError, error, isSuccess, status} = useMutation({
    mutationFn: CreateNewPostType,
  })

  const schema = yup.object().shape({
    userId: yup.number().required(),
    id: yup.number().required(),
    title: yup.string(),
    body: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      userId: 1,
      id: counter,
    },
    resolver: yupResolver(schema),
  });



  const submit = handleSubmit(async (data) => {
    setCounter((counter) => counter+1);
    setValue("userId", 1);
    setValue("id", counter);
    console.log(data)
    const userId = Number(watch("userId"));
    const id = Number(watch("id"));
    const title = watch("title");
    const body = watch("body");
    await mutateAsync({
      request: {
          userId: userId,
          id: id,
          title: title,
          body: body,
      }
    })
    reset();
  })

  return (
    <>
      <Box component="div" sx={CreateNewPostContainer}>
        <Box component="div">
          <Typography
            variant="h4"
            component="h2"
            color="initial"
            textAlign="center"
            gutterBottom
          >
            CreateNewPost
          </Typography>
        </Box>
        <Box component="form">
          <Box component="div" sx={divInputs}>
            <Typography variant="body1" color="initial" sx={description}>ID USER: </Typography>
            <TextField
              id="userId"
              label="ID DEL USUARIO EN SESIÓN"
              disabled={true}
              helperText={errors.userId?.message}
              InputLabelProps={{
                shrink: true,
              }}
              {...register("userId")}
              sx={inputs}
              
            />
            </Box>
            <Box component="div" sx={divInputs}>
            <Typography variant="body1" color="initial" sx={description}>POST ID: </Typography>
            <TextField
              id="id"
              label="# DE PUBLICACIONES DEL USUARIO"
              disabled={true}
              value={counter}
              helperText={errors.id?.message}
              InputLabelProps={{
                shrink: true,
              }}
              {...register("id")}
              sx={inputs}
              
            />
            </Box>
            <Box component="div" sx={divInputs}>
            <Typography variant="body1" color="initial" sx={description}>TITLE: </Typography>
            <TextField
              id="title"
              label="TITULO DE LA PUBLICACION"
              helperText={errors.title?.message}
              InputLabelProps={{
                shrink: true,
              }}
              {...register("title")}
              sx={inputs}
              
            />
            </Box>
            <Box component="div" sx={divInputs}>
            <Typography variant="body1" color="initial" sx={description}>BODY: </Typography>
            <TextField
              id="body"
              label="CONTENIDO"
              helperText={errors.body?.message}
              InputLabelProps={{
                shrink: true,
              }}
              {...register("body")}
              sx={inputs}
              
            />
            </Box>
            <Button onClick={submit} variant="contained" sx={submitBtn}>PUBLICAR</Button>
            {isError && (<Typography textAlign="center" variant="h3">{error?.message}</Typography>)}
            {isSuccess && status==="success" && (<Typography textAlign="center" variant="h3">Publicación creada</Typography>)}
        </Box>

      </Box>
    </>
  );
};

export default CreateNewPost;
