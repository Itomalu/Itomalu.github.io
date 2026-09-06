const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-kind]');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    for (const item of buttons) {
      const selected = item === button;
      item.toggleAttribute('data-active', selected);
      item.setAttribute('aria-selected', String(selected));
    }

    for (const card of cards) {
      card.hidden = filter !== 'all' && card.dataset.kind !== filter;
    }
  });
}
