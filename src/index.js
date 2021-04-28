document.addEventListener("DOMContentLoaded", function () {
  fetchDog();
  fetchAllDog();
});
function fetchDog() {
  const dogDiv = document.querySelector("#dog-image-container");
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
      for (let image of json.message) {
        let img = document.createElement("img");
        img.src = image;
        img.height = "250";
        dogDiv.appendChild(img);
      }
    });
}
function fetchAllDog() {
  const dogUl = document.querySelector("#dog-breeds");
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
      for (let bread in json.message) {
        let li = document.createElement("li");
        li.addEventListener("click", function (e) {
          e.target.style.color = "#a82c77";
        });
        li.innerText = bread;
        dogUl.appendChild(li);
        const dogDiv = document.querySelector("#breed-dropdown");
        dogDiv.addEventListener("change", showHideElement);
      }
    });
}
function showHideElement(e) {
  console.log(e.target.value);
  const allLi = document.querySelectorAll("li");
  for (const li of allLi) {
    if (e.target.value === "all") li.style.display = "block";
    else {
      if (li.innerText.substr(0, 1) == e.target.value) li.style.display = "block";
      else li.style.display = "none";
    }
  }
}
