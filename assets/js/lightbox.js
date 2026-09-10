const modal = document.getElementById('lightbox-modal');
const modalImage = document.getElementById('lightbox-image');
const modalCaption = document.getElementById('lightbox-caption');
const triggers = Array.from(document.querySelectorAll('.lightbox-trigger'));
const prevButton = document.querySelector('.lightbox-prev');
const nextButton = document.querySelector('.lightbox-next');
let currentIndex = -1;

if (modal && modalImage && triggers.length) {
  const renderLightbox = (index) => {
    const trigger = triggers[index];
    if (!trigger) return;
    currentIndex = index;
    modalImage.src = trigger.dataset.image || '';
    modalImage.alt = trigger.dataset.alt || '';
    modalCaption.textContent = trigger.dataset.title || '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  };

  const closeLightbox = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
    modalImage.alt = '';
    modalCaption.textContent = '';
    document.body.classList.remove('lightbox-open');
    currentIndex = -1;
  };

  const showNext = () => {
    if (!triggers.length) return;
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % triggers.length;
    renderLightbox(nextIndex);
  };

  const showPrev = () => {
    if (!triggers.length) return;
    const prevIndex = currentIndex <= 0 ? triggers.length - 1 : currentIndex - 1;
    renderLightbox(prevIndex);
  };

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => renderLightbox(index));
  });

  modal.querySelectorAll('[data-lightbox-close]').forEach((node) => {
    node.addEventListener('click', closeLightbox);
  });

  if (prevButton) prevButton.addEventListener('click', showPrev);
  if (nextButton) nextButton.addEventListener('click', showNext);

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') showNext();
    if (event.key === 'ArrowLeft') showPrev();
  });
}
