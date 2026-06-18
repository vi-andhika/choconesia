/* ===== PRODUK ADMIN — FILTER KATEGORI ===== */

const filterChips = document.querySelectorAll('.filter-chip');
const productCards = document.querySelectorAll('#productGrid .product-card');
const emptyState = document.getElementById('emptyState');
const productGrid = document.getElementById('productGrid');

filterChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    filterChips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');

    const selected = chip.getAttribute('data-filter');
    let visibleCount = 0;

    productCards.forEach((card) => {
      const matches = selected === 'semua' || card.getAttribute('data-category') === selected;
      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
    if (productGrid) {
      productGrid.style.display = visibleCount === 0 ? 'none' : 'grid';
    }
  });
});