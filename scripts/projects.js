const projects = [
  {
  name: "Stay-4-Now",
  thumbnail: "images/thumbnails/stay4now.png",
  description: "A modern booking platform inspired by Airbnb, designed to help users easily discover, explore, and reserve unique stays and experiences through a clean, intuitive interface.",
  tools: ['HTML', 'CSS', 'JavaScript'],
  status: 'In Progress',
  link: 'https://jay-man-web.github.io/stay4now/'
  }
];

let projectsHTML = '';

projects.forEach((project) => {
  let toolsHTML = '';

  project.tools.forEach((tool) => {
    toolsHTML += `<span class="tools">${tool}</span>`
  });

  projectsHTML += `
  <h3>${project.name}</h3>
  <a class="project-link" href="${project.link}">
    <div class="project-container">
      <div class="thumbnail-wrap">
        <img class="thumbnail" src="${project.thumbnail}" alt="${project.name}">
      </div>
      <div class="description-wrap">
        <p>
          ${project.description}
        </p>
        <div class="tools-wrap">
          ${toolsHTML}
          <span class="tools status">
            ${project.status}
          </span>
        </div>
      </div>
    </div>
  </a>
  `;
});

document.getElementById('projects-container').innerHTML = projectsHTML;