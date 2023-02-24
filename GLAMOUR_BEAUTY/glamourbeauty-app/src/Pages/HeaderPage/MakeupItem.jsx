import React from 'react'
import { Box, Image, Badge,Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { CiDiscount1 } from 'react-icons/ci'
import { Link } from 'react-router-dom';
const MakeupItem = ({ name, image, price, id }) => {
  return (
    <>
      <Box maxW='300px'   overflow='hidden' maxH='400px'>
        <Image src={image} alt={name} width='200px' margin='auto' />

        <Box p='5'>
          <Box display='flex' alignItems='center'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='black'
              fontWeight='bold'
              letterSpacing='wide'
              fontSize='13px'
              textTransform='uppercase'
              ml='2'
              display='flex' alignItems='center' columnGap='10px'
            >
            <CiDiscount1 style={{fontSize:'20px',color:'#fe44a1'}} />
            <h1>SEPHORA COLLECTION</h1>
            </Box>
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {name}
          </Box>

          <Box fontWeight='bold'>
            ₹ : {price}
          </Box>

          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < true ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm' display='flex' alignItems='center' columnGap='5px'>
              {2 * 40} rev... 
              <Link to={`/makeup/${id}`}>
              <Button colorScheme='teal' variant='outline' size='sm'>
                View More
              </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MakeupItem