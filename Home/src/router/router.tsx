import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home.tsx";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register.tsx";
import NotFound from "@pages/NotFound.tsx";
import WeatherApp from "@pages/WeatherApp.tsx";
import TanStackQuery from "@pages/TanStackQuery.tsx";
import FakeData from "@pages/Users/FakeData";
import PokedexApp from "@pages/PokedexApp.tsx";
import Frontend from "@pages/Frontend/Frontend";

import {
  CreateNewPostImpl,
  GetAllPostImpl,
  UpdatePostByIdImpl,
  UserLoginImpl,
  UserLoginDataImpl,
} from "@config/ServicesContainer";
import Init from "@pages/Login/Init";
import { LoginContextProvider } from "@contexts/UserDataContext";
import Index from "@pages/Index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CssBaseline from "@mui/material/CssBaseline";
const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <QueryClientProvider client={queryClient}>
        <LoginContextProvider>
          <CssBaseline />
          <Index />
        </LoginContextProvider>
      </QueryClientProvider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "login",
        element: <Login UserLoginService={UserLoginImpl} />,
        errorElement: <NotFound />,
        children: [
          {
            path: "init",
            element: <Init />,
          },
        ],
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <NotFound />,
      },
      {
        path: "weather-app",
        element: <WeatherApp />,
        errorElement: <NotFound />,
      },
      {
        path: "tanstack-query",
        element: <TanStackQuery />,
        errorElement: <NotFound />,
      },
      {
        path: "fake-data",
        element: <FakeData />,
        errorElement: <NotFound />,
      },
      {
        path: "pokedex-app",
        element: <PokedexApp />,
        errorElement: <NotFound />,
      },
      {
        path: "frontend",
        element: (
          <Frontend
            GetAllPostsServices={GetAllPostImpl}
            CreateNewPostType={CreateNewPostImpl}
            UpdatePostTypeById={UpdatePostByIdImpl}
          />
        ),
        errorElement: <NotFound />,
      },
    ],
  },
]);
