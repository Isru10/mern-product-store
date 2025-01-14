import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {PlusSquareIcon} from "@chakra-ui/icons";
import {LuSun} from "react-icons/lu"
import {IoMoon} from "react-icons/io5"
import { useProductStore } from '../store/product';
const Navbar = () => {
  const {colorMode,toggleColorMode}=useColorMode();
  return (
    <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100","gray.900")}>

<Flex h={16} justifyContent={"space-between"} alignItems={"center"} flexDir={{base:"column",md:"row"}} >
<Text   
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  fontSize={{base:'22',sm:'28'}}
  fontWeight={'bold'}
  textTransform={'uppercase'}
  textAlign={'center'}
  bgClip={"text"} >
    <Link to={"/"}> Product Store 🛒 </Link>
     </Text>

     <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
          <Button>  
            <PlusSquareIcon fontSize={20} />
          </Button>
        </Link>

        <Button onClick={toggleColorMode}>  
          {colorMode==="light" ? 
          <IoMoon/>
          : 
          <LuSun size="20"/>
          }
        </Button>
     </HStack>
</Flex>
    </Container>
  )
}

export default Navbar