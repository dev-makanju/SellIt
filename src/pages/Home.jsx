import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Category from '../components/Category/Category'
import Products from '../components/Product/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Wrapper = styled.div`
   max-width: 1440px;
   margin:  0px auto;
`

const Home = () => {
   return (
     <Wrapper>      
         <Announcement />
         <Navbar />
         <Slider />
         <Category />
         <Products/>
         <NewsLetter/>
         <Footer/>
     </Wrapper>
   )
}

export default Home
