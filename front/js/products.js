const API_URL = "http://localhost:8080/api/products";
const productDiv = document.getElementById("productsContainer");

window.onload = () => {
    let html = " ";
    fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((data) => data.json())
        .then((data) =>
            data.forEach((element) => {
                html += `
                <div class="product">
                    <h6>${element.title}</h6>
                    <h6>${element.price.usd}</h6>
                    <img src="${element.thumbnail}"></img>
                </div>
            `;
                productDiv.innerHTML = html;
            })
        )
        .catch((err) => console.log(err));
};
