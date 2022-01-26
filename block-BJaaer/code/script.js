let form = document.querySelector('form');

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
 // console.log(event);
    userInfo.Name = form.elements.text.value
    userInfo.email = form.elements.email.value  
    userInfo.love = form.elements.movie.value
    userInfo.color  = form.elements.color.value
    userInfo.range = form.elements.range.value
    userInfo.genre  = form.elements.drone.value
    userInfo.terms = form.elements.terms.checked
    console.log(userInfo);
    createUI();
}

form.addEventListener('submit' ,handleSubmit);


function createUI(){
        let userData = document.querySelector('.userData')
        userData.style.backgroundColor = "white"
          userData.style.width = "350px"
          userData.style.height = "350px"
          userData.style.borderRadius ="10px"
          userData.style.padding = "10px"
        //  userData.style.textAlign = "center"
        let ul = document.createElement("ul");
        let name = document.createElement('h1');
         name.innerText =  `Hello ${userInfo.Name}`

       let email = document.createElement('h3');
       email.innerText = ` Email : ${userInfo.email}`
       let movie = document.createElement('h3');
         movie.innerText =` You love ${userInfo.love}`
        let color = document.createElement('h2')   
           color.innerText =` Color :${userInfo.color}`
         let range = document.createElement('h2') 
             range.innerText = `Rating : ${userInfo.range}`
        let genre = document.createElement('h2') 
           genre.innerText = `Book Gener : ${userInfo.genre}`
       ul.append(name ,email ,movie ,color ,range ,genre);
      userData.append(ul);
    
}    
alert(userData);