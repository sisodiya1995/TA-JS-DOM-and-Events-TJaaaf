let peoplesNames = got.houses.reduce((acc,cv) =>{
    
    acc.push(cv.people.filter((obj) => {
       return obj.name;
     }));  
    return acc;
} ,[]).flat(Infinity);

 /* let starkHousePeople = got.houses[0].people;

let starkpeople = document.querySelector('starkPeople');

  starkpeople.addEventListener('click' , () => {
        let starkHousePeople = got.houses[0].people;
        createUI(starkHousePeople);
     }); */
     let root= document.querySelector('.gotpeoples');
function createUI(data ,rootEm) {

       rootEm.innerHTML = "";
   //  let rootEm = document.querySelector('.gotpeoples');
      data.forEach((char) => {
      let ul = document.createElement('ul');
      let img = document.createElement('img');
      img.src =char.image;
      let cite = document.createElement('cite');
      cite.innerText =char.name;
      let div1 =document.createElement('div')
      div1.classList.add('img-name')  ;  
      let p = document.createElement('p');
     p.innerText = char.description; 
     let a1 =document.createElement('a');
     a1.innerText="Learn More !"
      a1.href = char.wikiLink;
      div1.append(img ,cite);

      ul.append(div1 ,p ,a1);
      rootEm.append(ul);

    });
}
// filter starkhouse
let starkHousePeople = got.houses[0].people;

let starkpeople = document.querySelector('.starkPeople');
  console.log(starkpeople ,root);

  starkpeople.addEventListener('click', () => {
        let starkHousePeople = got.houses[0].people;
        createUI(starkHousePeople, root);
     });

// filter Lannisters house people    

 let lannisterPeople = got.houses[1].people;

 let lannister = document.querySelector('.lannister');

 lannister.addEventListener('click', () => {
    let lannisterPeople = got.houses[1].people;
    createUI(lannisterPeople, root);
 });

 // filter Baratheons house people
  let baratheonPeople = got.houses[2].people;
 let Baratheons = document.querySelector('.Baratheons');
    
 Baratheons.addEventListener('click' ,() =>{
    let baratheonPeople = got.houses[2].people;
    createUI(baratheonPeople, root);
 });

 // filter Targaryens house people 
  let targaryensPeople = got.houses[3].people;
  let Targaryens = document.querySelector('.targaryens');
   Targaryens.addEventListener('click' ,() => {
    let targaryensPeople = got.houses[3].people;
    createUI(targaryensPeople, root);
   });

   // filter Greyjoys house people
   let greyjoys = document.querySelector('.greyjoys');
   let greyjoysPeople =  got.houses[4].people;

   greyjoys.addEventListener('click' ,() => {
    let greyjoysPeople = got.houses[4].people;
    createUI(greyjoysPeople, root);
   });

  // filter Tyrells house people
  let Tyrells = document.querySelector('.tyrells') 
  let tyrellsPeople = got.houses[5].people;

  Tyrells.addEventListener('click' ,() => {
    let tyrellsPeople = got.houses[5].people;
    createUI(tyrellsPeople, root);
   });

 // filter  Tullys house people
 
 let Tullys = document.querySelector('.tullys');
   let tullysPeople = got.houses[6].people;

   Tullys.addEventListener('click' ,() => {
    let tullysPeople = got.houses[6].people;
    createUI(tullysPeople, root);
   });

// filter Redwyne house people
let Redwyne = document.querySelector('.redwyne');
 let redwynePeople = got.houses[7].people;

 Redwyne.addEventListener('click' ,() => {
    let redwynePeople = got.houses[7].people;
    createUI(redwynePeople, root);
   });

   // Filter  Freys house people
   let Freys = document.querySelector('.freys');
   let freysPeople = got.houses[7].people;

   Freys.addEventListener('click' ,() => {
    let freysPeople = got.houses[7].people;
    createUI(freysPeople, root);
   });

  // filter Arryns house people
  
  let Arryns = document.querySelector('.arryns')
  let arrynsPeople = got.houses[8].people;

  Arryns.addEventListener('click' ,() => {
    let arrynsPeople = got.houses[8].people;
    createUI(arrynsPeople, root);
   });

   // filter Dothrakis house people
   let Dothrakis = document.querySelector('.dothrakis');
   let dothrakisPeople = got.houses[9].people;

   Dothrakis.addEventListener('click' ,() => {
    let dothrakisPeople = got.houses[9].people;
    createUI(dothrakisPeople, root);
   });

   // Search box  using filter

   let search = document.querySelector('input');
     search.addEventListener('input' ,(event) => {
        //  console.log(event.target.value);
        let serchPeople  = peoplesNames.filter((p) => p.name.includes(event.target.value));
      createUI(serchPeople, root);
    
   });
   
 createUI(peoplesNames ,root);