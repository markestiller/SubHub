import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Image,
    Stack,
    Button,
    Heading,
    Divider,
    ButtonGroup,
} from "@chakra-ui/react";

function PropertyCard() {
    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src="https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg"
                    alt="house"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">18 York St</Heading>
                    <Text color="#357960" fontSize="2xl">
                        $1450 / mo
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button variant="solid" bg="#357960" color="white">
                        See more
                    </Button>
                    <Button variant="ghost" color="#357960">
                        Contact
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}

export default PropertyCard;
