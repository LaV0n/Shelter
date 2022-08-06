const pets = [
    {
      "name": "Jennifer",
      "img": "assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus","distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

  const startButton = document.getElementById("button-start");
  const prevButton = document.getElementById("button-prev");
  const nextButton = document.getElementById("button-next");
  const endButton = document.getElementById("button-end");
  let widthScreen = window.innerWidth;
  let countCard = 8;
  let firstElem = 0;
  let petsArray = shuffle(pets);

  if (widthScreen < 768 ){
      countCard = 3;
  }
   if ((widthScreen < 1280) && (widthScreen > 768)){
       countCard = 6;
  }
 
  function shuffle(arr) {
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
  }

  for (let i=0; i<5; i++){
    petsArray.push(...shuffle(pets));
  }

  function takeData(first,num){
      for(let i=first, j=0; j<num; i++, j++){
        document.getElementById(`card_${(1 + j)}_name`).innerHTML = petsArray[i].name;
        document.getElementById(`card_${(1 + j)}`).childNodes[1].src = petsArray[i].img;
      }
  }
  takeData(firstElem,countCard);

  function lockPage(){
    if ( firstElem === 0){
        startButton.setAttribute("disabled","");
        prevButton.setAttribute("disabled","");
      }else{
        startButton.removeAttribute("disabled","");
        prevButton.removeAttribute("disabled","");
      }
    if (firstElem === (48 - countCard)){
        endButton.setAttribute("disabled","");
        nextButton.setAttribute("disabled","");
    }else{
        endButton.removeAttribute("disabled","");
        nextButton.removeAttribute("disabled","");  
    }
  }
 lockPage();

document.getElementById("page-now").innerHTML = firstElem+1;

  function nextPage(num){    
    firstElem = firstElem + num; 
    lockPage();
    takeData(firstElem ,num);   
    document.getElementById("page-now").innerHTML = ((firstElem/num)+1);
  }
  function lastPage(num){
    firstElem = 48-num;
    lockPage();
    takeData(firstElem ,num);
    document.getElementById("page-now").innerHTML = ((firstElem/num)+1);
  }
  function prevPage(num){
    firstElem = firstElem - num;
    lockPage();
    takeData(firstElem ,num);
    document.getElementById("page-now").innerHTML = ((firstElem/num)+1);
  }
  function startPage(num){
    firstElem = 0; 
    lockPage();
    takeData(firstElem ,num);   
    document.getElementById("page-now").innerHTML = ((firstElem/num)+1);
  }

  function setModalData (x){           
    let firstName = document.getElementById(x).textContent;
    let firstPet = pets.findIndex(function(x,index){if (x.name === firstName) return true });
    document.getElementById("modal-img").src = pets[firstPet].img;
    document.getElementById("pets-name").innerHTML = pets[firstPet].name;
    document.getElementById("pets-type").innerHTML = pets[firstPet].type;
    document.getElementById("pets-breed").innerHTML = pets[firstPet].breed;
    document.getElementById("description").innerHTML = pets[firstPet].description;
    document.getElementById("pets-age").innerHTML = pets[firstPet].age;
    document.getElementById("pets-inoculations").innerHTML = pets[firstPet].inoculations;
    document.getElementById("pets-diseases").innerHTML = pets[firstPet].diseases;
    document.getElementById("pets-parasites").innerHTML = pets[firstPet].parasites;
  }

    function activeModal(){
        for (let i=1; i<=countCard;i++){
            let card =document.getElementById(`card_${i}`);
            card.addEventListener('click',()=>{openModal(`card_${i}_name`)});
        }
    }  
    
    activeModal(); 
 
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");
    const body = document.querySelector("body");

    function openModal(CardName){ 
      setModalData(CardName);    
      modal.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('nonscroll');
    }
    function closeModal(){
      modal.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('nonscroll');
    }
    overlay.addEventListener('click',()=> {
      closeModal()
    });
    

  