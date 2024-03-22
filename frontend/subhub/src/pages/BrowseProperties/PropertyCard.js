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
import { useNavigate } from "react-router-dom";

function PropertyCard({ address, src, price, id }) {
    const navigate = useNavigate();
    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={
                        src
                            ? src
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vQ_sZXWUmmdGU5ORmmMP6lO--nh5squKfhvhmZBWBw&s"
                    }
                    alt="house"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{address}</Heading>
                    <Text color="#357960" fontSize="2xl">
                        ${price} / mo
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button
                        variant="solid"
                        bg="#357960"
                        color="white"
                        onClick={() => navigate(`/details/${id}`)}
                    >
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
