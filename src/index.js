console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgDiv = document.getElementById('dog-image-container')
const select = document.getElementById('breed-dropdown')




fetch("https://dog.ceo/api/breeds/image/random/4")
.then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json);
  })


 select.addEventListener('click',function(e){
    const imgs = []
     imgs.document.createElement('img')
    

 }) ;
  


