(function () {
  const buttonsRoot = document.getElementById('tab-buttons');
  const contentsRoot = document.getElementById('tab-contents');
  const routeBtn = document.getElementById('route-btn');
  const tabs = globalThis.tabsData;

  if (!buttonsRoot || !contentsRoot || !Array.isArray(tabs)) return;

  buttonsRoot.innerHTML = tabs
    .map(
      (tab, index) => `
    <button type="button" aria-controls="${tab.id}" class="tab-btn flex flex-col items-center gap-3 p-6 rounded-2xl transition-all ${
      index === 0
        ? 'bg-primary text-white shadow-lg'
        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 hover:border-primary/50'
    }" data-target="${tab.id}">
      <span class="material-symbols-outlined text-3xl ${index === 0 ? '' : 'text-primary'}">${tab.icon}</span>
      <span class="font-bold text-sm">${tab.label}</span>
    </button>`,
    )
    .join('');

  contentsRoot.innerHTML = tabs
    .map(
      (tab, index) => `
    <div id="${tab.id}" class="tab-content ${index === 0 ? '' : 'hidden '}grid md:grid-cols-2 gap-12 items-center px-4 pb-4">
      <div class="order-2 md:order-1">
        <span class="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-4 uppercase tracking-wider">${tab.badge}</span>
        <h3 class="text-3xl font-bold mb-6 text-slate-800 dark:text-white">${tab.title}</h3>
        <p class="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">${tab.description}</p>
        <ul class="space-y-4">
          ${tab.bullets
            .map(
              (item) =>
                `<li class="flex items-center gap-3"><span class="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-sm font-bold">check</span><span class="text-slate-700 dark:text-slate-300">${item}</span></li>`,
            )
            .join('')}
        </ul>
      </div>
      <div class="order-1 md:order-2"><div class="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"><img alt="${tab.imageAlt}" class="w-full h-full object-cover" src="${tab.imageSrc}"/></div></div>
    </div>`,
    )
    .join('');

  const buttons = Array.from(document.querySelectorAll('.tab-btn'));
  const panels = Array.from(document.querySelectorAll('.tab-content'));

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      panels.forEach((p) => p.classList.add('hidden'));
      document.getElementById(target)?.classList.remove('hidden');
      buttons.forEach((b) => {
        b.classList.remove('bg-primary', 'text-white', 'shadow-lg');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
        b.querySelector('span')?.classList.add('text-primary');
      });
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
      btn.classList.add('bg-primary', 'text-white', 'shadow-lg');
      btn.querySelector('span')?.classList.remove('text-primary');
    });
  });

  if (routeBtn) {
    routeBtn.addEventListener('click', () => {
      const start = document.getElementById('start-address')?.value || '';
      window.open(
        'https://www.google.com/maps/dir/' +
          encodeURIComponent(start) +
          '/R.+Primeiro+de+Março,+844+-+São+José,+Porto+Alegre+-+RS,+91520-620',
        '_blank',
      );
    });
  }
})();
