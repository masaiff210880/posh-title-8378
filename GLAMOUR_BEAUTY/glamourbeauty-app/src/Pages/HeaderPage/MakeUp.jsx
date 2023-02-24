import React, { useEffect, useState } from 'react'
import { Container,Image,Box } from '@chakra-ui/react'
import axios from 'axios'
import MakeupItem from '../HeaderPage/MakeupItem';
import Footer from './Footer';
const MakeUp = () => {
  const [makeUp,setMakeUp] = useState([]);
  const fetchMakeUp=()=>{
    try {
      axios.get(`http://localhost:3001/makeup?_limit=6`).then((res)=>{
        setMakeUp(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchMakeUp();
  },[])
  console.log(makeUp)
  return (
    <>
    <Container maxW='container.xl' marginBottom='25px' marginTop='25px'>
    <Image src='https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg' />
        <div style={{display:'flex',columnGap:'5px',marginTop:'25px'}}>
          <div style={{width:'25%',textAlign:'left',lineHeight:'35px'}}>
            <h1><b>SHOP</b></h1>
            <h1>FACE</h1>
            <h1>CHEEK</h1>
            <h1>EYE</h1>
            <h1>LIP</h1>
            <h1>BRUSHES & APPLICATORS</h1>
            <h1>ACCESSORIES</h1>
            <h1>NAIL</h1>
            <h1>MAKEUP PALETTES</h1>
            <h1>VEGAN</h1>
          </div>
          <div style={{width:'75%'}}>
          <Box w='100%'>
            <Image src='https://logan.nnnow.com/content/dam/nnnow-project/16-april-2020/makeup/13APR20_MAKEUP_CB_STRIP1_DESK_1.jpg' />
          </Box><br></br>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',rowGap:'10px'}}>
          {makeUp.map((item)=>(
            <MakeupItem key={item.id} {...item} id={item.id} />
          ))}
          </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
    </Container>
    <Footer/>
    </>
  )
}

export default MakeUp