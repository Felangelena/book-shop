window.addEventListener('DOMContentLoaded', function () {
    fetch('books.json') //path to the file with json data
    .then((response) => response.json())
    .then((data) => {
        document.body.onload = addElements(data);
        console.log(data);
    });
    //console.log(books[1].author);

    function addElements(data) {
        document.body.innerHTML = '<main></main>';
        const box = document.querySelector('main');

        //CartBtn
        const cartBtn = document.createElement("button");
        cartBtn.textContent = 'Bag';
        cartBtn.classList.add("cartBtn"),
        box.appendChild(cartBtn);

        // title Book Catalog
        const title = document.createElement("h1");
        title.textContent = 'Book Catalog';
        box.appendChild(title);

        // Grid
        const grid = document.createElement("div");
        grid.classList.add('grid');
        box.appendChild(grid);

        // Grid items
        for (var i = 0; i < data.length; i++) {
            grid.innerHTML += `<div class='grid-item'><img src="${data[i].imageLink}" alt="${data[i].title}"><div class="book-title">${data[i].title}</div><div class="book-author">${data[i].author}</div><div class="book-price">Price: $${data[i].price}</div><div class="book-btn"><a class="btn show-more">Show more</a><a class="btn add">Add to bag</a></div></div>`;
        }

        //Cart
        function createCart() {
            const cart = document.createElement("div"),
            cartItem = document.createElement("div"),
            cartBtns = document.createElement("div"),
            closeBtn = document.createElement("button"),
            buyBtn = document.createElement("button");
            cart.classList.add('cart'),
            cartItem.classList.add("cart-item"),
            cartBtns.classList.add("cart-btns"),
            closeBtn.classList.add("btn-close", "btn");
            buyBtn.classList.add("btn-buy", "btn");
            closeBtn.textContent = 'CLOSE';
            buyBtn.textContent = 'BUY';
            document.body.appendChild(cart);
            cart.appendChild(cartItem);
            cartItem.appendChild(cartBtns);
            cartBtns.appendChild(closeBtn);
            cartBtns.appendChild(buyBtn);
        }
        createCart();

        let cart = document.querySelector('.cart'),
            closeBtn = document.querySelector('.btn-close');

        function openCart() {
            cart.style.display = 'block';
        }
        function closeCart() {
            cart.style.display = 'none';
        }

        cartBtn.addEventListener('click', openCart);
        closeBtn.addEventListener('click', closeCart);

        let btnShowMore = document.querySelectorAll('.show-more'),
            btnAdd = document.querySelectorAll('.add');

        //Popup
        const bcg = document.createElement("div"),
            popup = document.createElement("div"),
            close = document.createElement("button"),
            popupDesc = document.createElement("div");
        bcg.classList.add('popup-bcg'),
        popup.classList.add("popup-container"),
        close.classList.add("popup-close", "btn");
        popupDesc.classList.add("popup-desc"),
        close.textContent = 'Close';
        document.body.appendChild(bcg);
        bcg.appendChild(popup);
        popup.appendChild(close);
        popup.appendChild(popupDesc);

        function openPopup(i) {
            bcg.style.display = 'block';
            popupDesc.textContent = `${data[i].description}`;
        }
        function closePopup() {
            bcg.style.display = 'none';
        }

        close.addEventListener('click', closePopup);

        btnShowMore.forEach((item, i) => {
            item.addEventListener('click', () => {
                openPopup(i);
            })
        });

        let prodItem = document.querySelectorAll('.grid-item'),
            cartItem = document.querySelector('.cart-item');

        let sum = 0;
        const total = document.createElement("div");
        total.classList.add('total');
        cartItem.appendChild(total);

        btnAdd.forEach((item, i) => {
            item.addEventListener('click', () => {
                let product = prodItem[i].cloneNode(true),
                    btnShow = product.querySelector('.show-more'),
                    btnAdd = product.querySelector('.add'),
                    img = product.querySelector('img');

                btnShow.remove();
                btnAdd.remove();
                img.remove();

                sum += data[i].price;
                total.textContent = `Total: $${sum}`;

                const deleteBtn = document.createElement("div");
                deleteBtn.classList.add('delete');
                deleteBtn.textContent = 'X';

                let deleteBtns = document.querySelectorAll('.delete');

/*                 deleteBtns.forEach((item, i) => {
                    item.addEventListener('click', () => {
                        sum -= data[i].price;
                    });
                }); */

                cartItem.appendChild(product);
                product.appendChild(deleteBtn);
            });
        });
        

    };
});





/*     const gridItem = document.createElement("div");
    gridItem.classList.add('grid-item', 'text-lg'); */

/*  create a new div element
    const newDiv = document.createElement("div");

    and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    add the text node to the newly created div
    newDiv.appendChild(newContent);

    add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv); */

/*  ✅ Create element
const el = document.createElement('div');

✅ Add classes to element
el.classList.add('bg-yellow', 'text-lg');

✅ Add text content to element
el.textContent = 'Hello world';

✅ Or set the innerHTML of the element
el.innerHTML = `<span>One, two, three</span>`;

✅ add element to DOM
const box = document.getElementById('box');
box.appendChild(el); */



