"use strict";

// Crea una clase Libro ---ok
// La clase libro tendrá título, autor, año y género. ---ok
// Crea un método que devuelva toda la información del libro ---ok
// Pide 3 libros y guárdalos en un array ---ok
// Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.  -----mas tarde

// Validar que los campos no se introduzcan vacíos -----mas tarde
// Validar que el año sea un número y que tenga 4 dígitos -----mas tarde
// Validar que el género sea: aventuras, terror o fantasía  -----mas tarde

// Crea una función que muestre todos los libros ---ok
// Crea una función que muestre los autores ordenados alfabéticamente  ----ok
// Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información ---ok

let arrayBooks;

class Book {
    constructor(title, author, year, genre) {

        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    information() {
        let info = `${this.title}, ${this.author}, ${this.year}, ${this.genre}`;
        return info;
    }



}



class Books {
    //recibe el array de los libros
    constructor(books) {

        this.books = books;
    }

    allBooks() {

        this.books.forEach(elem => {
            console.log(elem);
        });

    }



    sortAuthors() {

        let auth = 'Autores ordenados alfabéticamente: ';
        let newBooks = [];

        this.books.forEach(elem => {
            newBooks.push(elem.author);
        });
        newBooks = newBooks.sort();
        for (let i = 0; i < newBooks.length; i++) {
            if (i >= newBooks.length - 1) {
                auth += `${newBooks[i]}.`
            } else {
                auth += `${newBooks[i]}, `
            }
        }
        console.log(auth);
    }




    genreInfo(gen) {
        let fullInfo = '';
        let newBooks = [];
        let block = false;

        this.books.forEach(elem => {
            if (elem.genre === 'Fantasía' || elem.genre === 'Terror' || elem.genre === 'Aventuras') {
                block = false;
            } else {
                block = true;
            }
        });

        // newBooks.push(elem);

        if (!block) {


            this.books.forEach(elem => {
                if (elem.genre === gen) {
                    newBooks.push(elem);
                }
            });

            for (let i = 0; i < newBooks.length; i++) {
                if (i >= newBooks.length - 1) {
                    fullInfo += `Libro ${i+1}: ${newBooks[i].information()}.`
                } else {
                    fullInfo += `\nLibro ${i+1}: ${newBooks[i].information()}.`
                }
            }

        }



        return fullInfo;
    }

}


// -------------------------------------------------
//  let book1 = new Book('El señor de los anillos', ' J. R. R. Tolkien', 1954, 'Fantasía');
//  let book2 = new Book('Doctor sueño', 'Stephen King', 2013, 'Horror');
//  let book3 = new Book('Orgugo y Prejuicio', 'Jane Austen', 1813, 'Romántico');







document.querySelector('html').addEventListener("click", function () {

    let book1;
    let book2;
    let book3;

    book1 = new Book('El señor de los anillos', ' J. R. R. Tolkien', 1954, 'Fantasía');
    book2 = new Book('Doctor sueño', 'Stephen King', 2013, 'Terror');
    book3 = new Book('Orgugo y Prejuicio', 'Jane Austen', 1813, 'Aventuras');

    arrayBooks = [book1, book2, book3];

    let prueba = new Books(arrayBooks);
    console.log(prueba.genreInfo('Terror'));

});