(() => {
  const lightbox = document.getElementById('lightbox');

  const createModal = (imgSrc, imgAlt) => {
    // Create DOM elements
    const modalElement = document.createElement('div');
    modalElement.className = 'lightbox-modal';

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');

    // Set img and figcaption attributes
    img.src = imgSrc;
    img.alt = imgAlt;
    figcaption.innerText = imgAlt;

    // Append elements to parent modalElement
    figure.appendChild(img);
    figure.appendChild(figcaption);
    modalElement.appendChild(figure);

    // Button element to close modal on click
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <title>close</title>
        <path
            d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z">
        </path>
    </svg>
    `;

    closeBtn.addEventListener('click', () => {
      document.body.removeChild(modalElement);
    });

    modalElement.appendChild(closeBtn);

    return modalElement;
  };

  lightbox.addEventListener('click', e => {
    // Do nothing if user clicks on anything other than img tag.
    if (event.target.tagName.toLowerCase() !== 'img') {
      return;
    }

    // Append modal to body
    document.body.appendChild(createModal(e.target.src, e.target.alt));
  });
})();
