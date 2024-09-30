// Object Method
// Functions

var details = {
     name : "AAlok Kumar",
     age : 22,
     print: function ( x){
        console.log("Hello Class");
        var y = x+2;
        return y;
     },
};
console.log(details.name); // Hello Class
console.log(details.print(4));  // Hello Class
// anonymous function
// print => object method
// objects => string/number/boolean, array, objects, functions


// 2 Arrays
// one object => convert arrays to arr of object

var products = ["mackbook", "iphone", "ipad"];
var price =[200000, 60000, 50000];

var data = [];

for(var i=0; i<products.length; i++){
    var obj = {};
    obj.name = products[i];
    obj["price"] = price[i];
    // console.log(obj);
    data.push(obj);
}
console.log(data);