import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add , Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
const Container = styled.div``

const Wrapper = styled.div`
   padding: 20px;
   ${mobile({
      padding: '10px'
   })}
`
const Title = styled.div``

const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`

const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: #${props => props.type === "filled" && "none"};
   background-color: #${props => props.type === "filled" ? "#000" : 'transparent'};
   color: #${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
   ${mobile({
      display: 'none'
   })}
`
const TopText = styled.div``
const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({
      flexDirection: 'column'
   })}
`

const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Summary = styled.div`
   flex: 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 10px;
   height: 50vh;
`

const Hr = styled.hr`
   background-color : #eee ;
   border: none;
   height: 1px;
`

const Product = styled.div`
   display: flex;
   justify-content: space-between;

   ${mobile({
      flexDirection: 'column'
   })}
`

const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
`

const ProductDetail = styled.div`
   flex: 2;
   display: flex;
`
const Image = styled.img`
   width: 200px;
   margin-left: 20px ;
`
const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const ProductName = styled.div``

const ProductId = styled.div``

const ProductSize = styled.div``

const PriceDetail = styled.div`
   display: flex;
   align-items: center;
   flex: 1;
   flex-direction: column;
   justify-content: center;
`
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
`
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;

   ${mobile({
      margin: '5px 15px'
   })}
`
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;

   ${mobile({
      marginBottom: '20px'
   })}
`
const SummaryTitle = styled.h1`
   font-size: 200;
`

const SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props => props.type ==='total' && '24px'};
   font-size: ${props => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: white;
  font-weight: 600;
`


const Cart = () => {
   const cart = useSelector( state => state.cart)
   console.log(cart)
   return (
     <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
               <TopButton>CONTINUE SHOPPING</TopButton>
               <TopTexts>
                  <TopText>Shopping Bag(2)</TopText>
                  <TopText>Your Wishlist(0)</TopText>
               </TopTexts>
               <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
               <Info>
                  {cart.products.map( product => (   
                     <Product>
                        <ProductDetail>
                           <Image src={product.image}/>
                           <Details>
                              <ProductName><b>Product:</b> { product.title } </ProductName>
                              <ProductId><b>ID:</b> { product.id }</ProductId>
                              <ProductColor color="black"/>
                              <ProductSize><b>Size:</b> 37.8</ProductSize>
                           </Details>
                        </ProductDetail>
                        <PriceDetail>
                           <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>{product.quantity}</ProductAmount>
                              <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>$ {product.price}</ProductPrice>
                        </PriceDetail>
                     </Product>
                  ))}
                  <Hr/>
               </Info>
               <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>$ 80</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Estimated shipping</SummaryItemText>
                     <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>$ -5.4</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                     <SummaryItemText>Total</SummaryItemText>
                     <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryButton>CHECKOUT NOW</SummaryButton>
               </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
     </Container>
   )
}

export default Cart