console.log('%c HI', 'color: firebrick');

// For Challange 1:
function fetchImages() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        return fetch(imgUrl)
        .then(dogImg => dogImg.json())
        .then(json => imageDisplay(json));
}

function imageDisplay(images){
        // console.log(images);         // This was for testing Purposes
        const imagesDiv = document.getElementById('dog-image-container');
        for (let i = 0; i < images['message'].length; i++){
                const img = document.createElement('img');
                img.setAttribute("src", images['message'][i]);
                imagesDiv.append(img);
        }  
}

document.addEventListener("DOMContentLoaded", function(){
        fetchImages();
})

// For Challange 2:
function fetchDogBreed(){
        const breedUrl = "https://dog.ceo/api/breeds/list/all";
        return fetch(breedUrl)
        .then(dogBreed => dogBreed.json())
        .then(json => dogBreedDisplay(json));
}

function dogBreedDisplay(breed){
        // console.log(breed.message);                      // Checking what the object key contain.
        const dogDreedUl = document.getElementById('dog-breeds');
        const objKeys = Object.keys(breed.message);
        dogDreedUl.style.fontSize = '1.5em';             // To make the list font a bit bigger
        for (let i = 0; i < objKeys.length; i++){
                const li = document.createElement('li');
                li.innerText = objKeys[i];
                li.setAttribute('class', 'list');        // Adding a class named list to all li tags
                // console.log(li.innerText);               // Checking what has been printed
                dogDreedUl.append(li);
        }

        // Challange 3 inside of challange 2:
        const listOfDogs = document.querySelectorAll('.list');
        for(let i = 0; i < listOfDogs.length; i++){
                let colored = 0;
                listOfDogs[i].addEventListener("click", function(){
                        if (colored === 0){
                                listOfDogs[i].style.color = "firebrick";
                                colored++;
                        }
                        else {
                                listOfDogs[i].style.color = "black";
                                colored = 0;
                        }
                });
        }

        // Challange 4 inside of challange 2
        const dropDownMenu = document.getElementById('breed-dropdown');
        dropDownMenu.addEventListener("change", event => {
                const breedsArr = [...listOfDogs];
                const chosenOption = event.target.value;

                breedsArr.forEach(dog => {
                        if (chosenOption == dog.innerText[0]){
                                dog.style.display = "block";
                        }
                        else {
                                dog.style.display = "none";
                        }
                });
        });
}       

document.addEventListener("DOMContentLoaded", function (){
        fetchDogBreed();
})
