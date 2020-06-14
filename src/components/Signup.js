import React, { useState } from "react";

import styled from "styled-components";

import AuthService from "../services/auth.service";

const Background = styled.section`
  width: 100%;
  height: 100vh;
  z-index: -100;
  background: black;
  overflow: auto;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 450px;
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
`;

const MessageBox = styled.p`
  font-family: "PT Sans", serif;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  padding-left: 20px;
  margin-bottom: 13px;
  display: block;
`;

const SubmitButton = styled.button`
  font-family: "PT Sans", serif;
  background-color: black;
  border-style: solid;
  border-radius: 5px;
  border-color: white;
  color: white;
  padding: 8px 39%;
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
  label {
    font-family: "PT Sans", serif;
    font-size: 0.8rem;
    line-height: 30px;
    color: white;
    font-weight: bold;
    padding-left: 20px;
  }
  input {
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
`;

const Signup = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSignup = (event) => {
    event.preventDefault();
    if (!isEmail(email)) {
      setMessage("Email is not valid!");
    } else if (password.length < 7) {
      setMessage("Password must be greater than 7 characters!");
    } else if (password !== confirmPassword) {
      setMessage("Password and confirm password do not match!");
    } else {
      setMessage("");
      AuthService.signup(email, password).then(
        () => {
          console.log("Success");
          setLoggedIn(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
        }
      );
    }
  };

  return (
    <Background>
      <Wrapper>
        <Header>Signup</Header>
        <FormDesign>
          <MessageBox>{message}</MessageBox>
          <label>
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              type="email"
            />
          </label>
          <label>
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="******"
              type="password"
              autoComplete="on"
            />
          </label>
          <label>
            Confirm Password
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              placeholder="******"
              type="password"
              autoComplete="on"
            />
          </label>
          <SubmitButton onClick={(e) => handleSignup(e)} type="submit">
            Signup
          </SubmitButton>
        </FormDesign>
      </Wrapper>
    </Background>
  );
};

export default Signup;
