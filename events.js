// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var articleSection = document.getElementsByClassName("article-section");
for (let i = 0; i < articleSection.length; i++) {
	articleSection.item(i).addEventListener("click", function(event) {
		document.getElementById("output-target").innerHTML = "You clicked on the " + event.target.innerHTML + " section";
	});
}

// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var pageHeader = document.getElementById("page-header");
pageHeader.addEventListener("mouseenter", function() {
	pageHeader.innerHTML = "You moved your mouse over the header.";
});

// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
pageHeader.addEventListener("mouseleave", function() {
	pageHeader.innerHTML = "You left me!!";
});

// 4. When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keyup", function(event) {
	// when a keyup event is fired, the event object is passed as a parameter
	// access the value of the key press by selecting the target property and value.
	document.getElementById("output-target").innerHTML = "<p>" + event.target.value + "</p>";
});

// 5. When you click the "Add color" button, the `guinea-pig` element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", function(event) {
	document.getElementById("guinea-pig").classList.toggle("blue");
});


// 6. When you click the "Hulkify" button, the `guinea-pig` element's font size should become much larger.
// 7. When you click the "Capture it" button, the `guinea-pig` element should have a border added to it.
// 8. When you click the "Rounded" button, the `guinea-pig` element's border should become rounded.
// 9. The first section's text should be bold.
// 10. The last section's text should be bold and italicized.
// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.