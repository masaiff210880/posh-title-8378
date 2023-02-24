import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
export default function SingleProduct() {
  const { id }= useParams();
  console.log(id)
  const [data,setData] = useState([]);
  console.log('product data',data)
  const fetchSingleProduct=async()=>{
    try {
      axios.get(`http://localhost:3001/makeup/${id}`).then((res)=>{
        setData(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchSingleProduct();
  },[])
  return (
    <>
    <Container maxW={'7xl'} marginBottom='100px'>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Box>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={data.image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '80%', sm: '400px', lg: '500px' }}
            p='20px'
          />
          <Image src={data.image} width='300px' style={{marginTop:'60px',borderRadius:'25px',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}} />
        </Box>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', lg: '3xl' }}>
              {data.name}
            </Heading>
            <Text
              color={useColorModeValue('black', 'black')}
              fontWeight='bold'
              fontSize={'2xl'}>
              ₹ : {`${data.price}.00`}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {data.name}
              </Text>
              <Text fontSize={'lg'}>
              Cosmetics products have been generally defined as “articles intended to be applied to the human body by being rubbed, poured, sprinkled, or sprayed for cleansing, promoting attractiveness, beautifying, or altering the appearance” [53a]. Cosmeceuticals are cosmetic products having some specific therapeutic effects.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} textAlign='left' marginLeft='60px'>
                <List spacing={2}>
                  <ListItem>Color</ListItem>
                  <ListItem>Brand</ListItem>{' '}
                  <ListItem>Quality</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem> 24 Burnt Sienna</ListItem>
                  <ListItem>Glamour Beauty</ListItem>
                  <ListItem>Good Quality</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2} lineHeight='50px'>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between Weight:
                  </Text>{' '}
                  20 GM
                </ListItem>
                {/* <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem> */}
                {/* <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem> */}
                {/* <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem> */}
                {/* <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem> */}
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  OTHER ELIGIBLE PRODUCTS:
                  </Text>{' '}
                  BUY WORTH 5,000 FROM SEPHORA COLLECTION AND GET A POUCH WITH 3 DELUXE SAMPLES FREESEP5000
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  DELIVERY/STORE OPTIONS :
                  </Text>{' '}
                  Fast Delivery ( between 2 and 3 days ){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                Ingredients
              </Box>
              <FiChevronDown />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Avocado Oil: Provides comfort and nutrition for lips.
            A Combination of Resins and Jellifying Agents: Coats pigments and guarantees a no-transfer film for long term wear.
            Vitamin E: Provides antioxidant properties.
            Isododecane, Dimethicone, Trimethylsiloxysilicate, Polybutene, Petrolatum, Cyclohexasiloxane, Kaolin, Disteardimonium Hectorite, Cera Alba (Beeswax), Silica Dimethyl Silylate, Aroma (Flavor), Glyceryl Behenate/Eicosadioate, Propylene Carbonate, Persea Gratissima (Avocado) Oil, Tocopherol, Cyclopentasiloxane, Benzyl Alcohol. May or may not contain (+/-): Mica, CI 15850 (Red 7 Lake), CI 19140 (Yellow 5 Lake), CI 77891 (Titanium Dioxide), CI 77491 (Iron Oxides), CI 77492 (Iron Oxides), CI 77499 (Iron Oxides), CI 15850 (Red 6), CI 42090 (Blue 1 Lake), CI 75470 (Carmine)
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                What it does
              </Box>
              <FiChevronDown />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            This high-coverage lip product features avocado oil for a texture that transforms as you wear it: when applied, the initial cream texture becomes a silky, lightweight stain. Lips achieve stunning color and feel soft and comfortable
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br></br>
      <br></br>
      <br></br>
    </Container>
    <Footer/>
    </>
  );
}