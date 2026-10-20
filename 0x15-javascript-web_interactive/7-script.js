async function fetchCharacter() {
  const character = document.getElementById('character');

  try {
    const response = await fetch(
      'https://swapi-api.alx-tools.com/api/people/5/?format=json'
    );

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    character.textContent = data.name;
  } catch (error) {
    character.textContent = 'Unable to load character.';
  }
}

fetchCharacter();
