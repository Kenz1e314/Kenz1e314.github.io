"""locations.py:  includes the Item, Person, and Location classes"""

"""ITEMS"""
class Item:
    def __init__(self, name, capacity):
        self.name = name
        self.is_picked_up = False
        self.is_used_up = False
        self.capacity = capacity # Either None (infinite) or an integer greater than 0
    def get_name(self):
        return self.name
    def get_found_status(self):
        return self.is_picked_up
    def get_use_status(self):
        return self.is_used_up
    def set_pick_up(self):
        self.is_picked_up = True
    def check(self):  # Adjusts capacity as needed; returns True if item is not used up, False if the object has already been used up/DNE, and None if it is used up in that round
        if self.capacity == None or self.capacity > 1:
            return True
        elif self.capacity == 1:
            return None
        else:
            return False
    def consume(self):
        if self.capacity is not None and self.capacity > 1:
            self.capacity -= 1
            
# Creating items
key = Item("key", 1)


"""THINGS-Observed in environment"""
# May just want to make this an extension of the People class...
"""class Thing:
    def __init__(self, name, description_options):
        self.name = name
        self.is_exhausted = is_exhausted
        self.is_one_time_interaction = is_one_time_interaction

    def get_name(self):
        return self.name
    def get_is_exhausted(self):
        return self.is_exhausted
    def get_interaction_limit(self):
        return self.interaction_limit
    def set_is_exhausted(self, new_bool):
        self.is_exhausted = new_bool

    def is_observed(self):
        if (is_exhausted == True):
            if (is_one_time_interaction == True):
                is_exhausted 

"""
                
    
        
        

"""PEOPLE"""
class Person:
    def __init__(self, name, dialogue_options):
        self.name = name
        self.dialogue_options = dialogue_options
        self.dialogue_index = 0
        self.talk_count = 0
        
    def get_name(self):
        return self.name
    def get_dialogue_options(self):
        return self.dialogue_options
    def get_dialogue_index(self):
        return self.dialogue_index
    def get_talk_count(self):
        return self.talk_count
        
    def increment_talk_count(self):
        self.talk_count += 1
    def reset_talk_count(self):
        self.talk_count = 0

# Creating people
alice = Person("Alice", ["Hello!  Go find and use a key to unlock the path forward.", "Hello again!  Go north to continue."])


"""LOCATIONS"""
# Creating dictionaries to make Location initialization easier
descriptions = {
    " F-S ":  "You are at the south end of a forest.  There is a path leading north.", 
    "F-NW ":  "You are at the northwest end of a forest.  There is a path leading east.  A rock blocks a path to the west.",
    " F-N ":  "You are at the north end of a forest.  There are paths leading north, south, east, and west.  The north path is locked.",
    "F-NE ":  "You are at the northeast end of a forest.  There is a path leading west.",
}  
people_initial = {
    " F-N ":  [alice]
}
contained_items_initial = {
    "F-NW ":  [key]
}
accepted_items = {
    " F-N ":  [key]
}
"""inspect_items =  {
    "F-NE ": ["rock"]
}"""

class Location:  # attributes name, label, description, isLocked, isDiscovered, people, items, and things that can be inspected
    def __init__(self, name, label, is_locked, is_discovered):
        self.name = name
        self.label = label # Each label should be 5 characters in length
        self.description = descriptions.get(label, "")
        self.is_locked = is_locked
        self.is_discovered = is_discovered
        self.people = people_initial.get(label, [])
        self.contained_items = contained_items_initial.get(label, [])
        self.accepted_items = accepted_items.get(label, [])
        # self.inspect_items = inspect_items.get(label, [])

    # Getters
    def get_name(self):
        return self.name
    def get_label(self):
        return self.label
    def get_description(self):
        return self.description
    def get_is_locked(self):
        return self.is_locked
    def get_is_discovered(self):
        return self.is_discovered
    def get_people(self):
        return self.people
    def get_contained_items(self):
        return self.contained_items
    def get_accepted_items(self):
        return self.accepted_items
    """def get_inspect_items(self):
        return self.inspect_items"""
    
    # Setters/modifiers
    def set_is_discovered(self, new_value):
        self.is_discovered = new_value
    def unlock(self):
        self.is_locked = False
    def removeItem(self, item):
        if item in self.contained_items:
            self.contained_items.remove(item)
    def accept_item(self, item):
        self.accepted_items.remove(item)
    def print_full_description(self):
        print(self.description)
        for i in range(len(self.people)):
            print(self.people[i].name + " is in the area.")
        for i in range(len(self.contained_items)):
            print("There is a " + self.contained_items[i].name + ".")
    def remove_text(self, text):
        self.description = self.description.replace(text, "")
        
        

# Creating locations

"""MAP 1"""
forest_S = Location("Forest - south end", " F-S ", False, True)

forest_NW = Location("Forest - northwest end", "F-NW ", False, False)
forest_N = Location("Forest - north end", " F-N ", False, False)
forest_NE = Location("Forest - northeast end", "F-NE ", False, False)

path_end = Location("Path end", "END-P", True, False)


"""MAP 2"""
village_S = Location("Village - south end", " V-S ", False, False)

plaza_SW = Location("Village plaza - southwest end", "VP-SW", False, False)
plaza_S = Location("Village plaza - south end", "VP-S ", False, False)
plaza_SE = Location("Village plaza - southeast end", "VP-SE", False, False)

shop_exterior = Location("Village shop", " VS  ", False, False)
plaza_W = Location("Village plaza - west end", "VP-W ", False, False)
plaza_C = Location("Village plaza - center", "VP-C ", False, False)
plaza_E = Location("Village plaza - east end", "VP-E ", False, False)
inn_exterior = Location("Village inn", " VI   ", False, False)

plaza_NW = Location("Village plaza - northwest end", "VP-NW", False, False)
plaza_N = Location("Village plaza - north end", "VP-N ", False, False)
plaza_NE = Location("Village plaza - northeast end", "VP-NE", False, False)

village_N = Location("Village - north end", "V-N", True, False)







