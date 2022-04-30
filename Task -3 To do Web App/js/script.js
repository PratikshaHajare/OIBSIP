displayList();
let addTask = document.getElementById("addtask");
let addBtn = document.getElementById("addbtn");

addBtn.addEventListener("click", function(){
    addTaskval = addTask.value;
    if(addTaskval.trim()!=0){
        let task = localStorage.getItem("todo");
        if(task == null){
            todolist = [];
        }
        else{
            todolist = JSON.parse(task);
        }
        todolist.push({'task_name':addTaskval, 'completeStatus':false});
        localStorage.setItem("todo", JSON.stringify(todolist));
        addTask.value = '';
    }
    displayList();
})

// displayList
function displayList(){
    let task = localStorage.getItem("todo");
    if(task == null){
        todolist = [];
    }
    else{
        todolist = JSON.parse(task);
    }
    let html = '';
    
    let addtaskList = document.getElementById("tasklist");
    todolist.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<span class="completed">${item.task_name}</span>`;
        }else{
            taskCompleteValue = `<span>${item.task_name}</span>`;
        }
        html += `<li class="list-group-item d-flex justify-content-between align-items-center" >
        <span>${item}</span>
        ${taskCompleteValue}
        <span>
        <i class="fa-solid fa-pen" id="edit" onclick="editlist(${index})"></i>
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa-solid fa-trash" onclick="removelist(${index})"></i>
        </span>
    </li>`;
    });
    addtaskList.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addBtn = document.getElementById("addbtn");
    let savebtn = document.getElementById("savebtn");
    saveindex.value = index;
    let task = localStorage.getItem("todo");
    let todolist = JSON.parse(task); 
    
    addTask.value = todolist[index]['task_name'];
    addBtn.style.display="none";
    savebtn.style.display="block";
}

// savetask
let savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click", function(){
    let addBtn = document.getElementById("addbtn");
    let task = localStorage.getItem("todo");
    let todolist = JSON.parse(task); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in todolist[saveindex]) {
        if(keys == 'task_name'){
            todolist[saveindex].task_name = addTask.value;
        }
      }
    savebtn.style.display="none";
    addBtn.style.display="block";
    localStorage.setItem("todo", JSON.stringify(todolist));
    addTask.value='';
    displayList();
})

// removelist
function removelist(index){
    let task = localStorage.getItem("todo");
    let todolist = JSON.parse(task);
    todolist.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todolist));
    displayList();
}


// complete task
let addtaskList = document.getElementById("tasklist");
    addtaskList.addEventListener("click", function(e){
        let task = localStorage.getItem("todo");
        let todolist = JSON.parse(task);
        
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");          
        
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            for (keys in todolist[mytargetid]) {
                if(keys == 'completeStatus' && todolist[mytargetid][keys]==true){
                    todolist[mytargetid].completeStatus = false;
                }else if(keys == 'completeStatus' && todolist[mytargetid][keys]==false){
                    todolist[mytargetid].completeStatus = true;
                }
              }        
        localStorage.setItem("todo", JSON.stringify(todolist));
        displayList();
    }
    })

    


/*
// deleteall
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let savebtn = document.getElementById("savebtn");
    let addBtn = document.getElementById("addbtn");
    let task = localStorage.getItem("todo");
    let todolist = JSON.parse(task);
    if(task == null){
        todolist = [];
    }
    else{
        todolist = JSON.parse(task);
        todolist = [];
    }
    savebtn.style.display="none";
    addBtn.style.display="block";
    localStorage.setItem("todo", JSON.stringify(todolist));
    displayList();

})
*/