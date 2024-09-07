function solve (val){
    var v=document.getElementById("res");
    v.value = v.value+val;
}

function result(){
    var num1 =document.getElementById("res").value;
    var num2 =eval(num1);
    document.getElementById("res").value = num2; 
}

function Clear(){

    var clr =document.getElementById("res");
    clr.value=' ';
}
function back(){
    var bk =document.getElementById("res");
    bk.value =bk.value.slice(0,-1);
}



 
 