const myLibrary = [];



function addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();



}


function addNewBook (nameOfBook, author, pages, read) {



    const book1 = new addBook(nameOfBook, author, pages, read);
    myLibrary.push(book1)

}

// function addBookToLibrary(bookObj) {

//     book1 = bookObj;
//     myLibrary.push(bookObj);
// }

const theHobbit = new addNewBook("The Hobbit", "J.R.R. Tolkien", 295, "not read");
const theChicken = new addNewBook("The Chicken", "K.F.C. Nugget", 20, "not read");
const arroz = new addNewBook("Arroz", "con pollo", 350, "not read");
const ofMiceAndMen = new addNewBook("Of Mice and Men", "IDK", 148, "read");
const theHungerGames = new addNewBook("The Hunger Games", "Susainze", 150, "read");

function deleteElementById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}



function addBookToSite(book) {
    const newPara = document.createElement('div');
    newPara.textContent = `
     Title: ${book.title}
     Author: ${book.author}
     pages: ${book.pages}
     Read: ${book.read}
     ID: ${book.id}
    `;

    newPara.id = book.id;
    const newButton = document.createElement('button');
    newButton.id = book.id;
    
    s
    
    const htBook = document.getElementById("books");
    
    htBook.appendChild(newPara);
    htBook.appendChild(newButton);
}


for (const book of myLibrary) {
    addBookToSite(book);
}



const myForm = document.getElementById('newBookFromUser');

myForm.addEventListener('submit', function(event) {
    // object made from data
    const formData = new FormData(event.target); 

    // pull valuse out using input names
    let titleInput = formData.get('title');
    console.log(titleInput)
    let titleAuthor = formData.get('author');
    let titlePages = formData.get('pages');
    let titleRead = formData.get('read');

    // pass values into form 

    addNewBook(titleInput, titleAuthor, titlePages, titleRead);
    // let lastIndex = myLibrary.at(-1);
    // console.log(myLibrary[lastIndex])
    // addBookToSite(myLibrary[lastIndex]);
})


