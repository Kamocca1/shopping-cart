import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/reset.css";
import "./styles/globals.css";

import Root from "./routes/root/Root.jsx";
import Home from "./routes/home/home";
import ErrorPage from "./ErrorPage";
import Shop from "./routes/shop/shop";
import Favorites from "./routes/favorites/favorites";
import Cart from "./routes/cart/cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "shop/favorites", element: <Favorites /> },
            { path: "cart", element: <Cart /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
