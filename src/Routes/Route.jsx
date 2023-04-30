import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layOut/Main";
import Cetegory from "../pages/Home/Cetegory/Cetegory";
import NewsLayout from "../layOut/NewsLayout";
import News from "../pages/News/News";
import LoginLayOut from "../pages/Login/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivetRout from "./PrivetRout";
import Terms from "../pages/Terms";

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
            },
            {
                path:"/terms",
                element:<Terms></Terms>
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
          fetch(`https://the-dragon-news-server-fuz036mgu-belalhossain22000.vercel.app/cetegorys/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivetRout><News></News></PrivetRout>,
        loader: ({ params }) =>
          fetch(`https://the-dragon-news-server-fuz036mgu-belalhossain22000.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
export default router;
