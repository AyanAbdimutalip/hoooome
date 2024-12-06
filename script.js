
// let people = [];
// for (let i = 0; i < 3; i++) {
//     let name = prompt(`Адамның ${i + 1} ші аты:`);
//     let age = prompt(`Адамның ${i + 1} ші жасы:`);
//     people.push({ name, age });
// }

// people.forEach(person => {
//     alert(`Аты: ${person.name}, Жасы: ${person.age}`);
// });



// let books = [
//     { title: "Книга 1", author: "Автор 1", year: 2000 },
//     { title: "Книга 2", author: "Автор 2", year: 2010 },
//     { title: "Книга 3", author: "Автор 3", year: 2020 },
// ];

// let searchTitle = prompt("Қай кітаптың жылын жаңартқыңыз келеді?");

// let book = books.find(book => book.title === searchTitle);

// if (book) {
//     book.year = prompt(`${searchTitle} кітабының жаңа жылын енгізіңіз:`);
// } else {
//     alert("Кітап табылмады!");
// }

// books.forEach(book => {
//     alert(`Атауы: ${book.title}, Автор: ${book.author}, Жылы: ${book.year}`);
// });



// let students = [
//     { name: "Асыл", age: 19, grade: "A" },
//     { name: "Мұрат", age: 22, grade: "B" },
//     { name: "Жанар", age: 18, grade: "C" },
//     { name: "Ерлан", age: 20, grade: "A" },
//     { name: "Әлия", age: 21, grade: "B" },
// ];


// students.sort((a, b) => a.age - b.age);


// let youngest = students[0];
// let oldest = students[students.length - 1];

// alert(`Ең жас студент: Аты  ${youngest.name}, Жасы  ${youngest.age}, Бағасы  ${youngest.grade}`);
// alert(`Ең үлкен студент: Аты  ${oldest.name}, Жасы  ${oldest.age}, Бағасы  ${oldest.grade}`);
