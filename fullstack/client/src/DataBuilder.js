export default class DataBuilder {
    constructor(ticker){
        this.ticker = ticker;
        this.data = {
            labels: [],
            datasets: [
                {
                    label: this.ticker,
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
    }

    async buildData() {
        var endpoint = `https://api.iextrading.com/1.0/stock/${this.ticker}/batch?types=quote,stats,company,news,chart&range=1y`;
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
        newdata.labels = x;
        newdata.datasets[0].data = y;
        this.data = newdata;
    }
    
}