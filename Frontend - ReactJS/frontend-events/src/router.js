import {Route, Routes, BrowserRouter as Router, Link, createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard/dashboard";
import Listeconcert from "./pages/dashboard/listeconcert";
import Newevent from "./pages/dashboard/newevent";

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
        ]
    },
]);


/*const router = (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="listeconcert" element={<Listeconcert />} />
          <Route path="newevent" element={<Newevent />} />
        </Route>
      </Routes>
    </Router>
  );*/

export default router;