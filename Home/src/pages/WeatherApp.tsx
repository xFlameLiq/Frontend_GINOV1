import { Box, Button, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";

import { useState } from "react";
import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar";
import { getData } from "../services/api/getWeatherData";

// console.log(import.meta.env.VITE_API_KEY);

type InputForm = {
  found: boolean;
  city: string;
  region: string;
  country: string;
  temp: string;
  icon: string;
  text: string;
};

const WeatherApp = () => {
  const [weather, setWeather] = useState<Partial<InputForm>>({
    found: false,
    city: "",
    region: "",
    country: "",
    temp: "",
    icon: "",
    text: "",
  });

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<InputForm>();

  const valueCity = watch("city");

  const onSubmit = handleSubmit(async (data) => {
    setError({
      error: false,
      message: error.message,
    });
    setWeather({
      found: false,
    });
    try {
      const weatherData = await getData(valueCity);
      setWeather({
        found: true,
        city: weatherData.location.name,
        region: weatherData.location.region,
        country: weatherData.location.country,
        temp: weatherData.current.temp_c,
        icon: weatherData.current.condition.icon,
        text: weatherData.current.condition.text,
      });
    } catch (error) {
      const castError = error as Error;
      console.log(error);
      setError({
        error: true,
        message: castError.message,
      });
    }

    reset();
  });

  return (
    <>
      <NavBar></NavBar>
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          mt: "2rem",
        }}
      >
        <Box component="div">
          <Typography
            variant="h3"
            color="initial"
            sx={{
              mb: "2rem",
            }}
          >
            WEATHER APP
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={onSubmit}
        >
          {errors.city && (
            <Typography variant="caption" display="block" color="#d32f2f">
              {errors.city.message}
            </Typography>
          )}
          <TextField
            id="city"
            type="text"
            label="Ingrese la ciudad"
            helperText={errors.city?.message}
            sx={{
              width: "80%",
              mb: "2rem",
            }}
            {...register("city", {
              required: {
                value: true,
                message: "Introduzca una ciudad",
              },
              validate: (value: string) => {
                if (!value.trim())
                  return "El campo ciudad no puede estar vacío";
              },
            })}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "40",
              mb: "2rem",
            }}
          >
            Buscar
          </Button>
        </Box>
        {error.error && (
          <Typography variant="body1" color="initial">
            No se ha encontrado la ciudad solicitada.
          </Typography>
        )}
        {weather.found && (
          <Box component="div">
            <Typography variant="h3" component="h2" color="initial">
              {weather.city}, {weather.country}
            </Typography>
            <Box
              component="img"
              alt={weather.text}
              src={weather.icon}
              sx={{
                width: "5rem",
                height: "5rem",
              }}
            />
            <Typography variant="h5" component="h3" color="initial">
              {weather.temp} °C, {weather.text}
            </Typography>
            <Typography variant="h5" component="h3" color="initial">
              {weather.region}
            </Typography>
          </Box>
        )}
        <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
          Powered by:{" "}
          <a href="https://www.weatherapi.com/" title="Weather API">
            WeatherAPI.com
          </a>
        </Typography>
      </Container>

      <span>{JSON.stringify(watch(), null, 3)}</span>
    </>
  );
};

export default WeatherApp;
