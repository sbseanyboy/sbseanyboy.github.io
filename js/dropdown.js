const buttons = document.querySelectorAll('.icon-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const info = button.getAttribute('title');
    const title = button.querySelector('h2')?.textContent ?? '';

    const section = button.closest('.section');
    const dropdown = section.querySelector('.dropdown-wide');

    const isVisible = dropdown.classList.contains('show');
    const currentTitle = dropdown.querySelector('h2')?.textContent;
    const currentInfo = dropdown.querySelector('h3')?.textContent;

    if (isVisible && currentTitle === title && currentInfo === info) {
      dropdown.classList.remove('show');
      setTimeout(() => dropdown.innerHTML = '', 400); // Wait for animation before clearing
    } else {
      dropdown.innerHTML = `
        <h2>${title}</h2>
        <h3>${info}</h3>
      `;
      dropdown.classList.add('show');
    }
  });
});
