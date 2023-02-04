import { Flex, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar(props) {
  if (props.lang === 'en') {
    return (
      <nav>
        <Flex
          alignItems="center"
        >
          <Link href="/en"><Text
            fontSize="3xl"
            fontWeight="bold"
            color="tomato"
            pl="1rem"
          >SHEKI</Text></Link>

          <Box display={{base: "none", md: "block"}}>
            <ul style={{
              listStyle: "none", 
              display: "flex",
              marginLeft: "2rem",
              }}>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/en">Faqja</Link></li>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/service">Sherbimet</Link></li>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/contact/en">Kontakt</Link></li>
            </ul>
          </Box>

          <Flex
            alignItems="center"
            marginLeft="auto"
          >
          <Link href="/al"><Text fontSize="3xl" ml="1rem">🇦🇱</Text></Link>
          <Link href="/mk"><Text fontSize="3xl" ml="1rem">🇲🇰</Text></Link>
          <Link href="/en"><Text fontSize="3xl" ml="1rem" mr="1rem">🇬🇧</Text></Link>
          </Flex>
        </Flex>
      </nav>
    )
  }

  if (props.lang === 'mk') {
    return (
      <nav>
        <Flex
          alignItems="center"
        >
          <Link href="/mk"><Text
            fontSize="3xl"
            fontWeight="bold"
            color="tomato"
            pl="1rem"
          >SHEKI</Text></Link>

          <Box display={{base: "none", md: "block"}}>
            <ul style={{
              listStyle: "none", 
              display: "flex",
              marginLeft: "2rem",
              }}>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/mk">Почетна</Link></li>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/service">Услуги</Link></li>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/contact/mk">Контакт</Link></li>
            </ul>
          </Box>

          <Flex
            alignItems="center"
            marginLeft="auto"
          >
          <Link href="/al"><Text fontSize="3xl" ml="1rem">🇦🇱</Text></Link>
          <Link href="/mk"><Text fontSize="3xl" ml="1rem">🇲🇰</Text></Link>
          <Link href="/en"><Text fontSize="3xl" ml="1rem" mr="1rem">🇬🇧</Text></Link>
          </Flex>
        </Flex>
      </nav>
    )
  }

  if (props.lang === 'al') {
    return (
      <nav>
        <Flex
          alignItems="center"
        >
          <Link href="/"><Text
            fontSize="3xl"
            fontWeight="bold"
            color="tomato"
            pl="1rem"
          >SHEKI</Text></Link>

          <Box display={{base: "none", md: "block"}}>
            <ul style={{
              listStyle: "none", 
              display: "flex",
              marginLeft: "2rem",
              }}>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/">Ballina</Link></li>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/service">Shërbimet</Link></li>
              <li color="gray" style={{marginLeft: "1rem"}}><Link href="/contact/al">Kontakt</Link></li>
            </ul>
          </Box>

          <Flex
            alignItems="center"
            marginLeft="auto"
          >
          <Link href="/al"><Text fontSize="3xl" ml="1rem">🇦🇱</Text></Link>
          <Link href="/mk"><Text fontSize="3xl" ml="1rem">🇲🇰</Text></Link>
          <Link href="/en"><Text fontSize="3xl" ml="1rem" mr="1rem">🇬🇧</Text></Link>
          </Flex>
        </Flex>
      </nav>
    )
  }
}