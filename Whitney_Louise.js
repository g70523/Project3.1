/*Louise Whitney
 SDI 1303
 Project 3
 Fairies!
 */

//Start Story
 // Global Variables
 var turnsNaughty = true;
 var bad = "The naughty fairies are taking over!";
 var turnedFairy = true;
 var badFairies = 6;
 var goodFairies = 1;
 var success = true;
 var fail   = true;
 var safeFairies = true;
 
 // Procedure

var turnFairies = function() {
	if (turnsNaughty === true) {
		return(bad);
	} else { return("The good fairies help everyone!!");}
	return;
};
console.log(turnFairies());

// Boolean

var badQueen = function(){
    if (turnedFairy === true &&  success === true){
        return("The queen is turning all fairies naughty!")
    }else {return("The fairies are avoiding the naughty queen!")}
    return(turnedFairy)
};

var badfairy = {

    "name":       "LuLu",
    "color":      "purple",
    "power":      "wind",
    "position":   "queen",
    "badleader":     function(){ //Method Accessor
        var badFairyLeader = badfairy.name
        return badFairyLeader;
    }//End leader Method Accessor
       
};
console.log("The bad fairies have a queen whose name is " + badfairy.badleader() + ".");
console.log(badQueen());

// Number

var numberTurned = function() {
        console.log("There are currently 6 naughty fairies and adding more every day!");
	while(badFairies < 100) {
		badFairies ++;
                console.log("There are" + " " + badFairies + " " + "bad fairies and counting...");
	}
	return("We are losing" + " " + goodFairies + " " + " fairy everyday!");

};
console.log(numberTurned());

var fairy = {

    "name":       "Sasha",
    "color":      "turqoise",
    "power":      "water",
    "position":   "leader",
    "leader":     function(){ //Method: Accessor
        var fairyLeader = fairy.name
        return fairyLeader;
    },//End leader Method: Accessor
    "makeNaughty": function(name,power){ //Method: Mutator
        this.name = name;
        this.power = power;
        console.log("Her new name is " + name + " and her new power is to " + power + ".");
        
    }, //End makeNaughty Method: Mutator
    "turnedFairies": function(name, color, power, position) { //Method: Process
        fairy.name = name;
        fairy.color = color;
        fairy.power = power;
        fairy.position = position;
    }//End turnedFairies Method: Process

};
 console.log("The good fairies don't have a queen but a leader who is " + fairy.leader() + "." + "" + fairy.leader() + "" + " was turned into a naughty fairy.")

 fairy.makeNaughty("Sassy", "drown")
 
 
//String Function

var goodFairyNumber = function() {
	var good = "All the good fairies need to stick together and be strong!";
	var stayAway = "We need to stay away from the naughty fairies!";
		if (safeFairies === true) {
			return(good + " " + stayAway);
		} else if (safeFairies === false) {
			return("We are all in danger of the naughty fairies!" + "" + stayAway);
		} else {return("How do we fight back?");}
};
console.log(goodFairyNumber());


//Array Function

var goodBad = function() {
	for (var x = 0; x < sectionList.length; x++) {
		console.log("The section to replenish is" + " " + sectionList[x]);
	}
	return(workEnd);
};

//JSON

var Fairies={
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
    

// End Story



 
