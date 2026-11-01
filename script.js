const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
function closeMenu() {
  header?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}
menuButton?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a, .nav-cta').forEach(link => link.addEventListener('click', closeMenu));
document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' })));
const cards = [...document.querySelectorAll('.story-card')];
let storyIndex = 0;
function showStory(next) {
  if (!cards.length) return;
  storyIndex = (next + cards.length) % cards.length;
  cards.forEach((card, index) => card.classList.toggle('active', index === storyIndex));
}
document.querySelector('.story-next')?.addEventListener('click', () => showStory(storyIndex + 1));
document.querySelector('.story-prev')?.addEventListener('click', () => showStory(storyIndex - 1));
document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name').trim();
  event.currentTarget.querySelector('.form-message').textContent = 'Thanks, ' + name + '. This is a demo form; your enquiry has not been sent.';
  event.currentTarget.reset();
});
