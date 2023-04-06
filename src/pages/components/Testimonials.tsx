import { Box, Heading, Text, Flex, Image, Button } from "@chakra-ui/react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useRouter } from 'next/router'
import ScrollLink from "./ScrollLink";


export default function Testimonials() {
  const componentData = {
    headline: "Testimonials",
    subheadline: "Check my clients feedback about my service",
    ".testimonials": [
      {
        quote: "Our review is 5 star po para kay sir Ronaldo very accommodating po sya, lahat ng itatanong po namin ay nasasagot nya at hindi ka po maiintimidate na magtanong sa kanya. And legit po talaga si sir, dahil rin po sa kanya ay mabilis kaming nakabitan ng wifi. Lastly, very thankful rin po kami sa kanya.",
        customer: "Hanna",
        img: { src: "/client-hanna.jpg", alt: "PLDT Home Fiber customer Hanna" }
      },
      {
        quote: "Maraming salamat po sir, malaking tulong to talaga na makabitan kami agad ng internet. Talagang for recommended po na agent kayo sa pag-assist po. Thank you po ulit sa pag-assist. God Bless po, marami po sana magpa-assist sa inyo",
        customer: "Catnel",
        img: { src: "/client-catnel.jpg", alt: "PLDT Home Fiber customer Catnel" }
      },
      {
        quote: "Sir Rhonnie, thank you so much. I'm very satisfied with your service. Very recommendable at garantisado ang inyong service as in. Napakabilis ng askyon at kabit agad ang aming internet connection. Mabilis ang internet. Thank you so much",
        customer: "Pete",
        img: { src: "/client-pete.jpg", alt: "PLDT Home Fiber customer" }
      },
      {
        quote: "Hello po, big thanks po kay Kuya for helping us out po with PLDT Home Fiber po. Highly recommend na agent po sya, if need nyo po magpakabit. Thank you for assisting us ulit po. God bless.",
        customer: "Kimberly",
        img: { src: "/client-kimberly.jpg", alt: "PLDT Home Fiber customer" }
      },
      {
        quote: "Good afternoon po sir Rhonie. Thank you so much po for your assistance. I'm very satisfied po sa service nyo. Very recommendable at garantisado ang inyo service as in! Napakabilis po naikabit yung internet connection namin. Mabilis din po ang internet kahit saang sulok ng bahay may signal po. Thank you sir",
        customer: "Eleanor",
        img: { src: "/client-eleanor.jpg", alt: "PLDT Home Fiber customer" }
      },
      {
        quote: "Salamat sa pag-assist sa akin sir Rhonie sa pag-apply ko ng PLDT kung hindi dahil sa kanya hindi ako makapag-apply ng PLDT at ang bilis ng process, 2 days lang may PLDT na ako at ang ganda ng service ang bilis ng wifi",
        customer: "Eigarm",
        img: { src: "/client-eigarm.jpg", alt: "PLDT Home Fiber customer" }
      },
      {
        quote: "So far, so good naman ang connection namen. Wala namang problem and mabilis talaga sya. In terms naman po ng processing ng application hanggang mainstallan very good rin. Talagang na-assist even though online application ung pag-process ng akin. Thank you sa mabili na pagprocess. Very good and good job",
        customer: "JB",
        img: { src: "/client-jb.jpg", alt: "PLDT Home Fiber customer" }
      },
      {
        quote: "Sir Rhonie maraming thank you sa lahat ng assist mo sakin sa PLDT Home Fiber thank you so much. I'm very satisfied with your service. Very recommendable at garantisado ang inyong service as in. Napakabilis ng askyon at kabit agad ang aming internet connection. Mabilis ang internet. Thank you so much",
        customer: "Roselle",
        img: { src: "/client-roselle.jpg", alt: "PLDT Home Fiber customer" }
      },
    ]
  }

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

  const router = useRouter()

  return (
    <Box 
      id="testimonials"
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

      <Box 
        maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
        mx="auto"
        textAlign="center"
      >
        <Slider {...slickSettings}>
          {componentData[".testimonials"].map((slider, i) => (
            <Box key={i}>
              <Flex 
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                bgColor="white" 
                p="24px 24px 80px 24px"
                w={{ base: "100%", lg: "96%" }}
                h={{ base: "400px", lg: "360px" }}
                borderRadius="24px"
              >
                <Heading 
                  as="h3"
                  fontSize="20px"
                  fontWeight="300"
                  position="relative"
                  px="20px"
                  sx={{ 
                    "&>span": {
                      paddingLeft: '20px',
                      paddingRight: '20px'
                    },
                    "&>#quoteLeft": {
                      position: 'absolute',
                      top: '0',
                      left: '0'
                    },
                    "&>#quoteRight": {
                      position: 'absolute',
                      bottom: '0',
                      right: '0'
                    }
                  }}
                >
                  <FaQuoteLeft id="quoteLeft" />
                  <span>{slider.quote}</span>
                  <FaQuoteRight id="quoteRight" />
                </Heading>

                <Flex
                  flexDirection="column"
                  alignItems="center"
                  w="100%"
                  position="absolute"
                  bottom="16px"
                >
                  <Image 
                    src={slider.img.src}
                    alt={slider.img.alt}
                    w="30px"
                    h="30px"
                    m="0 0 8px"
                  />

                  <Text
                    fontWeight="700"
                  >
                    {slider.customer}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box 
        maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
        mx="auto"
        mt="80px"
        textAlign="center"
      >
        <ScrollLink
          className="btn btn-primary"
          href="#faqs"
        >
          Learn more
        </ScrollLink>
      </Box>

    </Box>
  )
}
