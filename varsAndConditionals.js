/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack =45; 

// Before the battle begins, Jon and Jamie 

if(jonSnowAttack > jamieLannisterAttack){
    console.log(`Jon Snow has better attack than Jamie`)
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log(`Jamie has a better attack than Jon`)
} else {
    console.log(`Jon and Jamie have the same attack`)
}

//Jamie, knowing he is the superior, initiates a fight with Jo. 
//Lets create some additional stats for Jon Snow so we can see how this plays out.  
let jonSnowHealth = 100
let jonSnowDefense = 0

if(jonSnowHealth <= jamieLannisterAttack){
    console.log('Jon Snow has been slained')
} else{
    //JonSnowHealth = jonSnowHealth - jamieLannisterAttaCK
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snows health is down to ${jonSnowHealth}`)
}

//Jon Snow, adamant he does not want to fight Jamie (can you blame him?), 
//picks up a shield to help defend himself. Increase Jons defense by 25.
jonSnowDefense += 25
if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log('Jon Snow has been slained')
} else{
    //JonSnowHealth = jonSnowHealth - jamieLannisterAttaCK
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snows health is down to ${jonSnowHealth}`)
    //console.log('Jon Snows health is down to ' + jonSnowHealth)
}

// One of the town's people, obviously wanting Jon Snow to win, throws Jon a health kit. This health
//kit can raise Jon's health by 50pts. However, Jon's health cannot exceed 100. Using an if else statement , raise Jons health to the appropritate level. 

if((jonSnowHealth +50)>= 100){
    jonSnowHealth = 100
}else {
    jonSnowHealth += 50
}

console.log(jonSnowHealth)

// Jamie, realizing this might take a while to beat Jon, decides to flip a coin, amd if the coin lands on heads, he will aim to take Jo's head.

let coinLandsHeads = false

//another way to right the condition if(coinLandsHeads!==false)
// != acomplishes the same thing
if(coinLandsHeads ===true){ 
    console.log('the fight continues')
}else{
    console.log('jon is allowed to run away')
}

// for loops
//Lets see how this battle will play out if it continues. Create a for loop that will have Jamie attack Jon 5 times Console log Jon Snows health after each attack.
// if it is less than 5 will not print jon slain message.

// for (let i =0; i < 5; i++){
//      jonSnowHealth -= (jamieLannisterAttack- jonSnowDefense);
//     if(jonSnowHealth <= 0){
//         console.log(`Jon has been slain`);
//     }else {
     
//       console.log(`Jon Snow's health id ${jonSnowHealth}`);   
//     }
// }

while (jonSnowHealth > 0) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log (`jon's health is now ${jonSnowHealth}`)
    if(jonSnowHealth <= 0){
        console.log(`jon has been slain`);
    }
}