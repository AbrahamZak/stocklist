import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { createChart } from 'lightweight-charts';

const Chart = styled.div`
  background-color: black;
  margin-left: 2.5%;
  .candlestick{
    display: none;
  }
`;

const ButtonSwitch = styled.button`
  font-family: "PT Sans", serif;
  background-color: white;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  color: black;
  padding: 5px 25px;
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

//The Stock Chart is created by taking the daily candlesticks from the API and deriving a chart from it using the TradingView Lightweight Charts Library
const StockChart = ({candles, change}) => {
  //Variable for current chart view
  const [candlestickView, setCandlestickView] = useState({
    status: false,
    buttonText: "CandleStick Chart"
  });

  //Create the chart
  useEffect(() => {
    //Adjust line color based on whether daily is up or down
    let changeColor = null;
    if (change >= 0) {
      changeColor = "rgba(144, 238, 144, 1)";
    } else {
      changeColor = "rgba(255, 100, 77, 1)";
    } 
    
    //Initialize our chart with settings
    const chart = createChart(document.querySelector('#chart'), 
    { 
      width: 500, 
      height: 300, 
      priceScale: {
        borderVisible: false,
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      layout: {
        backgroundColor: '#2B2B43',
        lineColor: '#2B2B43',
        textColor: '#D9D9D9',
      },
      watermark: {
        color: 'rgba(0, 0, 0, 0)',
      },
      crosshair: {
        color: '#758696',
      },
      grid: {
        vertLines: {
          color: '#2B2B43',
        },
        horzLines: {
          color: '#363C4E',
        },
      },
    });

    //Create our lineseries with design options
    var lineSeries = chart.addLineSeries({
      color: changeColor,
      lineStyle: 0,
      lineWidth: 2,
      crosshairMarkerVisible: true,
      crosshairMarkerRadius: 6,
      lineType: 1,
    });

    //Create an array of objects with our candlestick data and time
    var dataObjectArray = candles.t.map(function (x, i) { 
      return {time: x, value: candles.c[i]} });

    //Set the data into our line series
    lineSeries.setData(dataObjectArray);

    //Set the visible range for our chart to today
    var start = new Date();
    start.setHours(0,0,0,0);

    var end = new Date();
    end.setHours(23,59,59,999); 
    
    chart.timeScale().setVisibleRange({
      from: (Math.floor(start / 1000)),
      to: (Math.floor(end / 1000)),
    });

    //Create a chart with our candlesticks
    var candleChart = createChart(document.querySelector('#candlestick'), {
      width: 500,
      height: 300,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      layout: {
        backgroundColor: '#2B2B43',
        textColor: '#D9D9D9',
      },
      crosshair: {
      },
      grid: {
        vertLines: {
          color: '#2B2B43',
        },
        horzLines: {
          color: '#363C4E',
        },
      },
    });

    //Candlestick series
    var candleSeries = candleChart.addCandlestickSeries();

    //Create an array of objects with our candlestick data and time
    var candleObjectArray = candles.t.map(function (x, i) { 
      return {
          time: x, 
          open: candles.o[i], 
          high: candles.h[i],
          low: candles.l[i], 
          close: candles.c[i]
        }});

    //Add data into candlestick series
    candleSeries.setData(candleObjectArray);

  }, [candles.c, candles.t, candles.h, candles.o, candles.l, change]);

  //Functions to switch view of chart
  function switchView() {
    if (candlestickView.status === true){
      document.getElementById("candlestick").style.display = "none";
      document.getElementById("chart").style.display = "block";
      setCandlestickView({
        status: false,
        buttonText: "Candlestick Chart"
      })
    }
    else{
      document.getElementById("candlestick").style.display = "block";
      document.getElementById("chart").style.display = "none";
      setCandlestickView({
        status: true,
        buttonText: "Regular Chart"
      })
    }
  }

  return (
    <Chart>
        <div className="candlestick" id="candlestick"></div>
        <div className="chart" id="chart"></div>
        <ButtonSwitch onClick={switchView}>{candlestickView.buttonText}</ButtonSwitch>
    </Chart>
  )
};

export default StockChart;
