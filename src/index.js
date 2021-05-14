console.log('%c HI', 'color: firebrick')


// Challenge 1.

function fetchImages () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        return parseImg(json);
    })
}


function parseImg(img) { 

    const links = img.message;
    
    const imgContainer = document.getElementById("dog-image-container");
    
    links.forEach(element => {
        const imgElement = document.createElement("img");

        imgElement.setAttribute("src", element);
        imgContainer.append(imgElement);
    })
}

fetchImages();

//------------------------------------------------------------------------

// Challenge 2.

function fetchBreeds () {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        return parseBreeds(json);
})
}


function parseBreeds(breeds) { 

    const breedsObj = breeds.message;
    
    const breedList = document.getElementById("dog-breeds");
    
    for(const key in breedsObj) {
        const listItem = document.createElement("li");
        listItem.innerText = key;
        listItem.setAttribute('class', 'breedListItem')
        breedList.appendChild(listItem);
    }
    const breedListItems =  document.querySelectorAll(".breedListItem");

    
    //Challenge 3.
    breedListItems.forEach(elem => {
        let hasStyle = false;
        elem.addEventListener('click', function () {
            if (!hasStyle){
                elem.style.color = "red";
                hasStyle = true;
            }
            else {
                elem.style.color = "black";
                hasStyle = false;
            }
        });    
    });

    //Challenge 4.
    const dropDown = document.getElementById('breed-dropdown');

    dropDown.addEventListener('change', function(e){
        const option = e.target.value;

        breedListItems.forEach(item => {
            if(option === item.innerText[0]) {
                item.style.display = "block"; //why doesnt visible/hidden doesnt work ?
            }
            else {
                item.style.display = "none";
            }
        });
    });
}

fetchBreeds();

//------------------------------------------------------------------------



    