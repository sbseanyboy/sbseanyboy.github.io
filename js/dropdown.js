const buttons = document.querySelectorAll('.icon-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const info = button.getAttribute('title');
    const title = button.querySelector('h2')?.textContent ?? '';

    // Find the closest section and its dropdown
    const section = button.closest('.section');
    const dropdown = section.querySelector('.dropdown-wide');

    // Check if this content is already shown
    const isVisible = dropdown.style.display === 'block';
    const currentTitle = dropdown.querySelector('h2')?.textContent;
    const currentInfo = dropdown.querySelector('h3')?.textContent;

    if (isVisible && currentTitle === title && currentInfo === info) {
      // Hide dropdown if clicked again
      dropdown.style.display = 'none';
      dropdown.innerHTML = '';
    } else {
      // Show new content
      dropdown.innerHTML = `
        <h2>${title}</h2>
        <h3>${info}</h3>
      `;
      dropdown.style.display = 'block';
    }
  });
});
