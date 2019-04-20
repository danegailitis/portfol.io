import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import DataRequest from './DataRequest';


export default  class LineChart extends Component {

  componentDidMount() {
      const { datasets } = getData();
      console.log(datasets[0].data);
  }

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line ref="chart" data={getData()}/>
      </div>
    );
  }
}


function getData() {
  var dr = new DataRequest('aapl');
  dr.initData();
    var xlabels = dr.dates;
    var yvals = dr.values;


  //console.log(dr.dates);

  var data = {
    labels: xlabels,
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: yvals
      }
    ]
  };
  return data;
}
