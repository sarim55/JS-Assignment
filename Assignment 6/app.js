var list=document.getElementById("list");

function addTodo(){
    var todo_Items=document.getElementById("todoItem");
    var li=document.createElement('li');
    var litext=document.createTextNode(todo_Items.value);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
var delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    var editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit"
    delbtn.style.margin = "0px 0px 0px 60px";
    editbtn.style.margin = "0px 0px 0px 10px"
    delbtn.setAttribute("onclick","dItems(this)");
    editbtn.setAttribute("onclick","edit(this)")
    td1.appendChild(litext);
    td2.appendChild(delbtn);
    td3.appendChild(editbtn);
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    list.appendChild(tr)

    todo_Items.value="";
  
}
 
function dItems(a){
    a.parentNode.parentNode.remove(); 
}


function dAll(){
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function edit(a){
    console.log(a.parentNode.parentNode.firstChild.innerHTML)
var curr = a.parentNode.parentNode.firstChild.innerHTML;
var newTask = prompt("Enter the new task",curr);
a.parentNode.parentNode.firstChild.innerHTML = newTask;
}



