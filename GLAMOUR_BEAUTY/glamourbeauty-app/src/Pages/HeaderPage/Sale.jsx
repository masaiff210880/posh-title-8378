import { Container, Flex, Image, Box, Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../HeaderPage/Sale.css'
import Footer from './Footer';
const colors = [
  'https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2023/Smashbox_TopBanner_Desktop.jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/08-feb-2023/se/ND_TopBannerdesktop.jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/22-feb-2023/DearDahlia_Topbannerdesktop(1).jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/14-feb-2023/DrDennis_HomePageBanner_Desktop.jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/22-feb-2023/SC_Holidaycollection_HPBanner_Desktop(1).jpg'
];
const delay = 2500;
const Sale = () => {
  const [data, setData] = useState([]);
  const [spring, setSpring] = useState([]);
  const [newBlock,setNewBlock] = useState([]);
  const fetchAnastia = () => {
    try {
      axios.get(`http://localhost:3001/anastasia`).then((res) => {
        setData(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  const fetchSpring = () => {
    try {
      axios.get(`http://localhost:3001/spring`).then((res) => {
        setSpring(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  const fetchNewBlock = () => {
    try {
      axios.get(`http://localhost:3001/newBlock`).then((res) => {
        setNewBlock(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAnastia();
    fetchSpring();
    fetchNewBlock();
  }, [])

  console.log(data);
  // Slider Logic
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
      <div className="slideshow" style={{ marginTop: '25px', marginBottom: '50px' }}>
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
            // style={{ backgroundColor }}
            ><img src={backgroundColor} alt="slid" width='100%' /></div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* Slider Done */}
      <Container maxW='container.xl' marginBottom='150px'>
        <Flex columnGap='20px' justifyContent='center' alignItems='center' minWidth='max-content'>
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q2.jpg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q3.jpg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/10-may-2021/25MAR21_SEPHORA_BP_DESK_Q4.jpg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q5.jpg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/08-may-2021/7MAY21_SEPHORA_BP_Q6.jpg' alt='steals and deals' width='180px' />
        </Flex>
        <Image src='https://logan.nnnow.com/content/dam/nnnow-project/07-nov-2022/Header_Desk.jpg' alt='heading' style={{ marginTop: '50px' }} />
        <Box w='100%'>
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/22-feb-2023/ABH_BOTW_Strip_Desktop-01.jpg' />
        </Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} justifyContent='center' alignItems='center'>
          {data.map((item) => (

            <GridItem w='100%' key={item.id} marginTop='25px'>
              <Image src={item.image} alt='banner' />
            </GridItem>

          ))}
        </Grid>
        <Image src='https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg' alt='heading' style={{ marginTop: '50px', marginBottom: '10px' }} />
        <Box w='100%'>
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg' />
        </Box>
        <Image src='https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2023/Sephora_HeaderStrip_SpringEssentials_text_Desktop_3310x240.jpg' alt='heading' style={{ marginTop: '50px', marginBottom: '10px' }} />
        <Grid templateColumns='repeat(3, 1fr)' gap={6} justifyContent='center' alignItems='center'>
          {spring.map((item) => (

            <GridItem w='100%' key={item.id} marginTop='25px'>
              <Image src={item.image} alt='banner' />
            </GridItem>

          ))}
        </Grid>
        <Image src='https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg' alt='heading' style={{ marginTop: '50px', marginBottom: '10px' }} />
        <Flex columnGap='20px' justifyContent='center' alignItems='center' minWidth='max-content'>
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg' alt='steals and deals' width='180px' />
          <Image src='https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg' alt='steals and deals' width='180px' />
        </Flex>
        <Image src='https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg' alt='heading' style={{ marginTop: '50px', marginBottom: '10px' }} />
        <Grid templateColumns='repeat(3, 1fr)' gap={6} justifyContent='center' alignItems='center'>
          {newBlock.map((item) => (

            <GridItem w='100%' key={item.id} marginTop='25px'>
              <Image src={item.image} alt='banner' />
            </GridItem>

          ))}
        </Grid>
      </Container>
      <Footer/>
    </>
  )
}

export default Sale