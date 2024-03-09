import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Container,
  Typography,
  Checkbox,
} from "@mui/material";
import "./register.css";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import NavBar from "../../components/NavBar";
import { sxBtn } from "./Register.style";

const countries: string[] = ["Mexico", "USA", "Argentina"];

type FormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: Date;
  country: string;
  file: FileList;
  contract: boolean;
};

const Register = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().min(10, "Minimo 10 caracteres").required("El nombre es requerido"),
    email: yup.string().email("Coloque un email valido").required("El email es requerido"),
    password: yup.string().min(4, "Minimo 4 caracteres").max(10, "No se permiten mas de 10 caracteres").required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "La contraseña no coincide").required(),
    dateOfBirth: yup.date().required().typeError("Ingrese una fecha valida"),
    country: yup.string().required(),
    file: yup.mixed<FileList>().test(
      "fileExist", "Debes subir un archivo", (value) => {
        return value && value?.length > 0
      }
    ).test(
      "fileExtension", "Debe ser una extension valida", (value) => {
        const valueConv = (value as FileList);
        if (valueConv && valueConv.length > 0) {
          return valueConv[0].type === "image/jpeg"
        }
      }
    ),
    contract: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones').required(),
  })

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
    console.log(data.file[0].name);
    console.log(data);
    setCheckbox(!checkbox);
    reset();
  });

  return (
    <>
      <NavBar />
      <Container
        maxWidth="md"
        sx={sxBtn}
      >
        <Typography
          variant="h3"
          color="initial"
          sx={{
            textAlign: "center",
            mb: "2rem",
          }}
        >
          REGISTRO
        </Typography>

        <Box component="form" className="form" onSubmit={onSubmit}>
          {errors.name && (
            <Typography variant="caption" display="block" color="#d32f2f">
              {errors.name.message}
            </Typography>
          )}
          <TextField
            id="name"
            type="text"
            label="Ingrese su nombre"
            sx={{
              width: "80%",
              mb: "2rem",
            }}
            {...register("name")}
          />
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
          {errors.confirmPassword && (
            <Typography variant="caption" display="block" color="#d32f2f">
              {errors.confirmPassword.message}
            </Typography>
          )}
          <TextField
            id="confirmPassword"
            label="Confirme la contraseña"
            type="password"
            autoComplete="current-password"
            sx={{
              width: "80%",
              mb: "2rem",
            }}
            {...register("confirmPassword")}
          />
          {errors.dateOfBirth && (
            <Typography variant="caption" display="block" color="#d32f2f">
              {errors.dateOfBirth.message}
            </Typography>
          )}
          <TextField
            id="dataOfBirth"
            label="Ingrese su fecha de nacimiento"
            type="date"
            autoComplete="current-password"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              width: "80%",
              mb: "2rem",
            }}
            {...register("dateOfBirth")}
          />
          <TextField
            id="country"
            select
            label="Selecciona un país"
            defaultValue="Mexico"
            sx={{
              width: "80%",
              mb: "2rem",
            }}
            {...register("country")}
          >
            {countries.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {errors.file && (
            <Typography variant="caption" display="block" color="#d32f2f">
              {errors.file.message}
            </Typography>
          )}
          <TextField
            id="file"
            label="Ingrese su foto"
            type="file"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              width: "80%",
              mb: "2rem",
            }}
            {...register("file")}
          />
          <Box
            component="div"
            sx={{
              display: "flex",
              width: "80%",
              mb: "2rem",
              alignItems: "center",
            }}
          >
            {errors.contract && (
              <Typography variant="caption" display="block" color="#d32f2f">
                Acepte los términos
              </Typography>
            )}
            <Checkbox
              id="contract"
              checked={checkbox}
              onClick={() => setCheckbox(!checkbox)}
              sx={{
                mr: "2rem",
              }}
              {...register("contract")}
            />
            <Typography variant="body1" color="initial">
              Términos y condiciones
            </Typography>
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

export default Register;
