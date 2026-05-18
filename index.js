const myLibrary = []



function addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();



}


function addNewBook (varName, nameOfBook, author, pages, read) {



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

function Chicken(recipe, cost) {
    this.recipe = recipe;
    this.cost = cost;
}

food = new Chicken("CHIKON", 50);