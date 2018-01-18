let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");

// Execute a for loop that will iterate over the arrays

for (let i = 0; i < bands.length; i += 1) {
  const currentBand = bands[i];
  bandElement.innerHTML += currentBand + (" ");
  

  const currentVeggie = vegetables[i];
  veggieElement.innerHTML += currentVeggie + (" ");
}





  // Get a reference to the current item in the bands array

// Update the innerHTML value of the DOM element for bands

  // Get a reference to the current item in the vegetables array

  // Update the innerHTML value of the DOM element for vegetables
