import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layOut/Main";
import Cetegory from "../pages/Home/Cetegory/Cetegory";
import NewsLayout from "../layOut/NewsLayout";
import News from "../pages/News/News";
import LoginLayOut from "../pages/Login/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element:<LoginLayOut></LoginLayOut>,
        children:[
            {
                path:'/',
                element:<Navigate to="cetegory/0"></Navigate>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
  {
    path: "/cetegory",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Cetegory></Cetegory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cetegorys/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
export default router;
