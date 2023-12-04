const $bookform = document.querySelector('#book-form');
const bookContent = document.getElementById("bookContent"); 
const registerBtn = document.getElementById("registerbtn"); 


const printBooks = bookArray => {
  console.log(bookArray); 

  const bookHTML = bookArray.map(({id, title, date, location, description}) => {
    return` 
    <h2> Volunteer Position ID: ${id}</h2>
    <p>
        <p class="bold"> Title:</p>  ${title}<br/>
        <p class="bold"> Description:</p>  ${description}<br/>
        <p class="bold"> Date:</p> ${date}<br/>
        <p class="bold"> Location:</p> ${location}<br/>         
      </p>
    </div>
  </div>`
  });
bookContent.innerHTML = bookHTML.join(''); 
}

const getBooks = (formData = {}) => {
  let queryUrl = '/api/books';

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);

  fetch(queryUrl)
  .then(response => {
    if (!response.ok) {
      return alert('Error: ' + response.statusText);
    }
    return response.json();
  })
  .then(bookData => {
    console.log(bookData);
    printBooks(bookData);
  });
}; 

getBooks();



// $bookform.addEventListener('submit', handleBookFormSubmit);
// registerBtn.addEventListener('submit', handleBookFormSubmit);


