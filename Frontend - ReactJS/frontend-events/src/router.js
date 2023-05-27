import {Route, Routes, BrowserRouter as Router, Link, createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard/dashboard";
import Listeconcert from "./pages/dashboard/listeconcert";
import Newevent from "./pages/dashboard/newevent";
import Listefestival from "./pages/dashboard/listefestival";
import Newsletter from "./pages/dashboard/newsletter";
import Createnewsletter from "./pages/dashboard/createnewsletter";

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
            {
                path: "newevent",
                element: <Newevent/>,
            },
            {
              path : "listefestival", 
              element : <Listefestival/>,
            },
            {
              path : "newsletter", 
              element : <Newsletter/>,
            },
            {
              path : "createnewsletter", 
              element : <Createnewsletter/>,
            }
        ]
    },
]);

export default router;