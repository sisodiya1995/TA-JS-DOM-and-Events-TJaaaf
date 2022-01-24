let parentBoxes = document.querySelector('.boxes');
let allBoxes = parentBoxes.querySelectorAll('.box')


// node element to array
let arrayAllBox =Array.from(allBoxes);

// Event listener apply on every childrengit
arrayAllBox.forEach((box) =>{

box.addEventListener('click' , function(){
   
box.innerText = arrayAllBox.indexOf(box) + 1;

})

})


//Event Deligation (event apply on the parent )
let parentBoxes1 = document.querySelectorAll('.boxes');
let  allBoxes2 = parentBoxes1[1]

function handleClick (event) {
       let index = event.innerText
       console.log(index);
}
allBoxes2.addEventListener('click' ,handleClick);