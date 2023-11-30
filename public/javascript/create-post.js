const $bookform = document.querySelector('#book-form');
const bookContent = document.getElementById("bookContent"); 


const handleBookFormSubmit = event => {
  event.preventDefault();
  console.log("hi"); 

  const id = $bookform.querySelector('[name="id"]').value;
  const title = $bookform.querySelector('[name="title"]').value;
  const date = $bookform.querySelector('[name="date"]').value;
  const location = $bookform.querySelector('[name="location"]').value;
  const description = $bookform.querySelector('[name="description"]').value;


 
  const bookObject = { id, title, date, location, description};

  fetch('/api/books', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookObject)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding an book!');
    });

};


$bookform.addEventListener('submit', handleBookFormSubmit);
