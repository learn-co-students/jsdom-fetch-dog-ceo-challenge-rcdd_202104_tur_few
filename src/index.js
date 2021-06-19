document.addEventListener("DOMContentLoaded", function() {
    console.log('%c HI', 'color: firebrick')

    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(data =>{    
       // console.log(data.message)
      for(let i = 0 ; i< data.message.length;i++){
            // console.log(data.message[i])
            // create image element
            let img = document.createElement("img");
            // change its src to be equal to the link
            img.setAttribute('src', data.message[i]);
            // append it to the dom to show it
            let imgContainer = document.getElementById("dog-image-container");
            imgContainer.appendChild(img)            
        }
    });

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data =>{
        let breedsArray = [];
        for (const [key, value] of Object.entries(data.message)) {
            breedsArray.push(key + value);
            let dogBreeds = document.getElementById("dog-breeds");
            let item = document.createElement("li");
            item.innerHTML = `${key} ${value}`;
            dogBreeds.appendChild(item);
            let aRegex = /^a/g;
            let testForA= aRegex.test(item.innerHTML);
            let matcha = item.innerHTML.match(aRegex);
            let selector = document.querySelector("#breed-dropdown");
            selector.addEventListener('change', (event) => {
                const filterLeter = event.target.value;
                dogBreeds.innerHTML = ""

               const filterBreeds = breedsArray.map((type) => {
                    if (type.charAt(0) == filterLeter){
                            const newItem = document.createElement("li");
                            newItem.innerHTML = `${type}`
                            dogBreeds.appendChild(newItem);
                            newItem.addEventListener('click', function (e){
                                e.target.style.color = "#ff0000";
                            })
                    }  
               })
            })
            item.addEventListener('click', function (e){
                e.target.style.color = "#ff0000";
            })
        }   
    })
})