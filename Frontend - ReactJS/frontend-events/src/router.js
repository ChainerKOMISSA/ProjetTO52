import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard/dashboard";
import Listeconcert from "./pages/dashboard/listeconcert";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children : [
            {
                path: "listeconcert",
                element: <Listeconcert/>,
            },
        ]
    },
]);

export default router;