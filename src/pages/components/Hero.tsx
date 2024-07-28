import { Box, Button, Flex, Heading, Stack, Text, Image, Link } from "@chakra-ui/react";
import { IoCall } from 'react-icons/io5'
import { useRouter } from 'next/router'

export default function Hero() {
  const componentData = {
    h1: "Experience fiber-fast speeds in Cavite with all-new PLDT Home Fiber Plans",
    p: "Hi, I'm Ronnie, a legit sales agent of HF3B Enterprises Inc., which offers unlimited PLDT Home Fiber plans. For interested applicants in Dasmarinas, Tagaytay, Mendez, Silang, Carmona, GMA, Gen. Trias, Imus and Bacoor, please contact me.",
    img: {
      src: "/agent-rhonie.png",
      alt: "PLDT Home Fiber Agent Rhonie"
    }
  }

  const router = useRouter()

  return (
    <Box 
      id="hero"
      bgColor="#f6f6f6"
      overflow="hidden"
      pt={{ base: "120px", lg: "80px" }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
        mx="auto"
        h={{ base: "auto", lg: "620px" }}
        px="20px"
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Heading 
            as="h1" 
            fontSize={{ base: "24px", lg: "32px" }}
            fontWeight="700"
          >
            {componentData.h1}
          </Heading>
          <Text 
            fontSize={{ base: "16px", lg: "18px" }}
            my="24px"
          >
            {componentData.p}
          </Text>
          
          <Stack direction={{ base: "column", lg: "row" }} spacing={4}>
            <Link
              className="btn btn-primary"
              href="#plans"
            >
              See all plans
            </Link>
            <Button 
              leftIcon={<IoCall />} 
              colorScheme="red" 
              variant="outline"
              onClick={() => router.push('tel:09215018418')}
            >
              09215018418 
            </Button>
          </Stack>
        </Box>

        <Box  w={{ base: "100%", lg: "50%" }}>
          <Image 
            src={componentData.img.src}
            alt={componentData.img.alt}
            position="relative"
            bottom="-20px"
          />
        </Box>
      </Flex>
    </Box>
  )
}
