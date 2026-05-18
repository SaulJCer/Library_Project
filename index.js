const myLibrary = []



function addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();



}


function addNewBook (nameOfBook, author, pages, read) {

    const book1 = new addBook(nameOfBook, author, pages, read);



    myLibrary.push(book1);
    return book1;


}


// const theHobbit = new addBook("The Hobbit", "J.R.R. Tolkien", 295, "not read");


function Chicken(recipe, cost) {
    this.recipe = recipe;
    this.cost = cost;
}

food = new Chicken("CHIKON", 50);