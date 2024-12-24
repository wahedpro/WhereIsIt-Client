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
import PostDetailsPage from "../pages/PostDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: ()=> fetch('http://localhost:3000/addItems')
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
                path: 'Items/:id',
                element: <PrivateRoute><PostDetailsPage></PostDetailsPage></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:3000/itemDetails/${params.id}`),
            },
            {
                path: "addItems",
                element : <PrivateRoute><AddItemsPage></AddItemsPage></PrivateRoute>
            },
            {
                path: "myItems",
                element : <PrivateRoute><ManageMyItemsPage></ManageMyItemsPage></PrivateRoute>,
                loader: ()=> fetch('http://localhost:3000/addItems')
            },
            {
                path: 'updateItems/:id',
                element: <PrivateRoute><UpdateItemsPage></UpdateItemsPage></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:3000/addItems/${params.id}`),
            },
            {
                path: "allRecovered",
                element : <PrivateRoute><AllRecoveredItemsPage></AllRecoveredItemsPage></PrivateRoute>,
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);

export default router;