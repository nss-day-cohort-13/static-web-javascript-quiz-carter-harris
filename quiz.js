// Instructions

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
// It accepts a single object as an argument.
// The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key
// (as long as the cursor is in one of the input fields),
// or click a button that is labeled "Grow your tree" and the tree should be shown in the console.
// This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button,
// then display an alert stating that both fields must have a value.

// Grow your tree

// other option character.repeat((2 * 1) + i) + '\n';

// Example
// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************

console.log("Where the star goes");


// Get a reference to the button element in the DOM
var button = document.getElementById("growButton"); // made the converter button a var
// Assign a function to be executed when the button is clicked
button.addEventListener("click", movement);

var heightField = document.getElementById("height");
heightField.addEventListener("keypress", handleKeyPress);

var characterField = document.getElementById("character");
characterField.addEventListener("keypress", handleKeyPress);



function handleKeyPress(e) { // when you press enter instead of click, had to add the function name to both the input tags
  var key = e.keyCode;
  if (key == 13) {
    movement();
  }
}




function movement() { //middle function to make objects to be passed below
	var treeData = {};
  treeData.height = heightField.value;
  treeData.character = characterField.value;
  tree(treeData);
}



function tree(thePass) { // see how you used "thePass"

  if (thePass.height === "" || thePass.character === "") {
    alert("Come on...How can you build a tree without a height or value defined...please define both fields. ");
  }

  var christmasTree = "";

  for (var i = 0; i < thePass.height; i++) {
    christmasTree += " ".repeat(thePass.height - i - 1) + thePass.character.repeat((i + 1) + i) + '\n';
  }
  console.log(christmasTree);
  console.log("Where the presents go");
}
