window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});
const navbar = document.querySelector(".navbar");
const openNav = document
    .querySelector("#burger-menu")
    .addEventListener("click", () => {
        navbar.classList.toggle("inactive");
    });
const closeNav = document
    .querySelector("#closeNav")
    .addEventListener("click", () => {
        navbar.classList.toggle("inactive");
        body.classList.toggle("opacity");
    });

fetch("http://localhost:8080/api/products")
    .then((data) => data.json())
    .then((res) => console.log(res));
