import React , { useState , useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap ;
  justify-content: space-between;
` 

function Products({ cat , filters , sort}) {
  const [ products , setProducts ] = useState([]); 
  const [ filterProduct , setFilterProduct ] = useState([]);
  useEffect(() => {
    const getProduct = async() => {
      try{
        const res = await axios.get( cat ? `https://fakestoreapi.com/products/category/${cat}` : 'https://fakestoreapi.com/products')
        if(res.status){
          return setProducts(res.data);
        }
      }catch(err) {}
    }
    getProduct()
  },[cat])

  useEffect(() => {
    const filtered  = products.slice(0 , 8)
    setFilterProduct(filtered)
  } , [products])

  return ( 
    <Container>
      {
        filterProduct.map( product => (
          <Product product={product}/>
        ))
      }
    </Container> 
  ) 
}

export default Products 