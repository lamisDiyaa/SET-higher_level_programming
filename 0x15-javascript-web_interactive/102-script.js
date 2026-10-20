document.addEventListener('DOMContentLoaded', () => {
  const languageInput = document.getElementById('language_code');
  const translateButton = document.getElementById('btn_translate');
  const helloElement = document.getElementById('hello');

  async function translateHello() {
    const languageCode = languageInput.value.trim();

    if (!languageCode) {
      helloElement.textContent = 'Please enter a language code.';
      return;
    }

    try {
      const response = await fetch(
        `https://hellosalut.stefanbohacek.dev/?lang=${encodeURIComponent(languageCode)}`
      );

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      helloElement.textContent = data.hello;
    } catch (error) {
      helloElement.textContent = 'Unable to fetch translation.';
    }
  }

  translateButton.addEventListener('click', translateHello);
});
