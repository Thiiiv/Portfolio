
// Get the dock element
const dock = document.querySelector('.dock');
const firstProjectPage = document.querySelector('.project');
firstProjectPage.addEventListener('mouseover', () => {
  if (!dock.classList.contains('active')) {
    dock.classList.toggle('active');
    console.log('active');
  }
});

const accueil = document.getElementById('accueil');
const summary = document.getElementById('summary');

accueil.addEventListener('mouseover', () => {
  dock.classList.remove('active');
  console.log('deactive');
});
summary.addEventListener('mouseover', () => {
  dock.classList.remove('active');
  console.log('deactive');
});

var previousScroll = window.scrollY || document.documentElement.scrollTop;
window.addEventListener('scroll', function(event) {
  var currentScroll = window.scrollY || document.documentElement.scrollTop;
  
  if (currentScroll < previousScroll) {
    dock.classList.remove('active');
    console.log('Défilement vers le haut');
  }

  console.log("Il se passe quelque chose");
  
  previousScroll = currentScroll;
});

console.log(firstProjectPage);

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
