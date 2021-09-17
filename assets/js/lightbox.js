'use strict';

const lightboxes = document.querySelectorAll('.lightbox');

[...lightboxes].forEach((lightbox) => {
  lightbox.addEventListener('click', (e) => {
    openModal(e);
  });
});

function openModal(e) {
  // Do nothing if user clicks on anything other than img tag.
  if (
    e.target.tagName.toLowerCase() != 'img' &&
    e.target.tagName.toLowerCase() != 'video'
  ) {
    return;
  }

  if (e.target.tagName.toLowerCase() === 'img') {
    document.body.appendChild(createImageModal(e.target.src, e.target.alt));
  }

  if (e.target.tagName.toLowerCase() === 'video') {
    document.body.appendChild(createVideoModal(e.target.innerHTML));
  }
}

function createImageModal(imgSrc, imgAlt) {
  // Create DOM elements
  const modalElement = document.createElement('div');
  modalElement.className = 'lightbox-modal';

  const figure = document.createElement('figure');
  const img = document.createElement('img');

  // Set img and figcaption attributes
  img.src = imgSrc;

  // Append elements to parent modalElement
  figure.appendChild(img);

  // Create & append figcaption if the image alt text is not empty
  if (imgAlt != '') {
    const figcaption = document.createElement('figcaption');
    img.alt = imgAlt;
    figcaption.innerText = imgAlt;
    figure.appendChild(figcaption);
  }

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

function createVideoModal(videoSrc) {
  const videoSource = videoSrc;

  const modalElement = document.createElement('div');
  modalElement.className = 'lightbox-modal';

  const videoWrapper = document.createElement('div');
  videoWrapper.className = 'video-wrapper';

  const video = document.createElement('video');
  video.setAttribute('controls', true);

  video.innerHTML = videoSource;
  videoWrapper.appendChild(video);
  modalElement.appendChild(videoWrapper);

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
