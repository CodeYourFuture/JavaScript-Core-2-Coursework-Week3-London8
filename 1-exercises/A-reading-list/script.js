// function readingList(books) {
//   let content = document.querySelector("#content");
//   const listBooks = [];

//   for (let book of books) {
//     console.log(book);
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     listBooks.push(ul);
//     ul.innerHTML = `
//       <li class= list>
//       <p>${book.title} by ${book.author}</p>
//       <img class=image src= "${book.bookCoverImage}" >
//       </li>
//     `;
//     content.appendChild(ul);
//   }
// }

function readingList(books) {
  let ul = document.createElement("ul");
  ul.setAttribute("id", "proList");
  let content = document.querySelector("#content");

  for (book of books) {
    let li = document.createElement("li");
    li.setAttribute("class", "item");
    ul.appendChild(li);
    li.innerHTML = `
    <p>${book.title} by ${book.author}</p>
          <img class=image src= "${book.bookCoverImage}" >`;
  }
  content.appendChild(ul);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
