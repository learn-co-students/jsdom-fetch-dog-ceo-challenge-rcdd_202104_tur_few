console.log('%c HI', 'color: firebrick');

function fetchingDog () {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
.then(function(response) {
    return response.json();
  })
.then(function(json){
   renderImg(json)
  })
}

function renderImg (images) {
const div = document.querySelector('#dog-image-container');
images.message.forEach(Image => {
    const img = document.createElement('img');
    img.src = Image;
    div.appendChild(img)
  });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchingDog()
  })

 

function fetchingBreed () {
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
fetch(breedUrl)
.then(function(response) {
    return response.json();

  })
.then(function(json){
    for (let breed in json.message) {
        const ul = document.querySelector('#dog-breeds');
            const brd = document.createElement('li');
            brd.innerText = breed;
            ul.appendChild(brd)
        }  
        const ul = document.querySelector('#dog-breeds');
        ul.addEventListener("click", function(e) {
        e.target.style.color = "red";
        });
  })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchingBreed()
  })



 
//  document.addEventListener('change', function () {
//     const dropdown = document.querySelectorAll('li');
//     if(this.value === "a"){
//         ("dropdown").show();
//     } else {
//         ("dropdown").hide();
//     }
// });

document.querySelector("#breed-dropdown").addEventListener("change", () => {
  let dropDown = document.querySelector("#breed-dropdown").value;
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
  .then(Response => Response.json())
  .then(json => filterBreeds (json, dropDown));
})

function filterBreeds(obj, keyword) {
  const breeds = document.querySelector("#dog-breeds");
  breeds.innerHTML = "";
  const messages = obj.message;
  let container = {};    
  for (const key in obj.message) {
      //If first letter matches, copy the key/value to container and display them in list
      if (key.toLowerCase().startsWith(keyword.toLowerCase())){
          container[key] = messages[key];
          const li = document.createElement("li");
          li.setAttribute("class","toggle");
          li.innerText = `${key}`;
          breeds.appendChild(li);            
      }   
    }
  }