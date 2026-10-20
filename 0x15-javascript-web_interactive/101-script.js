document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul.my_list');
  const addButton = document.getElementById('add_item');
  const removeButton = document.getElementById('remove_item');
  const clearButton = document.getElementById('clear_list');

  let items = ['Item'];

  function render() {
    list.innerHTML = '';

    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }

  addButton.addEventListener('click', () => {
    items.push('Item');
    render();
  });

  removeButton.addEventListener('click', () => {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });

  clearButton.addEventListener('click', () => {
    items = [];
    render();
  });

  render();
});
