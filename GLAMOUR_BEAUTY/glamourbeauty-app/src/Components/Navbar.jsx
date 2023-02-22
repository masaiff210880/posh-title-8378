import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Image } from '@chakra-ui/react'
import logo from '../images/logo.png'
import { TfiLocationPin } from 'react-icons/tfi'
import { RxStarFilled } from 'react-icons/rx';
import { MdAppSettingsAlt } from 'react-icons/md'
import { TbTrack } from 'react-icons/tb'
import { MdLoyalty } from 'react-icons/md';
import Home from '../Pages/Home'
const Navbar = () => {
    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg='#f3f3f3' height='50px' justifyContent='space-around'>
            <Link to='/'>
                <div style={{display:'flex',columnGap:'10px',alignItems:'center'}}>
                <Image src={logo} alt='logo' width='100px'/>&nbsp;&nbsp;&nbsp;|
                </div>
            </Link>
            <Link to='/#'>
                <div style={{display:'flex',columnGap:'10px',alignItems:'center'}}>
                    <TfiLocationPin style={{color:'#fe44a1'}}/>
                    Store Locator
                </div>
            </Link>
            <Link to='/#'>
                <div style={{display:'flex',columnGap:'5px',alignItems:'center'}}>
                    <RxStarFilled style={{color:'#704280'}}/>
                    <RxStarFilled style={{color:'#ffc001'}}/>
                    <RxStarFilled style={{color:'#ec008c'}}/>
                </div>
            </Link>
            <Link to='/discount'>
                <div>Get 10% OFF on your first purchase. Use Code:</div>
                <div>BEAUTY10</div>
            </Link>
            <Link to='/#'>
                <div style={{display:'flex',columnGap:'5px',alignItems:'center'}}>
                    <RxStarFilled style={{color:'#704280'}}/>
                    <RxStarFilled style={{color:'#ffc001'}}/>
                    <RxStarFilled style={{color:'#ec008c'}}/>
                </div>
            </Link>
            <Link to='/#'>
                <div style={{display:'flex',columnGap:'10px',alignItems:'center'}}>
                    <MdAppSettingsAlt style={{color:'#fe44a1'}}/>
                    Get APP&nbsp;&nbsp;&nbsp;|
                </div>
            </Link>
            <Link to='/#'>
                <div style={{display:'flex',columnGap:'10px',alignItems:'center'}}>
                    <TbTrack style={{color:'#fe44a1'}}/>
                    Track Order&nbsp;&nbsp;&nbsp;|
                </div>
            </Link>
            <Link to='/#'>
                <div style={{display:'flex',columnGap:'10px',alignItems:'center'}}>
                    <MdLoyalty style={{color:'#fe44a1'}}/>
                    Loyalty&nbsp;&nbsp;&nbsp;
                </div>
            </Link>
            </Flex>
            {/* Home Component */}
            <Home/>
        </>
    )
}

export default Navbar