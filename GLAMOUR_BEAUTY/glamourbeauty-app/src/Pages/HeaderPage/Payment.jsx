import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react';
  import { FaGooglePay } from 'react-icons/fa'
  import { FaPaypal } from 'react-icons/fa'
  import { AiFillBank } from 'react-icons/ai'
  import { BsFillCreditCardFill } from 'react-icons/bs';
  import { MdDateRange } from 'react-icons/md'
  import { FaCcVisa } from 'react-icons/fa'
import Footer from './Footer';
import { useState  } from 'react';
import { Navigate } from 'react-router-dom';
  
  export default function Contact() {
    const [count,setCount] = useState(5);
    // const [show,setShow] = useState(false);
    const handlePayment=()=>{
            setInterval(() => {
              // console.log("count running", Date.now(), count);
              // setCount(count - 1);
              setCount((precount) => {
                if (precount === 1) { 
                  return <Navigate to='/' />
                }
                return precount - 1;
              });
            }, 1000);
    }
    return (
        <>
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Payment</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Please fill all the details carefully!
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          >
                          Order No : 12365987
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          >
                          Help : glamour@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                         >
                      
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaGooglePay size="50px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaPaypal size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<AiFillBank size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Card Number</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsFillCreditCardFill color="gray.800" />}
                            />
                            <Input type="number" size="md" placeholder='XXXX-XXXX-XXXX-XXXX' />
                          </InputGroup>
                        </FormControl>
                        <div style={{display:'flex',columnGap:'20px'}}>
                        <FormControl id="name">
                          <FormLabel>Valid Thru</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdDateRange color="gray.800" />}
                            />
                            <Input type="text" size="md" width='100px' placeholder='12/24' />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>CCV</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<FaCcVisa color="gray.800" />}
                            />
                            <Input type="text" size="md" width='100px' placeholder='XXX' />
                          </InputGroup>
                        </FormControl>
                        </div>
                        {/* <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl> */}
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            onClick={handlePayment}>
                            Pay Now
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                    
                  </Box>
                </WrapItem>
              </Wrap>
              <div style={{fontSize:'50px'}}>
                {count}
            </div>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer/>
      </>
    );
  }