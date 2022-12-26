async function loadProjects() {
    const response = await fetch('path/to/your/projects.json');
    const projects = await response.json();

    const shuffleWrapper = document.querySelector('.shuffle-wrapper');
    for (const project of projects) {
      const div = document.createElement('div');
      div.classList.add('col-lg-4', 'col-6', 'mb-4', 'shuffle-item');
      div.setAttribute('data-groups', `[&quot;design&quot;,&quot;illustration&quot;]`);

      const hoverWrapper = document.createElement('div');
      hoverWrapper.classList.add('position-relative', 'rounded', 'hover-wrapper');
      hoverWrapper.style.backgroundColor = project.color;

      const a = document.createElement('a');
      a.href = project.url;
      a.target = '_blank';

      const img = document.createElement('img');
      img.src = project.imageUrl;
      img.alt = 'portfolio-image';
      img.classList.add('img-fluid', 'rounded', 'w-100', 'd-block');
      img.style.width = '100%';
      const hoverOverlay = document.createElement('div');
      hoverOverlay.classList.add('hover-overlay');

      const hoverContent = document.createElement('div');
      hoverContent.classList.add('hover-content');

      const viewProjectButton = document.createElement('a');
      viewProjectButton.classList.add('btn', 'btn-light', 'btn-sm');
      viewProjectButton.textContent = 'view project';
      viewProjectButton.href = project.url;
      viewProjectButton.target = '_blank';

      hoverContent.appendChild(viewProjectButton);
      hoverOverlay.appendChild(hoverContent);
      a.appendChild(img);
      a.appendChild(hoverOverlay);
      div.appendChild(a);
      hoverWrapper.appendChild(a);
      hoverWrapper.appendChild(hoverOverlay); 
    }
}