let allBtn = document.querySelectorAll('button');
let you = document.querySelector('.you');
let computer = document.querySelector('.computer');
let result = document.querySelector('.result');

allBtn.forEach((btn) =>{
   btn.addEventListener('click' , function(event){
     you.innerText = `${event.path[1].className}`;
     computer.innerText = "Paper";
     if (you.innerText == computer.innerText){

          result.innerText = "You Win"
     } else {
        result.innerText = "You Lost"
     }

   } )

})