import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255 , 255 , 255 , 0.5), rgba(255 , 255 , 255 , 0.5) ) , url("https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_960_720.jpg") center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;

  ${mobile({
      width: '75%',
  })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  outline: none;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`

const Link = styled.a`
  margin: 20px 0px;
  text-decoration: underline;
  font-size: 12px;
  cursor: pointer ;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
           <Title>SIGN IN</Title>
           <Form>
              <Input placeholder="username"/>
              <Input placeholder="password"/>
              <Button>LOGIN</Button>
              <Link>Don't have an account ? register  </Link>
           </Form>
        </Wrapper>
     </Container>
  )
}

export default Login  