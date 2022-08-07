function addnumber(name){
//console.log(name)
 var btn = document.getElementById(name);
 var results = document.getElementById("sum");
 if(results.innerText.length <14){
    results.innerText += btn.innerText;
 }
}

function solve(){
 var sum = document.getElementById("sum");
 var x = eval(sum.innerText);
 sum.innerText = x;
}

function clearit(){
    var sum = document.getElementById("sum");
    console.log(sum.innerText);
    sum.innerText = "";
}
