var readlineSync = require("readline-sync");

let score = 0

console.log("Hello You!");
console.log("Ik ben Anthony!");

 
// Wait for user's response.
var userName = readlineSync.question("Hoe heet jij? ");
console.log("Hallo " + userName + "!");

console.log("Om mij beter te leren kennen gaan we een quiz doen.Door het beantwoorden van de vragen leer je mij kennen.");


// The quiz starts
var readlineSync = require('readline-sync');
var huis = readlineSync.question("Waar woon ik? a: Amsterdam, b: Hoorn, c: Rotterdam ")
if (huis == "b") {
    console.log("Dat is juist! Ik woon in Hoorn!");
    score += 1
} else if (huis == "a") {
    console.log("Sorry, maar dat is onjuist. Ik woon in Hoorn!");
} else if (huis == "c") {
    console.log("Sorry, maar dat is onjuist. Ik woon in Hoorn!");
} else {
    console.log("Sorry,maar probeer te antwoorden in a b c zonder hoofdletters!");
} 

var readlineSync = require('readline-sync');
var school = readlineSync.question("Op welke school heb ik gezeten? a: Clucius b: Ceder c: Werenfridus ")
if (school == "c") {
    console.log("Dat is juist! Ik heb op het Werenfridus gezeten!");
    score += 1
} else if (school == "a") {
    console.log("Sorry, maar dat is onjuist. Ik heb op het Werenfridus gezeten!");
} else if (school == "c") {
    console.log("Sorry, maar dat is onjuist. Ik heb op het Werenfridus gezeten!");
} else {
    console.log("Sorry,maar probeer te antwoorden in a b c zonder hoofdletters!");
} 

var readlineSync = require('readline-sync');
var school = readlineSync.question("Welke vooropleiding heb ik hiervoor gedaan? a: Havo b: Mavo c: VWO ")
if (school == "a") {
    console.log("Dat is juist! Ik heb op Havo gedaan!");
    score += 1
} else if (school == "b") {
    console.log("Sorry, maar dat is onjuist. Ik heb op Havo gedaan!");
} else if (school == "c") {
    console.log("Sorry, maar dat is onjuist. Ik heb op Havo gedaan!");
} else {
    console.log("Sorry,maar probeer te antwoorden in a b c zonder hoofdletters!");
} 

var readlineSync = require('readline-sync');
var huisdieren = readlineSync.question("Wat voor huisdieren heb ik? a: Reptielen b: Honden c: Katten ")
if (huisdieren == "c") {
    console.log("Dat is juist! Ik heb Katten!");
    score += 1
} else if (huisdieren == "a") {
    console.log("Sorry, maar dat is onjuist. Ik heb Katten!");
} else if (huisdieren == "b") {
    console.log("Sorry, maar dat is onjuist. Ik heb Katten!");
} else {
    console.log("Sorry,maar probeer te antwoorden in a b c zonder hoofdletters!");
} 

var readlineSync = require('readline-sync');
var instrumenten = readlineSync.question("Wat voor instrument bespeel ik? a: Piano b: Gitaar c: Cello ")
if (instrumenten == "b") {
    console.log("Dat is juist! Ik speel Gitaar!");
    score += 1
} else if (instrumenten == "a") {
    console.log("Helaas, maar dat is onjuist. Zo getalenteerd ben ik niet. Ik speel alleen gitaar!");
} else if (instrumenten == "c") {
    console.log("Helaas, maar dat is onjuist. Zo getalenteerd ben ik niet. Ik speel alleen gitaar!");
} else {
    console.log("Sorry,maar probeer te antwoorden in a b c zonder hoofdletters!");
} 


// The quiz ends and the user gets the score
console.log("Gefeliciteerd! Jouw score is: " + score + " van de 5! Het is niet erg of het een laag score was of een hoog score. Wat natuurlijk wel belangrijk is is dat je het naar je zin had. Dank je wel voor het spelen!")
readlineSync.question("Will je het nog een keer proberen om je scorem te verbeteren, of wil je stoppen? ");