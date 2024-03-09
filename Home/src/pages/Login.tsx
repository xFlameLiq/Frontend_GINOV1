import { TextField, Box, Button, Checkbox } from "@mui/material";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { useState } from "react";
import {yupResolver} from '@hookform/resolvers/yup'

const Login = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    contract: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones').required(),
  })

  type FormInputs = {
    email: string;
    password: string;
    contract: boolean;
  };

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

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setCheckbox(!checkbox);
    reset();
  });

  return (
    <>
      <NavBar />
      <Container
        maxWidth="md"
        sx={{
          border: 1,
          mt: "10px",
          mb: "30px",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h3"
          color="initial"
          sx={{
            textAlign: "center",
            mb: "2rem",
          }}
        >
          LOGI
        </Typography>

        <Box component="form" className="form" onSubmit={onSubmit}>
          {errors.email && (
            <Typography variant="caption" display="block" color="#d32f2f">
              {errors.email.message}
            </Typography>
          )}
          <TextField
            id="email"
            type="email"
            label="Ingrese un correo"
            autoComplete="current-email"
            sx={{
              width: "80%",
              mb: "2rem",
            }}
            {...register("email")}
          />
          {/* , {
              required: {
                value: true,
                message: "Introduzca un correo",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9._%-]+\.[a-z]{2,4}$/,
                message: "Correo no válido",
              },
            } */}
          {errors.password && (
            <Typography variant="caption" display="block" color="#d32f2f">
              {errors.password.message}
            </Typography>
          )}
          <TextField
            id="password"
            label="Ingrese la contraseña"
            type="password"
            autoComplete="current-password"
            sx={{
              width: "80%",
              mb: "2rem",
            }}
            {...register("password")}
          />
          {/* , {
              required: {
                value: true,
                message: "Introduzca una contraseña",
              },
            } */}
          <Box
            component="div"
            sx={{
              display: "flex",
              width: "80%",
              mb: "2rem",
              alignItems: "center",
            }}
          >
            <Checkbox
              id="contract"
              checked={checkbox}
              onClick={() => setCheckbox(!checkbox)}
              sx={{
                mr: "2rem",
              }}
              {...register("contract")}
            />
            {/* , {
                required: {
                  value: true,
                  message: "Se requieren aceptar los términos y condiciones*",
                },
              } */}

            <Typography variant="body1" color="initial" sx ={{
              mr: "1.2rem"
            }}>
              Términos y condiciones
            </Typography>
            {errors.contract && (
              <Typography variant="caption" display="block" color="#d32f2f">
                {errors.contract.message}
              </Typography>
            )}
          </Box>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{
              width: "25%",
              mb: "1rem",
            }}
          >
            ENVIAR
          </Button>
          <Typography variant="body1" color="initial">
            {JSON.stringify(watch(), null, 3)};
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Login;
