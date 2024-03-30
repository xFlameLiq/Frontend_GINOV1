import { TextField, Box, Button, Checkbox, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { useState } from "react";
import {yupResolver} from '@hookform/resolvers/yup'
import NavBar from "@components/NavBar";
import { useMutation } from "@tanstack/react-query";
import { FindUserType } from "@services/services_types/Login.types";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useLoginContext } from "@hooks/UserContext";
import { UserStateType } from "@customTypes/UserData.types";


type FormInputs = {
  email: string;
  password: string;
  contract: boolean;
};

type Props = {
  UserLoginService: FindUserType
};

const Login = ({UserLoginService}: Props) => {
  
  const {persist_login} = useLoginContext();

  const [checkbox, setCheckbox] = useState<boolean>(false);


  const {data: userData, mutateAsync, isError, error, isSuccess} = useMutation({
    mutationFn: UserLoginService,
    onSettled: (data) => {
      console.log(data);
      if(data===undefined) return;
      const loginUserData: UserStateType = {
        admin_user: 0,
        access_token: true,
        full_name: `${data?.name} ${data?.surname}`,
      }
      localStorage.setItem('user', JSON.stringify(loginUserData));
    }
  })

  const schema = yup.object().shape({
    email: yup.string().email("El email no es valido").required("El email es requerido"),
    password: yup.string().required("La contraseña es requerida"),
    contract: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones').required(),
  })


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    //setValue,
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
    },
    resolver: yupResolver(schema),
  });


  //console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const email = watch("email");
    const password = watch("password");
    setCheckbox(!checkbox);
    await mutateAsync({
      request: {
        email: email,
        password: password,
      } 
    })
    persist_login({username: email, password: password})
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
          LOGIN
        </Typography>

        <Box component="form" className="form" onSubmit={onSubmit}>
          {errors.email && (
            <Typography variant="caption" display="block" color="#d32f2f">
              {errors.email.message}
            </Typography>
          )}
          <TextField
            id="email"
            type="text"
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
        <Box
      component="div"
      textAlign="center"
      sx={{
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: isError ? "#FFCCCC" : isSuccess ? "#CCFFCC" : "transparent",
      }}
    >
      {isError && (
        <Typography variant="body1" color="error">
          {error?.message}
        </Typography>
      )}
      {isSuccess && (
        <Typography variant="body1" color="initial">
          {userData?.id}
          <br/>
          {userData?.email}
          <br/>
          {userData?.name}
          <br/>
          {userData?.surname}
          <br/>
          {userData?.address}
          <br/>
          {userData?.telephone}
          <br/>
          {userData?.age}
          <br/>
          {userData?.isSession === true ? (<span>Sesion iniciada</span> ) : (<span>Sesion fallida</span>)}
        </Typography>
      )}
    </Box>

    <NavLink to='init'>CLICK HERE</NavLink>
      <Outlet></Outlet>
        <br></br>

      <Link to='/login'>CLICK HERE</Link>
      </Container>
    </>
  );
};

export default Login;
