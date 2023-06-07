//0 is gracie
//-1 health/armor may be used to indicate that a character/enemy has been defeated

let startButton = document.getElementById("startButton");
let submitButton = document.getElementById("submitButton");

class Character{
    #name;
    #health;
    #attackPower;
    #inventory;
    #defeated;
    constructor(name, health, attackPower, inventory, defeated){
        this.#name = name;
        this.#health = health;
        this.#attackPower = attackPower;
        this.#inventory = inventory;
        this.#defeated = defeated;
    }
    getName(){
        return this.#name;
    }
    getHealth(){
        return this.#health;
    }
    getAttackPower(){
        return this.#attackPower;
    }
    getInventory(){
        return this.#inventory;
    }
    getDefeated(){
        return this.#defeated;
    }

    setHealth(newHealth){
        this.#health = newHealth;
    }
    setAttackPower(newAttackPower){
        this.#attackPower = newAttackPower;
    }
    setDefeated(newDefeated){
        this.#defeated = newDefeated;
    }

    attack(enemy){
        if (enemy.getHealth() + enemy.getArmor() < this.#attackPower){
            console.log(enemy.getName() +" has been defeated.  ");
            enemy.setHealth(-1);
            enemy.setArmor(-1);
            enemy.setDefeated(true);
        } else {
            if (enemy.getArmor() >= this.#attackPower){
                let armorLeft = enemy.getArmor() - this.#attackPower;
                enemy.setArmor(armorLeft);
                console.log(enemy.getName() +":  "+ enemy.getArmor() +" armor, "+ enemy.getHealth() +" health");
            } else if (enemy.getArmor() == 0){
                let healthLeft = enemy.getHealth() - this.#attackPower;
                enemy.setHealth(healthLeft);
                console.log(enemy.getName() +":  "+ enemy.getArmor() +" armor, "+ enemy.getHealth() +" health");
            } else if (enemy.getArmor() != 0 && enemy.getArmor() < this.#attackPower){
                let healthDamage = this.#attackPower - enemy.getArmor();
                let healthLeft = enemy.getHealth() - healthDamage;
                enemy.setArmor(0);
                enemy.setHealth(healthLeft);
                console.log(enemy.getName() +":  "+ enemy.getArmor() +" armor, "+ enemy.getHealth() +" health");
            } 
        }
    }

