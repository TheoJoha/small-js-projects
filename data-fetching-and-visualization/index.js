const listOfRandomNumbers = []
const numberFrequencies = {}

function getARandomNumber() {
    return Math.round(Math.random() * 9 + 1)
}

console.log(getARandomNumber())

function populateRandomNumberList(n) {
    for (let i = 0; i < n; i++) {
        listOfRandomNumbers.push(getARandomNumber())
    }
}

function randomColorGenerator() {
    return Math.round(Math.random() * 255 + 1)
}

function populateNumberFrequencies() {
    for (let i = 0; i < listOfRandomNumbers.length; i++) {
        if (numberFrequencies[listOfRandomNumbers[i]] != undefined) {
            numberFrequencies[listOfRandomNumbers[i]] += 1
        }
        else {
            numberFrequencies[listOfRandomNumbers[i]] = 1
        }
    }
}

populateRandomNumberList(100)
console.log(listOfRandomNumbers)
populateNumberFrequencies()
console.log(numberFrequencies)


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(50, 50, 300, 300);

ctx.beginPath(); // Start a new path
ctx.moveTo(50, 50); // Move the pen to (50, 50)
ctx.lineTo(50, 350); // Draw a line to (50, 300)
ctx.lineTo(350, 350);
ctx.stroke(); // Render the path

for (let i = 1; i <= 10; i++) {
    ctx.beginPath(); // Start a new path
    ctx.moveTo(51 + i * 25, 350); // Move the pen to 
    ctx.lineTo(51 + i * 25, 350 - numberFrequencies[i] * 3); // Draw a line to
    ctx.lineTo(51 + 10 + i * 25, 350 - numberFrequencies[i] * 3);
    ctx.lineTo(51 + 10 + i * 25, 350);
    ctx.fillStyle = `rgb(${randomColorGenerator()}, ${randomColorGenerator()}, ${randomColorGenerator()})`;
    ctx.fill()
    ctx.stroke(); // Render the path
    ctx.strokeText(numberFrequencies[i], 51 + i * 25, 350 - numberFrequencies[i] * 3);
    ctx.strokeText(i, 51 + i * 25, 360);
}










