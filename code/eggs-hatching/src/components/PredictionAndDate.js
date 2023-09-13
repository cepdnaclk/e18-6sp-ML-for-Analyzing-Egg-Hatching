
import React, { Component, useState, useEffect } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';

function PredictionAndDate() {

  const [data, setData] = useState(null);

  const LineChartOptions = {
    hAxis: {
      title: 'Date',
      format: 'yyyy-MM-dd',
    },
    vAxis: {
      title: 'Number of Hatching Eggs',
    },
    series: {
      1: { curveType: 'function' },
    },
    colors: ['red'],
  }

  var lineData = [['Date','Prediction']]

  useEffect(() => {
    // Make an API request using Axios
    axios.get('http://localhost:5000/test-data')
      .then((response) => {
          // Handle the successful response Date(createdAt).toLocaleDateString()
          lineData.splice(2, lineData.length);
          response.data.forEach(element => {
            const date = new Date(element.createdAt);
            var a = [date.toLocaleDateString(), element.prediction];
            lineData.push(a);
          });
          console.log(lineData);
          setData(lineData);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once on component mount

  return (
    <div>
            <div className="container mt-5">
                <h2>Predictions of the days</h2>
                <Chart
                    width={'800px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={LineChartOptions}
                />
            </div>
        </div>
  );
}

export default PredictionAndDate;
