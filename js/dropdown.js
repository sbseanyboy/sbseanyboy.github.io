const dropdownData = {
  "Northeastern University Khoury College of Computer Sciences": {
    title: "Northeastern University Khoury College of Computer Sciences",
    subtitle: "Teaching Assistant, Fundamentals of Computer Science",
    content: `
      <ul>
        <li>Hosted office hours and led 2 labs per week providing guidance in technical skills and design techniques</li>
        <li>Supported curriculum planning, grading, and exam proctoring for 800+ students.</li>
      </ul>
    `
  },
  "Expedia Group": {
    title: "Expedia Group",
    subtitle: "Software Engineering Intern — Checkout Experience (May 2022–Aug 2022)",
    content: `
      <ul>
        <li>Led E2E API testing initiative to deploy liveliness checks for checkout pages across Expedia brands</li>
        <li>Conducted refactoring leveraging object-oriented patterns, driving extensibility for new transaction types</li>
        <li>Created a Github Action to automate syncing changes between deployment pipeline UI and Github repository</li>
      </ul>
    `
  },
  "Wayfair LLC": {
    title: "Wayfair LLC",
    subtitle: "Software Engineer Co-op — Marketing Tech (July 2022–December 2022)",
    content: `
      <ul>
        <li>Improved the quality of ads displayed on the storefront with a new Java advertisement ranking algorithms</li>
        <li>Optimized ad footprint and enhanced the shopping experience by implementing logic to scale ad quantities</li>
        <li>Corrected the cost of 650,000+ daily ad clicks by discovering and resolving a bug in an ad pricing algorithm</li>
      </ul>
    `,
    subtitle2: "Software Engineer I — Supply Chain and Retail Tech (July 2023–Present)",
    content2: `
      <ul>
        <li>Led the department-wide adoption of Postgres by enhancing infrastructure for easy terraform provisioningm and extending a core data access library to support Postgres and supporting functionality</li>
        <li>Reduced latencies of a key storefront API by 7-8% by enhancing kafka data propagation, enabling the obsoletion and removal of redundant SQL queries and surrounding code</li>
        <li>Optimized Kafka consumer applications processing 500k+ messages per second, improving data integrity, eliminating bottlenecks, and enhancing concurrency to ensure real-time processing at scale</li>
        <li>Fixed several bugs correcting the legal compliance and preventing sale of 63M+ products and 300+ suppliers</li>
        <li>Led prep efforts for peak sales events by scaling resources and caches, and load-testing storefront services</li>
        <li>Mentored 4 new hires through onboarding, enabling their contribution to production code in 2 weeks</li>
      </ul>
    `
  },
  "The American School in Japan": {
    title: "The American School in Japan",
    subtitle: "High School Diploma (2016–2020)",
    content: `
      <ul>
        <li>GPA: 3.9 / 4.0</li>
        <li>High Honors with Distinction</li>
        <li>AMIS Honor Jazz Band, AP Scholar with Distinction</li>
      </ul>
    `
  },
  "Northeastern University": {
    title: "Northeastern University",
    subtitle: "B.S. Computer Science & Business Administration (2020–2023)",
    content: `
      <ul>
        <li>GPA: 3.7 / 4.0</li>
        <li>Magna Cum Laude, Dean's List</li>
        <li>Resilience Award, Achievement Award</li>
      </ul>
    `
  },
  "Georgia Institute of Technology": {
    title: "Georgia Institute of Technology",
    subtitle: "M.S. Computer Science, 2025-2028",
    content: `
      <ul>
        <li>Will begin classes fall 2025!</li>
      </ul>
    `
  }
};


const buttons = document.querySelectorAll('.icon-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const company = button.getAttribute('company');
    const section = button.closest('.section');
    const dropdown = section.querySelector('.dropdown-wide');

    const data = dropdownData[company];
    if (!data) return;

    const isVisible = dropdown.classList.contains('show');
    const currentTitle = dropdown.querySelector('h2')?.textContent;

    if (isVisible && currentTitle === data.title) {
      dropdown.classList.remove('show');
      setTimeout(() => dropdown.innerHTML = '', 400);
    } else {
      dropdown.innerHTML = `
        <h2>${data.title}</h2>
        <h3>${data.subtitle}</h3>
        <div>${data.content}</div>
      `
      if (data.subtitle2 != null) {
        dropdown.innerHTML += 
        `
          <h3>${data.subtitle2}</h3>
          <div>${data.content2}</div>
        `;
      }
      dropdown.classList.add('show');
    }
  });
});
