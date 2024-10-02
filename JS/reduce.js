// arrays  ==> input , output as single values

// var nums = [1,2,3,4];
// var sum = 0;
// for(var i=0; i<nums.length; i++){
//     sum += nums[i];
// }
// console.log(sum);


// 2 ways to calculate 
// 1. without initial values
// 2. with initial values => acc => 0

// var nums = [1,2,3,4 , 5];
// // 1st way acc - accumulator => is similar as sum,elem - elem - current element - nums[i];
// var addNumbers = nums.reduce(function(acc, elem){
//     return acc + elem;
// })
// console.log(addNumbers);

// dry run 
//i        acc         elem            acc+ elem 
// 1st   1 - nums[i]    2 - nums[1]      1 + 2 = 3
// 2nd   3              3 - nums[2]      3 + 3 = 6
// 3rd   6              4 - nums[3]      6 + 4 = 10
// 4th   10             5 - nums[4]      10 + 5 = 15







var nums = [1,2,3,4];
var res = nums.reduce(function(acc, elem){
    return acc + elem;
}, 0);
console.log(res);


// dry run 
//i        acc         elem            acc+ elem 
// 1st   0              1                0 + 1 = 1
// 2nd   1              2                1 + 2 = 3 
// 3rd   3              3                3 + 3 = 6
// 4th   6              4                6 + 4 = 10
// 5th   10             5                10 + 5 = 15 


// reduce => function => ADDNUMBERS() function 
// callback => functions as arguments
// hof => functions as parameters and arguments and / or return a function 



// Links 
// links hof 


//    hof              input           output
//    forEach          Array           undefined
//   map              array           array
//  filter           array           array
//  reduce           array           array

        
// forEach.map ==> cannot be done 
// map.forEach => yes 
// Map.filter  => yes 
// filter.map  => yes
// map.reduce => yes
// Map.filter.reduce => yes
// Map.reduce.filter => yes