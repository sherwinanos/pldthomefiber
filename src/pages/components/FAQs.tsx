import { 
  Box, 
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
} from "@chakra-ui/react";


export default function FAQs() {
  const componentData = {
    headline: "Frequently Asked Questions",
    ".faq": [
      {
        h1: "What is Fiber?",
        p: `PLDT Home Fiber is the most powerful broadband suited for households with its superior network Fiber-to-the-Home (FTTH) technology that allows families to experience equal upload and download speeds up to 1Gbps. Being the first carrier of fiber optic services in the country, it has reached 6.7 million homes passed as of March 2019. It has been awarded for 2 consecutive years as the Philippines’ Fastest Fixed Internet by Ookla for 2018 and 2019.<
        
        Our plans offer a bundled unlimited Internet access with a telephone service.`
      },
      {
        h1: "What is the difference between Fiber and DSL?",
        p: `Both PLDT Home Fiber and DSL can provide a strong reliable internet connection for you and your family.

        Direct Subscriber Line (DSL) is an internet connection delivered through a telephone line to your modem without interrupting your telephone service. Our DSL plans use the copper wire technology and can deliver download speeds of as high as up to 20 Mbps. It is ideal for those who use the Internet for more basic online activities such as browsing the web, sending and receiving emails or pictures, downloading e-books
        
        Our Fiber plans use fiber optic technology where the Internet connection comes from light signals running through thin glass wires. It can deliver speed as high as up to 1 Gbps. Unlike DSL, it can provide equal upload and download internet speeds allowing you to send data from your device as fast as you can receive it from others. Uploading is necessary when you’re sending files via emails, video-calling a friend, backing up data to online or cloud storage services, or for playing online gaming.
        
        With PLDT Home Fiber, you can explore a wider variation of online activities at home on multiple devices for seamless HD quality streaming, lag-free gaming, and more.`
      },
      {
        h1: "How is Fiber better than cable internet?",
        p: `Because PLDT Home Fiber is the most advanced Internet service in the country, it’s the only one that can give you access to Cignal HD channels powered by your Fiber connection. All of PLDT Home’s products are designed to give you and your family the best online experience at home.

        Cable Internet on the other hand uses the same cables you plug in your television set for your broadband access therefore, when there are more users, there are more people sharing the bandwidth hence, the slower the internet.
        
        Subscribe to a PLDT Home Fiber plan and enjoy super-fast internet, equal download and upload speeds, plus an option to bundle with our Home Entertainment Plans perfect for your home!`
      },
      {
        h1: "How can I avail of the Fiber service",
        p: `You can apply to any of our unlimited Fiber plans here now. Just choose from any of the plans here. Make sure to prepare an attachment of one valid government ID. Once you’ve completed your application you will receive a confirmation through your email and SMS. You will also receive a call within 24-48 hours from our online sales processing team to verify some details before they process your application.

        If you are upgrading your service, your application is subject to account validation and existing credit policies with in 24-48 hours.`
      },
    ]
  }

  return (
    <Box
      id="faqs"
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
      </Box>

      <Box 
        maxW={{ base: "calc(100vw - 40px)", lg: "1260px" }}
        mx="auto"
        my={{ base: "40px", lg: "80px" }}
      >
        <Accordion>
          {componentData[".faq"].map((item, i) => (
            <AccordionItem >
              <AccordionButton py="16px">
                <Box as="span" flex='1' textAlign='left' 
                  dangerouslySetInnerHTML={{__html: item.h1}}
                  fontSize={{ base: "18px", lg: "20px" }}
                  fontWeight="500"
                />
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Text 
                  dangerouslySetInnerHTML={{__html: item.p}}
                  py="16px"
                />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

    </Box>
  )
}
