let divParent = document.querySelector('.discoGrid')
for(let i = 1; i <= 500 ; i++){
   let div = document.createElement('div');
   div.classList.add('grid')
   div.style.width = '4rem';
   div.style.height = '4rem';
   div.style.border ="2px solid black"
 divParent.append(div)
}

let grid = document.querySelectorAll(".grid");

 grid.forEach((p) =>{
    
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


divParent.addEventListener('mouseover' ,function(){
/*
  let random = grid.forEach((p) =>{
    
        p.addEventListener('mouseover', function(){
            let r = Math.random() * 256;
            let g = Math.random() * 256;
            let b= Math.random() * 256;
           let randonColor = `rgb(${r},${g},${b})`;
           return p.style.backgroundColor = randonColor;
        
        });
    
    })
   
   return ;  */
  return grid;

});