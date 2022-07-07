// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",reportCard);

function reportCard() {
    event.preventDefault();

    // var name=document.querySelector("#name").value;
    var name1=document.querySelector("#name");
    var name=name1.value;
    name1.value="";

    // var batch=document.querySelector("#batch").value;
    var batch1=document.querySelector("#batch");
    var batch=batch1.value;
    batch1.value="";

    // var DSA=document.querySelector("#dsa").value;
    var DSA1=document.querySelector("#dsa");
    var DSA=DSA1.value;
    DSA1.value="";

    // var skillathon=document.querySelector("#cs").value;
    var skillathon1=document.querySelector("#cs");
    var skillathon=skillathon1.value;
    skillathon1.value="";

    // var coding=document.querySelector("#coding").value;
    var coding1=document.querySelector("#coding");
    var coding=coding1.value;
    coding1.value="";

    console.log(name,batch,DSA,skillathon,coding);  // for show all value on console

    // now create a row and 7 column

    var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=name;

        var td2=document.createElement("td");
        td2.innerText=batch;

        var td3=document.createElement("td");
        td3.innerText=DSA;

        var td4=document.createElement("td");
        td4.innerText=skillathon;

        var td5=document.createElement("td");
        td5.innerText=coding;

        var td6=document.createElement("td");
        var sum = Number(DSA) + Number(skillathon) + Number(coding);
        console.log(sum);   // for sum show on console
        var res=(sum/30)*100;
        td6.innerText=res.toFixed(2);

        var td7=document.createElement("td");
        if(res>50)
        {
            td7.innerText="Pass";
            td7.style.backgroundColor="green";
        }
        else
        {
            td7.innerText="Fail";
            td7.style.backgroundColor="red"; 
        }
           

        var td8=document.createElement("td");
        td8.innerText="delete"
        td8.style.color="red";
        td8.style.cursor="pointer";
      
        td8.addEventListener("click",deleteRow);

        // now append the all column with row
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

        // now append the row with table body
        document.querySelector("tbody").append(tr);

}

// for delete

function deleteRow() {
    console.log(event.target.parentNode);  // for show on console
    event.target.parentNode.remove();
}