import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        // children: [
        //     { index: true, element: <Hero /> },
        //     { path: "shop", element: <Shop /> },
        //     { path: "shop/favorites", element: <Favorites /> },
        //     { path: "cart", element: <Cart /> },
        // ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
