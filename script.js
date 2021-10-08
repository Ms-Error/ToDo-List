let inputElement = document.querySelector('input');
let formElement = document.querySelector('form');
let ListElement = document.querySelector('ul');
let totalElement = document.querySelector('#total');
let taskList =[
    
];
function deleteItem(e){
    let task =  e.target.parentElement.previousElementSibling.innerHTML;
    let index = taskList.indexOf(task);
    if(index !==-1){
        taskList.splice(index, 1);
    }
    popList();

}
function popList(){
    ListElement.innerHTML='';
    taskList.forEach(function(item)
    {
        let newItem = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class ="fa fa-close"></i>';
        newItem.appendChild(anchorElement);
         anchorElement.addEventListener('click',(e)=>deleteItem(e));       
          ListElement.appendChild(newItem);
});

inputElement.value='';
totalElement.innerHTML = taskList.length;
}
popList();
function doesNot(s){
    let stringWithout = s.trim();
    return stringWithout.length>0;
}
function addTask(){
    if(inputElement.value && doesNot(inputElement.value) && !taskList.includes(inputElement.value)){
        taskList.push(inputElement.value);
        popList();
    }

}
formElement.addEventListener('submit',function(e){
e.preventDefault();
addTask();
});