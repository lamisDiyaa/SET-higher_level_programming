document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const toggleButton = document.getElementById('toggle_header');

  toggleButton.addEventListener('click', () => {
    if (header.classList.contains('red')) {
      header.classList.remove('red');
      header.classList.add('green');
    } else {
      header.classList.remove('green');
      header.classList.add('red');
    }
  });
});
