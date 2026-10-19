const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const filterButtons = document.querySelectorAll('.filter-tab');
const eventCards = document.querySelectorAll('.event-card');
const eventCount = document.querySelector('#event-count');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.toggle('selected', item === button));
  const filter = button.dataset.filter;
  let visible = 0;
  eventCards.forEach(card => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.hidden = !show;
    if (show) visible++;
  });
  eventCount.textContent = `${visible} event${visible === 1 ? '' : 's'}`;
}));

const dialog = document.querySelector('#event-dialog');
document.querySelectorAll('.event-details').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#dialog-title').textContent = button.dataset.title;
  document.querySelector('#dialog-description').textContent = button.dataset.description;
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else alert(`${button.dataset.title}\n\n${button.dataset.description}`);
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-ok').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

let toastTimer;
const toast = document.querySelector('#toast');
document.querySelectorAll('[data-track]').forEach(link => link.addEventListener('click', () => {
  toast.textContent = `${link.dataset.track} selected — explore the learning resources below.`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}));
document.querySelector('#year').textContent = new Date().getFullYear();
