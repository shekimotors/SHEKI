import { Box, Button, Center, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Template from "../components/template";
import Scroller from "../components/scroller.jsx";

export default function Home() {
  return (
    <Template lang="mk">
      <Header />
      <HeaderM />
      <Trusted />

      <Box>
        <Text
          fontSize={{base: "4xl", md: "5xl"}}
          fontWeight="bold"
          ml="1rem"
        >Секаков вид:</Text>
        
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
              Пилана
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
              Тримери
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
              Косилки
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
              Агрегатори
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
              Жабици  
              </Text>
            </Box>
        </Scroller>
      </Box>

      <Box mt="4rem">
        <Flex alignItems="center" p="1rem" justifyContent="space-between"
          flexDirection={{base: "column", md: "row"}}
        >
          <Box maxW="2xl">
            <Text fontSize="4xl" fontWeight="bold">Нови делови</Text>
            <Text fontSize="xl" ml="1rem">Ние се грижиме дека нашите поправки се со највисок квалитет. Поради оваа причина, нудиме нови делови за секој тип на мотор!</Text>
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
            <Text fontSize="4xl" fontWeight="bold">Брза услуга</Text>
            <Text fontSize="xl" ml="1rem">Ако имате итен случај и ви треба брза поправка, тогаш сте дошле на вистинското место, добијте известување и завршете ја работата!</Text>
          </Box>
        </Flex>
        
        <Flex alignItems="center" p="1rem" justifyContent="space-between"
          flexDirection={{base: "column", md: "row"}}
        >
          <Box maxW="2xl">
            <Text fontSize="4xl" fontWeight="bold">Пристапни цени</Text>
            <Text fontSize="xl" ml="1rem">Ако до сега наидовте на апсурдни цени кои не можете да си ги дозволите, тогаш време е да се вратите кај нас. Ќе извршиме поправки по пристапни цени!</Text>
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
          onClick={() => window.location.href = "/contact/mk"}
        >Контактирајте сега</Button>
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
        >Сервис за пили</Text>

        <Text
          fontSize={{ base: "xl", lg: "3xl"}}
          color="white"
          ml="1rem"
          maxW="2xl"
        >Ние сме сервис кој се занимава со пили и мотори во Скопје. Поправаме и доставуваме нови делови за сите видови пили и мотори. Без разлика каде сте, контактирајте не!</Text>

        <Center mt={{base: "2rem", lg: "4rem"}}>
          <Button 
            variant="outline" 
            p={{base: "1rem", lg: "2rem"}} 
            lineHeight="small" 
            fontSize={{base: "xl", lg: "3xl"}}
            color="white"
            borderWidth="2px"
            _hover={{ color: "gray.800", bg: "white" }}
            onClick={() => window.location.href = "/contact/mk"}
            >
             контакт
          </Button>
        </Center>
      </Box>
    </Grid>
  );
}

function HeaderM() {
  return (
    <Box display={{base: "block", md: "none"}} position="relative">
      <Image src="/b-mk.png" width={1920} height={1080}  alt="banner" />

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
        onClick={() => window.location.href = "/contact/mk"}
      >
         контакт
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