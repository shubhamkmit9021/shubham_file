// function add() {
//     var ans=document.querySelectorAll("input");
//     var res=ans[0].value;
//     console.log(typeof(res));
//     for(var i=1; i<ans.length; i++)
//     {
//         //console.log(typeof(ans[i].value));
//          res=res + (ans[i].value);
//     }
//     console.log(res);  // its for only showing on console
//     alert("Ans is :   "+res);
    
// }

function add() {
    var ans=document.querySelectorAll("input");
    var sum=Number(ans[0].value) + Number(ans[1].value); 
    console.log(sum);
    alert("Ans is :  "+sum);
}

function subtract() {
    // var ans=document.querySelectorAll("input");
    // var res=ans[0].value;
    // console.log(typeof(res));
    // for(var i=1; i<ans.length; i++)
    // {
    //      res=res - ans[i].value;
    // }
    // console.log(res);  // its for only showing on console
    // alert("Ans is :   "+res);

    var ans=document.querySelectorAll("input");
    var res=Number(ans[0].value) - Number(ans[1].value); 
    console.log(res);
    alert("Ans is :  "+res);
    
}

function multiply() {
    // var ans=document.querySelectorAll("input");
    // var res=1;
    // for(var i=0; i<ans.length; i++)
    // {
    //    var res=res * ans[i].value;
    // }
    // console.log(res);  // its for only showing on console
    // alert("Ans is :   "+res);

    var ans=document.querySelectorAll("input");
    var res=Number(ans[0].value) * Number(ans[1].value); 
    console.log(res);
    alert("Ans is :  "+res);
    
}

function divide() {
    // var ans=document.querySelectorAll("input");
    // var res=ans[0].value;
    // for(var i=1; i<ans.length; i++)
    // {
    //    var res=res / ans[i].value;
    // }
    // console.log(res);  // its for only showing on console
    // alert("Ans is :   "+res);

    var ans=document.querySelectorAll("input");
    var res=Number(ans[0].value) / Number(ans[1].value); 
    console.log(res);
    alert("Ans is :  "+res.toFixed(2));
    
}
