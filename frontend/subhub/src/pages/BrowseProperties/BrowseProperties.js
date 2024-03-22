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
import PropertyCard from "./PropertyCard";
import ListingDrawer from "./ListingDrawer";

function BrowseProperties() {
    const [sliderValue, setSliderValue] = useState([1000, 5000]);
    const [openSide, setOpenSide] = useState(false);

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
                        justify={"center"}
                        padding={"20px"}
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
                            Open side
                        </Button>
                    </Flex>
                </GridItem>
                <GridItem
                    colSpan={4}
                    bg="#fdfdfd"
                    border="1px solid #357960"
                    borderRadius={"30px"}
                    margin="20px"
                ></GridItem>
            </Grid>
            <ListingDrawer
                isOpen={openSide}
                onClose={() => setOpenSide(false)}
            />
        </>
    );
}

export default BrowseProperties;
