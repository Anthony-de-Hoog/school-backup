var readlineSync = require("readline-sync");

let score = 0

console.log("Hello You!");
console.log("Ik ben Anthony!");

 
// Wait for user's response.
var userName = readlineSync.question("Hoe heet jij? ");
console.log("Hallo " + userName + "!");

console.log("Om mij beter te leren kennen gaan we een quiz doen.Door het beantwoorden van de vragen leer je mij kennen.");

var readlineSync = require('readline-sync');
  antwoord = "Hoorn"
  Huis = ["Amsterdam", "Hoorn", "Rotterdam"];
  index = readlineSync.keyInSelect(Huis, "Waar woon ik?");

if ( antwoord === Huis[index] ) {
    console.log("Dat is juist, ik woon in Hoorn!")
    score += 1
} else {
    console.log("Helaas, maar dat is onjuist. Ik woon in Hoorn!")
};

var readlineSync = require('readline-sync');
  antwoord = "Werenfridus"
  School = ["Oscar", "Ceder", "Werenfridus"];
  index = readlineSync.keyInSelect(School, "Op welke middelbare school heb ik gezeten?");

if ( antwoord === School[index] ) {
    console.log("Dat is juist, ik heb op het Werenfridus gezeten!")
    score += 1
} else {
    console.log("Helaas, maar dat is onjuist. Ik heb op het Werenfridus gezeten!")
};

var readlineSync = require('readline-sync');
  antwoord = "Havo"
  Vooropleiding = ["Havo", "Mavo", "VWO"];
  index = readlineSync.keyInSelect(Vooropleiding, "Welke vooropleiding heb ik hiervoor gedaan?");

if ( antwoord === Vooropleiding[index] ) {
    console.log("Dat is juist, ik heb Havo gedaan!")
    score += 1
} else {
    console.log("Helaas, maar dat is onjuist. Ik heb Havo gedaan!")
};

var readlineSync = require('readline-sync');
  antwoord = "Katten"
  Huisdieren = ["Reptielen", "Honden", "Katten"];
  index = readlineSync.keyInSelect(Huisdieren, "Wat voor huisdieren heb ik?");

if ( antwoord === Huisdieren[index] ) {
    console.log("Dat is juist, ik heb katten!")
    score += 1
} else {
    console.log("Helaas, maar dat is onjuist. Ik heb katten!")
};

var readlineSync = require('readline-sync');
  antwoord = "Gitaar"
  instrument = ["Piano", "Gitaar", "Cello"];
  index = readlineSync.keyInSelect(instrument, "Welke instrument bespeel ik?");

if ( antwoord === instrument[index] ) {
    console.log("Dat is juist, ik speel Gitaar!")
    score += 1
} else {
    console.log("Helaas, maar dat is onjuist. Zo getalenteerd ben ik niet. Ik speel alleen gitaar!")
};

console.log("Gefeliciteerd! Jouw score is: " + score + " van de 5! Het is niet erg of het een laag score was of een hoog score. Wat natuurlijk wel belangrijk is is dat je het naar je zin had. Dank je wel voor het spelen!")
console.log("Will je het nog een keer proberen om je scorem te verbeteren, of wil je stoppen?")
