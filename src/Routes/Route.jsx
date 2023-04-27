import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layOut/Main";
import Cetegory from "../pages/Home/Cetegory/Cetegory";
import NewsLayout from "../layOut/NewsLayout";
import News from "../pages/News/News";

const router=createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/cetegory/:id',
                element:<Cetegory></Cetegory>,
                loader:({params})=>fetch(`http://localhost:5000/cetegorys/${params.id}`)
            },
            
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<News></News>
            }
        ]
    }
])
export default router;