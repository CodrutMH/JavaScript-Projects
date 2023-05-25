const toggleBtn = document.querySelector('.toggle-button');
const toggleBtnSiderbar = document.querySelector('.toggle-button-siderbar');
const sideBar = document.querySelector('.sideBar');

toggleBtn.addEventListener('click', function () {
  sideBar.classList.add('active');
});
toggleBtnSiderbar.addEventListener('click', function () {
  sideBar.classList.remove('active');
});
