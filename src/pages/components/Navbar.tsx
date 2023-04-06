import { Box, HStack, Flex, Link, Image, ButtonGroup, useBreakpointValue, IconButton, useDisclosure } from "@chakra-ui/react";
import NextLink from 'next/link'
import { FiMenu } from "react-icons/fi"
import ScrollLink from "./ScrollLink";
import { useState } from "react";

export default function Navbar() {
  const componentData = {
    image: {
      src: "/logo-hf3b.png", 
      alt: "HF3B Enterprises Inc logo"
    },
    ".links": [
      {
        a: {
          href: "/",
          textContent: "Home"
        }
      },
      {
        a: {
          href: "#plans",
          textContent: "Plans"
        }
      },
      {
        a: {
          href: "#testimonials",
          textContent: "Testimonials"
        }
      },
      {
        a: {
          href: "#faqs",
          textContent: "FAQs"
        }
      },
      {
        a: {
          href: "#contact",
          textContent: "Contact"
        }
      },
    ]
  }

  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }
 
  return (
    <Box 
      position="fixed"
      w="100%"
      bgColor="white"
      zIndex="100"
    >
      <Box as="nav" boxShadow="sm">
        <Box 
          maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
          mx="auto"
          py={{ base: "4", lg: "5" }}
        >
          <HStack 
            spacing="10" 
            justify="space-between"
            sx={{
              a: {
                color: '#E53E3E',
                fontSize: '16px',
                marginLeft: '16px',
                _hover: {
                  color: '#C53030',
                  textDecoration: 'none'
                }
              }
            }}
          >
            <Link href="/">
              <Image 
                src={componentData.image.src}
                alt={componentData.image.alt}
                h="50px"
              />
            </Link>
            
            { isDesktop 
              ? (
                <Flex justify="space-between"> 
                  <HStack spacing="3">
                    <ButtonGroup variant="link" spacing="8">
                      {componentData[".links"].map((item, i) => (
                        <ScrollLink key={i} href={item.a.href}>
                          {item.a.textContent}
                        </ScrollLink>
                      ))}
                    </ButtonGroup>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                  onClick={handleClick}
                />
              )
            }
          </HStack>
        </Box>
      </Box>

      {toggle && 
        <Flex
          flexDirection="column"
          bgColor="red"
          position="absolute"
          w="100%"
          p="20px"
        >
          {componentData[".links"].map((item, i) => (
            <Link 
              href={item.a.href} 
              key={i}
              color="white"
              fontSize="20px"
              fontWeight="600"
              borderBottom="1px solid rgba(255,255,255,0.6)"
              py="8px"
              _last={{
                border: 0
              }}
              onClick={handleClick}
            >
              {item.a.textContent}
            </Link>
          ))}
        </Flex>
      }
    </Box>
  )
}


{/* <Box 
  id="navbar"
  bgColor="rgba(227,227,227,0.9)"
  w="100%"
  maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
  borderRadius="32px"
  m="16px auto"
  px="24px"
  position="fixed"
  left="50%"
  transform="translateX(-50%)"
  zIndex="100"
>
  <Flex
    alignItems="center"
    justifyContent="space-between"
    py="8px"
  >
    <Box>
      <Image 
        src="/logo-pldthome.png"
        alt="PLDT Home logo"
        h="50px"
      />
    </Box>

    <Box
      sx={{
        a: {
          color: '#E53E3E',
          fontSize: '16px',
          fontWeight: 'bold',
          marginLeft: '16px',
          _hover: {
            color: '#C53030',
            textDecoration: 'none'
          }
        }
      }}
    >
      <Link as={NextLink} href="/">Home</Link>
      <Link as={NextLink} href="#plans">Plans</Link>
      <Link as={NextLink} href="#testimonials">Testimonials</Link> 
      <Link as={NextLink} href="#faqs">FAQs</Link>
      <Link as={NextLink} href="#contact">Contact</Link>
    </Box>
  </Flex>
</Box> */}