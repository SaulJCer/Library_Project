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


function readCheck(bookRead) {
    if(bookRead == "read") {
        return "not read";
    }
    else {
        return "read";
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
    newButton.id = `${book.id}`;
    newButton.classList.add("RemoveBookButton")    
    newButton.textContent = 'X';

    const readButton = document.createElement("button");
    readButton.id = "read"; 
    readButton.textContent = book.read;
    
    readButton.addEventListener('click', () => {
        console.log(book.read);
        book.read = readCheck(book.read)
        console.log(book.read);
        readButton.textContent = book.read;
    })


    newButton.addEventListener('click', () => {
        newPara.remove();
        newButton.remove();
        readButton.remove();
    })

    const htBook = document.getElementById("books");
    
    htBook.appendChild(newPara);
    htBook.appendChild(newButton);
    htBook.appendChild(readButton);
}


for (const book of myLibrary) {
    addBookToSite(book);
}



const myForm = document.getElementById('newBookFromUser');

myForm.addEventListener('submit', function(event) {
    // object made from data
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readInput = document.getElementById('read');

    // pull valuse out using input names
    let titleBook = titleInput.textContent;
    console.log(titleInput);
    let titleAuthor = authorInput.textContent;
    let titlePages = pagesInput.textContent;
    let titleRead = readInput.textContent;

    // pass values into form 

    addNewBook(titleBook, titleAuthor, titlePages, titleRead);
    // let lastIndex = myLibrary.at(-1);
    // console.log(myLibrary[lastIndex])
    // addBookToSite(myLibrary[lastIndex]);
})


