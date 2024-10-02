var sweet = ["laddo","kalakand","kova","rusgulla","rasmalai"];

// for(var i=0; i<sweet.length; i++){
//     console.log(sweet[i]);
// }


//Better  and faster ways 
//ForEach 

// Syntex:- 
// arr.forEach(function(elem, index, arr){
//     console.log(elem);
// })

 
var res = [];
sweet.forEach(function (elem, i, array){
    res.push(elem);
    // console.log(elem, i, array);
})
console.log(res, "For Each");

// function(element, index, array)





// map
var output = sweet.map(function(elem){
       return elem;
})

console.log(output, "map function");

// Note:- ( Diffrence Between Map and forEach)
// charge packing => map will be return an arrays
// additional charges => forEach => will not return anything