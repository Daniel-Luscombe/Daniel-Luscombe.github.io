function scrollProjects(distance) {
    const projectList = document.getElementById('project-list');
    projectList.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}