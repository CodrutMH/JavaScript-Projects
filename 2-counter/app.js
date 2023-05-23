// set intial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    const btnPressed = event.currentTarget.classList;
    if (btnPressed.contains('increase')) {
      count++;
    } else if (btnPressed.contains('decrese')) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
