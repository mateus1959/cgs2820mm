// Define a function named degrees_to_radians that converts degrees to radians.
function degrees_to_radians(degrees)
{
    // Store the value of pi.
    var pi = Math.PI;
    // Multiply degrees by pi divided by 180 to convert to radians.
    return degrees * (pi/180);
}

// Find the resultant of two vectors
document.getElementById("resultantBtn").addEventListener('click', () => {
    const answer = document.getElementById("answer");
    answer.style.display = "none";
    // Input the two vectors whose resultant is going to be calculated
    let a = document.getElementById("vector1").value;
    let b = document.getElementById("vector2").value;
    let angle = document.getElementById("angle").value;

    // Compute the sum of the two vectors
    const resultant = Math.sqrt((Math.pow(a, 2) + 2 * a * b * Math.cos(degrees_to_radians(angle)) + Math.pow(b, 2)));

    // Display result 
    answer.style.display = "block";
    answer.style.color = "hsl(120, 87%, 34%)";
    answer.textContent = `The resultant is equal to ${resultant.toFixed(4)}`;
});

// Find the dot product of two vectors
document.getElementById("dotProductBtn").addEventListener('click', () => {
    const answer = document.getElementById("answer");
    answer.style.display = "none";
    // Input the two vectors whose resultant is going to be calculated
    let a = document.getElementById("vector1").value;
    let b = document.getElementById("vector2").value;
    let angle = document.getElementById("angle").value;

    // Compute the sum of the two vectors
    const dotProduct = a * b * Math.cos(degrees_to_radians(angle));

    // Display result 
    answer.style.display = "block";
    answer.style.color = "hsl(0, 87%, 34%)";
    answer.textContent = `The dot product is equal to ${dotProduct.toFixed(4)}`;
});

// Find the cross product of two vectors
document.getElementById("crossProductBtn").addEventListener('click', () => {
    const answer = document.getElementById("answer");
    answer.style.display = "none";
    // Input the two vectors whose resultant is going to be calculated
    let a = document.getElementById("vector1").value;
    let b = document.getElementById("vector2").value;
    let angle = document.getElementById("angle").value;

    // Compute the sum of the two vectors
    const crossProduct = a * b * Math.sin(degrees_to_radians(angle));

    // Display result 
    answer.style.display = "block";
    answer.style.color = "hsl(56, 87%, 34%)";
    answer.textContent = `The cross product is equal to ${crossProduct.toFixed(4)}`;
});
