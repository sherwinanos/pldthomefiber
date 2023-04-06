import { Box, SimpleGrid, Image, Heading, Text, Link } from "@chakra-ui/react";
import { useRouter } from 'next/router'

export default function Plans() {
  const componentData = {
    headline: "Check our Fiber Unlimited Plans",
    subheadline: "We've got you covered with the reliable internet that's right for your home",
    '.plans': [
      {
        title: "Plan 1299",
        description: "",
        img: {
          src: "/plan-1299.jpg",
          alt: "Plan 1299"
        }
      },
      {
        title: "Plan 1699",
        description: "",
        img: {
          src: "/plan-1699.jpg",
          alt: "Plan 1699"
        }
      },
      {
        title: "Plan 2099",
        description: "",
        img: {
          src: "/plan-2099.jpg",
          alt: "Plan 2099"
        }
      },
      {
        title: "Plan 2699",
        description: "",
        img: {
          src: "/plan-2699.jpg",
          alt: "Plan 2699"
        }
      },
    ]
  }

  const router = useRouter()

  return (
    <Box
      id="plans"
      py={{ base: "40px", lg: "80px" }}
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
        columns={{ base: 1, lg: 4 }}
        spacing={8}
        maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
        mx="auto"
      >
        {componentData[".plans"].map((plan, i) => (
          <Box
            key={i}
            textAlign="center"
          >
            <Image 
              src={plan.img.src}
              alt={plan.img.alt}
            />

            <Heading 
              as="h3"
              fontSize={{ base: "24px", lg: "32px" }}
              mt="24px"
            >
              {plan.title}
            </Heading>
          </Box>
        ))}
      </SimpleGrid>

      <Box 
        maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
        mx="auto"
        mt="40px"
        textAlign="center"
      >
        <Link
          className="btn btn-primary"
          href="#contact"
        >
          Apply Now
        </Link>
      </Box>
    </Box>
  )
}
