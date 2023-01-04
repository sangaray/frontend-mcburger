import React from "react";
import { Box, Text, Button, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setNewPosition } from "../../actions";

export default function LocationCards({ address, locality, coordenates }) {
    const dispatch = useDispatch();

    function handleFilterBranchPosition(coordenates) {
        dispatch(setNewPosition({ status: "branch", coordenates: coordenates }))
    }

    return (
        <Box display={"flex"} justifyContent={"center"} >
            <Box bg={"white"} mb={"30px"} h={"120px"} w={"520px"} flexDirection={"column"} padding={"10px"} borderRadius={"15px"}
            _hover={{border:"2px", borderColor:"#651616", borderRadius:"15px"}} >
                <Box >
                    <Text as={"b"}>
                        {address}
                    </Text>
                    <Text display={"block"} as={"b"}>
                        {locality}
                    </Text>
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <Button colorScheme={"orange"} onClick={() => handleFilterBranchPosition(coordenates)}>
                        Show in Map
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}