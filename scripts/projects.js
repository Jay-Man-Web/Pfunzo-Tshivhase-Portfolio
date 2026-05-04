const projects = [
  {
    name: "Stay-4-Now",
    thumbnail: "images/thumbnails/stay4now.png",
    description: "A modern booking platform engineered with persistent local storage and complex DOM manipulation logic. Designed to help users easily discover and reserve stays through an intuitive, data-driven interface.",
    tools: ['HTML5', 'CSS3', 'JS', 'State Management'],
    status: 'In Progress',
    link: 'https://jay-man-web.github.io/stay4now/'
  }
];

const projectsContainer = document.getElementById('projects-container');

const renderProjects = () => {
  const projectsHTML = projects.map(project => `
    <a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
      <div class="project-container">
        <div class="thumbnail-wrap">
          <img class="thumbnail" src="${project.thumbnail}" alt="${project.name} preview">
        </div>
        <div class="description-wrap">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="tools-wrap">
            ${project.tools.map(tool => `<span class="tools">${tool}</span>`).join('')}
            <span class="tools status">${project.status}</span>
          </div>
        </div>
      </div>
    </a>
  `).join('');

  projectsContainer.innerHTML = projectsHTML;
};

renderProjects();