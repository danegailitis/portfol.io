import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import LineChart from './LineChart';


export default class DataBuilder {
    constructor(){
        this.data = {
            labels: [1,2,3],
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
                    data: [1, 2, 3]
                }
            ]
        }
    }
    async buildData() {
        var endpoint = `https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,stats,company,news,chart&range=1y`;
        const res = await fetch(endpoint);
        const dataJson = await res.json();
        this.setLabel(dataJson);

        return this.data;
    }
    setLabel(dataJson) {
        var x = [];
        var y = [];
        for (let i = 0; i < dataJson.chart.length; i++) {
            x.push(dataJson.chart[i].date);
            y.push(dataJson.chart[i].close);
        }
        var newdata = this.data;
        newdata.labels = y;
        newdata.datasets[0].data = y;
        this.data = newdata;
    }
    
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}





const initialState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};



/*const Graph = React.createClass({
    displayName: 'Graph',
    componentWillMount() {
        this.setState(initialState);
    },
    componentDidMount() {

        var _this = this;

        setInterval(function () {
            var oldDataSet = _this.state.datasets[0];
            var newData = [];

            for (var x = 0; x < _this.state.labels.length; x++) {
                newData.push(Math.floor(Math.random() * 100));
            }

            var newDataSet = {
                ...oldDataSet
            };

            newDataSet.data = newData;

            var newState = {
                ...initialState,
                datasets: [newDataSet]
            };

            _this.setState(newState);
        }, 5000);
    },
    render() {
        return (
            <Line data={this.state} />
        );
    }
});




export default React.createClass({
    displayName: 'RandomizedDataLineExample',

    render() {
        return (
            <div>
                <h2>Random Animated Line Example</h2>
                <Graph />
            </div>
        );
    }
});*/