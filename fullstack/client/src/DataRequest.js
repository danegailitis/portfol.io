class DataRequest {
    constructor(ticker){
        this.ticker = ticker;
        this.dateReturned = false;
        this.valueReturned = false;
        this.reqErr = false;
        this.dates = [];
        this.values = [];

    }
    initData(){
        getData(this.ticker)
        .then(data => {
            for (let i = 0; i < data.chart.length; i++) {
                this.dates.push(data.chart[i].date);
                this.values.push(data.chart[i].close);
            }
        });
    
    }
}

async function getData(ticker) {
    var endpoint = `https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote,stats,company,news,chart&range=1y`;
    const response = await fetch(endpoint);
    let data = await response.json();
    return data;
}

export default DataRequest;
    //let tickerRequest = this.ticker;