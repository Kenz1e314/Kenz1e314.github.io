"""
I initially created this program on Khan Academy.  Link:
https://www.khanacademy.org/python-program/wip-functionsclasses-pt-5/5070814515740672

Instructions:
    show objective - tells you your goal
    get position - tells you where you are
    show map - tells you what areas you have explored (represented by area labels) and what areas you haven't (represented by _____)
    describe area - describes the area
    show inventory - shows what is in your inventory
    go (north, south, east, or west) - moves your character
    talk to (name) - talk to another character
    pick up (item) - pick up an item
    use (item) - use an item
"""


import locations
import characters
import map

"""Initializing game-supporting variables and functions"""
protagonist = characters.Character("Person", [])
game_finished = False
my_map = map.Map()
    
# Commands
simple_commands = {
    "get position":  protagonist.print_position,
    "show map":  my_map.show_map,
    "describe area":  protagonist.describe_area,
    "show inventory":  protagonist.print_inventory,
    "show objective":  protagonist.print_objective
}
complex_commands = {
    "go":  protagonist.move,
    "talk to":  protagonist.talk_to,
    "pick up":  protagonist.pick_up,
    "use":  protagonist.use_item
}

# Setting up user interface and instructions
response = input("Press enter to begin:  ")
protagonist.print_position()
protagonist.describe_area()
protagonist.print_objective()
print("-------------------")

"""Game run-through"""
while game_finished == False:
    # Getting user input
    response = input("Your move:  ").lower().strip()
    response_found = False  
    
    # Checking for "simple" commands
    for command in simple_commands:
        if command == response:
            simple_commands[command]() #need parentheses here to call the function value
            response_found = True
            break
            
    # Checking for more complex commands (i.e. noun is subject to change)
    if response_found == False:
        for key in complex_commands:
            if key in response:
                response_found = True
                potential_var = response.replace(key, "").strip()
                progress = complex_commands[key](potential_var)
                break


    # User entered unrecognized response
    if response_found == False:
        print("Unrecognized response.  Please try again.")

    print("-------------------")
    
    # Game progression:  Check for correct input, correct location (item/char may be associated w/ more than one), and that the program processed the input correctly
    # For people, also check this is the first time they have given their progress-making comment (and that the comment will still help make progress, if applicable)
    if (response == "talk to alice" and progress and locations.key.get_found_status() == False
        and protagonist.position == locations.forest_N and locations.alice.dialogue_index == 0 and locations.alice.talk_count == 1):
        characters.Character.set_objective("Find the key")
    elif response == "pick up key" and protagonist.position == locations.forest_NW and progress:
        characters.Character.set_objective("Use the key")
    elif response == "use key" and protagonist.position == locations.forest_N and progress:
        characters.Character.set_objective("Reach the end of the path")
        locations.path_end.unlock()
        locations.alice.dialogue_index = 1
        locations.alice.reset_talk_count()
        locations.forest_N.remove_text("The north path is locked.")
                
    """End Game"""
    if protagonist.get_position() == locations.path_end:
        break

print("Congratulations!  You have finished the game!")


"""
IDEAS:
Getting inventory to show how much of an item you have (inventory dictionary?)
Making it so some items cannot be exhausted from the environment, or create a large number of times an item can be collected (i.e. farming); 
    would need to change the description code for that to work
Adding an "inspect" function for game progression
Separating game progression code into a new file
"""
