
document.querySelector("form").addEventListener("submit",createTodo);

function createTodo() {
    event.preventDefault();
    // var task=document.querySelector("#task").value;
    var task1=document.querySelector("#task");
    var task=task1.value;
    task1.value="";   // this is used for after submit erase the input box

    // var priority=document.querySelector("#priority").value;
    var priority1=document.querySelector("#priority");
    var priority=priority1.value;
    priority1.value="";   // this is used for after submit erase the input box

    console.log(task,task1,priority,priority1);  // used for just console

    // now create table

    var tr=document.createElement("tr");   // for first row
        var td1=document.createElement("td");  // for first row of column 1  i.e task
        td1.innerText=task;

        var td2=document.createElement("td");  // for first row of column 2  i.e priority
        td2.innerText=priority;
            if(priority=="High")
                td2.style.backgroundColor="red";
            else
                td2.style.backgroundColor="green";

        var td3=document.createElement("td");   // for first row of column 3  i.e Delete
        td3.innerText="Delete";
        td3.style.color="red";
        td3.style.cursor="pointer";
        td3.addEventListener("click",deleteRow);

        // for append from table body
        tr.append(td1,td2,td3);
        document.querySelector("tbody").append(tr);


}

function deleteRow() {
    console.log(event.target.parentNode);  // for console
    event.target.parentNode.remove();
    // alert("Are You Sure !!");
}


