console.log("HI this is Alok Kumar !!!");

document.querySelector("form").addEventListener("submit", myTodo);

function myTodo() {
  event.preventDefault();
  var task = document.querySelector("#task").value;
  var priority = document.querySelector("#priority").value;
  console.log(task, priority);

  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = task;
  console.log(td1);

  var td2 = document.createElement("td");
  td2.innerText = priority;
  console.log(td2);

  if (priority == "High") {
    td2.style.backgroundColor = "red";
    td2.style.color = "white";
  } else {
    td2.style.backgroundColor = "green";
    td2.style.color = "white";
  }

  var td3 = document.createElement("td");
  td3.innerText = "Delete";
  td3.style.color = "red";
  td3.addEventListener("click", deleteTask);

  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
}

function deleteTask() {
  event.target.parentNode.remove();
}
