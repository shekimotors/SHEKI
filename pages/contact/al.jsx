import { Center, Text, Box, Code } from '@chakra-ui/react'
import Template from '../../components/template'

export default function Contact() {
    return (
        <Template lang="al">
            <Text
                fontSize={{ base: "5xl", md: "6xl" }}
                fontWeight="bold"
                mt="3rem"
                textAlign="center"
            >Kontaktoni Tani</Text>

            <Center >
                <Text
                    fontSize="2xl"
                    mt="1rem"
                    textAlign="center"
                    maxW="2xl"
                    p="1rem"
                >Ne jemi gati qe te marim porosi ne cdo kohe. E rendesishme eshte qe ju te nakontaktoni ne opcionet e paraqitura pak me poshte:</Text>
            </Center>

            <Box
                ml={{ base: "2rem", md: "10rem" }}
            >
                <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    mt="3rem"
                >Numri:</Text>

                <Code
                    fontSize="xl"
                >
                    +389 78 399 990
                </Code>
            </Box>
        </Template>
    )
}