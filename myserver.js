var http = require('http');
var fs = require('fs');

function onRequest(request,response)
{
    response.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile('./personal.html',null,function(error,data){
        if (error)
        {
            response.writeHead(404);
            response.write('File Not Found');
        }
        else
        {
            var temp = '<h2>Portfol.io allows you to visualize your stock portfolios, and provides some analytics as well.</h2>'
            response.write(data);
            response.write(temp);

        }
        response.end();
    });
}
http.createServer(onRequest).listen(8000);