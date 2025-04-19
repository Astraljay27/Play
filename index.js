//console.log(`Im learning JavaScript and I hope to be a pro soon!`);
//let x
//x = 5
//console.log(`Hello I am ${x} years old`)

//let y= 100000

//console.log(`I love my girl ${y} and I hope to marry her soon`)

//let online = true
//console.log(`I am online ${online}`)

//let z = 10.5 
//document.getElementById("p1").textContent = (`${z}`);


//const box1 = document.getElementById("box1")
//const p1 = document.getElementById("p1")
//box1.onclick = function() {
   // p1.textContent = "Hello World!";
    //p1.style.color = "red";
//}

//let x = 1000

//console.log(x)

//const min = 50
//const max = 100
//let randomnum = Math.floor(Math.random() *(min - max)) + min;

//console.log(randomnum)

// num gen

const dice = document.getElementById("dice")
const lab = document.getElementById("lab")
const min = 1;
const max = 6;
let randomnum;

dice.onclick = function() {
    randomnum = Math.floor(Math.random() * max) + min;
    lab.textContent = randomnum;
}

//let age = 18;
//let hasLicense = false;
//if(age >= 18){
//    console.log("old enough to drive")

 //   if (hasLicense){
   //     console.log("you can drive")


    //}
    //else{
   //     console.log("you cannot drive")
    //}
//}
//else{
//    console.log("need to be 18+ to drive")
//}



const labelName = document.getElementById("labelName")
const name1 = document.getElementById("name1")
const submitName = document.getElementById("submitName")
const correctAnswer = document.getElementById("correctAnswer")
let hername;


submitName.onclick = function(){
  hername = name1.value;
  if(hername === "Jazmin")
    correctAnswer.textContent = `Hello My Love <3`;

  else{
    correctAnswer.textContent = `Leave me alone`;
  }

}

const myText = document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")
let age;
const isSeniorCitizen = true;



if (age >=65 && isSeniorCitizen === true){
    console.log("You are eligable for a discount")
}
    else if (age < 45 && isSeniorCitizen === false){
        console.log("You still have time");
    }

    
    else{
        console.log("Sorry you are not eligable for a discount");
    }
    
    
    mySubmit.onclick = function(){
        age = myText.value
        age = Number(age);
        if(age >= 100){
            
            resultElement.textContent = `you are too old to enter site`;
        }
        else if(age == 0){
            resultElement.textContent = `you are a newborn`;
        }
        else if(age >= 18){
        
            resultElement.textContent = `you are old enough to enter site`;
        }
        
        else if(age < 0){
            
            resultElement.textContent = `invalid age`;
        }
        
        
        else{
            
            resultElement.textContent = `you need to be 18+ to enter site`;
        }
        
    }