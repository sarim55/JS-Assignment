function getnumber(no){
    var result=document.getElementById("result");
    result.value += no;
}
function clearresult(){
    var result=document.getElementById("result");
    result.value = ""
}
function getresult(){
    var result=document.getElementById("result");
    result.value = eval(result.value)
}