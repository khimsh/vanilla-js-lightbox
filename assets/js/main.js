(() => {
  const lightbox = document.getElementById('lightbox');
  const modal = document.getElementById('lightbox-modal');

  lightbox.addEventListener('click', e => {
    // Do nothing if user clicks on figcaption or figure tag.
    if (
      event.target.tagName.toLowerCase() === 'figure' ||
      event.target.tagName.toLowerCase() === 'figcaption'
    ) {
      return;
    }

    document.querySelector('#lightbox-modal img').src = e.target.src;
    document.querySelector('#lightbox-modal img').alt = e.target.alt;
    document.querySelector('#lightbox-modal figcaption').innerHTML =
      e.target.alt;
    modal.classList.add('shown');
  });

  document.getElementById('close-modal').addEventListener('click', () => {
    modal.classList.remove('shown');
  });
})();
