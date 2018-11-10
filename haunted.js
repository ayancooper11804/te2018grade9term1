const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
player.courage++;
console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
console.log(`${player.name} stands in complete darkness and uses their ${player.item} to find two doors...`);
let door = READLINE.question("Which door will you choose? (left or right) ");
if(door == "left"){ 

console.log(`${player.name} opens the left door and finds a powerup that gives them electrical powers!`)
console.log(`${player.name} is confronted by a monster...`)
let battle = READLINE.question("Will you use your electrical powers or fight with your manly fists? (electric or fists) ")
if(battle == "electric"){

console.log(`${player.name} wins without breaking a sweat!`)
}



}

else{

console.log(`${player.name} opens the door on the right and finds a powerup that gives them fire powers!`)
console.log(`${player.name} runs into a wise mage who can teach ${player.name} the art of sword fighting...`)
let mage = READLINE.question("Not sure if you should trusts this guy, will you kill him or learn from him? (kill or learn) ")

}

}
else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  console.log(`${player.name} turns around to find the police surrounding him`);
  console.log(`The police believe that you are the reason screams have been echoing from the house...`);
  let conflict = READLINE.question("Will you explain yourself or fight back? (explain or fight) ");
  if(conflict == "explain"){

  }

}













console.log("Thanks for playing!");