
// Get the dock element
const dock = document.querySelector('.dock');

const projets = document.querySelectorAll('.project');
const accueil = document.getElementById('accueil');
const summary = document.getElementById('summary');
const footer = document.getElementById('footer');

projets.forEach((projet) => {
  projet.addEventListener('mouseover', () => {
    if (!dock.classList.contains('active')) {
      dock.classList.add('active');
      console.log('active');
    }
  });
});

accueil.addEventListener('mouseover', () => {
  if (dock.classList.contains('active')) {
    dock.classList.remove('active');
    console.log('deactive');
  }
});
summary.addEventListener('mouseover', () => {
  if (dock.classList.contains('active')) {
    dock.classList.remove('active');
    console.log('deactive');
  }
});
footer.addEventListener('mouseover', () => {
  if (dock.classList.contains('active')) {
    dock.classList.remove('active');
    console.log('deactive');
  }
});

// Array of project names
const projectClass = document.querySelectorAll('.project');
const projects = [];
console.log(projectClass);
projectClass.forEach((project) => {
  projects.push(project.id);
});
console.log(projects);

// Generate dock items for each project
projects.forEach((project) => {
  // Create a dock item
  const dockItem = document.createElement('div');
  dockItem.classList.add('dock-item');
  const dockItemLink = document.createElement('a');
  dockItemLink.classList.add('dock-item-link');
  const dockItemIcon = document.createElement('img');
  dockItemIcon.classList.add('dock-item-icon');
  dockItemIcon.src = `../images/${project}.png`;
  dockItemLink.appendChild(dockItemIcon);
  dockItem.appendChild(dockItemLink);

  // Add click event listener to navigate to the project
  dockItem.addEventListener('click', () => {
    // Navigate to the project page
    window.location.href = `projects.php#${project}`;
  });

  // Append the dock item to the dock
  dock.appendChild(dockItem);
});
