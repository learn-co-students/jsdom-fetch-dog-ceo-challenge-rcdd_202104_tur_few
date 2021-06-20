// "Display the images after the page loaded" starts
    let imgContainer = document.getElementById("dog-image-container");

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    window.addEventListener("load", 
        fetch(imgUrl)
        .then((response) => response.json())
        .then((json) => {
            json.message.forEach((url) => {
                let newImg = document.createElement("img");
                newImg.src = url;
                imgContainer.appendChild(newImg)
            })
        })
    )
// "Display the images after the page loaded" ENDS

// ================================================ //

// "Display the breeds after the page loaded" starts
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let breedUl = document.getElementById("dog-breeds");

    window.addEventListener("load", 
    fetch(breedUrl)
    .then((response) => response.json())
    .then((json) => {
        // console.log(json)
        let breeds = Object.keys(json.message);
        breeds.forEach((breed) => {
            let newLi = document.createElement("li");
            newLi.innerText = breed;
            newLi.setAttribute("onclick", "changeColor(this)")
            // newLi.addEventListener("click", changeColor(this));
            breedUl.appendChild(newLi);
        })
    })
    )
// "Display the breeds after the page loaded" ENDS

// ====================================================== //

// "Change the color of the text in listed items that contains breeds whenever clicked on" starts

    const CSS_COLOR_NAMES = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
    ];

    function changeColor(element) {

        function randomColorPicker() {
            // console.log(Math.floor(Math.random() * CSS_COLOR_NAMES.length))
            return CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)]
        }

        element.style.color = randomColorPicker()
    }

// "Change the color of the text in listed items that contains breeds whenever clicked on" ENDS

// ======================================================= //

// "Filter the dog breeds realted to the selected option" starts

    let options = Array.from(document.querySelectorAll("option")).filter((option) => option.innerText !== "Select an Option...");

    // options.forEach((option) => { option.addEventListener("click", filterBreeds) })
    options.forEach((option) => { option.setAttribute("onclick", "filterBreeds(this)") })

    function filterBreeds(element) {

        let filterWithThis = element.innerText;
        let filteredBreeds = [...breedUl.children].filter((breed) => breed.innerText.includes(filterWithThis)); // these are listed items that has the filtered content as innerText

        // "delete all the html nodes in breedUl" starts
            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            removeAllChildNodes(breedUl)
        // "delete all the html nodes in breedUl" ENDS

        filteredBreeds.forEach((breed) => {
            breedUl.appendChild(breed)
        })
    }

// "Filter the dog breeds realted to the selected option" ENDS