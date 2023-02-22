import React from 'react'
import { Flex, InputGroup, InputLeftElement, Input, Image } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import Header from '../Components/Header';
const Home = () => {
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
              <HiOutlineShoppingBag style={{fontSize:'20px',color:'#ec008c'}}/>|&nbsp;&nbsp;&nbsp;
            </div>
          </Link>
          <Link to='/login'>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
              <HiOutlineUserCircle style={{fontSize:'20px',color:'#ec008c'}} />
              <h1>Login</h1>
            </div>
          </Link>
        </div>
      </Flex>
      {/* All Tabs is start from here */}
      <div style={{marginTop:'30px'}}>
       <Header/>
      </div>
    </>
  )
}

export default Home