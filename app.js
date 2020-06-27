
function setVal(num){
    var val = document.getElementById("display")
    val.value += num;
}




function clr(){
    var val = document.getElementById("display")
    val.value = "";
}


function del(){
    var val = document.getElementById("display")
    var nval = val.value;
    nval = nval.split("")
    nval.pop();
    nval = nval.join("")
    val.value = nval

}

function calculation(){
    var val = document.getElementById("display")

    val.value = eval(val.value)
}

