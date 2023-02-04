import { Center, Text, Box, Code } from '@chakra-ui/react'
import Template from '../../components/template'

export default function Contact() {
    return (
        <Template lang="en">
            <Text
                fontSize={{ base: "5xl", md: "6xl" }}
                fontWeight="bold"
                mt="3rem"
                textAlign="center"
            >Contact Now</Text>

            <Center >
                <Text
                    fontSize="2xl"
                    mt="1rem"
                    textAlign="center"
                    maxW="2xl"
                    p="1rem"
                >We are ready to receive orders at any time. It is important that you contact us in the options presented below:</Text>
            </Center>

            <Box
                ml={{ base: "2rem", md: "10rem" }}
            >
                <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    mt="3rem"
                >Number:</Text>

                <Code
                    fontSize="xl"
                >
                    +389 78 399 990
                </Code>
            </Box>
        </Template>
    )
}