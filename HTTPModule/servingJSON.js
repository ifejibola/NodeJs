//Purpose: We can also use the HTTP module to create an HTTP API, or a server whose primary purpose 
//  is to serve JSON data. APIs are used to serve data to client application. These applications include mobilie apps, and single page websites,
// any client who can make an HTTP request can communicate with an API.
// USES GET METHOD
var http = require("http");

var data = require("./data/inventory");// Inventory contains array of inventory items

http.createServer(function(request, response){
    if(request.url === "/"){
        response.writeHead(200, {"Content-Type" : "text/json"}); 

        //Send data back as json string
        response.end(JSON.stringify(data));
    }else if(request.url === "/instock"){
        listInStock(response);
    }else if(request.url === "/onorder"){
        listOnBackOrder(response);
    }else{
        response.writeHead(404, {"Content-Type" : "text/plain"});
        response.end("Opps... data not found");
    }

}).listen(3000);

console.log("Server listening on port 3k");

//Function to help search our data
function listInStock(response){
    //data is an array, it has a filter function used to filter out those data objects in our array for specific details.
    var inStock = data.filter(function(item){
        //data.filter function is know as a predicate which should only return a true or false, and will run
        // run once for every one of our inventory items.
        // If this function returns true we want to add the data to a new array, if it returns false we will skip adding the inventory item to a new array
        return item.avail === "In stock";
    });

    response.end(JSON.stringify(inStock));

}

function listOnBackOrder(response){

    var onOrder = data.filter(function(item){

        return item.avail === "On back order";
    });
    response.end(JSON.stringify(onOrder));
}