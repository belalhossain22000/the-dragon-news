import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layOut/Main";

const router=createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>
    }
])
export default router;