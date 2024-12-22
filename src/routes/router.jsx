import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddItemsPage from "../pages/AddItemsPage";
import ManageMyItemsPage from "../pages/ManageMyItemsPage";
import AllRecoveredItemsPage from "../pages/AllRecoveredItemsPage";

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
                path: "addItems",
                element : <AddItemsPage></AddItemsPage>
            },
            {
                path: "myItems",
                element : <ManageMyItemsPage></ManageMyItemsPage>
            },
            {
                path: "allRecovered",
                element : <AllRecoveredItemsPage></AllRecoveredItemsPage>
            }
        ]
    },
]);

export default router;