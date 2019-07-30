
let addLetters = () => {
    let name = 'Sarthak Kamboj';
    let introTitle = document.querySelector(".introTitle");
    let nameLetters = name.split("");
    nameLetters.forEach((letter) => {
        let letterSpan = document.createElement("span");
        if(letter === " "){
            letter = "\n"
        }
        let letterNode = document.createTextNode(letter);
        letterSpan.appendChild(letterNode);
        introTitle.appendChild(letterSpan);
    });
};

let introHoverEffect = () => {
    addLetters();

    let introSpans = document.querySelectorAll("span");

    introSpans.forEach((introSpan) => {
        introSpan.addEventListener("mouseover", () => {
            introSpan.classList.add("explode");
        });
    
        introSpan.addEventListener("mouseout", () => {
            introSpan.classList.remove("explode");
        });
    });
};

let addImages = () => {
    let inspirationGallery = document.querySelector(".inspiration");
    for(let imageNum = 2; imageNum <= 10; imageNum++) {
        let image = document.createElement("img");
        console.log("{{ url_for('static',filename='Images-Videos/Inspiration/image-2.JPG') }}");
        image.src="{{ url_for('static',filename='Images-Videos/Inspiration/image-2.JPG') }}";
        inspirationGallery.appendChild(image);
    }
};

window.onload = () => {
    introHoverEffect();
    // addImages();
};

