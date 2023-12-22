const password = "1234"

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').addEventListener("submit", function (e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */


    })
});

var elts = document.getElementsByClassName('input-box')
Array.from(elts).forEach(function (elt) {
    elt.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (elt.id !== "fourth-number") {
            if (event.keyCode === 13 || elt.value.length == 1) {
                // Focus on the next sibling
                elt.nextElementSibling.focus()
            }
        }
        console.log(event, elt.id)
        if (event.keyCode === 8 && elt.id !== "first-number") {
            console.log("hi")
            elt.previousElementSibling.value = ""
            elt.previousElementSibling.focus()
        }

    });
})

document.querySelector("button").addEventListener("click", () => {
    const firstNumber = document.querySelector("#first-number")
    const secondNumber = document.querySelector("#second-number")
    const thirdNumber = document.querySelector("#third-number")
    const fourthNumber = document.querySelector("#fourth-number")
    console.log(fourthNumber.value)
    firstNumber.style.border = ""
    secondNumber.style.border = ""
    thirdNumber.style.border = ""
    fourthNumber.style.border = ""

    if (firstNumber.value == "" || secondNumber.value == "" || thirdNumber.value == "" || fourthNumber.value == "") {
        console.log("Try again!")
        if (firstNumber.value == "") firstNumber.style.border = "solid blue 2px"
        if (secondNumber.value == "") secondNumber.style.border = "solid blue 2px" 
        if (thirdNumber.value == "") thirdNumber.style.border = "solid blue 2px" 
        if (fourthNumber.value == "") fourthNumber.style.border = "solid blue 2px"  
    } else {
        if (firstNumber.value == 1 && secondNumber.value == 2 && thirdNumber.value == 3 && fourthNumber.value == 4) {
            console.log("Welcome!")
        } else {
            console.log("Wrong code. Try again!")
        }
    }

})