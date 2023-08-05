const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
}

const handleIntersect = function(entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

window.addEventListener("load", (event) => {

    const observer = new IntersectionObserver(handleIntersect, options);
    var target = document.querySelectorAll('[class*="reveal-"]');
    target.forEach( section => {
        observer.observe(section);
    });

    preloadImages();

});

function preloadImages() {
    var images = document.querySelectorAll("img");
    var loadedImages = 0;

    var sliderCount = document.querySelector(".slider").querySelectorAll("div").length;


    for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i].src; // Extract the image URL and preload the image
    }
}
