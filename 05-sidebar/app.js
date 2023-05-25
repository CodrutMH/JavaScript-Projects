const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar-container');
const close = document.querySelector('.close-sidebar');

toggle.addEventListener('click', function () {
  sidebar.classList.toggle('active');
});
close.addEventListener('click', function () {
  sidebar.classList.remove('active');
});
