const openModal = document.querySelector('.open-modal-btn');
const closeModal = document.querySelector('.close-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');

openModal.addEventListener('click', function () {
  modalOverlay.classList.add('open-modal');
});
closeModal.addEventListener('click', function () {
  modalOverlay.classList.remove('open-modal');
});
