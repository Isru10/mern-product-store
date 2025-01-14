import * as React from 'react'
import Demo from './components/Demo'
import { Box, useColorModeValue } from '@chakra-ui/react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useProductStore } from './store/product'
function App() {
  
  return (
    <Box bg={useColorModeValue("gray.100","gray.900")} minH={"100vh"}>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}
export default App
