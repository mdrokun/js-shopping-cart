// Variables
const cartBtn = document.querySelector('.icon'),
    products = document.querySelector('#product'),
    cartItems = document.querySelector('.cart-items tbody'),
    clearCartBtn = document.querySelector('#clear-cart')

// EventListeners
loadAllEventListener()
function loadAllEventListener() {
    cartBtn.addEventListener('click', showCartItems)
    products.addEventListener('click', addToCart)
    cartItems.addEventListener('click', removeProduct)
    clearCartBtn.addEventListener('click', clearCart)
}

// Functions
function showCartItems() {
    const cartItems = document.querySelector('.cart-items')
    cartItems.classList.toggle('cart-items-show')
}

function addToCart(e) {
    if (e.target.classList.contains('buy-now')) {
        const productDetails = e.target.parentElement.parentElement
        getProductData(productDetails)
    }
}

function getProductData(productDetails) {
    const productData = {
        image: productDetails.querySelector('img').src,
        desc: productDetails.querySelector('h3').textContent,
        price: productDetails.querySelector('p').textContent,
        id: productDetails.querySelector('button').getAttribute('data-id')
    }
    pushToCart(productData)
}

function pushToCart(data) {
    const tr = document.createElement('tr')
    tr.innerHTML = `
        <tr>
            <td>
                <img src="${data.image}" width="100">
            </td>
            <td>${data.desc}</td>
            <td>${data.price}</td>
            <td><a href="#" class="remove" data-id="${data.id}">X</a></td>
        </tr>
    `
    cartItems.appendChild(tr)
}

function removeProduct(e) {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove()
    }
}

function clearCart() {
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild)
    }
}