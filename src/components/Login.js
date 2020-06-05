import React from "react";

import styled from "styled-components";

const Background = styled.section`
  width: 100%;
  height: 91vh;
  z-index: -100;
  background: black;
  overflow: auto;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 50vh;
  margin: 0 auto;
  z-index: -10;
  background: black;
  border-style: solid;
  border-radius: 10px;
  border-color: white; 
  margin-top: 50px;
`;

const Header = styled.p`
font-family: "PT Sans", serif;
font-size: 1.5rem;
font-weight: bold;
color: white;
padding-left: 20px;
margin-bottom: 13px;
display: block;
`

const SubmitButton = styled.button`
  font-family: "PT Sans", serif;
  background-color: black;
  border-style: solid;
  border-radius: 5px;
  border-color: white;
  color: white;
  padding: 8px 40%;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition-duration: 0.4s;
  margin-left: 5%;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const FormDesign = styled.form`
label{
  font-family: "PT Sans", serif;
  font-size: .8rem;
  line-height: 30px;
  color: white;
  font-weight: bold;
  padding-left: 20px; 
}
input{
  font-family: "PT Sans", serif;
  font-size: 1rem;
  padding-right: 45%;
  padding-left: 2.5%;
  height: 40px;
  margin-left: 20px; 
  background-color: black;
  border-style: solid;
  border-radius: 5px;
  border-color: white;
  color: white;
  margin-bottom: 15px;
}
`

const Login = () => {
    return (  
        <Background>
            <Wrapper>
               <Header>Login</Header>
               <FormDesign>
                <label>Email
                <input name="email" placeholder="Email" type="email" />
                </label>
                 <label>Password
                  <input name="password" placeholder="******" type="password" autocomplete="on"/>
                  </label>
               <SubmitButton type="submit">Login</SubmitButton>                                                      
              </FormDesign>
            </Wrapper>
        </Background>
    );
}
 
export default Login;