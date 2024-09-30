var student ={
    name: "Cherry",
    age : 22,
    gender:"Male",
    city:"Chennai",
    driving_license: false,
    hobbies: ["Singing, 'Dancing"],

    address: {
        streetName: "Mahindra City",
        landmarks: ["City Mall", "Maya jal mall"],
        pincode: 525363,
        apartment:{
            flat_no: 305,
            name: "AA Toweer City",
        }
    }
};

// for-in 

// for(var keyName in student){
//     console.log(student[keyName]);

//     if(keyName == 'address'){
//         console.log(student[keyName]); 
//     }
// }


// if the 100s of data stored How can we store here 
// Array of Objects
// to store similar datatypes


var classroom = [
    {
   name : "alokkumar",
   age : 22,
},{
    name : "manish",
    age : 13,
},{
    name : "jadu",
    age : 3,
}]

for (var i = 0; i < classroom.length; i++){
    console.log(classroom[i]);
}