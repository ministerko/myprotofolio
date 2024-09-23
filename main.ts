// main.ts

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio script loaded');

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
          const targetElement = document.getElementById(targetId || '');
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });

  // Dynamic year for the footer
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear().toString();
  }

  // Project hover effect
  const projectElements = document.querySelectorAll('.project');
  projectElements.forEach(project => {
      project.addEventListener('mouseenter', () => {
          project.classList.add('project-hover');
      });
      project.addEventListener('mouseleave', () => {
          project.classList.remove('project-hover');
      });
  });
});