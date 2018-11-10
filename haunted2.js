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
  
  let doors = READLINE.question("You're in a hallway. At the end of the hallway there are two doors, one on the right and one on the left. Will you go in the door on the right or on the left? (right or left)");
  if(right == "r" || right == "right") {
    player.intellect++;
    let stairs = READLINE.question("There's stairs going upstairs and other stairs going downstairs. Will you go upstairs or downstairs? (upstairs or downstairs)");
    if (upstairs == "up" || upstairs == "upstairs"){
    let monster = READLINE.question("You find a monster guarding the door to the exit. Will you fight him or surrendor? (fight or surrendor) ")
    if(monster == "f" || monster == "fight"){
    
    }
    }


  }
  else if(right == "l" || right == "left"){
    let key = READLINE.question("You see a glass box. Insidethe box is a key and a snake. Will you try to get the key? (yes or no)");
    if(key == "y" || key == "yes"){
      player.intellect--
      console.log("You get bit by the snake. You wake up in a dark room. You see a woman in the corner of the room. She has a knife. YOU DIE.");
    }
    else(key == "n" || key == "no")
    {
      console.log(`${player.name} You continue onto the next room.`);

      let pickuporleave = READLINE.question("You see a table. on the table there is a knife. Will you pick it up? (pick it up or leave it")
      
    }
  }



}//end if 
else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door.`);
  // continue the story

}//end else 
console.log("Thanks for being smart!");