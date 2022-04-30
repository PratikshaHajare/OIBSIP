let addTask = document.getElementById('addtask');
let todolist = [];

//Add list
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let addText = addTask.value;
    if (addText.trim() != 0) {
        err.innerHTML = ''
        let task = localStorage.getItem("todo");
        if (task === null) {
            todolist = [];
        }
        else {
            todolist = JSON.parse(task);
        }
        todolist.push(addText);
        localStorage.setItem("todo", JSON.stringify(todolist));
        displaylist();
    }
    else {
        err.innerHTML = 'Add Your Task!';
    }
    

});


//displaylist

function displaylist() {
    let task = localStorage.getItem("todo");
        if (task === null) {
            todolist = [];
        }
        else {
            todolist = JSON.parse(task);
        }
    html = "";
    let addtaskList = document.getElementById('tasklist');
    if (todolist.length > 0) {
        todolist.forEach((item,index) => {
            html += `<li class="list-group-item d-flex justify-content-between align-items-center" >
            <span>${item}</span>
            <span><i class="fa-solid fa-pen" id="edit" onclick="editlist(${index})"></i>
                  <i class="fa-solid fa-circle-check" id="complete"></i>
                  <i class="fa-solid fa-trash" id="remove"></i>
            </span>
        </li>`;
        });
        addtaskList.innerHTML = html;
    }
}

function editlist(index){
    let saveindex=document.getElementById('saveindex');
    let addBtn=document.getElementById('addbtn');
    let savebtn=document.getElementById('savebtn');
    let task = localStorage.getItem("todo");
    todolist = JSON.parse(task);
    addTask.value=todolist[index];
    addBtn.style.display="none";
    savebtn.style.display="block";
}

let savebtn=document.getElementById('savebtn');
savebtn.addEventListener('click',function(){
    let task = localStorage.getItem("todo");
    todolist = JSON.parse(task);
    let saveindex=document.getElementById('saveindex').value;

    todolist[saveindex]=addText;

    localStorage.setItem("todo", JSON.stringify(todolist));
    displaylist();
})

