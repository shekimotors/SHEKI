import { Center, Text, Box, Code } from '@chakra-ui/react'
import Template from '../../components/template'

export default function Contact() {
    return (
        <Template lang="mk">
            <Box
                bg="linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('/polygon.svg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
            >
                <Text
                    fontSize={{ base: "5xl", md: "6xl" }}
                    fontWeight="bold"
                    mt="3rem"
                    textAlign="center"
                >Контактирајте сега</Text>

                <Center >
                    <Text
                        fontSize="2xl"
                        mt="1rem"
                        textAlign="center"
                        maxW="2xl"
                        p="1rem"
                    >Подготвени сме да примаме нарачки во секое време. Важно е да не контактирате во опциите претставени подолу:</Text>
                </Center>
           

                <Box
                    ml={{ base: "2rem", md: "10rem" }}
                >
                    <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        mt="3rem"
                    >Број:</Text>

                    <Code
                        fontSize="xl"
                    >
                        +389 78 399 990
                    </Code>
                </Box>
            </Box>
        </Template>
    )
}