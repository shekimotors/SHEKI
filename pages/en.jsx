import { Box, Button, Center, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Template from "../components/template";
import Scroller from "../components/scroller.jsx";

export default function Home() {
  return (
    <Template lang="en">
      <Header />
      <HeaderM />
      <Trusted />

      <Box>
        <Text
          fontSize={{base: "4xl", md: "5xl"}}
          fontWeight="bold"
          ml="1rem"
        >Any kind:</Text>
        
        <Scroller>
            <Box
              m=".5rem"
              w={{base: "10rem", md: "16rem"}}
              h={{base: "14rem", md: "20rem"}}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              p="1rem"
              display="inline-block"
            >
              <Box 
                position="relative"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                h={{base: "10rem", md: "16rem"}}
              >
                <Image src="/images/1.png" width={1920} height={1080}  alt="chainsaws" />
              </Box>

              <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                Chainsaws
              </Text>
            </Box>

            <Box
              m=".5rem"
              w={{base: "10rem", md: "16rem"}}
              h={{base: "14rem", md: "20rem"}}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              p="1rem"
              display="inline-block"
            >
              <Box 
                position="relative"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                h={{base: "10rem", md: "16rem"}}
              >
                <Image src="/images/2.png" width={1920} height={1080} layout="responsive"  alt="chainsaws" />
              </Box>

              <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                Trimers
              </Text>
            </Box>

            <Box
              m=".5rem"
              w={{base: "10rem", md: "16rem"}}
              h={{base: "14rem", md: "20rem"}}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              p="1rem"
              display="inline-block"
            >
              <Box 
                position="relative"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                h={{base: "10rem", md: "16rem"}}
              >
                <Image src="/images/3.png" width={1920} height={1080} layout="responsive"  alt="chainsaws" />
              </Box>

              <Text fontSize="3xl" fontWeight="bold" textAlign="center">
              Lawn Mowers
              </Text>
            </Box>

            <Box
              m=".5rem"
              w={{base: "10rem", md: "16rem"}}
              h={{base: "14rem", md: "20rem"}}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              p="1rem"
              display="inline-block"
            >
              <Box 
                position="relative"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                h={{base: "10rem", md: "16rem"}}
              >
                <Image src="/images/4.jpg" width={1920} height={1080} layout="responsive"  alt="chainsaws" />
              </Box>

              <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                Agregators
              </Text>
            </Box>

            <Box
              m=".5rem"
              w={{base: "10rem", md: "16rem"}}
              h={{base: "14rem", md: "20rem"}}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              p="1rem"
              display="inline-block"
            >
              <Box 
                position="relative"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                h={{base: "10rem", md: "16rem"}}
              >
                <Image src="/images/5.jpg" width={1920} height={1080} layout="responsive"  alt="chainsaws" />
              </Box>

              <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                Plate Compactor
              </Text>
            </Box>
        </Scroller>
      </Box>

      <Box mt="4rem">
        <Flex alignItems="center" p="1rem" justifyContent="space-between"
          flexDirection={{base: "column", md: "row"}}
        >
          <Box maxW="2xl">
            <Text fontSize="4xl" fontWeight="bold">New parts</Text>
            <Text fontSize="xl" ml="1rem">We ensure that our repairs are of the highest quality. For this reason, we offer new parts for every type of engine!</Text>
          </Box>

          <Box position="relative" w="36rem" bg="gray.900"
            border="1px solid"
            borderColor="gray.400"
            maxW="90%"
          >
            <Image src="/images/6.jpg" width={1024} height={720} alt="parts" />
          </Box>
        </Flex>

        <Flex alignItems="center" p="1rem" justifyContent="space-between"
          flexDirection={{base: "column-reverse", md: "row"}}
        >
          <Box position="relative" w="36rem" bg="gray.900"
            border="1px solid"
            borderColor="gray.400"
            mr="2rem"
            maxW="90%"
          >
            <Image src="/images/7.jpg" width={1024} height={720} alt="parts" />
          </Box>

          <Box maxW="2xl">
            <Text fontSize="4xl" fontWeight="bold">Fast service</Text>
            <Text fontSize="xl" ml="1rem">If you have an emergency and need a quick repair, then you&apos;ve come to the right place, get notified and get the job done!</Text>
          </Box>
        </Flex>
        
        <Flex alignItems="center" p="1rem" justifyContent="space-between"
          flexDirection={{base: "column", md: "row"}}
        >
          <Box maxW="2xl">
            <Text fontSize="4xl" fontWeight="bold">Affordable prices</Text>
            <Text fontSize="xl" ml="1rem">If until now you have come across absurd prices that you cannot afford, then it is time to come back to us. We will carry out repairs at affordable prices!</Text>
          </Box>

          <Box position="relative" w="36rem" bg="gray.900"
            border="1px solid"
            borderColor="gray.400"
            maxW="90%"
          >
            <Image src="/images/8.png" width={1024} height={720} alt="parts" />
          </Box>
        </Flex>
      </Box>


      <Center m="4rem">
        <Button colorScheme="red" size="lg"
          onClick={() => window.location.href = "/contact/al"}
        >Contact Now</Button>
      </Center>
    </Template>
  )
}


function Header() {
  return (
    <Grid display={{base: "none", md: "grid"}}>
      <Box gridArea="1/1" filter="blur(2px)">
        <Image src="/banner.png" width={1920} height={1080}  alt="banner" />
      </Box>

      <Box
        gridArea="1/1"
        bg="black"
        zIndex={3}
        opacity={0.5}
      >

      </Box>

      <Box 
        gridArea="1/1"
        zIndex={4}
        padding="2.5rem"
      >
        <Text 
          fontSize={{ base: "6xl", lg: "8xl"}}
          fontWeight="bold"
          color="white"
        >Chainsaw Service</Text>

        <Text
          fontSize={{ base: "xl", lg: "3xl"}}
          color="white"
          ml="1rem"
          maxW="2xl"
        >We are a service that deals with saws and motors in Skopje. We repair and supply new parts for all types of saws and engines. No matter where you are, contact us!</Text>

        <Center mt={{base: "2rem", lg: "4rem"}}>
          <Button 
            variant="outline" 
            p={{base: "1rem", lg: "2rem"}} 
            lineHeight="small" 
            fontSize={{base: "xl", lg: "3xl"}}
            color="white"
            borderWidth="2px"
            _hover={{ color: "gray.800", bg: "white" }}
            onClick={() => window.location.href = "/contact/en"}
            >
            Contact
          </Button>
        </Center>
      </Box>
    </Grid>
  );
}

function HeaderM() {
  return (
    <Box display={{base: "block", md: "none"}} position="relative">
      <Image src="/b-en.png" width={1920} height={1080}  alt="banner" />

      <Button
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"

        variant="outline"
        p="2rem"
        lineHeight="small"
        fontSize="3xl"
        color="white"
        borderWidth="2px"
        _hover={{ color: "gray.800", bg: "white" }}
        onClick={() => window.location.href = "/contact/en"}
      >
        Contact
      </Button>
    </Box>
  );
}


function Trusted() {
  return (
    <Box mt="2rem">
      <Flex alignItems="center" justifyContent="space-around" h="4rem">
        <Box position="relative" w={{base: "75px", md: "200px"}}>
          <Image src="/stihl.png" width={200} height={200} alt="stihl" />
        </Box>

        <Box position="relative"  w={{base: "50px", md: "100px"}}>
          <Image src="/husqvarna.png" width={100} height={200} alt="husqvarna" />
        </Box>

        <Box position="relative" w={{base: "75px", md: "200px"}}>
          <Image src="/makita.png" width={200} height={200} alt="makita" />
        </Box>
      </Flex>

      <Flex alignItems="center" justifyContent="space-around" h="4rem">

      </Flex>
    </Box>
  );
}