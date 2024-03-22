import {
    Grid,
    Heading,
    Flex,
    GridItem,
    Container,
    Text,
    Image,
    Button,
    Input,
    Divider,
    Select,
} from "@chakra-ui/react";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

function CreateProperties() {
    const navigate = useNavigate();
    return (
        <Grid
            h="100vh"
            templateColumns="repeat(5, 1fr)"
            className="browse"
            color={"#357960"}
            bg="#fdfdfd"
            padding="50px"
        >
            <GridItem colSpan={1} bg="#fdfdfd" margin="20px">
                <Flex
                    direction={"column"}
                    align={"start"}
                    justify={"start"}
                    padding={"20px"}
                    h="100%"
                    position="relative"
                >
                    <Flex
                        justify={"center"}
                        align={"center"}
                        width={"100%"}
                        h="100%"
                    >
                        <Image boxSize="200px" src="/logo.svg" alt="logo" />
                    </Flex>
                </Flex>
                <Button
                    leftIcon={<IoMdArrowBack />}
                    colorScheme="teal"
                    variant="solid"
                    position={"absolute"}
                    top="50px"
                    left="50px"
                    onClick={() => navigate("/")}
                ></Button>
            </GridItem>
            <GridItem
                colSpan={4}
                bg="#fdfdfd"
                margin="20px"
                overflow={"hidden"}
                textAlign={"right"}
            >
                <Heading fontSize="150px" color={"black"}>
                    Host your first stay with us.
                </Heading>
            </GridItem>
            <GridItem colSpan={5} borderTop={"1px solid #357960"} pt="50px">
                <Grid templateColumns={"repeat(3, 1fr)"} gap={"20px"}>
                    <GridItem colSpan={1}>
                        <Input
                            placeholder="Address"
                            h="60px"
                            variant={"outline"}
                        />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Input placeholder="Number of Beds" h="60px" />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Input placeholder="Number of Baths" h="60px" />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Input placeholder="Type" h="60px"></Input>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Input placeholder="Address" h="60px" />
                    </GridItem>
                </Grid>
                <Button
                    leftIcon={<FaStar />}
                    colorScheme="teal"
                    variant="solid"
                    position={"absolute"}
                    bottom="10px"
                    right="50px"
                    onClick={() => navigate("/create")}
                >
                    Continue
                </Button>
            </GridItem>
        </Grid>
    );
}

export default CreateProperties;
