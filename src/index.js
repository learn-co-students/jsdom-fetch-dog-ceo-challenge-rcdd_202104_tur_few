document.addEventListener("DOMContentLoaded", function () {
	const breedPart = document.getElementById("dog-breeds");
	
  const dropdown = document.getElementById("breed-dropdown");

	dropdown.addEventListener("change", function (event) {
		filterBreeds(event.target.value);
	});

	breedPart.addEventListener("click", function (event) {
		event.target.style.color = "purple";
	});

	fetchImages();
	fetchBreeds();
});

function fetchImages() {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
	fetch(imgUrl)
		.then((response) => response.json())
		.then((json) => displayImages(json.message));
}

function displayImages(images) {
	const imageDiv = document.getElementById("dog-image-container");
	images.forEach((image) => {
		const imageTag = document.createElement("img");
		imageTag.src = image;
		imageDiv.appendChild(imageTag);
	});
}

let breedOfArr = [];

function fetchBreeds() {
	const breedsUrl = "https://dog.ceo/api/breeds/list/all";
	fetch(breedsUrl)
		.then((response) => response.json())
		.then((json) => displayBreeds(json));
}

function displayBreeds(breeds) {
	const breedSection = document.getElementById("dog-breeds");
	breedKeys = Object.keys(breeds.message);
	breedKeys.forEach((breed) => {
		breedOfArr.push(breed);
		const breedList = document.createElement("li");
		breedList.innerText = breed;
		breedList.style.cursor = "pointer";
		breedSection.appendChild(breedList);
	});
}

function filterBreeds(letter) {
	const breedSection = document.getElementById("dog-breeds");
	
  let child = breedSection.lastElementChild;
	
  while (child) {
		breedSection.removeChild(child);
		child = breedSection.lastElementChild;
	}
	let filtered = breedOfArr.filter((breed) => breed.startsWith(letter));
	
  filtered.forEach((breed) => {
		const breedList = document.createElement("li");
		breedList.innerText = breed;
		breedSection.appendChild(breedList);
	});
}







  

  


