'use strict';

const lightboxes = document.querySelectorAll('.lightbox');

function createModal(imgSrc, imgAlt) {
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 8 8"
    >
      <path
        d="M16.783,9.64l-2.5,2.5-2.5-2.5-1.5,1.5,2.5,2.5-2.5,2.5,1.5,1.5,2.5-2.5,2.5,2.5,1.5-1.5-2.5-2.5,2.5-2.5Z"
        transform="translate(-10.283 -9.64)"
      />
    </svg>
  `;

  modalElement.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modalElement);
  });

  return modalElement;
}

function openModal(e) {
  // Do nothing if user clicks on anything other than img tag.
  if (e.target.tagName.toLowerCase() !== 'img') {
    return;
  }

  // Append modal to body
  document.body.appendChild(createModal(e.target.src, e.target.alt));
}

[...lightboxes].forEach((lightbox) => {
  lightbox.addEventListener('click', (e) => {
    openModal(e);
  });
});
