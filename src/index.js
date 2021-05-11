function ceo() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImg(json))
}

function renderImg(images) {
  const loc = document.querySelector('div')
  images.message.forEach(Image => {
    const img = document.createElement('img');
    img.src = Image;
    loc.appendChild(img)
  });
}
document.addEventListener('DOMContentLoaded', () => {
  ceo()
})
//challenge 2 & 3
let dog_list = [];
const container = document.getElementById("container");
fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    })
    .then(data => {
        dog_list = data.message;
        for (dog in dog_list) {
            let li = document.createElement("li");

            let node = document.createTextNode(dog);
            li.appendChild(node);
            container.appendChild(li);
    li.onclick = function(){
	li.style.color = 'green';
}

}
        });
