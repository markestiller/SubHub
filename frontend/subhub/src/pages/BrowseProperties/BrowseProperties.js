import { Container, Flex, Grid } from "@mantine/core";
import React from "react";

function BrowseProperties() {
    return (
        <div className="browse">
            <Grid>
                <Grid.Col span={3}>
                    <Flex
                        direction={"column"}
                        justify={"center"}
                        align={"start"}
                    ></Flex>
                </Grid.Col>
                <Grid.Col span={9}>
                    <Container
                        style={{ border: "1px solid black" }}
                    ></Container>
                </Grid.Col>
            </Grid>
        </div>
    );
}

export default BrowseProperties;
