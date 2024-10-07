// Display the roots
document.getElementById(`solveBtn`).onclick = function () {

    // Hide all elements initially
    const x1 = document.querySelector('#root1');
    const x2 = document.querySelector('#root2');
    const error1 = document.querySelector('#noRoots');
    const error2 = document.querySelector('#a_greater_than_0')
    x1.style.display = "none";
    x2.style.display = "none";
    error1.style.display = "none";
    error2.style.display = "none";

    // Get the coeficients
    let a = Number(document.getElementById(`a`).value);
    let b = Number(document.getElementById(`b`).value);
    let c = Number(document.getElementById(`c`).value);

    // Check input
    if (a === 0)
    {
        // Display error message
        error2.style.display = 'block';
        return;
    }
    console.log(Math.sqrt(b**2 - 4 * a * c));
    // Calculate the roots
    let root1 = ((-1) * b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
    let root2 = ((-1) * b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
    console.log(`root 1 = ${root1} and root 2 = ${root2}`);
    x1.textContent = `Root 1 = ${root1.toFixed(2)}`;
    x2.textContent = `Root 2 = ${root2.toFixed(2)}`;

    // If there are real roots
    if (!Number.isNaN(root1) && !Number.isNaN(root2)) 
    {
        x1.style.display = "block";
        x2.style.display = "block";
    }
    // If no real roots
    else
    {
        // Hide elements
        x1.style.display = "none";
        x2.style.display = "none";
        
        // Display error message
        error1.style.display = "block";
    }
};

