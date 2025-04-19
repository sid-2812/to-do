var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.trim().length; // Ensures no empty spaces are counted
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value.trim())); // Adds trimmed input value
    ul.appendChild(li);
    input.value = ""; // Clears the input field

    // Add toggle functionality for marking items as done (with glow effect)
    li.addEventListener("click", function () {
        li.classList.toggle("done"); // Toggles the 'done' class to add/remove glow effect
    });

    // Add delete button
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);

    // Add delete functionality
    dBtn.addEventListener("click", function () {
        li.remove(); // Removes the list item
    });
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") { // Uses modern `event.key` for clarity
        createListElement();
    }
}

// Event listeners
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);