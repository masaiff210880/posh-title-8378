import React from 'react'
import { Flex, InputGroup, InputLeftElement, Input, Image,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  ModalCloseButton, } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import Header from '../Components/Header';
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <>
      <Flex marginTop='30px' minWidth='max-content' alignItems='center' justifyContent='space-around'>
        <div>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='#ec008c' />}
            />
            <Input type='text' placeholder='Search GLAMOUR BEAUTY' width='400px' style={{ borderLeft: 'none', borderTop: 'none', borderRight: 'none' }} />
          </InputGroup>
        </div>
        <div style={{ marginRight: '300px' }}>
          <Link to='/'>
            <Image src={logo} alt='logo' width='150px' />
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to='/cart'>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
              <HiOutlineShoppingBag style={{ fontSize: '20px', color: '#ec008c' }} />|&nbsp;&nbsp;&nbsp;
            </div>
          </Link>
          <Link to='/sale'>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
              <HiOutlineUserCircle style={{ fontSize: '20px', color: '#ec008c' }} />
              <button style={{ border: 'none' }} onClick={onOpen}>Login</button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Create your account</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>First name</FormLabel>
                      <Input ref={initialRef} placeholder='First name' />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Last name</FormLabel>
                      <Input placeholder='Last name' />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

            </div>
          </Link>
        </div>
      </Flex>
      {/* All Tabs is start from here */}
      <div style={{ marginTop: '30px' }}>
        <Header />
      </div>
    </>
  )
}

export default Home