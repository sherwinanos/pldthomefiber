import { Box, Flex, Heading, Text, SimpleGrid, Link, Image } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs"
import { IoCall } from 'react-icons/io5'
import { HiOutlineMail } from "react-icons/hi"


export default function Contact() {
  const componentData = {
    headline: "Get in Touch",
    subheadline: "Question not answered yet? I'm here to help!",
    email: "ronnietrujillo64@gmail.com",
    phone: "09215018418",
    fb: {
      href: "https://www.facebook.com/profile.php?id=100090692413386",
      textContent: "PLDT Home Fiber Dasma Cavite"
    },
    hf3b: "/hf3b.jpg"
  }

  return (
    <Box
      id="contact"
      py={{ base: "40px", lg: "80px" }}
      bgColor="#f6f6f6"
    >
      <Box 
        maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
        mx="auto"
        mb="40px"
        textAlign="center"
      >
        <Heading 
          as="h2"
          mb="16px"
          fontSize={{ base: "32px", lg: "40px" }}
        >
          {componentData.headline}
        </Heading>

        <Text>
          {componentData.subheadline}
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, lg: 3}}
        spacing={8}
        maxW={{ base: "100%", lg: "900px" }}
        mx="auto"
        textAlign="center"
      >
        <Flex alignItems="center" justifyContent="center">
          <HiOutlineMail />

          <Link href={`mailto:${componentData.email}`} ml="8px" color="red">
            {componentData.email}
          </Link>
        </Flex>
        
        <Flex alignItems="center" justifyContent="center">
          <IoCall />

          <Link href={`tel:${componentData.phone}`} ml="8px" color="red">
            {componentData.phone}
          </Link>
        </Flex>

        <Flex alignItems="center" justifyContent="center">
          <BsFacebook />

          <Link href={componentData.fb.href} ml="8px" color="red">
            {componentData.fb.textContent}
          </Link>
        </Flex>
      </SimpleGrid>

      <Flex
        maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
        mx="auto"
        mt="40px"
        alignItems="center"
        justifyContent="center"
      >
        <Image 
          src={componentData.hf3b}
          alt="HF3B Enterprises Inc logo"
          w="320px"
        />
      </Flex>
    </Box>
  )
}
