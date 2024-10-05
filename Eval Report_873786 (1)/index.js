// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks


document.querySelector("form").addEventListener("submit", myTodo);

function myTodo() {
   event.preventDefault();
   var name = document.querySelector("#name").value;
   var batch = document.querySelector("#batch").value;
   var dsa = document.querySelector("#dsa").value;
   var cs = document.querySelector("#cs").value;
   var coding = document.querySelector("#coding").value;

   var tr = document.createElement("tr");
   var td1 = document.createElement("td");
   td1.innerText = name;
   console.log(td1);
   
   var td2 = document.createElement("td");
   td2.innerText = batch;
   console.log(td2);
   
   var td3 = document.createElement("td");
   td3.innerText = dsa;
   console.log(td3);
   
   var td4 = document.createElement("td");
   td4.innerText = cs;
   console.log(td4);

   var td5 = document.createElement("td");
   td5.innerText = cs;
   console.log(td5);

   var td6 = document.createElement("td");
   td6.innerText = Math.floor(((+coding+ +dsa+ +coding)/30)*100);
  
   var td7 = document.createElement("td");
    
   if((((+coding+ +dsa+ +cs)/30)*100) < 50){
    td7.innerText = "Async";
    td7.style.backgroundColor = "red";
    td7.style.color = "white";

   }
   else{
    td7.innerText = "Regular";
    td7.style.backgroundColor = "green";
    td7.style.color = "white";
   }

   var td8 = document.createElement("td")
   td8.innerText="Delete";
   td8.style.color = "red";
   td8.style.backgroundColor = "orange";
   td8.addEventListener("click", deleteTask);

   tr.append(td1, td2,td3,td4,td5,td6,td7,td8);
   document.querySelector("tbody").append(tr);
    
}

function deleteTask(){
    event.target.parentNode.remove();
}










































// document.querySelector("form").addEventListener("submit",getData);

// function getData(){
//     event.preventDefault();

//     var name = document.getElementById("name").value;
//     var batch = document.querySelector("#batch").value;
//     var dsa = document.querySelector("#dsa").value;
//     var cs = document.querySelector("#cs").value;
//     var coding = document.querySelector("#coding").value;
//    console.log(name,batch,dsa,cs,coding);

//    var tr = document.createElement("tr");
//    var td1 = document.createElement("td");
//    var td2 = document.createElement("td");
//    var td3 = document.createElement("td");
//    var td4 = document.createElement("td");
//    var td5 = document.createElement("td");
//    var td6 = document.createElement("td");
//    var td7 = document.createElement("td");
//    var td8 = document.createElement("td");

//    td1.innerText = name;
//    td2.innerText = batch;
//    td3.innerText = dsa;
//    td4.innerText = cs;
//    td5.innerText = coding;
//    td6.innerText = Math.floor(((+coding+ +dsa+ +coding)/30)*100);
   
//     if(((+coding+ +dsa+ +coding)/30)*100 < 50){
//         td7.innerText = "Async";
//         td7.style.backgroundColor = "red";
//  } else {
//     td7.innerText = "Regular";
//     td7.style.backgroundColor= "green";
//  }
//    td8.innerText = "Delete";
//    td8.style.backgroundColor = "red";
//    td8.style.color = "white";
//    td8.addEventListener("click", removeData);

//    function removeData(){
//     event.target.parentNode.remove();

//    }
//    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
//    document.querySelector("tbody").append(tr);
// }