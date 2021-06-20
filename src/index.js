// Challenge 1
// fetching data
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(response => response.json())
.then(data => renderImg(data.message))




// displaying images on the screen
function renderImg (images) {
  for(let i = 0; i < images.length; i++){
    const imgContainer = document.getElementById("dog-image-container")
    const img = document.createElement("img")
    img.src = images[i]
    img.style.width = "200px"
    img.style.height = "200px"
    imgContainer.appendChild(img)
  }

}

// Challenge2 - 3
// fetching breed
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
.then(response => response.json())
.then(data => renderBreed(data))
// .then(data => console.log(Object.entries(data.message)))

// displaying breeds on the screen
function renderBreed (breed) {
  const dogKeys = Object.keys(breed.message);
  const ul = document.getElementById("dog-breeds")
  for(let i = 0; i < dogKeys.length; i++){
    const li = document.createElement("li")
    li.innerHTML =dogKeys[i]
    li.setAttribute("class", "list")
    ul.appendChild(li)


    // making li tags clickable and changing their colors
    // console.log(li)
    li.addEventListener("click", function(e){
      // console.log("clicked")
      li.style.color = "pink"
    })
  }
}
