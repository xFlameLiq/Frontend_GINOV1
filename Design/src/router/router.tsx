import Home from "@pages/Home/Home";
import Index from "@pages/Index";
import NotFound from "@pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Login from "@pages/Login/Login";
import { ThemeContextProvider } from "@styles/themes/ThemeContextProvider";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <ThemeContextProvider>
        <Index />
      </ThemeContextProvider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
