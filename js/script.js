"use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you over 18?", "Yes");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your surname?', '');
// answers[2] = prompt('How old you?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Sergei';

// alert(`Привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + " - object");

// let incr = 10,
//    decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What was the last movie you saw?', ''),
      b = prompt('How mach do you rate it?', ''),
      c = prompt('What was the last movie you saw?', ''),
      d = prompt('How mach do you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);