import React, { useEffect, useState } from 'react'
import { Container,Image,Box } from '@chakra-ui/react'
import axios from 'axios'
import MakeupItem from '../HeaderPage/MakeupItem';
import Footer from './Footer';
// import Pagination from './Pagination';
const MakeUp = () => {
  const [makeUp,setMakeUp] = useState([]);
  const [totalPage,setTotalPage] = useState(0);
  const [page,setPage] = useState(1);
  const fetchMakeUp=(page)=>{
    try {
      axios.get(`http://localhost:3001/makeup?_page=${page}&_limit=6`).then((res)=>{
        setTotalPage(res.headers.get('x-total-count'));
        setMakeUp(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchMakeUp(page);
  },[page])
  // console.log(makeUp)
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
        {/* <Pagination 
        current={page} 
        total={totalPage} 
        onChange={(value)=>setPage(value)} 
        /> */}
        <div>
        <button style={{border:'1px solid teal',padding:'5px',borderRadius:'5px',marginRight:'10px'}} disabled={page===1} onClick={()=>setPage(page-1)}>Previous</button>
        <button style={{border:'1px solid teal',padding:'5px',borderRadius:'5px',marginRight:'10px',width:'50px'}} disabled>{page}</button>
        <button style={{border:'1px solid teal',padding:'5px',borderRadius:'5px',marginRight:'10px'}} onClick={()=>setPage(page+1)} disabled={page===Math.ceil(totalPage/6)}>Next</button>
        </div>
    </Container>
    <Footer/>
    </>
  )
}

export default MakeUp