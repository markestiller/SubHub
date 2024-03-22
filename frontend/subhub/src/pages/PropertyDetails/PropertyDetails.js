import React from "react";
import {
    Flex,
    Box,
    Text,
    Button,
    Stack,
    Grid,
    GridItem,
    Image,
    Heading,
} from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaPerson } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

function PropertyDetails() {
    const data = useLoaderData();
    const navigate = useNavigate();

    return (
        <Flex justify={"center"} align={"center"} w="100vw" h="100vh" p="50px">
            <Grid
                border={"1px solid #357960"}
                borderRadius={"30px"}
                bg="white"
                width={"100%"}
                height={"100%"}
                templateColumns="repeat(3, 1fr)"
                overflow={"hidden"}
            >
                <GridItem colSpan={1} width="100%">
                    <Image
                        src={data.img}
                        alt="house"
                        height={"100%"}
                        objectFit={"cover"}
                    />
                </GridItem>
                <GridItem
                    colSpan={2}
                    borderLeft={"1px solid #357960"}
                    width="100%"
                    padding="50px"
                    fontSize={"20px"}
                    position={"relative"}
                >
                    <Stack w="100%">
                        <Heading fontSize="50px">{data.address}</Heading>
                        <Text fontSize="30px" color="#357960">
                            ${data.price}
                        </Text>
                        <Text>{data.desc}</Text>
                    </Stack>
                    <Grid
                        mt="30px"
                        border={"1px solid #357960"}
                        borderRadius={"15px"}
                        p={"20px"}
                        templateColumns="repeat(3, 1fr)"
                        rowGap={"20px"}
                    >
                        <GridItem fontSize={"15px"}>
                            <Heading fontSize={"18px"}>Type</Heading>
                            <Text mt="10px">{data.type}</Text>
                        </GridItem>
                        <GridItem fontSize={"15px"}>
                            <Heading fontSize={"18px"}>Number of Beds</Heading>
                            <Text mt="10px">{data.numBeds}</Text>
                        </GridItem>
                        <GridItem fontSize={"15px"}>
                            <Heading fontSize={"18px"}>Number of Baths</Heading>
                            <Text mt="10px">{data.numBaths}</Text>
                        </GridItem>
                        <GridItem fontSize={"15px"}>
                            <Heading fontSize={"18px"}>Stay Duration</Heading>
                            <Text mt="10px">{data.duration}</Text>
                        </GridItem>
                        <GridItem fontSize={"15px"}>
                            <Heading fontSize={"18px"}>Seller</Heading>
                            <Text mt="10px">{data.seller}</Text>
                        </GridItem>
                    </Grid>
                    <Button
                        leftIcon={<MdCancel />}
                        colorScheme="teal"
                        variant="outline"
                        position={"absolute"}
                        bottom="50px"
                        left="50px"
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </Button>
                    <Button
                        leftIcon={<IoPersonCircle />}
                        colorScheme="teal"
                        variant="solid"
                        position={"absolute"}
                        bottom="50px"
                        right="50px"
                    >
                        Contact
                    </Button>
                </GridItem>
            </Grid>
        </Flex>
    );
}

export default PropertyDetails;
