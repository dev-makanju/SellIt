import React from 'react'
import styled from 'styled-components'
import {Send} from '@material-ui/icons'
import {mobile} from '../responsive'

const Container = styled.div`
   height: 60vh;
   background-color: #fcf5f5 ;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Title = styled.h1``

const Desc = styled.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;

   ${mobile({
      textAlign:'center'    
   })}
`
const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: #fff;
   display: flex;
   justify-content: space-between;
   border: 1px solid lightgray;

   ${mobile({
      width: '80%'     
   })}
`

const Input = styled.input`
   border: none;
   flex: 8;
   padding-left: 20px;
   outline: none;
`

const Button = styled.button`
   flex: 2 ;
   border: none ;
   background-color: teal ;
   color:  #fff ;
   cursor: pointer ;
`

const NewsLetter = () => {
   return (
     <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely from favourite products.</Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
               <Send/>
            </Button>
        </InputContainer>
     </Container>
   )
}

export default NewsLetter