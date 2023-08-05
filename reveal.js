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
    console.log(target)
    target.forEach( section => {
        observer.observe(section);
    });

});

