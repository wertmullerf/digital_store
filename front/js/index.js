window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});
let navOpened = false
//OPEN&CLOSE NAVBAR//
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body")
const openNav = document
    .querySelector("#burger-menu")
    .addEventListener("click", () => {
        navbar.classList.toggle("navbar__inactive");
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, y); };
        let div = document.createElement("div")
        body.appendChild(div)
        div.classList.add("opacity")
        navOpened = true
        if (cartOpened === true) {
            cartContainer.classList.add("cart__inactive")
            window.onscroll = function () { };
            let opacity = document.querySelector(".opacity")
            opacity.classList.remove("opacity")
        }
    });
const closeNav = document
    .querySelector("#closeNav")
    .addEventListener("click", () => {
        navbar.classList.toggle("navbar__inactive");
        window.onscroll = function () { };
        let opacity = document.querySelector(".opacity")
        opacity.classList.remove("opacity")
        navOpened = false
    });
//OPEN&CLOSE NAVBAR//


//OPEN&CLOSE CART//
let cartOpened = false
const cartContainer = document.querySelector(".cart")
const openCart = document.querySelector(".bx-shopping-bag").addEventListener("click", () => {
    cartContainer.classList.remove("cart__inactive")
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
    let div = document.createElement("div")
    body.appendChild(div)
    div.classList.add("opacity")
    if (navOpened === true) {
        navbar.classList.toggle("navbar__inactive");
        window.onscroll = function () { };
        let opacity = document.querySelector(".opacity")
        opacity.classList.remove("opacity")
        navOpened = false
    }
    cartOpened = true
    console.log(cartOpened)
})
const closeCart = document.querySelector("#closeCart").addEventListener("click", () => {
    cartContainer.classList.add("cart__inactive")
    window.onscroll = function () { };
    let opacity = document.querySelector(".opacity")
    opacity.classList.remove("opacity")
    cartOpened = false
})
//OPEN&CLOSE CART//