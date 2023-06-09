// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');

const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFlag = false;
let editId = '';
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
//clear items
clearBtn.addEventListener('click', clearItems);

const deleteBtn = document.querySelector('.delete-btn');

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;

  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    //apend child

    list.appendChild(element);
    displayAlert('item addet to the list', 'success');

    container.classList.add('show-container');

    //add to local storage
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
  } else {
    displayAlert('please enter value', 'danger');
  }
}
// clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  // localStorage.removeItem('list');
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
//delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('item removed', 'danger');
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
//edit  function

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSiblig;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = editElement.dataset.id;
  submitBtn.textContent = 'edit';
}

function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editId = '';
  submitBtn.textContent = 'submit';
}
// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  console.log('aded to local storage');
}
function removeFromLocalStorage() {}
// ****** SETUP ITEMS **********
