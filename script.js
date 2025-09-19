
const menuBtn = document.getElementById('menuBtn');
let mobileOpen = false;

menuBtn?.addEventListener('click', () => {
  mobileOpen = !mobileOpen;
  if (mobileOpen) {
    const menu = document.createElement('div');
    menu.id = 'mobileMenu';
    menu.className = 'fixed inset-0 z-40 bg-black/60 flex flex-col items-center justify-center gap-6 text-lg';
    menu.innerHTML = `
      <a href="#features" class="text-white hover:underline">Features</a>
      <a href="#reviews" class="text-white hover:underline">Reviews</a>
      <a href="#pricing" class="text-white hover:underline">Pricing</a>
      <button class="mt-4 px-5 py-2 bg-white text-slate-900 rounded-md" onclick="document.getElementById('mobileMenu').remove()">Close</button>
    `;
    document.body.appendChild(menu);
  } else {
    document.getElementById('mobileMenu')?.remove();
  }
});

document.getElementById('getStarted')?.addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('ctaTop')?.addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});


const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', '-translate-y-6');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });


revealEls.forEach(el => {
  el.classList.add('opacity-0', '-translate-y-6', 'transition-all', 'duration-700', 'will-change-transform');
  io.observe(el);
});
