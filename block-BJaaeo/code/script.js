let div = document.querySelector('.calc');
     
let div1 = document.createElement('div');
let div2 = document.createElement('div');
    div2.style.backgroundColor ="black"
    div2.style.width = "640px";
    div2.style.height= "120px";
    div2.style.borderRadius ="20px"
    div2.style.color = "white"
    div2.style.fontSize = '50px'
    div2.style.textAlign ="center"
    div2.innerText = "12 + 12"

   let buttonPlus = document.createElement('button');
       buttonPlus.innerText ="+"
       buttonPlus.style.backgroundColor ="#710133"
       buttonPlus.style.marginTop = "15px";
       buttonPlus.style.padding = "22px";
       buttonPlus.style.paddingLeft ="61px"
       buttonPlus.style.paddingRight ="61px"
       buttonPlus.style.marginRight ="21px"
       buttonPlus.style.border = "none"
       buttonPlus.style.borderRadius ='10px'
       buttonPlus.style.color = "#FFFFFF"
       buttonPlus.style.fontSize = "40px"



       let buttonSub = document.createElement('button');
       buttonSub.innerText ="-"
       buttonSub.style.backgroundColor ="#710133";
       buttonSub.style.padding = "22px"
       buttonSub.style.paddingLeft ="61px"
       buttonSub.style.paddingRight ="65px"
       buttonSub.style.marginRight ="21px"
       buttonSub.style.border = "none"
       buttonSub.style.borderRadius ='10px'
       buttonSub.style.color = "#FFFFFF"
       buttonSub.style.fontSize = "40px"


       let buttonMulty = document.createElement('button');
       buttonMulty.innerText ="*"
       buttonMulty.style.backgroundColor ="#710133"
       buttonMulty.style.padding = "22px"
       buttonMulty.style.paddingLeft ="63px"
       buttonMulty.style.paddingRight ="63px"
       buttonMulty.style.marginRight ="21px"
       buttonMulty.style.border = "none"
       buttonMulty.style.borderRadius ='10px'
       buttonMulty.style.color = "#FFFFFF"
       buttonMulty.style.fontSize = "40px"

       let buttonDevide = document.createElement('button');
       buttonDevide.innerText ="%"
       buttonDevide.style.backgroundColor ="#710133"
       buttonDevide.style.padding = "22px"
       buttonDevide.style.paddingLeft ="61px"
       buttonDevide.style.paddingRight ="61px"
       buttonDevide.style.border = "none"
       buttonDevide.style.borderRadius ='10px'
       buttonDevide.style.color = "#FFFFFF"
       buttonDevide.style.fontSize = "40px"

       let divEqual = document.createElement('div')
            divEqual.innerText = "="
            divEqual.style.width = "150px"
            divEqual.style.height = "420px"
            divEqual.style.backgroundColor = "#018080"
            divEqual.style.color = "white"
            divEqual.classList.add('equal');
            divEqual.style.marginTop = "20px"
            divEqual.style.borderRadius = "10px"
            

       let buttonSeven = document.createElement('button');
       buttonSeven.innerText = "7"
       buttonSeven.style.backgroundColor = "#CFCFCF"
       buttonSeven.style.padding = "22px"
       buttonSeven.style.paddingLeft ="61px"
       buttonSeven.style.paddingRight ="61px"
       buttonSeven.style.marginRight ="21px"
       buttonSeven.style.border = "none"
       buttonSeven.style.borderRadius ='10px'
       buttonSeven.style.color = "black"
       buttonSeven.style.fontSize = "40px"

       let buttonEight = document.createElement('button');
       buttonEight.innerText = "8"
       buttonEight.style.backgroundColor = "#CFCFCF"
       buttonEight.style.padding = "22px"
       buttonEight.style.paddingLeft ="61px"
       buttonEight.style.paddingRight ="61px"
       buttonEight.style.marginRight ="21px"
       buttonEight.style.border = "none"
       buttonEight.style.borderRadius ='10px'
       buttonEight.style.color = "black"
       buttonEight.style.fontSize = "40px"
       

       let buttonNine = document.createElement('button');
       buttonNine.innerText = "9"
       buttonNine.style.backgroundColor = "#CFCFCF"
       buttonNine.style.padding = "22px"
       buttonNine.style.paddingLeft ="61px"
       buttonNine.style.paddingRight ="61px"
       buttonNine.style.marginRight ="21px"
       buttonNine.style.border = "none"
       buttonNine.style.borderRadius ='10px'
       buttonNine.style.color = "black"
       buttonNine.style.fontSize = "40px"

       let buttonFour = document.createElement('button');
       buttonFour.innerText = "4"
       buttonFour.style.backgroundColor = "#CFCFCF"
       buttonFour.style.padding = "22px"
       buttonFour.style.paddingLeft ="61px"
       buttonFour.style.paddingRight ="61px"
       buttonFour.style.marginRight ="21px"
       buttonFour.style.border = "none"
       buttonFour.style.borderRadius ='10px'
       buttonFour.style.color = "black"
       buttonFour.style.fontSize = "40px"
       buttonFour.style.marginTop = "15px"
       buttonFour.style.marginBottom = "15px"

       let buttonFive = document.createElement('button');
       buttonFive.innerText = "5"
       buttonFive.style.backgroundColor = "#CFCFCF"
       buttonFive.style.padding = "22px"
       buttonFive.style.paddingLeft ="61px"
       buttonFive.style.paddingRight ="61px"
       buttonFive.style.marginRight ="21px"
       buttonFive.style.border = "none"
       buttonFive.style.borderRadius ='10px'
       buttonFive.style.color = "black"
       buttonFive.style.fontSize = "40px"

       let buttonSix = document.createElement('button');
       buttonSix.innerText = "6"
       buttonSix.style.backgroundColor = "#CFCFCF"
       buttonSix.style.padding = "22px"
       buttonSix.style.paddingLeft ="61px"
       buttonSix.style.paddingRight ="61px"
       buttonSix.style.marginRight ="21px"
       buttonSix.style.border = "none"
       buttonSix.style.borderRadius ='10px'
       buttonSix.style.color = "black"
       buttonSix.style.fontSize = "40px"

       let buttonOne = document.createElement('button');
       buttonOne.innerText = "1"
       buttonOne.style.backgroundColor = "#CFCFCF"
       buttonOne.style.padding = "22px"
       buttonOne.style.paddingLeft ="61px"
       buttonOne.style.paddingRight ="61px"
       buttonOne.style.marginRight ="21px"
       buttonOne.style.border = "none"
       buttonOne.style.borderRadius ='10px'
       buttonOne.style.color = "black"
       buttonOne.style.fontSize = "40px"
       buttonOne.style.marginTop = "15px"
       buttonOne.style.marginBottom = "15px"

       let buttonTwo = document.createElement('button');
       buttonTwo.innerText = "2"
       buttonTwo.style.backgroundColor = "#CFCFCF"
       buttonTwo.style.padding = "22px"
       buttonTwo.style.paddingLeft ="61px"
       buttonTwo.style.paddingRight ="61px"
       buttonTwo.style.marginRight ="21px"
       buttonTwo.style.border = "none"
       buttonTwo.style.borderRadius ='10px'
       buttonTwo.style.color = "black"
       buttonTwo.style.fontSize = "40px"

       let buttonThree = document.createElement('button');
       buttonThree.innerText = "3"
       buttonThree.style.backgroundColor = "#CFCFCF"
       buttonThree.style.padding = "22px"
       buttonThree.style.paddingLeft ="61px"
       buttonThree.style.paddingRight ="61px"
       buttonThree.style.marginRight ="21px"
       buttonThree.style.border = "none"
       buttonThree.style.borderRadius ='10px'
       buttonThree.style.color = "black"
       buttonThree.style.fontSize = "40px"

       let buttonDot = document.createElement('button');
       buttonDot.innerText = "."
       buttonDot.style.backgroundColor = "#CFCFCF"
       buttonDot.style.padding = "22px"
       buttonDot.style.paddingLeft ="65px"
       buttonDot.style.paddingRight ="65px"
       buttonDot.style.marginRight ="21px"
       buttonDot.style.border = "none"
       buttonDot.style.borderRadius ='10px'
       buttonDot.style.color = "black"
       buttonDot.style.fontSize = "40px"

       let buttonZero= document.createElement('button');
       buttonZero.innerText = "0"
       buttonZero.style.backgroundColor = "#CFCFCF"
       buttonZero.style.padding = "22px"
       buttonZero.style.paddingLeft ="61px"
       buttonZero.style.paddingRight ="61px"
       buttonZero.style.marginRight ="21px"
       buttonZero.style.border = "none"
       buttonZero.style.borderRadius ='10px'
       buttonZero.style.color = "black"
       buttonZero.style.fontSize = "40px"

       let buttonC = document.createElement('button');
       buttonC.innerText = "C"
       buttonC.style.backgroundColor = "#3D1B10"
       buttonC.style.padding = "22px"
       buttonC.style.paddingLeft ="61px"
       buttonC.style.paddingRight ="61px"
       buttonC.style.marginRight ="21px"
       buttonC.style.border = "none"
       buttonC.style.borderRadius ='10px'
       buttonC.style.color = "white"
       buttonC.style.fontSize = "40px"
  
let divNumber = document.createElement('div');
    divNumber.style.marginTop = "20px"
    divNumber.classList.add('numbers');
    divNumber.style.width ="500px"
    

let divParent = document.createElement('div');
    divParent.classList.add('parent');
    divParent.append(divNumber ,divEqual)
  divNumber.append(buttonSeven ,buttonEight ,buttonNine ,buttonFour ,buttonFive ,buttonSix ,buttonOne ,buttonTwo ,buttonThree ,buttonDot,buttonZero,buttonC)
    div1.append(div2 ,buttonPlus ,buttonSub ,buttonMulty ,buttonDevide,divParent);
    div.append(div1);


    //

    let num = document.querySelectorAll('.numbers button');
    
    num.forEach((p) => {
p.addEventListener('click' ,function(event){
    
  let  value = event.target.innerText 
    
     value = value +value;
   console.log(value);
    
   div2.innerText = value;

   
})

    }) 

    