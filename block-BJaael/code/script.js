let divParent = document.querySelector('.discoGrid')
for(let i = 1; i <= 500 ; i++){
   let div = document.createElement('div');
   div.classList.add('grid')
   div.style.width = '4rem';
   div.style.height = '4rem';
   div.style.border ="2px solid black"
 divParent.append(div)
}

let allBoxes = document.querySelectorAll(".grid");

/* grid.forEach((p) =>{
    
    p.addEventListener('mouseover', function(){
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b= Math.random() * 256;
       let randonColor = `rgb(${r},${g},${b})`;
       return p.style.backgroundColor = randonColor;
    
    });

})   

 grid.forEach((p) =>{

    p.addEventListener('mouseover', function(){
     let randomNumber = Math.floor(Math.random() * 500)
       return p.innerHTML=randomNumber;
    });

})    


 divParent.addEventListener('mousemove' ,function(){

  return grid.forEach((p) =>{
    
        p.addEventListener('mousemove', function(){
            let r = Math.random() * 256;
            let g = Math.random() * 256;
            let b= Math.random() * 256;
           let randonColor = `rgb(${r},${g},${b})`;
           p.style.backgroundColor = randonColor;
        
        });
    
    })
   
   
  

}); */


// Random color 
 function getRandomColor(max = 265) {
  let r = Math.random() * max;
  let g = Math.random() * max;
  let b= Math.random() * max;
 let randonColor =`rgb(${r} ,${g} ,${b})`;

 return randonColor;

}

// Random number

 function getRandomNumber(max){
 let randomNum = Math.floor(Math.random() * max);
  return randomNum;
}
function handleMouseMove() {

  // for all boxes random background color
allBoxes.forEach((box) => {

box.style.backgroundColor = getRandomColor();

});

// for all boxes random number
allBoxes.forEach((box) =>{

  box.innerHTML= getRandomNumber(500);
})


}

divParent.addEventListener('mousemove' ,handleMouseMove);