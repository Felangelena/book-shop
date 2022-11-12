fetch('books.json') //path to the file with json data
.then((response) => response.json())
.then((data) => {
    document.body.onload = addElements(data);
    console.log(data);
});
//console.log(books[1].author);

function addElements(data) {
    document.body.innerHTML = '<main></main>';

    // title Book Catalog
    const title = document.createElement("h1");
    title.textContent = 'Book Catalog';
    const box = document.getElementsByTagName('main')[0];
    box.appendChild(title);

    // Grid
    const grid = document.createElement("div");
    grid.classList.add('grid');
    box.appendChild(grid);

    // Grid items
    for (var i = 0; i < data.length; i++) {
        grid.innerHTML += `<div class='grid-item'><img src="${data[i].imageLink}" alt="${data[i].title}"><div class="book-title">${data[i].title}</div><div class="book-author">${data[i].author}</div><div class="book-price">Price: $${data[i].price}</div><div class="book-btn"><a class="btn show-more">Show more</a><a class="btn add">Add to bag</a></div></div>`;
    }

}
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



