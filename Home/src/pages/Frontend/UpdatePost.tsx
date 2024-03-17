import { Box, Button, TextField, Typography } from "@mui/material";
import { UpdatePostContainer } from "./UpdatePost.style";
import { UpdatePostByIdType } from "@services/services_types/UpdatePostById.types";
import {
  description,
  divInputs,
  inputs,
  submitBtn,
} from "./CreateNewPost.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";
type Props = {
  UpdatePostTypeById: UpdatePostByIdType;
};

type FormInputs = {
  id: number;
  title?: string;
  body: string;
};

const UpdatePost = ({ UpdatePostTypeById }: Props) => {

  const { mutateAsync, isError, error } = useMutation({
    mutationFn: UpdatePostTypeById,
  });

  const schema = yup.object().shape({
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
    },
    resolver: yupResolver(schema),
  });

  const submit = handleSubmit(async (data) => {
    console.log(data);
    const id = Number(watch("id"));
    const title = watch("title");
    const body = watch("body");
    await mutateAsync({
      id: id,
      request: {
        title: title,
        body: body,
      },
    });
    reset();
  });

  return (
    <>
      <Box component="div" sx={UpdatePostContainer}>
        <Box component="div">
          <Typography
            variant="h4"
            component="h2"
            color="initial"
            textAlign="center"
            gutterBottom
          >
            UpdatePost
          </Typography>
        </Box>
        <Box component="form">
          <Box component="div" sx={divInputs}>
            <Typography variant="body1" color="initial" sx={description}>
              POST ID:
            </Typography>
            <TextField
              id="id"
              label="# DE PUBLICACIONES DEL USUARIO"
              helperText={errors.id?.message}
              InputLabelProps={{
                shrink: true,
              }}
              {...register("id")}
              sx={inputs}
            />
          </Box>
          <Box component="div" sx={divInputs}>
            <Typography variant="body1" color="initial" sx={description}>
              NEW TITLE:
            </Typography>
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
            <Typography variant="body1" color="initial" sx={description}>
              NEW BODY:
            </Typography>
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
          <Button onClick={submit} variant="contained" sx={submitBtn}>
            ACTUALIZAR
          </Button>
          {isError && (
            <Typography textAlign="center" variant="h3">
              {error?.message}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default UpdatePost;
