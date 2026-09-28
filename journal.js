// Tab switching for the journal section.
// Click, or use Up/Down (Left/Right too) and Home/End. Only the active tab is in the keyboard
// tab order (roving tabindex), which is the standard tabs pattern.
// On a change, the newly selected marker plays the pack's "show" bounce and the
// previous one plays "hide". Nothing animates on first load.
(() => {
  const tabs = Array.from(document.querySelectorAll('.journal__tab'));
  if (!tabs.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function bounce(tab, cls) {
    if (reduceMotion.matches) return;
    tab.classList.remove('is-showing', 'is-hiding');
    void tab.offsetWidth;                        // restart if it was mid-animation
    tab.classList.add(cls);
    tab.addEventListener('animationend', () => tab.classList.remove(cls), { once: true });
  }

  function select(tab, moveFocus = false) {
    const prev = tabs.find((t) => t.getAttribute('aria-selected') === 'true');
    if (prev !== tab) {
      tabs.forEach((t) => {
        const active = t === tab;
        t.setAttribute('aria-selected', String(active));
        t.tabIndex = active ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !active;
      });
      if (prev) bounce(prev, 'is-hiding');
      bounce(tab, 'is-showing');
    }
    if (moveFocus) tab.focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));

    tab.addEventListener('keydown', (e) => {
      let next;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        select(next, true);
      }
    });
  });
})();
