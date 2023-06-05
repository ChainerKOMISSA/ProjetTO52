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
import Dashindex from "./pages/dashboard/dashindex";
import Listespectacle from "./pages/dashboard/listespectacle";
import Listeformation from "./pages/dashboard/listeformation";
import Createpub from "./pages/dashboard/createpub";
import Listepub from "./pages/dashboard/listepub";


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
                path : "dashindex",
                element : <Dashindex/>,
            },
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
            },
            {
              path : "listespectacle",
              element : <Listespectacle/>
            },
            {
              path : "listeformation",
              element : <Listeformation/>
            },
            {
              path : "createpub",
              element : <Createpub/>
            },
            {
              path : 'listepub',
              element : <Listepub/>
            }
        ]
    },
]);

export default router;