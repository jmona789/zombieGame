var prompt = require('prompt');
var userHealth = 100;
var zombieHealth = 20;
prompt.start();

console.log("Guess a number between 1 and 10")

function turn(userHealth, zombieHealth){
  if (userHealth > 0  || zombieHealth > 0){
    prompt.get(["guess"], function(err, result){
      var num = 7
      //Math.floor(Math.random() * (11 - 1) + 1);
      console.log(num);
      console.log(result.guess);
      if (parseFloat(result.guess) === num){
        console.log("You hit the zombie!")
        var damage = Math.floor(Math.random() * (6 - 2) + 2);
        zombieHealth -= damage;
        console.log("You did " + damage + " damage to the zombie");
        console.log("Zombie now has " +zombieHealth+" health left");
        turn(userHealth, zombieHealth);
      } else{
        console.log("You did not hit the zombie!");
        var damage = Math.floor(Math.random() * (6 - 2) + 2);
        userHealth -= damage;
        console.log("The zombie did " + damage + " damage");
        console.log("You now have " +userHealth+" health left");
        turn(userHealth, zombieHealth);
      }
    })
  }else{
    console.log("Game is over")
  }
}

turn(userHealth, zombieHealth);