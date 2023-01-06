function generateAllValues() {

  // Get the values from the input elements and convert them to numbers
  const width = parseInt(document.getElementById("width").value);
  const height = parseInt(document.getElementById("height").value);
  const posX = parseInt(document.getElementById("posX").value);
  const posY = parseInt(document.getElementById("posY").value);

  // Get the input from the input textarea and split it by new lines
  const input = document.getElementById("left").value.split("\n");

  // Initialize an empty array to store the results for each line
  const results = [];

  // Iterate over the array of strings
  for (const line of input) {

    // Check if the line does not match the expected format
    if (!/^left:\s\d+\sright:\s\d+\stop:\s\d+\sbottom:\s\d+$/.test(line)) {
      alert("Input must be in correct format");
      return;
    }
    // Split the string by spaces and assign the values to variables
    const [leftString, rightString, topString, bottomString] = line.split(/[^\d.]+/).slice(1);

    // Convert the values to numbers
    const left = parseInt(leftString);
    const right = parseInt(rightString);
    const top = parseInt(topString);
    const bottom = parseInt(bottomString);

    // Check if left, right, top or bottom are not a valid number
    if (isNaN(left) || isNaN(right) || isNaN(top) || isNaN(bottom) || isNaN(width) || isNaN(height) || isNaN(posX) || isNaN(posY)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    // Calculate the values for the "left" and "right" properties
    const leftRight = posX - (left / 100 * width - (left / 100 * width + right / 100 * width) / 2);

    const topBottom = posY - (top / 100 * height - (top / 100 * height + bottom / 100 * height) / 2);

    // Round the values to 2 decimal places
    const leftRightRounded = leftRight.toFixed(2);
    const topBottomRounded = topBottom.toFixed(2);

    results.push(`${Number(leftRightRounded)} ${Number(topBottomRounded)}`);
  }

  // Set the output textarea value to the results array joined by new lines
  document.getElementById("output-left-right").value = results.join("\n");

}

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

  // Check if width, height, posX, or posY are negative numbers
  if (width < 0 || height < 0 || posX < 0 || posY < 0) {
    alert("Please enter positive numbers for the Sequence and Media Position fields.");
    return;
  }

  // Check if the posX or posY values are greater than the width or height values
  if (posX > width || posY > height) {
    alert("Please enter numbers smaller than the Sequence Width and Sequence Height.");
    return;
  }

  // Calculate the values for the "left" and "right" properties
  const leftRight = posX - (left / 100 * width - (left / 100 * width + right / 100 * width) / 2)

  // Calculate the values for the "top" and "bottom" properties
  const topBottom = posY - (top / 100 * height - (top / 100 * height + bottom / 100 * height) / 2)

  // Round the values to 2 decimal places
  const leftRightRounded = leftRight.toFixed(2);
  const topBottomRounded = topBottom.toFixed(2);

  // Set the output values
  document.getElementById("output-left-right").value = Number(leftRightRounded);
  document.getElementById("output-top-bottom").value = Number(topBottomRounded);

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

// Execute a function when the user presses a key on the keyboard
addEventListener("keydown", function(event) {

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

  } else if (event.key === "Escape") {

    // Cancel the default action, if needed
    event.preventDefault();

    var inputField = document.getElementById("left");

    // Move to the first input and select the text
    inputField.focus();
    inputField.select();
  }
});