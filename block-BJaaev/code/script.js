 function main() {
let inputText = document.querySelector('#todoitem');
let completedbtn = document.querySelector('.completed');
let actbtn = document.querySelector('.active');
let allBtn = document.querySelector('.all');

let root = document.querySelector('ul');

 let allTodes = JSON.parse(localStorage.getItem('todos')) || [];

function handleInput(event) {

  if(event.keyCode === 13  && event.target.value !== "" ) { 
      console.log(event.keyCode)
   let todo ={
     name : event.target.value  ,
     isDone :  false ,
   };

   allTodes.push(todo);
   //Emapty the input box
   event.target.value = "";

   createUI(allTodes , root);
  }
  localStorage.setItem(
      'todos' ,
      JSON.stringify(allTodes));

}

function handleDelete(event) {
    // id of selected todo
   let id = event.target.dataset.id;
   allTodes.splice(id , 1);

   localStorage.setItem(
    'todos' ,
    JSON.stringify(allTodes));

   createUI(allTodes , root); 
}

function handleToggle(event) {
    let id = event.target.dataset.id;
   allTodes[id].isDone =  !allTodes[id].isDone;

   localStorage.setItem(
    'todos' ,
    JSON.stringify(allTodes));

   createUI(allTodes , root);

}


function createUI(data , rootEm) {
    // stop the same element repeated
    rootEm.innerHTML = '';
    data.forEach((todo , index) =>{
    let li = document.createElement('li');
      // li.style.display = "flex";

    let input = document.createElement('input');
        input.type = "checkbox" ;
        input.checked = todo.isDone;
        input.setAttribute('data-id' ,index);
        input.addEventListener('input' , handleToggle)
    let p = document.createElement('p');
        p.innerText = todo.name;
    let span = document.createElement('span');
      span.innerText = "X";
      span.setAttribute('data-id' , index)
      span.style.color = "red";
      span.addEventListener('click' , handleDelete)
      li.append(input , p , span); 
      rootEm.append(li);

    });
}
      createUI(allTodes , root);
  //console.log(createUI());
  let completedTodos = allTodes.filter((p) => p.isDone === true);
  let activeTodes = allTodes.filter((p) => p.isDone === false);
  let all = allTodes.filter((p) => p.isDone === true || p.isDone ===false);

completedbtn.addEventListener('click' , () => {
  let completedTodos = allTodes.filter((p) => p.isDone === true);
  createUI(completedTodos ,root);
});

actbtn.addEventListener('click' , () => {
  let activeTodes = allTodes.filter((p) => p.isDone === false);
  createUI(activeTodes ,root);
});

allBtn.addEventListener('click' , () => {
  let all = allTodes.filter((p) => p.isDone === true || p.isDone ===false);
  createUI(all ,root);
});
 

inputText.addEventListener('keyup' , handleInput);

 }
 main();