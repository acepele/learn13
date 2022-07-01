/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const books = ["1.'Wild Flowers'", "2.'The history of humans'", "3.'Love and War'", "4.'Proud and Prejudice'", "5.'How to became a millionaire'", "6.'My first love'"];
let textBooks = "";
for (const x of books) {
    textBooks += x + "<br>";
}

document.getElementById("list").innerHTML = textBooks;



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const titles = new Set(["1.'Love me'", "2.'If I were a boy'", "3.'Halo'", "4.'Pappi'", "5.'Amor guitano'"]);
let songs = "";
for (const x of titles) {
    songs += x + "<br>";
}

document.getElementById("set1").innerHTML = songs;

// add two more songs to the set then display in the set2 paragraph

const title = new Set();
let songs2 = ""
title.add("6.'Fly little bird'");
title.add("7.'Baby shark'");
for (const x of title) {
    songs2 += x + "<br>";
}
document.getElementById("set2").innerHTML = songs2;





/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const info = new Map([
    ["Anna", "annakaiman3@gmail.com"],
    ["Ella", "ellab12@hotmail.com"],
    ["Aurora", "aurora09@yahoo.com"],
    ["Ben", "benaffleck31@gmail.com"],
    ["Lusi", "lusialvaro5@hotmail.com"]
]);

let personal_info = "";
info.forEach(function(value, key) {
    personal_info += key + ' = ' + value + "<br>"
})

document.getElementById("map1").innerHTML = personal_info;


// add two new names and emails and display in map2 use the forEach() method

const info2 = new Map([
    ["Ken", "kenan1@gmail.com"],
    ["Luigi", "luigi5@hotmail.com"]
]);

let text = "";
info2.forEach(function(value, key) {
    text += key + ' = ' + value + "<br>"
})

document.getElementById("map2").innerHTML = text;



// get and display the email of one person, display in map3

const info3 = new Map([
    ["Luigi", "luigi5@hotmail.com"]
]);

document.getElementById("map3").innerHTML = info3.get("Luigi");