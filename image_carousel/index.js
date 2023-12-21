
const listOfImages = [":)", ":(", ";)", ";(", "-_-", "[_o___o_]", "\_o_o_/", "=-|-="]
let imageIndex = 1

document.addEventListener("DOMContentLoaded", () =>{
    setInterval(() => {
        /* let imageToBeDisplayed = listOfImages[imageIndex % (listOfImages.length - 1)]
        let imageContainer = document.getElementById("images-container")
        imageContainer.textContent = imageToBeDisplayed
        imageIndex += 1 */
        try {
            let imageContainer = document.getElementById("images-container")
            // document.querySelector("img").remove()
            let img = document.createElement("img");
            img.width= 200
            img.height= 200
            img.src = `https://unpkg.com/browse/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${imageIndex}.svg`
            imageContainer.appendChild(img)

        } catch (err) {
            throw new err
        }
        imageIndex = 1 + imageIndex % 23
        

    }, 30000)
})
    
