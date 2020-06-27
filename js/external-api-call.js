var https = require("https");

var API_KEY = "lUG-hi8SVgFZqxxI8-TGTndI2Vxiu-19ihGvzANv2WU";
var URL = "https://discover.search.hereapi.com/v1/discover?at=12.96643,77.5871&q=hospital&apikey=" + API_KEY + "&limit=5"

const callExtApi = () => {
    https.get(URL, (resp) =>{
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            var arr = JSON.parse(data);
            console.log(arr["items"]);
            return data;
        });
        // return JSON.parse(data);

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
module.exports = callExtApi;