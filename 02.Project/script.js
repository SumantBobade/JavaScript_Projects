const submit = document.querySelector("button")

submit.addEventListener("click", (e)=> {
    e.preventDefault(); // Prevent form reload

    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);

    const result = document.getElementById("Result");

    if (isNaN(weight) || isNaN(height)) {
        result.innerText = "Please enter valid numbers";
    } else {
        result.innerText = "Result: " + (weight * height);
    }
})