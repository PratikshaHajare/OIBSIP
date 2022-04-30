displayList();
let addtaskinput = document.getElementById("addtaskinput");
let addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        let task = localStorage.getItem("todo");
        if(task == null){
            todoList = [];
        }
        else{
            todoList = JSON.parse(task);
        }
        todoList.push({'task_name':addtaskinputval, 'completeStatus':false});
        localStorage.setItem("todo", JSON.stringify(todoList));
        addtaskinput.value = '';
    }
    displayList();
})

// displayList
function displayList(){
    let task = localStorage.getItem("todo");
    if(task == null){
        todoList = [];
    }
    else{
        todoList = JSON.parse(task);
    }
    let html = '';
    let addtasklist = document.getElementById("addtasklist");
    todoList.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    ${taskCompleteValue}
                    <td><i class="fa-solid fa-pen" onclick="editItem(${index})"></i>
                    <button type="button" class="text-success" id=${index}><i class="fa-solid fa-circle-check"></i>Complete</button>
                    <i class="fa-solid fa-trash" onclick="deleteitem(${index})"></i>
                    </td>
                </tr>`;
    });
    addtasklist.innerHTML = html;
}

// editItem
function editItem(index){
    let saveindex = document.getElementById("saveindex");
    let addbtn = document.getElementById("addbtn");
    let savebtn = document.getElementById("savebtn");
    saveindex.value = index;
    let task = localStorage.getItem("todo");
    let todoList = JSON.parse(task); 
    
    addtaskinput.value = todoList[index]['task_name'];
    addbtn.style.display="none";
    savebtn.style.display="block";
}

// savetask
let savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click", function(){
    let addbtn = document.getElementById("addbtn");
    let task = localStorage.getItem("todo");
    let todoList = JSON.parse(task); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in todoList[saveindex]) {
        if(keys == 'task_name'){
            todoList[saveindex].task_name = addtaskinput.value;
        }
      }
    savebtn.style.display="none";
    addbtn.style.display="block";
    localStorage.setItem("todo", JSON.stringify(todoList));
    addtaskinput.value='';
    displayList();
})


// deleteitem
function deleteitem(index){
    let task = localStorage.getItem("todo");
    let todoList = JSON.parse(task);
    todoList.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todoList));
    displayList();
}

// complete task
let addtasklist = document.getElementById("addtasklist");
    addtasklist.addEventListener("click", function(e){
       let task = localStorage.getItem("todo");
        let todoList = JSON.parse(task);
        
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            for (keys in todoList[mytargetid]) {
                if(keys == 'completeStatus' && todoList[mytargetid][keys]==true){
                    todoList[mytargetid].completeStatus = false;
                }
                else if(keys == 'completeStatus' && todoList[mytargetid][keys]==false){
                    todoList[mytargetid].completeStatus = true;
                }
              }
        localStorage.setItem("todo", JSON.stringify(todoList));
        displayList();
    }
    })