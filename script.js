function generateValue() {
  // Get the values from the input elements and convert them to numbers
  const left = parseInt(document.getElementById("left").value) || 0;
  const right = parseInt(document.getElementById("right").value) || 0;
  const top = parseInt(document.getElementById("top").value) || 0;
  const bottom = parseInt(document.getElementById("bottom").value) || 0;
  const width = parseInt(document.getElementById("width").value);
  const height = parseInt(document.getElementById("height").value);
  const posX = parseInt(document.getElementById("posX").value);
  const posY = parseInt(document.getElementById("posY").value);

  // Check if width, height, posX, or posY are not a valid number
  if (isNaN(width) || isNaN(height) || isNaN(posX) || isNaN(posY)) {
    alert("Please enter valid numbers for the Sequence and Media Position fields.");
    return;
  }

  // Calculate the values for the "left" and "right" properties
  const leftRight = posX - (left / 100 * width - (left / 100 * width + right / 100 * width) / 2)

  // Calculate the values for the "top" and "bottom" properties
  const topBottom = posY - (top / 100 * height - (top / 100 * height + bottom / 100 * height) / 2)

  // Set the output values
  document.getElementById("output-left-right").value = leftRight;
  document.getElementById("output-top-bottom").value = topBottom;

}


// Not needed currently, but maybe in future
// function copyValue() {
//   var output = document.getElementById("output");
//   var value = output.value;

//   navigator.clipboard.writeText(value).then(function() {
//     console.log("Value copied to clipboard");
//   }, function(err) {
//     console.error("Could not copy value: ", err);
//   });
// }

// function toggleAdvancedSettings() {
//   var advancedSettings = document.getElementById("advanced-settings");
//   var toggleButton = document.getElementById("toggle-button");

//   if (advancedSettings.style.display === "block") {
//     advancedSettings.style.display = "none";
//   } else {
//     advancedSettings.style.display = "block";
//   }
// }

// From https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// Execute a function when the user presses a key on the keyboard
addEventListener("keyup", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("generateValue").click();
    var inputField = document.getElementById("output-left-right");
    // Move to the result input and select the text
    inputField.focus();
    inputField.select();
  }
    if (event.key === "Escape") {
    // Cancel the default action, if needed
    event.preventDefault();
    var inputField = document.getElementById("left");
    // Move to the result input and select the text
    inputField.focus();
    inputField.select();
  }
});

function generateAllValues() {
  // Get the values from the input elements
  var input = document.getElementById("input").value;
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var output = document.getElementById("output");

  // Split the input into an array of lines
  var lines = input.split("\n");

  // Initialize an empty array to store the output values
  var values = [];

  // Iterate through each line in the input
  for (var i = 0; i < lines.length; i++) {
    // Split the line into an array of values
    var lineValues = lines[i].split(/\s+/);

    // Get the left, right, top, and bottom values
    var left = lineValues[1];
    var right = lineValues[3];
    var top = lineValues[5];
    var bottom = lineValues[7];

    // Calculate the left/right value
    var valueLeftRight = 960 - (left / 100 * width - (left / 100 * width + right / 100 * width) / 2);

    // Calculate the top/bottom value
    var valueTopBottom = 540 - (top / 100 * height - (top / 100 * height + bottom / 100 * height) / 2);

    // Add the calculated values to the output array
    values.push(valueLeftRight.toFixed(2) + " " + valueTopBottom.toFixed(2));
  }

  // Join the values in the output array into a single string with newlines
  output.value = values.join("\n");
}
