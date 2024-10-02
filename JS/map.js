var arr = [1, 2, 3  , 4, 5, 6, 7, 8];

// var res = arr.map(function (elem){
//     return elem*elem;
// })
// console.log(res);


// var res = arr.map(function(elem){
//     return elem % 2 == 0;
// })
// console.log(res);
// // divisiable by 2

var res = arr.filter(function(elem){
    return elem % 2 == 0 && elem > 4;
})
console.log(res);
// divisiable by 2
// 1 % 2 == 0 => false
// boolean for condition

// filter
// filter returns the arrays also


//  Note :-
// forEach, map, filter, 


