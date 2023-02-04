import { Box, Button } from "@chakra-ui/react";


export default function Scroller(props) {
    return (
        <Box position="relative">
            <Box 
                overflowX="auto"
                whiteSpace="nowrap"
                justifyContent="space-between"
                position="relative"
            >
                {props.children}
            </Box>

            <Button
                bg="gray.200"
                position="absolute"
                left="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex={10}
                pt="2.4rem"
                pb="2.4rem"
                _hover={{ bg: "gray.300" }}
                ml="1rem"
                display="none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
            </Button>

            <Button
                bg="gray.200"
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex={10}
                pt="2.4rem"
                pb="2.4rem"
                _hover={{ bg: "gray.300" }}
                mr="1rem"
                display="none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
            </Button>
        </Box>
        
    )
}


