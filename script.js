// ===== FILTER =====
const filterBtns = document.querySelectorAll('.js-filter');
const galleryItems = document.querySelectorAll('.gallery-item');
const countEl = document.querySelector('.js-count');

function updateCount() {
  const visible = document.querySelectorAll('.gallery-item:not(.is-hidden)').length;
  countEl.innerHTML = `Showing <strong>${visible}</strong> photos`;
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('is-hidden');
      } else {
        item.classList.add('is-hidden');
      }
    });

    updateCount();
  });
});

// ===== LIGHTBOX =====
const lightbox = document.querySelector('.js-lightbox');
const backdrop = document.querySelector('.js-lightbox-backdrop');
const lightboxImg = document.querySelector('.js-lightbox-img');
const lightboxTitle = document.querySelector('.js-lightbox-title');
const lightboxCat = document.querySelector('.js-lightbox-cat');
const closeBtn = document.querySelector('.js-lightbox-close');
const prevBtn = document.querySelector('.js-lightbox-prev');
const nextBtn = document.querySelector('.js-lightbox-next');

let visibleItems = [];
let currentIndex = 0;

function getVisibleItems() {
  return [...document.querySelectorAll('.gallery-item:not(.is-hidden)')];
}

function openLightbox(src, title, cat, index) {
  lightboxImg.src = src;
  lightboxImg.alt = title;
  lightboxTitle.textContent = title;
  lightboxCat.textContent = cat;
  currentIndex = index;

  lightbox.classList.add('is-open');
  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

function showNext() {
  visibleItems = getVisibleItems();
  currentIndex = (currentIndex + 1) % visibleItems.length;
  const btn = visibleItems[currentIndex].querySelector('.js-lightbox-open');
  openLightbox(btn.dataset.src, btn.dataset.title, btn.dataset.cat, currentIndex);
}

function showPrev() {
  visibleItems = getVisibleItems();
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  const btn = visibleItems[currentIndex].querySelector('.js-lightbox-open');
  openLightbox(btn.dataset.src, btn.dataset.title, btn.dataset.cat, currentIndex);
}

// Open lightbox on button click
document.querySelectorAll('.js-lightbox-open').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    visibleItems = getVisibleItems();
    const visibleIndex = visibleItems.indexOf(btn.closest('.gallery-item'));
    openLightbox(btn.dataset.src, btn.dataset.title, btn.dataset.cat, visibleIndex);
  });
});

closeBtn.addEventListener('click', closeLightbox);
backdrop.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

// Init count
updateCount();