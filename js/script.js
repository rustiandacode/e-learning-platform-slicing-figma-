// toggle menu on mobile screen

function navmenu() {
  let bar = document.querySelector('.bar');
  let toggle = document.querySelector('.toggle');
  let menu = document.querySelector('.menu-mobile');

  bar.addEventListener('click', () => {
    if (toggle.className === 'toggle fa-solid fa-bars-staggered') {
      menu.style.display = 'block';
      toggle.classList.remove('fa-bars-staggered');
      toggle.classList.add('fa-xmark');
    } else if (toggle.className === 'toggle fa-solid fa-xmark') {
      menu.style.display = 'none';
      toggle.classList.remove('fa-xmark');
      toggle.classList.add('fa-bars-staggered');
    }
  });
}

navmenu();
