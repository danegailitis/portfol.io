import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import DataBuilder from './DataBuilder';


export default class LineChart extends Component {
  constructor(props){
    super(props);
    var ticker = 'aapl'; //need backend hook
    this.db = new DataBuilder(ticker);
    this.state = this.db.data;
  }

  componentDidMount() {
    window.addEventListener("resize", this.props.setRedraw, true);
    this.db.buildData().then(newdata =>{
        this.setState(newdata);
    });
  }

  componentWillUnmount() {
  }
  render() {
    var chartdata= this.state;
      return(
        <div>
        <h2>Line Example</h2>
        <Line data={chartdata}
          ref="chart"
        />
        </div >
      );
  }
}