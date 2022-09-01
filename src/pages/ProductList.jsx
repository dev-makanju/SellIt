import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar' 
import { Link } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Products from '../components/Product/Products'
import { useLocation } from 'react-router-dom'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import axios from 'axios'

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  
  ${mobile({
    margin: "0px 20px",
    display: 'flex',
    flexDirection: 'column',  
    gap:'10px'
  })}
`
const FilterText = styled.span`
  font-size: 20px ;
  font-weight: 600 ; 
  margin-right: 20px;

  ${mobile({
    marginRight: "20px",
  })}
`
const Select = styled.select`
  padding: 10px ;
  margin-right: 20px ;

  ${mobile({
    margin: "10px 0px",
  })}
`
const Option = styled.option`
  padding: 10px;
`

const ProductList = () => {
  const [ category , setCategory ] = useState([]);
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [ filters , setFilters ] = useState({});
  const [ sort , setSort] = useState("newest")
  const handleFilter = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }
  
  useEffect( () => {
    const getCategory = async() => {
      try{
        const res = await axios.get('https://fakestoreapi.com/products/categories')
        if(res.status){
          return setCategory(res.data);
        }
      }catch(err) {}
    }     
    getCategory()
  },[])
  
  return (
    <Container>
      <Navbar/>
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList