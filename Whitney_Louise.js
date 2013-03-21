/*Louise Whitney
 SDI 1303
 Project 3
 Fairies!
 */

//JSON

var fairies={
    "naughtyFairy": [
        {
            "name":     "LuLu",
            "color":    "purple",
            "power":    "wind",
            "position": "queen"
        },
        {
            "name":     "LaLa",
            "color":    "green",
            "power":    "shocks",
            "position": "princess" 
        },
        {
            "name":     "KiKi",
            "color":    "pink",
            "power":    "stuns",
            "position": "follower"
        },
        {
            "name":     "MiMi",
            "color":    "blue",
            "power":    "shrink",
            "position": "follower"
        },
        {
            "name":     "FiFi",
            "color":    "Red",
            "power":    "fire",
            "position": "follower"
        },
        {
            "name":    "Mack",
            "color":   "orange",
            "power":   "grow",
            "position":"follower"
        }
    ]
    
    };
    
var newFairies={
    "goodFairy": [
        {
            "name":     "Sasha",
            "color":    "turqoise",
            "power":    "water",
            "position": "leader"
        },
        {
            "name":     "Tink",
            "color":    "fuchsia",
            "power":    "love",
            "position": "co-leader" 
        },
        {
            "name":     "Mary",
            "color":    "violet",
            "power":    "protection",
            "position": "follower"
        },
        {
            "name":     "Babs",
            "color":    "yellow",
            "power":    "light",
            "position": "follower"
        },
        {
            "name":     "Paisley",
            "color":    "tan",
            "power":    "warmth",
            "position": "follower"
        },
        {
            "name":    "KayKay",
            "color":   "maroon",
            "power":   "chaos",
            "position":"follower"
        } 
    ]
    };
    
//Fairy Objects

var fairy = {

    name:       "Sasha",
    color:      "turqoise",
    power:      "water",
    position:   "leader",
    leader:     function(){ //Method Accessor
        var fairyLeader = fairy.name
        return fairyLeader;
    },//End leader Method Accessor
        makeNaughty: function(name,power){ //Method Mutator
        this.name = name;
        this.power = power;
        console.log("Your new name is " + name + " and your new power is to " + power + ".");
        
    } //End makeNaughty Method Mutator
    

};
 console.log("The leader of the good fairies is " + fairy.leader() + "." + "" + "Her fairy color is " + fairy.color + ".")
 console.log("And her fairy power is " + fairy.power + ".")
 fairy.makeNaughty("Sassy", "drown")




