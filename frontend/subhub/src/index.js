import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowseProperties from "./pages/BrowseProperties/BrowseProperties";
import { MantineProvider, createTheme } from "@mantine/core";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BrowseProperties />,
    },
]);

const theme = createTheme({
    /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <RouterProvider router={router} />
        </MantineProvider>
    </React.StrictMode>
);
