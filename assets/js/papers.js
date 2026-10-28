// Support math nodes emitted by older Kramdown versions as well as current delimiters.
document.querySelectorAll('.paper-abstract script[type^="math/tex"]').forEach((source) => {
  const math = document.createElement('span');
  const displayMode = source.type.includes('mode=display');
  math.className = displayMode ? 'math-display' : 'math-inline';
  if (window.katex) {
    window.katex.render(source.textContent, math, { displayMode, throwOnError: false });
  } else {
    math.textContent = source.textContent;
  }
  source.replaceWith(math);
});

if (window.renderMathInElement) {
  document.querySelectorAll('.paper-abstract').forEach((abstract) => {
    window.renderMathInElement(abstract, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
      throwOnError: false,
    });
  });
}

// Keep long inline formulae scrollable inside the abstract on narrow screens.
document.querySelectorAll('.paper-abstract .katex').forEach((math) => {
  if (!math.parentElement.classList.contains('katex-display')) {
    math.parentElement.classList.add('math-inline');
  }
});

document.querySelectorAll('.paper-toggle').forEach((button) => {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  if (!panel) return;

  // Keep the abstracts readable if JavaScript is disabled; enhance to a disclosure here.
  button.setAttribute('aria-expanded', 'false');
  panel.classList.add('is-collapsible');
  panel.setAttribute('aria-hidden', 'true');
  panel.inert = true;

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    panel.inert = !open;
    panel.classList.toggle('is-open', open);
  });
});
