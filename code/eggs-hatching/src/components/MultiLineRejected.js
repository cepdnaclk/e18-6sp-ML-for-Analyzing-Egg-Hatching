import React, { Component } from 'react'
import Chart from 'react-google-charts'
// const LineData = [
//   ['x', 'According to the current data', 'Normal number of rejected eggs'],
//   [0, 0, 0],
//   [1, 10, 5],
//   [2, 23, 15],
//   [3, 17, 9],
//   [4, 18, 10],
//   [5, 9, 5],
//   [6, 11, 3],
//   [7, 27, 19]
// ]

const getRandomDataForMonth = function(line1, line2){
    var lineData = [['x',line1,line2],[0, 0, 0],]
   
    for(let i = 0; i < 30; i++){
        var a = [i, Math.random() * 30, Math.random() * 25 ]
        lineData.push(a)
    }
    console.log(lineData)
    return lineData
}

const LineData = getRandomDataForMonth('According to the current data', 'Normal number of rejected eggs')

const LineChartOptions = {
  hAxis: {
    title: 'Date',
  },
  vAxis: {
    title: 'Number of rejected eggs',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class MultiLineRejected extends Component {
  render() {
    return (

        <div>
            <div className="container mt-5">
                <h2>Reject eggs</h2>
                <Chart
                    width={'1000px'}
                    height={'410px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={LineData}
                    options={LineChartOptions}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        </div>
      
    )
  }
}
export default MultiLineRejected