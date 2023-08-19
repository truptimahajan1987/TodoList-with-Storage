let todoArray = [];

function saveTodo(){
let title = document.getElementById("title").value;
todoArray.push(title);
localStorage.setItem("my-todos",todoArray.toString());
document.getElementById("title").value = '';
fetchTodo();

}

function fetchTodo(){
let str = localStorage.getItem("my-todos");
todoArray = str.split(",");
let htmlString = `
<tr>
<th>Sr.No</th>
<th>title</th>
<th>Action</th>
</tr>
`;
let counter = 0;
todoArray.forEach((ele) => {
    counter++;
    htmlString += `
    <tr>
        <td>${counter}</td>
        <td>${ele}</td>
        <td>
        <button onclick="editTodo(${counter-1})"><i class="fa-solid fa-pen-to-square edit"></i></button>
        <button onclick = "deleteTodo(${counter-1})"><i class="fa-solid fa-trash delete "></i></button>
        </td>
    </tr>
    `;
})
document.getElementById("todo-table").innerHTML = htmlString;
}
// fuinction to edit
function editTodo(index){
    let newval = prompt("Do you want to change?" , todoArray[index]);
    if( newval != '' && newval != null)
    {
        todoArray[index] = newval;
        localStorage.setItem("my-todos",todoArray.toString());
        fetchTodo();
     }
     
}
// function to delete
function deleteTodo(index){
    if(confirm("Are you sure, you want to delete?"))
    {
        todoArray.splice(index,1);
        console.log(todoArray.splice(index,1));
        localStorage.setItem("my-todos",todoArray.toString());
        fetchTodo();
    }
}