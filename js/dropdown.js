const buttons = document.querySelectorAll('.experience-icons .icon-button');
const dropdown = document.getElementById('experience-dropdown');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const company = button.getAttribute('company');
    const title = button.getAttribute('title');

    // Check if same content is showing
    if (
      dropdown.style.display === 'block' &&
      dropdown.querySelector('h2')?.textContent === company &&
      dropdown.querySelector('h3')?.textContent === title
    ) {
      // Hide dropdown if same content is clicked
      dropdown.style.display = 'none';
      dropdown.innerHTML = '';
    } else {
      // Show new content with title and info
      dropdown.innerHTML = `
        <h2>${company}</h2>
        <h3>${title}</h3>
      `;
      dropdown.style.display = 'block';
    }
  });
});
