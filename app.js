console.log("Javascript is alive!");
// In a separate JS file:
// When the page loads:
// Change the greeting from "Hello, There!" to "Hello, World!".
document.getElementById('greeting').innerHTML = 'Hello, World!';

// Set the background color of each <li> to yellow.
var list_items = document.querySelectorAll("li");
for (var i = list_items.length - 1; i >= 0; i--) {
list_items[i].style.backgroundColor = "yellow";
}var img1 = (document.getElementsByTagName("img"))


// Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.
var newImg = document.createElement('img');
newImg.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
document.getElementById('greeting').appendChild(newImg);

// Create and add a ul element to the end of the body with a class of "todo-items"
var toDoItems = document.createElement('ul')
toDoItems.className = "todo-items";
toDoItems.style.color = "black";
document.body.appendChild(toDoItems);


// Go through the array ['make coffee','eat donut','change diapers','drive to work'] and create an li element for each item e.g. <li>make coffee</li>
let list = ['Make Coffee', 'Eat Donut', 'Change Diapers', 'Drive To Work'];
// Add each newly created li element to your ul of class "todo-items"
var newLi = document.createElement('li')
newLi.class = "todo-items"

var li = document.createElement('li')
var newLiText = document.createTextNode('make coffee');
li.appendChild(newLiText);
document.body.appendChild(li);

var li1 = document.createElement('li')
var newLiText1 = document.createTextNode('eat donut');
li1.appendChild(newLiText1);
document.body.appendChild(li1);

var li2 = document.createElement('li')
var newLiText2 = document.createTextNode('change diapers');
li2.appendChild(newLiText2);
document.body.appendChild(li2);

var li3 = document.createElement('li')
var newLiText3 = document.createTextNode('drive to work');
li3.appendChild(newLiText3);
document.body.appendChild(li3);


// Part Two:
// Afterwards:

// Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.
var selector, elems, makeActive;
selector = "li";
elems = document.getElementsByTagName(selector);

makeActive = function (e) {
    for (var i = 0; i < elems.length; i++){
        elems[i].classList.remove('selected');
      }
    e.target.classList.add('selected');
};

for (var i = 0; i < elems.length; i++){
    elems[i].addEventListener('mousedown', makeActive);
}
var removeDiv = document.getElementById("ghosting");
removeDiv.onmouseover = function (){
  removeDiv.remove();
}

// When the gray div is moused over, it's removed from the DOM.
var divs = (document.querySelectorAll("div"))
grayOut = function (e) {
  divs[4].hidden = true;
}
divs[4].addEventListener('mouseover', grayOut);


// When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
var getWide = function (e) {
    divs[5].style.width = "400px";
  }
  var getNarrow = function (e) {
    divs[5].style.width = "200px";
  }
    
  divs[5].addEventListener('mouseover', getWide);
  divs[5].addEventListener('mouseout', getNarrow);
  
  console.log(document.querySelectorAll('div'))
  
  
// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
window.onkeydown = function(event) {
    if (event.keyCode = 0-9) {
       alert("I HATE NUMBERZZZ!");
    }
  };
// BONUS: If someone types the Konami Code (https://en.wikipedia.org/wiki/Konami_Code), the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
// var neededkeys = [38,38,40,40,37,39,37,39,66,65]
// var started = false;
// var count = 0;
// var konami = function(e) {
//     key = e.keyCode;
//     if (!started) {
//         if (key == 38) {
//             started = true;
//         }
//     }
//     if (started) {
//         if (neededkeys[count] == key) {
//             count++;
//         } else {
//             reset();
//         }
//         if (count == 10) {
//             reset();
//             // Do your stuff here
//             alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");

//         }
//     } else {
//         reset();
//     }
// };
// function reset() {
//     started = false;
//     count = 0;
// }

// document.onkeydown = konami;
