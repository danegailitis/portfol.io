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
        mresp = requests.get("https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,stats,company,news,chart&range=5y");
        respjson = mresp.json() #keys range and data
        #for key in respjson.keys(): 
        #    print(key)
        datajson = respjson["chart"];
        print(datajson)
        #print(datajson)
        #for data in datajson:
         #   print(data["date"]+ ": " + str(data["open"] )+ ": " + str(data["close"]) )

    #def interpretDType(self):
    #    if(self.datatype == "Market Price"):



aapl = TickerBuilder("aapl", "Market Price", 0, 0)
aapl.getMPrice()
