import React, { useEffect } from "react";

import styled from "styled-components";

import { createChart } from 'lightweight-charts';

const Chart = styled.div`
  background-color: black;
  margin-left: 2.5%;
  height: 50vh;
  width: 100%;
`;

//The Stock Chart is created by taking the daily candlesticks from the API and deriving a chart from it using the TradingView Lightweight Charts Library
const StockChart = ({candles}) => {

  //Create the chart
  useEffect(() => {
    //Initialize our chart with settings
    const chart = createChart(document.querySelector('#chart'), 
    { 
      width: 500, 
      height: 300, 
      priceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
    });

    //Create our lineseries with design options
    var lineSeries = chart.addLineSeries({
      topColor: 'rgba(32, 226, 47, 0.56)',
      bottomColor: 'rgba(32, 226, 47, 0.04)',
      lineColor: 'rgba(32, 226, 47, 1)',
      lineWidth: 2,
    });

    //Chart theme options
    var chartTheme = {
      chart: {
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
      },
    };

    //Apply the chart theme to our chart
    chart.applyOptions(chartTheme.chart);

    //Create an array of objects with our candlestick data and time
    var dataObjectArray = candles.t.map(function (x, i) { 
      return {time: x, value: candles.c[i]} });

    //Set the data into our line series
    lineSeries.setData(dataObjectArray);

    //Set the visible range for our chart
    chart.timeScale().setVisibleRange({
      from: (new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0))).getTime() / 1000,
      to: (Math.floor(Date.now() / 1000)),
    });
    
  }, [candles.c, candles.t]);


  return (
    <Chart>
      <div className="chart" id="chart"></div>
    </Chart>
  )
};

export default StockChart;
