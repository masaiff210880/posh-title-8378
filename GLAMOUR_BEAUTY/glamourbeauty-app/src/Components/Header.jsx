import React from 'react'
import { NavLink } from 'react-router-dom';
import { Divider } from '@chakra-ui/react'
const links = [
    { path: '/sale' , title : 'SALE' },
    { path: '/makeup' , title : 'MAKEUP' },
    { path: '/skincare' , title : 'SKINCARE' },
    { path: '/gragrance' , title : 'FRAGRANCE' },
    { path: '/haircare' , title : 'HAIRCARE' },
    { path: '/tools' , title : 'TOOLS & BRUSHES' },
    { path: '/brands' , title : 'BRANDS' }
];
const Header = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-around'}}>
        {links?.map((link,index)=>(
            <NavLink className='NavbarTabs' key={index+1} to={link.path} style={({isActive})=>{
                return isActive ? { textDecoration:'none',color:'#ec008c',fontWeight:'bold' } : { textDecoration:'none',color:'black',fontWeight:'bold' };
            }}>{link.title}</NavLink>
        ))}
    </div>
    <Divider style={{marginTop:'15px'}}/>
    </>
  )
}

export default Header