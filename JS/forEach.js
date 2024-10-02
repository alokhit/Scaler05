var arr = [1,2,3,4]

var res = [];
arr.forEach(function (elem){
    res.push(elem * elem)
});
console.log(res);
// we need to create one arrys , forEach won't res