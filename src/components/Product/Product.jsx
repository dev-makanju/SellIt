import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@material-ui/icons'

const Info = styled.div`
   opacity: 0;
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background-color: #0000007b;
   z-index: 3;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all .5s ease;
`

const Container = styled.div`
   flex: 1 ;
   margin: 5px ;
   min-width: 280px ;
   height: 350px ;
   align-items: center ;
   justify-content: center ;
   display: flex;
   background-color: #f5fbfd ;
   position: relative;

   &:hover ${Info}{
      opacity: 1;
   }
`

const Circle = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: #fff;
   position: absolute;
` 

const Icon  = styled.div`
   height: 40px;
   width: 40px; 
   border-radius: 50%;
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 10px;
   cursor: pointer;
   transition: all .5s ease;

   &:hover{
      background-color: #e9f5f5;
      transform: scale(1.1);
   }
`

const Image = styled.img`  
   height: 300px;
   width: 100%;
   z-index: 2;  
`

function Product({product}) {
   return (
      <Container>
         <Circle/>
         <Image src={product.image}/>
         <Info>
            <Icon>
               <ShoppingCartOutlined/>
            </Icon> 
            <Icon>
               <Link to={`/product/${product.id}`}>
                  <SearchOutlined/>
               </Link>
            </Icon>
            <Icon>
               <FavoriteBorderOutlined/>
            </Icon>
         </Info>
      </Container> 
   )
}

export default Product