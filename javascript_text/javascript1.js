let paragraph = document.getElementsByTagName("p");

paragraph.addEventListener("click", function() {
     let el = document.querySelector("p");
    el.textContent= "clickされました";
});

