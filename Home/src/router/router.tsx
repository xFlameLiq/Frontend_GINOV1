import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home.tsx";
import Login from "@pages/Login.tsx";
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
} from "@config/ServicesContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: "/weather-app",
    element: <WeatherApp />,
    errorElement: <NotFound />,
  },
  {
    path: "/tanstack-query",
    element: <TanStackQuery />,
    errorElement: <NotFound />,
  },
  {
    path: "/fake-data",
    element: <FakeData />,
    errorElement: <NotFound />,
  },
  {
    path: "/pokedex-app",
    element: <PokedexApp />,
    errorElement: <NotFound />,
  },
  {
    path: "/frontend",
    element: (
      <Frontend
        GetAllPostsServices={GetAllPostImpl}
        CreateNewPostType={CreateNewPostImpl}
        UpdatePostTypeById={UpdatePostByIdImpl}
      />
    ),
    errorElement: <NotFound />,
  },
]);
