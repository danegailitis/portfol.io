import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


const default_data = {
    labels: [],
    datasets: [
        {
            label: "chart",
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
            data: []
        }
    ]
}

export default class LineChart extends Component {
    constructor(props) {
        super(props);
        this.ticker = "aapl";
        this.state = default_data;
        //this.props = props;
        this.tickerSearch = this.tickerSearch.bind(this);
    }
    
    componentWillUnmount() {
    }

    componentDidMount() {
        window.addEventListener("resize", this.props.setRedraw, true);
        this.buildData(this.ticker).then(newdata => {
            this.setState(newdata);
        });
    }
    render() {
        return (
            <div className="myChart">
                <h2>{this.ticker.toUpperCase()}</h2>
                <Line data={this.state} />
                <input
                    id="ticker"
                    type="text"
                    label="ticker"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Enter Stock Ticker"
                    name="search"
                    required
                ></input>
                <button onClick={this.tickerSearch}>Search</button>
            </div>
        );
    }

    tickerSearch() {
        var ticker = document.getElementById("ticker").value;
        ticker=ticker.toLowerCase();
        document.getElementById("ticker").value = '';
        this.dataUpdate(ticker);
    }

    dataUpdate(ticker) {
        this.ticker=ticker;
        this.buildData(ticker).then(newdata => {
            this.setState(newdata);
        });
    }
    async buildData(ticker) {
        var endpoint = `https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote,stats,company,news,chart&range=1y`;
        const res = await fetch(endpoint);
        const dataJson = await res.json();
        var newdata = this.genNewData(dataJson);
        return newdata;
    }

    genNewData(dataJson) {
        var x = [];
        var y = [];
        for (let i = 0; i < dataJson.chart.length; i++) {
            x.push(dataJson.chart[i].date);
            y.push(dataJson.chart[i].close);
        }
        var newdata = default_data;
        newdata.labels = x;
        newdata.datasets[0].data = y;
        return newdata;
    }

}