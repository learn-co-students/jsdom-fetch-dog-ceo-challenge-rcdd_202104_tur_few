console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
.then(response => response.json())
.then(result => {
  images(result.message);
});

  function images(dogsImages){
    console.log(dogImages)
    dogImages.forEach(dog => {
      const container = document.querySelector('#dog-image-container')
      const img = document.createElement('img')
      img.src = dog
      container.appendChild(img)
    });
  } 
