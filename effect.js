/*window.addEventListener("load", (event) => {

    // Get the modal
    var modal = document.getElementById("myModal");
    var header = document.getElementsByTagName("header")[0];
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
        header.style.animation = "nav-unload var(--nav-load-time) ease-out forwards"
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        header.style.animation = "nav-load var(--nav-load-time) ease-out forwards"
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            header.style.animation = "nav-unload var(--nav-load-time) ease-out forwards"
        }
    }

});*/

window.addEventListener("load", (event) => {

    var projectElements = document.querySelectorAll(".projects");
    var header = document.getElementsByTagName("header")[0];

    projectElements.forEach(function(project) {

        var modal = project.querySelector(".projects_tab");
        var btn = project.querySelector(".openModalBtn");
        var span = project.querySelector(".close");

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
            header.style.animation = "nav-unload var(--nav-load-time) ease-out forwards";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
            header.style.animation = "nav-load var(--nav-load-time) ease-out forwards";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                header.style.animation = "nav-unload var(--nav-load-time) ease-out forwards";
            }
        };
    });

});

