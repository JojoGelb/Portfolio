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

