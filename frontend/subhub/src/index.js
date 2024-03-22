import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowseProperties from "./pages/BrowseProperties/BrowseProperties";
import CreateProperties from "./pages/CreateProperties/CreateProperties";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BrowseProperties />,
    },
    {
        path: "/create",
        element: <CreateProperties />,
    },
]);

const components = {
    Input: {
        variants: {
            outline: {
                field: {
                    border: "1px solid",
                    borderColor: "grey",
                    _hover: {
                        borderColor: "black",
                    },
                },
            },
        },
    },
    Select: {
        border: "1px solid",
        borderColor: "grey",
    },
};

const theme = extendTheme({ components });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);
