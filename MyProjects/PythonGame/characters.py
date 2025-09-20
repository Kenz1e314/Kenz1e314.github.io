import map
character_map = map.Map()

class Character:
    """Initializing variables"""
    x = 1 # forest_south - start position
    y = 2 # forest_south - start position
    position = character_map.map[y][x]
    movement_coordinates = [-1, 1, 1, -1] # N, S, E, W
    objective = "Explore the area" # Starting objective
    def __init__(self, name, inventory):
        self.name = name
        self.inventory = inventory

    """# Getters and setters"""
    def get_name(self):
        return self.name
    def get_inventory(self):
        return self.inventory
    def get_position(self):
        return self.position
    def set_position(new_x, new_y):
        Character.x = new_x
        Character.y = new_y
        Character.position = character_map.map[new_y][new_x]
    def set_objective(new_objective):
        Character.objective = new_objective

    """Print functions"""
    def print_inventory(self):
        if len(self.inventory) == 0:
            print("You do not have anything in your inventory.")
        else:
            message = ""
            for i in range(len(self.inventory)):
                item = self.inventory[i].get_name()
                if i != len(self.inventory)-1:
                    message += item + ", "
                else:
                    message += item
            print(message)
    def print_position(self):
        print("You are at:  " + self.position.get_name() + " (" + self.position.get_label() + ")")
    def print_objective(self):
        print("Objective:", self.objective)
    def describe_area(self):
        self.position.print_full_description()
    def find_description(self, place):
        place.print_full_description()

    
    """Movement function"""     
    def move(self, direction): # must enter full word for parameter
        directions = ["north", "south", "east", "west"]
        try:
            d_index = directions.index(direction)
        except ValueError:
            print("That is not a recognized response.  Please try again.")
            return False
        else:
            coords = Character.movement_coordinates[d_index]
            y_coords = Character.y
            x_coords = Character.x
            if d_index == 0 or d_index == 1:
                y_coords += coords
            else:
                x_coords += coords
                
            if x_coords < 0 or y_coords < 0 or x_coords >= len(character_map.map[0]) or y_coords >= len(character_map.map):
                print("That is not an option.")
                return False
            elif character_map.map[y_coords][x_coords] == None:
                print("That is not an option.")
                return False
            elif character_map.map[y_coords][x_coords].is_locked == True:
                print("That path is locked.")
                return False
            else:
                new_position = character_map.map[y_coords][x_coords]
                print("Moving " +directions[d_index]+ ".  You are now at:  " +new_position.name)
                if new_position.get_is_discovered() == False:
                    self.find_description(new_position)
                Character.set_position(x_coords, y_coords)
                new_position.set_is_discovered(True)
                return True


    """Interaction functions"""
    def talk_to(self, person_name):
        person_found = False
        people_list = self.position.get_people()
        for i in range(len(people_list)):
            if person_name == people_list[i].get_name().lower():
                person_found = True
                person = people_list[i]
                print(person.get_name() + " says, '" + person.get_dialogue_options()[person.dialogue_index] + "'")
                person.increment_talk_count()
                return True
        if person_found == False:
            print("Not a recognized person, or maybe you are in the wrong area.")   
            return False

    
    def pick_up(self, item_name):
        for item_object in self.position.get_contained_items():
            if item_name == item_object.get_name():
                item_object.set_pick_up()
                self.inventory.append(item_object)
                self.position.removeItem(item_object)
                print("You have picked up the " + item_name)
                return True
        print("Not a recognized item, or maybe you are in the wrong area.")
        return False

        
    def use_item(self, item_name):
        # Checking to see if user has the item in their inventory
        have_item = False
        for item_object in self.inventory:
            if item_name == item_object.get_name():
                have_item = True
        if not have_item:
            print("You do not have that item.")
            return False

        # Checking to see if the item can be used there
        for item_object in self.position.get_accepted_items():
            if item_name == item_object.get_name():
                if item_object.check() == True:
                    print("Using " + item_name)
                    item_object.consume()
                    self.position.accept_item(item_object)   
                    return True
                elif item_object.check() == None:
                    print("Using " + item_name + "; " + item_name + " has been used up."  )
                    item_object.consume()
                    self.position.accept_item(item_object)
                    self.inventory.remove(item_object)
                    return True
        print("You are in the wrong location to use that object.")
        return False

    
    def inspect(self, thing): # The thing always exists as a string...makes this easier; Also, so far all this does is check if it exists
        # Checking to see if thing exists in area
        pass
