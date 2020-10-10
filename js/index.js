"use strict";

// Crea una clase Libro ---ok
// La clase libro tendrá título, autor, año y género. ---ok
// Crea un método que devuelva toda la información del libro ---ok
// Pide 3 libros y guárdalos en un array ---ok
// Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.  -----mas tarde

// Validar que los campos no se introduzcan vacíos -----ok
// Validar que el año sea un número y que tenga 4 dígitos -----ok
// Validar que el género sea: aventuras, terror o fantasía  -----ok

// Crea una función que muestre todos los libros ---ok
// Crea una función que muestre los autores ordenados alfabéticamente  ----ok
// Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información ---ok




// --------------------------------------------------------------------------------------------

let title1 = document.getElementById('titulo-1');
let author1 = document.getElementById('author-1');
let year1 = document.getElementById('year-1');
let genre1 = document.getElementById('genre-1');


let title2 = document.getElementById('titulo-2');
let author2 = document.getElementById('author-2');
let year2 = document.getElementById('year-2');
let genre2 = document.getElementById('genre-2');


let title3 = document.getElementById('titulo-3');
let author3 = document.getElementById('author-3');
let year3 = document.getElementById('year-3');
let genre3 = document.getElementById('genre-3');




// --------------------------------------------------------------------------------------------

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

        let all = [];
        this.books.forEach(elem => {
            all.push(elem);
        });
        return all;
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
        return auth;
    }




    genreInfo(gen) {
        let newBooks = [];
        this.books.forEach(elem => {
            if (elem.genre === gen) {
                newBooks.push(elem);
            }
        });
        return newBooks;
    }

}



function loadBooks() {
    let book1;
    let book2;
    let book3;

    book1 = new Book(title1.value, author1.value, year1.value, genre1.value);
    book2 = new Book(title2.value, author2.value, year2.value, genre2.value);
    book3 = new Book(title3.value, author3.value, year3.value, genre3.value);
    arrayBooks = [book1, book2, book3];

    show('Libros cargados con éxito');
}





document.querySelector('#bt-1').addEventListener("click", function () {

    let block = false;

    let all = [title1.value, author1.value, year1.value, genre1.value,
        title2.value, author2.value, year2.value, genre2.value,
        title3.value, author3.value, year3.value, genre3.value
    ];
    let numb = [year1.value, year2.value, year3.value];



    all.forEach(element => {

        
        if (element.length < 1) {

            block = true;
        }
    });

    if (block) {
        alert('Debes de completar todos los campos, no debes dejar ninguno vacio');
        return false;
    }



    const regex = /^[0-9]*$/;
    numb.forEach(element => {
        if (element.length < 4 || element.length > 4) {

            block = true;
        }
        
        if(!regex.test(element)){
            alert('En el campo "Año"solo se admiten numeros');
            block = true;
        }
    });

    if (block) {
        alert('La fecha debe de de tener una longitud de 4 números');
        return false;
    }


    if (!block) {
        loadBooks();
    }



});


document.querySelector('#bt-2').addEventListener("click", function () {

    try {
        if (!arrayBooks.length === false) {
            let bookk = new Books(arrayBooks);
            let stri = 'Todos los libros: '
            let arr = bookk.allBooks();
            arr.forEach(element => {
                stri += `${element.title}, `;
            });
            stri = `${stri.substring(0,stri.length-2)}.`;
            show(stri);

        }
    } catch (error) {
        alert('Primero debes de cargar los libros');
    }


});

document.querySelector('#bt-3').addEventListener("click", function () {

    try {
        if (!arrayBooks.length === false) {
            let bookk = new Books(arrayBooks);
            let arr = bookk.sortAuthors();
            show(arr);
        }

    } catch (error) {
        alert('Primero debes de cargar los libros');
    }

});

document.querySelector('#bt-4').addEventListener("click", function () {

    try {

        if (!arrayBooks.length === false) {
            let bookk = new Books(arrayBooks);
            let gen = document.querySelector('#genre-4').value;
            let arr = bookk.genreInfo(gen);

            for (let i = 0; i < arr.length; i++) {

                show(`Libro ${arr.length-i}: ${arr[i].information()}.`)

            }

        }
    } catch (error) {
        alert('Primero debes de cargar los libros');
    }


});

function autocomplete() {


    title1.value = 'El señor de los anillos';
    author1.value = ' J. R. R. Tolkien';
    year1.value = 1954;
    genre1.value = 'Fantasía';


    title2.value = 'Doctor sueño';
    author2.value = 'Stephen King';
    year2.value = 2013;
    genre2.value = 'Terror';


    title3.value = 'Orgugo y Prejuicio';
    author3.value = 'Jane Austen';
    year3.value = 1813;
    genre3.value = 'Aventuras';

}

document.querySelector('#bt-auto').addEventListener('click', autocomplete);

function show(cont) {

    let doc = document.createElement('div');
    doc.classList.add('dialog-in')
    let doc2 = document.createElement('p');

    doc.appendChild(doc2);
    let nod = document.createTextNode(`${cont}`);
    doc2.appendChild(nod);

    let elem = document.querySelector('.dialog-main');
    elem.insertBefore(doc, elem.childNodes[0]);

}