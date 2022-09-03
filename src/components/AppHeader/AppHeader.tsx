import * as React from "react"
import { Box, Grid, GridItem } from "@chakra-ui/react"


const HeaderContainer = {

}

export const AppHeader: React.FC<any> = () => {
    return (
        <Box maxW={'100%'} p="2" mb="2" bg={'white'}>
            <Grid templateColumns='repeat(5, 1fr)' gap={"3"}>
                <GridItem bg="green" colSpan={4}>Hren</GridItem>
            </Grid>
        </Box>
    )
}