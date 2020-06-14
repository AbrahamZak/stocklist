import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Loading from "./Loading";
import UserService from "../services/user.service";

const Background = styled.section`
  width: 100%;
  height: 100vh;
  z-index: -100;
  background: black;
`;

const Header = styled.p`
  margin-top: 0px;
  padding-top: 50px;
  font-family: "PT Sans", serif;
  color: white;
  text-align: left;
  font-size: 3rem;
  padding-left: 50px;
`;

const Content = styled.div`
  font-family: "PT Sans", serif;
  color: white;
  text-align: left;
  font-size: 1rem;
  padding-left: 50px;
`;

const List = styled.ul`
  font-family: "PT Sans", serif;
  font-size: 1rem;
  a {
    color: white;
  }
`;

const RemoveButton = styled.button`
  font-family: "PT Sans", serif;
  background-color: white;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  color: black;
  padding: 5px 25px;
  margin-left: 1%;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

//Site's watchlist page, basic text header and each watchlist item loaded from API with da elete button next to each
const Watchlist = () => {
  //Variable for watchlist
  const [watchlist, setWatchlist] = useState([{symbol: "none"}, {symbol: "hello"}]);
  //Variable for if watchlist data is loading
  const [isLoading, setLoading] = useState(true);
  //Variable for if watchlist data is reloading
  const [reload, setReload] = useState(false);

  //Get watchlist in state on component load, display a loading page until our data is loaded in
  useEffect(() => {
    async function getWatchlist(){
      var data = UserService.getWatchlist();
      return await data;
    }
    getWatchlist().then(
      (response) => {
        setWatchlist(response);
        setLoading(false);
      },
      (error) => {
        console.log("Update watchlist error!");
      }
    );
  }, []);

  //Get watchlist on reload after delete
  useEffect(() => {
    async function getWatchlist(){
      var data = UserService.getWatchlist();
      return await data;
    }
    getWatchlist().then(
      (response) => {
        setWatchlist(response);
        setReload(false);
      },
      (error) => {
        console.log("Update watchlist error!");
      }
    );
  }, [reload]);

  //Remove stock from watchlist
    const handleRemove = (ticker) => {
      UserService.updateWatchlist(ticker.symbol).then(
        () => {
          console.log("Success");
          setReload(true);
        },
        (error) => {
          console.log("Update watchlist error!");
        }
      );
    };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Background>
      <Header>My Watchlist</Header>
      <Content>
      {watchlist.length > 0 ? (
        <List>
        {watchlist.map((stock, index) => (
          <li key={index}>
            <a href={"/stock/"+ stock.symbol}>
              {stock.symbol}
            </a>
            <RemoveButton onClick={() => handleRemove(stock)}>
          Remove
        </RemoveButton>
          </li>
        ))}
        </List>
        ) : (
        <>
          <p>It seems your watchlist is empty.</p>
          <p>Find a stock and add it to your watchlist using the search bar above.</p>
        </>
        )}
      </Content>
    </Background>
  );
};

export default Watchlist;
