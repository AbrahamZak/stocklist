# StockList
Enables users to search information about stocks (company information, financial data, sentiment, news), view an interactive chart, create accounts, add stocks to a watchlist, and more. (created with React, Finnhub API, MongoDB, Node.js, Express.js, and Heroku)

(stocklist.abrahamzakharov.com)\
This project was created to display my development skills as well as my interest in financial markets.

## Features

Allows for the searching of stocks by name/ticker and displays an interactive chart and information for stock \
Sign up for an account and have a personal profile page displaying your watchlist \
Add stocks to a watchlist

## Architecture

React frontend\
Node.js Express Login/Watchlist API Server\
MongoDB database (hosted on AWS)\
Heroku for server hosting

## Tools/APIs Used

Finnhub API \
TradingView Lightweight Charts Library

## Progress
Homepage (100%)\
Search bar  and functionality (auto complete searches)- 100%\
Log in/ signup buttons - 100%\
\
Login Page (100%)\
Design - 100%\
Sign in functionality - 100%\
Sign in error handling - 100%\
\
Sign Up Page (100%)\
Design - 100%\
Sign up functionality - 100%\
Sign up error handling - 100%\
\
Individual Stock Page (75%)\
Loading Screen - 100%\
Design - 75%\
Integration with stock API - 100%\
See stock price and other stock data (earnings, company info, recommendations, price targets, technical indicator sentiment, related companies) - 100%\
See latest news for stock (company news, buzz scores, news sentiment, sector news sentiment) - 100%\
See related stocks and click on any to navigate to that stock's page - 100%\
Add stock to watchlist (when logged in) - 0%\
Interactive stock chart - 50%\
\
Wacthlist page (when logged in) (50%)\
Design - 50%\
See Watchlist - 0%\
Remove Stock from watchlist - 0%\
\
Mobile Adjustments (0%)\
Fix design for mobile experience - 0%\
Other mobile tweeks - 0%\
\
Backend (75%)\
Set up MongoDB database (100%)\
Develop backend login server / watchlist API (100%)\
Deploy Server (0%)\
Connect to React Frontend (100%)

## Known Issues
Interactive chart doesn't dynamically resize
