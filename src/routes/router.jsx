import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddItemsPage from "../pages/AddItemsPage";
import ManageMyItemsPage from "../pages/ManageMyItemsPage";
import AllRecoveredItemsPage from "../pages/AllRecoveredItemsPage";
import LostAndFoundItemsPage from "../pages/LostAndFoundItemsPage";
import UpdateItemsPage from "../pages/UpdateItemsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "register",
                element: <RegisterPage></RegisterPage>
            },
            {
                path: "login",
                element : <LoginPage></LoginPage>
            },
            {
                path: "allItems",
                element: <LostAndFoundItemsPage></LostAndFoundItemsPage>,
                loader: ()=> fetch('http://localhost:3000/addItems')
            },
            {
                path: "addItems",
                element : <AddItemsPage></AddItemsPage>
            },
            {
                path: "myItems",
                element : <ManageMyItemsPage></ManageMyItemsPage>,
                loader: ()=> fetch('http://localhost:3000/addItems')
            },
            {
                path: 'updateItems/:id',
                element: <UpdateItemsPage></UpdateItemsPage>,
                loader: ({params})=>fetch(`http://localhost:3000/addItems/${params.id}`),
            },
            {
                path: "allRecovered",
                element : <AllRecoveredItemsPage></AllRecoveredItemsPage>
            }
        ]
    },
]);

export default router;