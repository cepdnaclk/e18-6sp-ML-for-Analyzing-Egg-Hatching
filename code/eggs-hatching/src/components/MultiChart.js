
import React, { Component, useState, useEffect } from 'react';
import Chart from 'react-google-charts';
import { Input, Radio, Space } from 'antd';
import axios from 'axios';

function MultiChart() {

  const [data, setData] = useState(null);

  var LineChartOptions = {
    hAxis: {
      title: '',
    },
    vAxis: {
      title: 'Prediction',
    },
    series: {
      1: { curveType: 'function' },
    },
  }

  var lineData = [['Total eggs','Prediction'],[0, 0],]

  const [value, setValue] = useState(1);


  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);

    if (e.target.value == 2){

      lineData.splice(0, lineData.length);
      lineData[0] = ['Age', 'Prediction'];
      lineData[1] = [0,0];
      
      
      axios.get('http://localhost:5000/test-data')
      .then((response) => {
          // Handle the successful response
          
          response.data.forEach(element => {
            var a = [element.age, element.prediction];
            lineData.push(a);
          });
          console.log("2 - data :"+lineData);
          setData(lineData);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
      
    }else if(e.target.value == 3){
      lineData.splice(0, lineData.length);
      lineData[0] = ['Sex Ratio', 'Prediction'];
      lineData[1] = [0,0];
      
      axios.get('http://localhost:5000/test-data')
      .then((response) => {
          // Handle the successful response
          
          response.data.forEach(element => {
            var a = [element.sex_ratio, element.prediction];
            lineData.push(a);
          });
          console.log("3 - data :"+lineData);
          setData(lineData);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });

      
  
  }else if(e.target.value == 4){
    lineData.splice(0, lineData.length);
    lineData[0] = ['Egg Weight', 'Prediction'];
    lineData[1] = [0,0];
    
    
    axios.get('http://localhost:5000/test-data')
    .then((response) => {
        // Handle the successful response
        
        response.data.forEach(element => {
          var a = [element.egg_weight, element.prediction];
          lineData.push(a);
        });
        console.log("4 - data :"+lineData);
        setData(lineData);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });

  
}else if(e.target.value == 5){
  lineData.splice(0, lineData.length);
  lineData[0] = ['Feed Female', 'Prediction'];
  lineData[1] = [0,0];
  
  
  axios.get('http://localhost:5000/test-data')
  .then((response) => {
      // Handle the successful response
      
      response.data.forEach(element => {
        var a = [element.feed_female, element.prediction];
        lineData.push(a);
      });
      console.log("5 - data :"+lineData);
      setData(lineData);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });


}else if(e.target.value == 6){
  lineData.splice(0, lineData.length);
  lineData[0] = ['Feed Male', 'Prediction'];
  lineData[1] = [0,0];
  
  
  axios.get('http://localhost:5000/test-data')
  .then((response) => {
      // Handle the successful response
      
      response.data.forEach(element => {
        var a = [element.feed_male, element.prediction];
        lineData.push(a);
      });
      console.log("6 - data :"+lineData);
      setData(lineData);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });


}else if(e.target.value == 7){
  lineData.splice(0, lineData.length);
  lineData[0] = ['Mortality Female', 'Prediction'];
  lineData[1] = [0,0];
  
  
  axios.get('http://localhost:5000/test-data')
  .then((response) => {
      // Handle the successful response
      
      response.data.forEach(element => {
        var a = [element.mortality_female, element.prediction];
        lineData.push(a);
      });
      console.log("7 - data :"+lineData);
      setData(lineData);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });


}else if(e.target.value == 8){
  lineData.splice(0, lineData.length);
  lineData[0] = ['Mortality Male', 'Prediction'];
  lineData[1] = [0,0];
  
  
  axios.get('http://localhost:5000/test-data')
  .then((response) => {
      // Handle the successful response
      
      response.data.forEach(element => {
        var a = [element.mortality_male, element.prediction];
        lineData.push(a);
      });
      console.log("8 - data :"+lineData);
      setData(lineData);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });

}
    
  };

  useEffect(() => {
    // Make an API request using Axios
    axios.get('http://localhost:5000/test-data')
      .then((response) => {
          // Handle the successful response
          response.data.forEach(element => {
            var a = [element.total_eggs, element.prediction];
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
    <div className='row'>
            <div className="col-md-8">
              <div className="container">
                    <h2>Prediction vs Other factors</h2>
                    
                      <Chart
                        width={'800px'}
                        height={'410px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={data}
                        options={LineChartOptions}
                      />
                    
                </div>
            </div>
            
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="container">
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={1}>Total eggs</Radio>
                    <Radio value={2}>Age</Radio>
                    <Radio value={3}>Sex Ratio</Radio>
                    <Radio value={4}>Egg Weight</Radio>
                    <Radio value={5}>Feed Female</Radio>
                    <Radio value={6}>Feed Male</Radio>
                    <Radio value={7}>Morality Female</Radio>
                    <Radio value={8}>Morality Male</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
            
        </div>
  );
}

export default MultiChart;
