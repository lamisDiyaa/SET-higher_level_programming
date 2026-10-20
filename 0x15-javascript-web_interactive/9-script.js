document.addEventListener('DOMContentLoaded', () => {
  async function fetchHello() {
    const helloElement = document.getElementById('hello');

    try {
      const response = await fetch(
        'https://hellosalut.stefanbohacek.dev/?lang=fr'
      );

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      helloElement.textContent = data.hello;
    } catch (error) {
      helloElement.textContent = 'Unable to load translation.';
    }
  }

  fetchHello();
});
