// Shared pill navigation script for single-level category pages
// Used by: screen-printing, screen-chemicals-accessories, textile-auxiliaries
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.subcategory-section');
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const idx = this.getAttribute('data-index');
      tabs.forEach(t => {
        t.classList.remove('text-[#1A1A2E]');
        t.classList.add('text-gray-400');
        t.querySelector('.tab-indicator').classList.remove('opacity-100');
        t.querySelector('.tab-indicator').classList.add('opacity-0');
      });
      this.classList.remove('text-gray-400');
      this.classList.add('text-[#1A1A2E]');
      this.querySelector('.tab-indicator').classList.remove('opacity-0');
      this.querySelector('.tab-indicator').classList.add('opacity-100');
      sections.forEach(s => { s.style.display = 'none'; });
      const targetSection = document.querySelector('.subcategory-section[data-index="' + idx + '"]');
      if (targetSection) {
        targetSection.style.display = 'block';
        if (window.AOS) window.AOS.refresh();
      }
    });
  });
});
