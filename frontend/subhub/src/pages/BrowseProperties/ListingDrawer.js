import React from "react";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack,
    Button,
} from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";

function ListingDrawer({ isOpen, onClose, data }) {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">Listings</DrawerHeader>

                <DrawerBody>
                    <Stack spacing="24px">
                        {data.map((d) => {
                            return (
                                <PropertyCard
                                    address={d.address}
                                    price={d.price}
                                    src={d.src}
                                    id={d.id}
                                />
                            );
                        })}
                    </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth="1px"></DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default ListingDrawer;
