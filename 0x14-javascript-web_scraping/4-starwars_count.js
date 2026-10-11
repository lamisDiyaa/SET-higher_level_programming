#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    const characterUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

    const count = films.filter((film) =>
      film.characters.includes(characterUrl)
    ).length;

    console.log(count);
  }
});
