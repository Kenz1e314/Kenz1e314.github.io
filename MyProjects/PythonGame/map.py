from locations import *

map1 = [
        [None, path_end, None], 
        [forest_NW, forest_N, forest_NE], 
        [None, forest_S, None]
    ]

map2 = [
    [None, None, village_N, None, None],
    [None, plaza_NW, plaza_N, plaza_NE, None],
    [shop_exterior, plaza_W, plaza_C, plaza_E, inn_exterior],
    [None, plaza_SW, plaza_S, plaza_SE, None],
    [None, None, village_S, None, None],
]

class Map:
    map = map1

    def show_map(self):
        print("")
        for row in range(len(self.map)):
            row_message = "|"
            for col in range(len(self.map[0])):
                if self.map[row][col] == None:
                    row_message += "xxxxx|"
                elif self.map[row][col].is_discovered == True:
                    row_message += self.map[row][col].label + "|"
                elif self.map[row][col].is_discovered == False:
                    row_message += "_____|"
                else:
                    row_message += "Error"
            print(row_message)
        print("Key:  _____ means undiscovered location, xxxxx means no location at that point, and place names represented by abbreviations")
        print("")
        print("")

    def set_map_2():
        pass
    def set_map_3():
        pass
                    
