// store marks of student in arryas
var subjects =["English", "math", "Hindi"];
var marks = [90, 95,80];
//marks of Math?
//search in subject for index of Maths
// marks[index]

var studentDetails =["Cherry", 22, "Male", "Banglore", false];
//name/age/gender /city/ ==> no clue

// update value :-
// console.log(studentDetails);
studentDetails[3] ="Patna";
// console.log(studentDetails);


// Object:-
// var variableName ={
//     keyName:"value",
// }

var student ={
    name: "Cherry",
    age : 22,
    gender:"Male",
    city:"Chennai",
    driving_license: false,
}
// keys should be unique

console.log(studentDetails);
console.log(student);

// There are 2 ways to represent Object
// 1. Bracket notation 
// object["KeyName"]
console.log(student["age"]);

// 2. Dot notation
// console.log(student.gender);
// console.log(student.driving_license);
// console.log(student.hobbies); // undefined

student["name"] = "AAlok";
student["age"] = 24;
student["hobbies"] = ["Eating Food", "Dancing"];

console.log(student);


student.driving_license = true;
// console.log(student);
student.gender = "Female";
// console.log(student);
student.hobbies = "Playing Cricket";
student.smoking = false;

console.log(student);
// delete student["smoking"];
// delete student.smoking;
console.log(student);

// ================
//masai ==> input
//{m:1, a:2, s:1, i:1} numner of occurences
// Do using object 

var str = "masai";
var diary = {};


for(var i = 0; i < str.length; i++){
    var char = str[i];
    
    if(diary[char] == undefined){
        diary[char] = 1;
    }
    else{
        diary[char] = diary[char] + 1;
    }
}
// i = 0 => m = 1
// i = 1 => m:1, a:1
// i = 2 => m:1 , a:1, s:1, 
// i = 3 => m:1 , a:1, s:1, a:1 
// i = 4 => m:1 , a:1, s:1, a:1 , i:1


// dry Run 
// i = 0 => m = 1
// i = 1 => m:1, a:1
// i = 2 => m:1 , a:1, s:1, 
// i = 3 => m:1 , a:2, s:1, a:1 



console.log(diary);
//undefined => object 


