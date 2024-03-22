import React, { useState } from "react";
import {
    Grid,
    GridItem,
    Flex,
    Select,
    Image,
    Container,
    Input,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderMark,
    Text,
    Button,
} from "@chakra-ui/react";
import "./BrowseProperties.css";
import ListingDrawer from "./ListingDrawer";
import Map from "./Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

function BrowseProperties() {
    const [sliderValue, setSliderValue] = useState([1000, 5000]);
    const [openSide, setOpenSide] = useState(false);
    const navigate = useNavigate();

    const data = useLoaderData();

    return (
        <>
            <Grid
                h="100vh"
                templateColumns="repeat(5, 1fr)"
                className="browse"
                color={"#357960"}
                bg="#fdfdfd"
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
                        >
                            <Image boxSize="100px" src="/logo.svg" alt="logo" />
                        </Flex>
                        <Input
                            placeholder="enter address!"
                            colorScheme="whiteAlpha"
                            m="10px"
                            mt="30px"
                            w="auto"
                            h={"50px"}
                        ></Input>
                        <Container marginTop="30px" pb="30px" pt="10px">
                            <Text>Price range</Text>
                            <RangeSlider
                                aria-label={["min", "max"]}
                                min={0}
                                max={6000}
                                defaultValue={[sliderValue[0], sliderValue[1]]}
                                mt="10px"
                                onChange={(val) => setSliderValue(val)}
                            >
                                <RangeSliderMark
                                    value={sliderValue[0]}
                                    textAlign="center"
                                    color="#357960"
                                    mt="1"
                                    marginLeft="-5"
                                    w="12"
                                >
                                    ${sliderValue[0]}
                                </RangeSliderMark>
                                <RangeSliderMark
                                    value={sliderValue[1]}
                                    textAlign="center"
                                    color="#357960"
                                    mt="1"
                                    ml="-5"
                                    w="12"
                                >
                                    ${sliderValue[1]}
                                </RangeSliderMark>
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                </RangeSliderTrack>
                                <RangeSliderThumb index={0} />
                                <RangeSliderThumb index={1} />
                            </RangeSlider>
                        </Container>
                        <Container marginTop="30px" pb="30px" pt="10px">
                            <Text>Number of bedrooms</Text>
                            <Select mt="10px">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </Select>
                        </Container>
                        <Button onClick={() => setOpenSide(!openSide)}>
                            Side
                        </Button>
                        <Button
                            leftIcon={<FaStar />}
                            colorScheme="teal"
                            variant="solid"
                            position={"absolute"}
                            bottom="10px"
                            width="90%"
                            onClick={() => navigate("/create")}
                        >
                            Host a stay!
                        </Button>
                    </Flex>
                </GridItem>
                <GridItem
                    colSpan={4}
                    bg="#fdfdfd"
                    border="1px solid #357960"
                    borderRadius={"30px"}
                    margin="20px"
                    overflow={"hidden"}
                    cursor={"pointer"}
                >
                    <Map />
                </GridItem>
            </Grid>
            <ListingDrawer
                isOpen={openSide}
                onClose={() => setOpenSide(false)}
                data={data.data}
            />
        </>
    );
}

export default BrowseProperties;
