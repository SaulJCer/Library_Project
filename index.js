function addBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}



const theHobbit = new addBook("The Hobbit", "J.R.R. Tolkien", 295, "not read");


function Chicken(recipe, cost) {
    this.recipe = recipe;
    this.cost = cost;
}

food = new Chicken("CHIKON", 50);