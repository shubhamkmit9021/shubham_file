document.querySelector("form").addEventListener("submit",fillData);
var sum=0;

function fillData() {
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var category=document.querySelector("#category").value;
    var brand=document.querySelector("#brand").value;
    var price=document.querySelector("#price").value;
    var delivered=document.querySelector("#deliveredBy").value;
    console.log(name,category,brand,price,delivered);

    // FOR PRICE PRINT  
    sum=sum+ +price;   // + icon is used for convert in number from string
    document.querySelector("#total-price").innerText=sum;
    
    var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=name;

        var td2=document.createElement("td");
        td2.innerText=category;

        var td3=document.createElement("td");
        td3.innerText=brand;

        var td4=document.createElement("td");
        td4.innerText=price;

        var td5=document.createElement("td");
        td5.innerText=delivered;

        var td6=document.createElement("td");
        if(price > 1000)
            td6.innerText="Expensive";
        else
            td6.innerText="Not-Expensive";

        var td7=document.createElement("td");
        td7.innerText="Delete";
        td7.style.color="red";
        td7.style.cursor="pointer";
        td7.addEventListener("click",deleteRow);

        function deleteRow() {
            event.target.parentNode.remove();
            sum=sum- +price;
            document.querySelector("#total-price").innerText=sum;
        }

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);

}