import React, { useEffect , useState } from 'react'
import { useLocation } from 'react-router-dom' 
import styled from "styled-components"
import { Remove , Add } from '@material-ui/icons'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Product/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../responsive'
import { useDispatch } from 'react-redux'
import { publicRequest } from '../api/requestMethod'
import { addProduct } from '../redux/cartRedux'

const Container = styled.div``;
const Wrapper = styled.div`
   padding: 50px;
   display: flex;

   ${mobile({
      flexDirection: 'column',
      padding: '2px'
   })}
`;

const ImgContainer = styled.div`
   flex: 1;
`;

const Image = styled.img`
   width: 100%;
   height: 500px;
   object-fit: cover;


   ${mobile({
      height: '350px'
   })}
`;

const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 50px;

   ${mobile({
      padding: '10px 20px'
   })}
`
const Title = styled.h1`
   font-weight: 200;
`

const Desc = styled.p`
   margin: 20px 0px;
`

const Price = styled.span`
   font-weight: 100;
   font-size: 40px;
`

const FilterContainer = styled.div`
   display: flex;
   margin: 30px 0px;
   width: 50%;
   justify-content: space-between;

   ${mobile({
      width: '100%'
   })}   
`

const Filter = styled.div`
   display: flex;
   align-items: center;
`
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color };
   margin: 0px 5px ;
`

const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`

const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
   display: flex;
   align-items: center;
   width: 50% ;
   justify-content: space-between;
`
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;

`
const Amount = styled.span`
   width: 32px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   align-items: center;
   justify-content: center;
   display: flex;
   margin: 0px 5px;
`
const Button = styled.button`
   padding: 15px;
   bottom: 2px solid teal;
   background-color: #fff;
   cursor: pointer;
   font-weight: 500;

   ${mobile({
      minWidth:'150px',
   })}

   &:hover {
      background-color: #f8f8f8;
   }
`

const Product = () => {
   const location = useLocation();
   const id = location.pathname.split("/")[2];
   const [product , setProduct] = useState({})
   const [quantity , setQuantity] = useState(1)
   const dispatch = useDispatch()
   
   useEffect(() => {
      const getSingleProduct = async () => {
         try{
            const res = await publicRequest.get(`products/${id}`)
            if(res.status){
               setProduct(res.data)
            }
         }catch {}
      }
      getSingleProduct();
   } , [id])

   const handleAddToCart = () => {
      dispatch (
         addProduct({...product , quantity })
      )
   }

   const handleQuantity = (type) => {
      if(type === 'dec'){
         quantity > 1 && setQuantity(quantity - 1)
      }else{
         setQuantity(quantity + 1)
      }
   }

   return (
      <Container>
         <Navbar/>
         <Announcement/>
         <Wrapper>
            <ImgContainer>
               <Image src={product.image}/> 
            </ImgContainer>
            <InfoContainer>
               <Title>{ product.title }</Title>
               <Desc>
                   { product.description } 
               </Desc>
               <Price>$ {product.price }</Price>
               <FilterContainer>
                  <Filter>
                     <FilterTitle>Color</FilterTitle>
                     <FilterColor color="black"></FilterColor>
                     <FilterColor color="darkblue"></FilterColor>
                     <FilterColor color="gray"></FilterColor>
                  </Filter>
                  <Filter>
                     <FilterTitle>Size</FilterTitle>
                     <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XS </FilterSizeOption>
                     </FilterSize>
                  </Filter>
               </FilterContainer>
               <AddContainer>
                  <AmountContainer>
                     <Remove onClick={() => handleQuantity('dec')}/>
                     <Amount>{quantity}</Amount>
                     <Add onClick={() => handleQuantity('inc')}/>
                  </AmountContainer>
                  <Button onClick={() => handleAddToCart()}>ADD TO CART</Button>
               </AddContainer>
            </InfoContainer>
         </Wrapper>
         <Products />
         <NewsLetter />
         <Footer />
      </Container>
   )
}  

export default Product