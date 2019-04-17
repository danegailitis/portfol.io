var api_key = "gYHTm8fDuu4mnxxIKb7r";
var plotly = require('plotly')("zbirenbaum", api_key);

var data = [
    {
        x: ["2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"],
        y: [1, 3, 6],
        type: "scatter"
    }
];
var graphOptions = { filename: "date-axes", fileopt: "overwrite" };
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});