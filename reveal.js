const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

window.addEventListener("load", (event) => {

    const observer = new IntersectionObserver(handleIntersect, options);
    var target = document.querySelectorAll('[class*="reveal-"]');
    target.forEach(section => {
        observer.observe(section);
    });

    preloadImages();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const yOffset = -70;
            console.log(this.getAttribute('href'))
            const element = document.getElementById(this.getAttribute('href').substring(1));
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });

            /*document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });*/
        });
    });
    handlePageRedirection();
});

function handlePageRedirection() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var header = document.getElementsByTagName("header")[0];
    const page = urlParams.get('page')

    if (page == null) return;

    var ref = "Projects"
    switch (page) {
        case "Goby":
        case "RogueTheDice":
        case "GetCoocked":
        case "shadow_hunter":
        case "CTS14":
        case "WonderJam":
        ref = "PersonalWork"
            break;
    }

    var modal = document.getElementById(page)

    if(modal == null) return;

    modal.style.display = "block";
    header.style.animation = "nav-unload var(--nav-load-time) ease-out forwards";

    setTimeout(function () {
        const yOffset = -70;
        const element = document.getElementById(ref);
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }, 100);
}

function preloadImages() {
    var images = document.querySelectorAll("img");
    var loadedImages = 0;

    var sliderCount = document.querySelector(".slider").querySelectorAll("div").length;


    for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i].src; // Extract the image URL and preload the image
    }
}