    useItem(item){
        if(this.#inventory.includes(item)){//to make sure no one cheats and uses the same item multiple times
            this.setHealth(this.#health + item.healthImpact());
            this.setAttackPower(this.#attackPower + item.attackPowerImpact());
            if (this.#health >= 0){
                console.log(this.#name +":  health "+ this.#health + ", attack power "+ this.#attackPower);
            } else if (this.#health < 0){
                console.log(this.#name + " has been defeated.");
                this.#defeated = true;
                submitButton.style.display = "none";//HIDE SUBMIT BUTTON
            }
            let index = this.#inventory.indexOf(item);
            this.#inventory.splice(index, 1);
        } else {
            console.log("This item is not in your inventory.");
        }

    }

}

class Item{
    #name;
    #effectType;
    #healthChange;
    #attackPowerChange;
    constructor(name, effectType, healthChange, attackPowerChange){
        this.#name = name;
        this.#effectType = effectType;
        this.#healthChange = healthChange;
        this.#attackPowerChange = attackPowerChange;
    }

    healthImpact(){
        let impactH =  this.#healthChange;
        if (impactH > 0){
            console.log("The item is "+ this.#name +", which has a positive effect on the character's health.");
        } else if (impactH < 0){
            console.log("The item is "+ this.#name +", which has a negative effect on the character's health.");
        }else if (impactH == 0){
            console.log("The item is "+ this.#name +", which has no effect on the character's health.");
        }
        return impactH;
    }
    attackPowerImpact(){
        let impactAP = this.#attackPowerChange;
        if (impactAP > 0){
            console.log("The "+ this.#name +" has a positive effect on the character's attacking power.");
        } else if (impactAP < 0){
            console.log("The "+ this.#name +" has a negative effect on the character's attacking power.");
        } else if (impactAP == 0){
            console.log("The "+ this.#name +" has no effect on the character's attacking power.");
        }   
        return impactAP;
    }

}

class Enemy{
    #name;
    #health;
    #armor;
    #attackPower;
    #defeated;
    constructor(name, health, armor, attackPower, defeated){
        this.#name = name;
        this.#health = health;
        this.#armor = armor;
        this.#attackPower = attackPower;
        this.#defeated = defeated;
    }

    getName(){
        return this.#name;
    }
    getHealth(){
        return this.#health;
    }
    getArmor(){
        return this.#armor;
    }
    getAttackPower(){
        return this.#attackPower;
    }
    getDefeated(){
        return this.#defeated;
    }

    setHealth(newHealth){
        this.#health = newHealth;
    }
    setArmor(newArmor){
        this.#armor = newArmor;
    }
    setDefeated(newDefeated){
        this.#defeated = newDefeated;
    }

    hit(character){
        let healthLeft = character.getHealth() - this.#attackPower;
        character.setHealth(healthLeft);
        console.log(this.#name +" attacked "+ character.getName() + ".  Health left:  "+ healthLeft);
        if (healthLeft < 0){
            character.setDefeated(true);
            submitButton.style.display = "none";//HIDE SUBMIT BUTTON
            console.log(character.getName() +" has been defeated.  Click the start button to try again.");
        }
    }


}



let mysteryItem1 = new Item("health potion", "positive", 5, 0);
let mysteryItem2 = new Item("poison", "negative", -8, 0);
let mysteryItem3 = new Item("strengthening potion", "positive", 1, 3);
let mysteryItem4 = new Item("weakening potion", "negative", -2, -2);

let Alpha = new Character("Alpha", 10, 2, ["sword", mysteryItem1, mysteryItem2, mysteryItem3, mysteryItem4], false);
let Bravo = new Character("Bravo", 5, 3, ["sword", mysteryItem1, mysteryItem2, mysteryItem3, mysteryItem4], false);
//difference between characters and enemies:  don't want characters to have armor, and don't want enemies to have inventories; want enemy attack function to act differently
let Charlie = new Enemy("Charlie", 3, 0, 3, false);
let Delta = new Enemy("Delta", 5, 0, 2, false);
let Echo = new Enemy("Echo", 2, 2, 1, false);
let Foxtrot = new Enemy("Foxtrot", 3, 2, 1, false);
let Golf = new Enemy("Golf", 10, 5, 3, false);
let Hotel = new Enemy("Hotel", 7, 4, 3, false);



startButton.onclick = function(){
    //setting up initial conditions (in case they were changed during a previous playthrough)
    console.clear();
    submitButton.style.display = "block";
    Alpha = new Character("Alpha", 10, 2, ["sword", mysteryItem1, mysteryItem2, mysteryItem3, mysteryItem4], false);
    Bravo = new Character("Bravo", 5, 3, ["sword", mysteryItem1, mysteryItem2, mysteryItem3, mysteryItem4], false);
    Charlie = new Enemy("Charlie", 3, 0, 3, false);
    Delta = new Enemy("Delta", 5, 0, 2, false);
    Echo = new Enemy("Echo", 2, 2, 1, false);
    Foxtrot = new Enemy("Foxtrot", 3, 2, 1, false);
    Golf = new Enemy("Golf", 10, 5, 3, false);
    Hotel = new Enemy("Hotel", 7, 4, 3, false);

    //display submit button while Alpha.getDefeated() = false and Bravo.getDefeated() = false  (otherwise, do NOT display it)


    /**Describing situation */
    alert("Your character, Alpha, is just outside of a forest.  To get home, you must go through the forest, avoiding obstacles and defeating enemies along the way.  Press OK and open the console to begin.");

    /**CHARLIE*/
    console.log("You are facing a bridge, and you see one enemy.  You must defeat the enemy before you move on.  The enemy's name is Charlie.  Use the attack method.  Press submit when you are done.");
    submitButton.onclick = function(){
        let response1 = prompt("Are you ready to move on?  If so, type 'moveOn'");
        if (response1 == "moveOn"){
            let CharlieDefeated = Charlie.getDefeated();
            if(CharlieDefeated == true){/**CHARILE--DEFEATED*/
                /**FOREST*/
                let response2 = prompt("You keep going and reach a fork in the path.  Do you go left (type 'left') or right (type 'right')?");
                if (response2 == "left"){/**LEFT*/
                    /**DELTA*/
                    console.log("As you go left, you see one enemy.  You must defeat the enemy before you move on.  The enemy's name is Delta.  Use the attack method.  Press submit when you are done.");
                    Delta.hit(Alpha);
                    submitButton.onclick = function(){
                        let response3 = prompt("Are you ready to move on?  If so, type 'moveOn'");
                        if (response3 == "moveOn"){
                            let DeltaDefeated = Delta.getDefeated();
                            if(DeltaDefeated == true){/**DELTA--DEFEATED*/
                                /**WATERFALL*/
                                let response4 = prompt("After defeating Delta (and taking some damage), you continue along the path and see a waterfall.  However, what catches your eye is a path to an opening behind the waterfall.  You know it is getting dark, and it may be a good idea to stop for the day.  However, the sooner you get through the forest, the better.  Type 'cave' to go into the cave behind the waterfall or 'go' to keep going.");
                                if (response4 == "go"){
                                    playerTwoPath();

                                } else if (response4 == "cave"){/**LOSE:  CAVE */
                                    Alpha.setDefeated(true);
                                    console.log("You were defeated.");
                                    alert("As you enter the cave, you hear a tumbling sound.  The vibration from your footsteps must have disturbed some rocks, and you turn around just in time to see the entrance cave in behind you.  You spend days groping in the dark, trying to find an exit, but fail to reach daylight.  Click the start button to try again.");
                                    submitButton.style.display = "none";//HIDE SUBMIT BUTTON
                                } else/**response4 != go or cave*/{
                                    console.log("That is not a valid answer, so you have not moved on.  Press the submit button again when you are ready to move on.");
                                }

                            } else if(DeltaDefeated == false){/**LOSE:  DELTA--NOT DEFEATED */
                                Alpha.setDefeated(true);
                                console.log("You were defeated.");
                                alert("You forgot to defeat Delta, and Delta defeated you while you attempted to move on.  Click the start button to try again.");
                                submitButton.style.display = "none";//HIDE SUBMIT BUTTON
                            }
                        } else if (response3 != "moveOn"){
                            console.log("That is not a recognized answer, so you have not moved on.  Press the submit button again when you are ready to move on.");
                        }
                    }

                } else if (response2 == "right"){/**RIGHT*/
                    /**ECHO AND FOXTROT*/
                    console.log("As you go right, you see two enemies.  You must defeat the enemies before you move on.  The enemies' names are Echo and Foxtrot.  Use the attack method.  Press submit when you are done.");
                    Echo.hit(Alpha);
                    Foxtrot.hit(Alpha);
                    submitButton.onclick = function(){
                        let response3 = prompt("Are you ready to move on?  If so, type 'moveOn'");
                        if (response3 == "moveOn"){
                            let EchoDefeated = Echo.getDefeated();
                            let FoxtrotDefeated = Foxtrot.getDefeated();
                            if (EchoDefeated == true && FoxtrotDefeated == true){/**ECHO AND FOXTROT--DEFEATED */
                                /**FORK*/
                                let response4 = prompt("You reach another fork in the road.  Type 'left' to go left or 'right' to go right.");
                                if (response4 == "left"){
                                    /**PLAYERTWO UNLOCK */
                                    playerTwoPath();

                                } else if (response4 == "right"){
                                    /**HOTEL */
                                    console.log("As you go right, you come across one enemy.  You must defeat the enemy before you move on.  The enemy's name is Hotel.  Use the attack method, and Press submit when you are done.");
                                    Hotel.hit(Alpha);
                                    submitButton.onclick = function(){
                                        let response5 = prompt("Are you ready to move on?  If so, type 'moveOn'.");
                                        if (response5 == "moveOn"){
                                            let HotelDefeated = Hotel.getDefeated();
                                            if (HotelDefeated == true){/**HOTEL--DEFEATED */
                                                /**CLEARING */
                                                let response6 = prompt("You continue down the path and eventually reach a clearing.  Unfortunately, the path you were following does not continue past this point, and there are no other paths connecting to the clearing.  It's dark, and you want to get out of the forest quickly.  You decide the only apparent option is to climb up a tree and hope you can get a view of your village--without falling or encountering an angry animal--then walk in that direction.  However, as you put your hand on the lowest branch, you notice a light in the distance.  Someone nearby has built a fire, but you do not know who or if they will be friendly towards you.  Do you climb up the tree (type 'tree') or do you investigate the fire (type 'fire')?");
                                                if (response6 == "tree"){/**WIN */
                                                    alert("After several minutes, you reach the top of the tree and look around.  To your surprise, you see that the trees thin out close by, and you can see the lights of your village in the distance.  You scramble down the tree, make sure you remember the correct direction, and run.  Sure enough, the trees thin out, and you find yourself outside of the forest.");
                                                    alert("Congratulations, you have won the game!  If you want to play again, press the start button.");
                                                    submitButton.style.display = "none";
                                                } else if (response6 == "fire"){/**LOSE:  FIRE */
                                                    alert("You approach the fire, calling out to see who's there.  As you enter the light, you see five people--but they aren't happy to see you.  Before you can run away or draw your weapon, they charge at you.");
                                                    Alpha.setDefeated(true);
                                                    console.log("You were defeated.  Press the start button to try again.");
                                                    submitButton.style.display = "none";
                                                } else{//response6 != tree or fire
                                                    console.log("That is not a recognized response, so you have not moved on.  Please press the submit button again when you are ready to move on.");
                                                }

                                            } else if (HotelDefeated == false){/**LOSE:  HOTEL--NOT DEFEATED */
                                                Alpha.setDefeated(true);
                                                console.log("You were defeated.");
                                                alert("You forgot to defeat Hotel, and you were defeated while you attempted to move on.  Click the start button to try again.");
                                                submitButton.style.display = "none";//HIDE SUBMIT BUTTON
                                            }
                                        } else {//response5 != "moveOn"
                                            console.log("That is not a recognized response, so you have not moved on.  Press the submit button again when you are ready to move on.");
                                        }

                                    }

                                } else /**response4 != left or right*/{
                                    console.log("That is not a recognized answer, so you have not moved on.  Press the submit button again when you are ready to move on.");
                                }

                            } else{ /**LOSE:  ECHO AND FOXTROT--NOT DEFEATED */
                                Alpha.setDefeated(true);
                                console.log("You were defeated.");
                                alert("You forgot to defeat both Echo and Foxtrot, and you were defeated while you attempted to move on.  Click the start button to try again.");
                                submitButton.style.display = "none";//HIDE SUBMIT BUTTON
                            }

                        } else if (response3 != "moveOn"){
                            console.log("That is not a recognized answer, so you have not moved on.  Press the submit button again when you are ready to move on.");
                        }

                    }

                } else /**response2 != left or right*/ {
                    console.log("That is not a recognized answer.  Press the submit button again to enter a valid response.");
                }

            } else if(CharlieDefeated == false){/**LOSE:  CHARLIE--NOT DEFEATED */
                Alpha.setDefeated(true);
                console.log("You were defeated.");
                alert("You forgot to defeat Charlie, and Charlie defeated you while you attempted to move on.  Click the start button to try again.");
                submitButton.style.display = "none";//HIDE SUBMIT BUTTON
            }
        } else if (response1 != "moveOn"){
            console.log("That is not a recognized answer, so you have not moved on.  Press the submit button again when you are ready to move on.");
        }
    }




}


function playerTwoPath(){
    Golf = new Enemy("Golf", 10, 5, 3, false);

    alert("As you keep going, you see a shadowy figure.  You approach and see that it is your friend Bravo, who explains he is also trying to cross through the forest, but that there is a powerful enemy up ahead.  'I don't think I could withstand the amount of damage that person can inflict,' he says.  'I know the two of us bought the some of the same things in town--a health potion, poison, a strengthening potion, and a weakening potion--but it's too dark for me to see which is which.'");
    console.log("You know that it would be too dangerous to wait until morning, so you will have to guess which items are safe and which are not.  You also need to make sure both you and Bravo have used the item; otherwise, one of you may be defeated, and you will fail.  Thankfully, since you and Bravo have the same things in your bags and the items in a corresponding pair have the same shape, you know that your mysteryItem1 is the same as Bravo's mysteryItem1, and so on.");
    console.log("Use the items in the inventories on Alpha and Bravo (these are the names you will use when typing in commands).  When you are ready, press the submit button.");
    submitButton.onclick = function(){
        let response5 = prompt("Are you ready to move on?  If so, type 'moveOn'.");

        if(response5 == "moveOn"){
            alert("You come across the enemy Bravo was talking about, who inflicts 9 damage on you and 6 on Bravo.");
            Golf.hit(Alpha);   Golf.hit(Alpha);   Golf.hit(Alpha);
            Golf.hit(Bravo);  Golf.hit(Bravo);
            if(Alpha.getDefeated() == false && Bravo.getDefeated() == false){
                console.log("Both of you survived the enemy's attack, so now you can launch your own attack.  You must defeat the enemy before you move on.  The enemy's name is Golf.  Once you are ready, press the submit button to move on.");
                submitButton.onclick = function(){
                    let response6 = prompt("Are you ready to move on?  If so, type 'moveOn'.");
                    if(response6 == "moveOn"){
                        let GolfDefeated = Golf.getDefeated();
                        if (GolfDefeated == true){/**WIN*/
                            alert("You and Bravo have defeated Golf and begin running down the path, desperate to get out of the forest before anyone else can attack you.  Finally, as you are almost out of energy, you see the trees thin out, and you can see your village in the distance.");
                            alert("Congratulations, you have won the game!  If you want to play again, press the start button.");
                            submitButton.style.display = "none";
                        } else if(GolfDefeated == false){/**LOSE:  GOLF--NOT DEFEATED */
                            Alpha.setDefeated(true);
                            Bravo.setDefeated(true);
                            console.log("You were defeated.");
                            alert("You forgot to defeat Golf, and Golf defeated you and Bravo while you attempted to move on.  Click the start button to try again.");
                            submitButton.style.display = "none";
                        }

                    } else{//response6 !== "moveOn"
                        console.log("That is not a recognized answer, so you have not moved on.  Press the submit button again when you are ready to move on.");
                    }


                }
            
            } else {/**LOSE:  GOLF--ATTACK */
                console.log("Since both of you didn't survive the attack, you have lost.  Press the start button to retry.");
                Alpha.setDefeated(true);
                Bravo.setDefeated(true);
                console.log("You were defeated.");
                submitButton.style.display = "none";

            }
    
        } else{/**response5 != "moveOn" */
            console.log("That is not a recognized answer, so you have not moved on.  Press the submit button again when you are ready to move on.");
        }
    }

}
