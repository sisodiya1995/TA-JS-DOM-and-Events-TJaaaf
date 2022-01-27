let form = document.querySelector('form');
let userNameError = document.querySelector('.userNameError');
let emailError = document.querySelector('.emailError');
let nameError = document.querySelector('.nameError');
let phoneError = document.querySelector('.phoneError');
let passwordError = document.querySelector('.passwordError');

  userNameError.style.color = "red";
  emailError.style.color = "red" ; 
  nameError.style.color = "red" ;
  phoneError.style.color = "red";
  passwordError.style.color = "red";
 function handleSubmit(event) {
     event.preventDefault();
   console.log(event.target);
   let userElement = event.target.elements.userName;
   let emailElement = event.target.elements.email;
   let nameElement = event.target.elements.name;
   let phoneElement = event.target.elements.phone;
   let passwordElement = event.target.elements.paswd;
   let confirmpadElement = event.target.elements.confirmpaswd;
  console.log(passwordElement.value);
  console.log(confirmpadElement.value);

  // validation for username
   if(userElement.value.length <= 4){
      userNameError.innerText ="Username can't be less than 4 characters"
   } else {
    userNameError.innerText = "";
   }

// validation for Email
    if(emailElement.value.length <= 6 ||! emailElement.value.includes('@')){
       emailError.innerText = "Not a valid email" 
   } else{
    emailError.innerText = "" ;
   }
   
  // validation for name
  if( nameElement.value.includes('0') ||nameElement.value.includes('1') ||nameElement.value.includes('2') ||nameElement.value.includes('3') ||nameElement.value.includes('4') || nameElement.value.includes('5')
  || nameElement.value.includes('6') || nameElement.value.includes('7') || nameElement.value.includes('8') || nameElement.value.includes('9')) {
     nameError.innerText = "Name can't be numbers"
 } else {
    nameError.innerText = "";
 }

 // phone number validation
 if(isNaN(phoneElement.value) || phoneElement.value.length <=7){
   phoneError.innerText = "Phone number can only contain numbers"

 } else{
    phoneError.innerText = "";
 }
// for poassword validation

if(String(passwordElement.value) !== String(confirmpadElement.value)){
   passwordError.innerText = "Password are not same";
} else {
    passwordError.innerText = "";
}

 }
form.addEventListener('submit' , handleSubmit);