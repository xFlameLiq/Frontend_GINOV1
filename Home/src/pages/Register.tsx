import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import "../styles/register.css";
import { useState } from "react";

const countries: string[] = ["Mexico", "USA", "Argentina"];

type FormInputs = {
    name: string,
    email: string,
    password: number,
    confirmPassword: number,
    dateOfBirth: Date,
    country: string,
    file: File[],
    contract: boolean,
}

const Register = () => {

  const [checkbox, setCheckbox] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
        email: 'test@test.com'
    }
  });

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data.file[0].name);
    console.log(data);
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
            {...register("name", {
              required: {
                value: true,
                message: "Introduzca un nombre",
              },
              minLength: {
                value: 8,
                message: "El nombre debe tener mínimo 8 carácteres",
              },
            })}
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
            {...register("email", {
              required: {
                value: true,
                message: "Introduzca un correo",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9._%-]+\.[a-z]{2,4}$/,
                message: "Correo no válido",
              },
            })}
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
            {...register("password", {
              required: {
                value: true,
                message: "Introduzca una contraseña",
              },
            })}
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
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Es necesario el campo de confirmar contraseña",
              },
              validate: (value) => {
                if(value === watch("password")) {
                    return true;
                } else {
                    return 'Las contraseñas no coinciden';
                }

              }
            })}
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
            {...register("dateOfBirth", {
              required: {
                value: true,
                message: "Seleccione su fecha de nacimiento",
              },
              validate: (value) => {
                const birthday = new Date(value);
                const actualDate = new Date();
                const age: number = actualDate.getFullYear() - birthday.getFullYear();
                return age >= 18 || 'Debes ser mayor de edad';
              },
            })}
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
            {...register("file", {
              required: {
                value: true,
                message: "Seleccione un archivo para subir",
              },
            })}
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
              {...register("contract", {
                required: true,
              })}
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
