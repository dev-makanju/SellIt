import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
   height: 60px;
   ${mobile({
      height: "50px"  
   })}
`
const Wrapper = styled.div`
   padding: 10px 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${mobile({
      padding: "10px 0px"  
   })}
`
const Language = styled.div`
   font-size: 14px;
   cursor: pointer;

   ${mobile({
      display: "none"  
   })}
`
const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`

const Center = styled.div`
   flex: 1;
`

const Right = styled.div` 
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   ${mobile({
      justifyContent: "center",
      flex:'2' 
   })}
`

const SearchContainer = styled.div`
   border: 0.5px solid lightgray ;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
   border-radius: 17px;
`
const Input = styled.input`
   border: none;
   outline: none;
   font-size: 12px;

   ${mobile({
      width: "50px"  
   })}
`

const Logo = styled.div`
   font-size: 18px;
   font-weight: 600;
   ${mobile({
      fontSize: "24px"  
   })}
`

const MenuItem = styled.div`
   font-size: 14px;
   cursor: pointer;
   margin-left: 25px;

   ${mobile({
      fontSize: "12px",
      marginLeft: "12px"
   })}
`

const Navbar = () => {
  return ( 
   <Container>
      <Wrapper>
         <Left>
            <Language>EN</Language>
            <SearchContainer>
               <Input placeholder="search"/>
               <Search style={{ color:"gray" , fontSize:16 }}/>
            </SearchContainer>
         </Left>
         <Center>
            <Logo>SELIT.</Logo>
         </Center>
         <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
               <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined/>
               </Badge>
            </MenuItem>
         </Right>
      </Wrapper>
   </Container>
  )
}

export default Navbar