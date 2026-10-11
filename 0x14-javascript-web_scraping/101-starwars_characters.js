#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  if (response.statusCode !== 200) {
    return;
  }

  const characters = JSON.parse(body).characters;
  let index = 0;

  const fetchCharacter = () => {
    if (index >= characters.length) {
      return;
    }

    request.get(characters[index], (err, res, characterBody) => {
      if (err) {
        console.log(err);
        return;
      }

      if (res.statusCode !== 200) {
        return;
      }

      console.log(JSON.parse(characterBody).name);
      index += 1;
      fetchCharacter();
    });
  };

  fetchCharacter();
});
