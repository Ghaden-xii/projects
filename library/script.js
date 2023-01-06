const myLibrary = [];

const formBtn = document.querySelector('#display-form');
formBtn.addEventListener('click', () => {
  const form = document.querySelector('.add');
  form.style.display = 'flex';
});

const hideBtn = document.querySelector('#hide-form');
hideBtn.addEventListener('click', () => {
  const form = document.querySelector('.add');
  form.style.display = 'none';
});

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function clearForm() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#year').value = '';
  document.querySelector('#pag').value = '';
  document.querySelector('#read').checked = false;
}

function addBooksToLibrary(title, author, year, pages, read) {
  const newBook = new Book(title, author, year, pages, read);
  myLibrary.push(newBook);
  clearForm();
}

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
  const readCheck = document.querySelector('#read').checked;
  addBooksToLibrary(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#year').value,
    document.querySelector('#pag').value,
    readCheck,
  );
  console.log('anadido');
});

function displayBookInfo(booksArray) {
  document.getElementById('library').replaceChildren();

  for (const book in booksArray) {
    
    if (Object.hasOwnProperty.call(booksArray, book)) {
      
      const element = booksArray[book];      
      
      let card = document.createElement('div');
      document.getElementById('library').appendChild(card).classList.add('card');
      
      let titleC = document.createElement('h3');
      document.getElementById('library').lastElementChild
      .appendChild(titleC).classList.add('book-title');
      titleC.innerText = 'Title:'+element.title;

      let authorC =  document.createElement('h4');
      document.getElementById('library').lastElementChild.appendChild(authorC).classList.add('book-author');
      authorC.innerText = 'Author: '+element.author;
      
      let yearC = document.createElement('p');
      document.getElementById('library').lastElementChild.appendChild(yearC).classList.add('book-year');
      yearC.innerText = 'Year: '+element.year;
            
      let pagesC = document.createElement('p');
      document.getElementById('library').lastElementChild.appendChild(pagesC).classList.add('book-pages');
      pagesC.innerText = 'Pages: '+element.pages;
            
      let readC = document.createElement('button');
      document.getElementById('library').lastElementChild.appendChild(readC).classList.add('book-read');
    
      if (element.read === false){    
      readC.innerText = 'Not Read';
    
    }

    else if (element.read === true) {
      readC.innerText = 'Read';
    }
          
    let removeBtn = document.createElement('button');
    document.getElementById('library').lastElementChild.appendChild(removeBtn).classList.add('remove');
    removeBtn.innerText = 'remove';
    
    removeBtn.addEventListener('click',(e) => {
      myLibrary.splice(book,1);
      let childNode = e.target;
      childNode.parentElement.remove();
    });
    }
  }
}

const showButton = document.querySelector('#show-btn');
showButton.addEventListener('click', () => displayBookInfo(myLibrary));