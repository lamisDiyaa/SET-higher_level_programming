#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  if (response.statusCode !== 200) {
    return;
  }

  const films = JSON.parse(body).results;
  const count = films.filter((film) => film.characters.some(
    (character) => /\/people\/18\/?$/.test(character)
  )).length;

  console.log(count);
});
