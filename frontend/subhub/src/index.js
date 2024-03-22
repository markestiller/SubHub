import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowseProperties from "./pages/BrowseProperties/BrowseProperties";
import CreateProperties from "./pages/CreateProperties/CreateProperties";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PropertyService from "./services/PropertyService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BrowseProperties />,
        loader: async () => {
            return PropertyService.getProperties();
        },
    },
    {
        path: "/create",
        element: <CreateProperties />,
    },
    {
        path: "/details/:propertyId",
        element: <PropertyDetails />,
        loader: async ({ params }) => {
            // return PropertyService.getProperty({ id: params.propertyId });
            return {
                id: 1,
                address: "300 Huron St, Toronto, ON M5S 3J6",
                lat: 43.657164038,
                lon: -79.400248399,
                desc: "A residence hall open to students of any years!",
                price: 1800,
                type: "dormitory",
                numBeds: 1,
                numBaths: 1,
                duration: 3,
                seller: "New College",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpErsK2JM9rWV2D9mNDfuNR40T-o5N2WsUjcG2LegyQw&s",
            };
        },
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
