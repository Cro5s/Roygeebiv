class Modal {
  constructor({
    titleText,
    firstMessageText,
    secondMessageText = null,
    confirmText,
  }) {
    this.titleText = titleText;
    this.firstMessageText = firstMessageText;
    this.secondMessageText = secondMessageText;
    this.confirmText = confirmText;

    // Close modal when clicking outside the modal content
    document.addEventListener('click', (event) => {
      if (this.modalElem && event.target === this.modalElem) this.close();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.close();
    });
  }

  createAndOpen(onClose) {
    this.modalElem = document.createElement('div');
    this.modalElem.classList.add('modal');
    this.modalElem.addEventListener('click', (event) => {
      if (event.target === this.modalElem) this.close;
    });

    setTimeout(() => {
      this.modalElem.classList.add('open');
    }, 400);

    const modalContainerElem = document.createElement('div');
    modalContainerElem.classList.add('game-rules-container');

    this.modalElem.appendChild(modalContainerElem);

    const modalContentElem = document.createElement('div');
    modalContentElem.classList.add('details-container');

    modalContainerElem.appendChild(modalContentElem);

    // Heading
    const titleTextElem = document.createElement('h2');
    titleTextElem.classList.add('titleText');
    titleTextElem.textContent = this.titleText;

    modalContainerElem.appendChild(titleTextElem);

    // Message
    const firstMessageTextElem = document.createElement('p');
    firstMessageTextElem.classList.add('movement-rules');
    firstMessageTextElem.textContent = this.firstMessageText;

    modalContainerElem.appendChild(firstMessageTextElem);

    if (this.secondMessageText) {
      const secondMessageTextElem = document.createElement('p');
      secondMessageTextElem.classList.add('game-rules');
      secondMessageTextElem.textContent = this.secondMessageText;

      modalContainerElem.appendChild(secondMessageTextElem);
    }

    // Buttons
    const confirmButtonTextElem = document.createElement('button');
    confirmButtonTextElem.classList.add('fa-times-circle');
    confirmButtonTextElem.addEventListener('click', () => {
      onClose('Closed');
      this.close();
    });

    modalContainerElem.appendChild(confirmButtonTextElem);

    document.body.appendChild(this.modalElem);
  }

  open() {
    return new Promise((resolve) => {
      this.createAndOpen(resolve);
    });
  }

  close() {
    if (this.modalElem) {
      this.modalElem.classList.remove('open');
      setTimeout(() => {
        if (this.modalElem) {
          document.body.removeChild(this.modalElem);
          this.modalElem = null; // Clean up reference
        }
      }, 400);
    }
  }
}
