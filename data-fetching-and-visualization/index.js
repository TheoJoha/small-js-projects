let listOfRandomNumbers = []

async function getNumbers() {
    const response = await fetch("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new");
    const numbers = await response.json();
    console.log(numbers, typeof numbers);
    let stringOfNums = numbers.toString()
    for (let i = 0; i < stringOfNums.length; i++) {
        listOfRandomNumbers.push(stringOfNums[i])
    }
}

for (let i = 0; i < 10; i++) {
    getNumbers()
}


console.log(listOfRandomNumbers)