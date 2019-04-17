import requests
import json

class TickerBuilder:
    ticker=""
    datatype=""
    datemin=""
    datemax=""
    def __init__(self, ticker, datatype, datemin, datemax):
        self.ticker = ticker
        self.datatype = datatype
    
    def getMPrice(self):
        mresp = requests.get("https://api.iextrading.com/1.0/stock/" 
            + self.ticker + 
            "/chart/dynamic")
        respjson = mresp.json() #keys range and data
        #for key in respjson.keys(): 
        #    print(key)
        datajson = respjson["data"]
        for data in datajson:
            print(data["date"]+ ": " + str(data["average"]) )

    #def interpretDType(self):
    #    if(self.datatype == "Market Price"):



aapl = TickerBuilder("aapl", "Market Price", 0, 0)
aapl.getMPrice()
