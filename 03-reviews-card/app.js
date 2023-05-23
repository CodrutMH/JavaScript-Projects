const people = [
  {
    img: 'imgs/lanarhoades.jpg',
    name: 'Lana Rhoades',
    job: 'web developer',
    info: 'I LOVE BEEING A WEB DEVELOPER, OMG',
  },
  {
    img: 'imgs/jhonny.jpg',
    name: 'Jhonny Sins',
    job: 'TEAM LIDER',
    info: 'TEAM LIDER, HEHEHEHEHEHEEHEHE',
  },
  {
    img: 'imgs/elsajean.jpg',
    name: 'Elsa Jean',
    job: 'Angular Developer',
    info: 'I LOVE BEEING A Angular DEVELOPER, OMG',
  },
  {
    img: 'imgs/miakalifa.jpg',
    name: 'Mia Khalifa',
    job: 'SEO',
    info: 'I LOVE BEEING A SEO, OMG',
  },
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.js-prev-btn');
const nextBtn = document.querySelector('.js-next-btn');
const randomBtn = document.querySelector('.random-btn');

// set strarting item

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// show person on item

function showPerson(person) {
  const item = people[person];
  console.log(item);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > people.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = people.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
  const randomPerson = Math.round(Math.random() * people.length - 1);
  console.log(randomPerson);
  currentItem = randomPerson;
  if (randomPerson > people.length - 1) {
    currentItem = 0;
  } else if (randomPerson < 0) {
    currentItem = people.length - 1;
  }
  showPerson(currentItem);
  console.log(randomPerson);
});
