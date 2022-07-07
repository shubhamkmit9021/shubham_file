// fill in javascript code here

document.querySelector("form").addEventListener("submit",recordUpdate);

function recordUpdate() {
    event.preventDefault();
    // var name=document.querySelector("#name").value;
    var name1=document.querySelector("#name");
    var name=name1.value;
    name1.value="";

    // var id=document.querySelector("#docID").value;
    var id1=document.querySelector("#docID");
    var id=id1.value;
    id1.value="";

    // var specialization=document.querySelector("#dept").value;
    var specialization1=document.querySelector("#dept");
    var specialization=specialization1.value;
    specialization1.value="";

    // var experience=document.querySelector("#exp").value;
    var experience1=document.querySelector("#exp");
    var experience=experience1.value;
    experience1.value="";

    // var email=document.querySelector("#email").value;
    var email1=document.querySelector("#email");
    var email=email1.value;
    email1.value="";

    // var mobile=document.querySelector("#mbl").value;
    var mobile1=document.querySelector("#mbl");
    var mobile=mobile1.value;
    mobile1.value="";

    console.log(name,id,specialization,experience,email,mobile);  // just for checking

    // now create one table row and multiple column

    var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=name;

        var td2=document.createElement("td");
        td2.innerText=id;

        var td3=document.createElement("td");
        td3.innerText=specialization;

        var td4=document.createElement("td");
        td4.innerText=experience;

        var td5=document.createElement("td");
        td5.innerText=email;

        var td6=document.createElement("td");
        td6.innerText=mobile;

        var td7=document.createElement("td");

        if(experience>5)
            td7.innerText="Senior";
        else if(experience>=2 && experience<=5)
            td7.innerText="Junior";
        else
            td7.innerText="Trainee";

        var td8=document.createElement("td");
        td8.innerText="delete"
        td8.style.backgroundColor="red";
        td8.style.color="black";
        td8.style.cursor="pointer";

        td8.addEventListener("click",deleteRow);  //on delete button eventlistener performed

        // now first merge all column with table row
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);

        // now merge table row with table body
        document.querySelector("tbody").append(tr);

}

// for delete button

function deleteRow() {
    console.log(event.target.parentNode); // just for console
    event.target.parentNode.remove();
}

