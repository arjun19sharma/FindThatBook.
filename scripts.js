// Simulated database of books
const books = [
    {
        title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
        author: 'Ashlee Vance',
        genre: 'Biography',
        description: 'This book by Ashlee Vance provides an in-depth look into the life and mind of Elon Musk, exploring his ambitious ventures with Tesla and SpaceX and his vision to revolutionize the future.',
        detailedDescription: 'Dive deeper into Elon Musk\'s incredible journey. This book explores the challenges and triumphs Musk faced while founding and leading companies like Tesla and SpaceX, detailing his vision for a futuristic world powered by sustainable energy and interplanetary travel.',
        image: 'images/elonmuskbook.jpg'
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-Improvement',
        description: 'A guide to building good habits and breaking bad ones.',
        image: 'images/atomichabits.jpg'
    },
    {
        title: 'How To Win Friends And Influence People',
        author: ' Dale Carnegie',
        genre: 'Self-Improvement',
        description: 'guide to mastering the art of interpersonal skills and winning others over with charisma and influence.',
        image: 'images/howtowinfriendsandinfluencepeople.jpg'
    },
    {
        title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action',
        author: 'Simon Sinek',
        genre: 'Self-Improvement',
        description: 'reveals how leaders can inspire action and drive success by focusing on the fundamental purpose behind their goals.',
        image: 'images/StartwithWhy.jpg'
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        description: ' A sprawling epic of political intrigue and survival on the desert planet Arrakis, where a young noble must navigate a world of power and prophecy.',
        image: 'images/dune.jpg'
    },
    {
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        genre: 'Thriller',
        description: 'A gripping psychological thriller that delves into the complexities of a marriage gone awry and the dark secrets hidden beneath its surface.',
        image: 'images/gonegirl.jpg'
    },
    // Add more book objects here
];

// Simulated database of recommended books
const recommendedBooks = [
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-Improvement',
        description: 'A guide to building good habits and breaking bad ones.',
        image: 'images/atomichabits.jpg'
    },
    {
        title: 'How To Win Friends And Influence People',
        author: ' Dale Carnegie',
        genre: 'Self-Improvement',
        description: 'guide to mastering the art of interpersonal skills and winning others over with charisma and influence.',
        image: 'images/howtowinfriendsandinfluencepeople.jpg'
    },
    {
        title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action',
        author: 'Simon Sinek',
        genre: 'Self-Improvement',
        description: 'reveals how leaders can inspire action and drive success by focusing on the fundamental purpose behind their goals.',
        image: 'images/StartwithWhy.jpg'
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        description: ' A sprawling epic of political intrigue and survival on the desert planet Arrakis, where a young noble must navigate a world of power and prophecy.',
        image: 'images/dune.jpg'
    },
    {
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        genre: 'Thriller',
        description: 'A gripping psychological thriller that delves into the complexities of a marriage gone awry and the dark secrets hidden beneath its surface.',
        detailedDescription: 'Gone Girl is a suspenseful thriller that explores the dark sides of marriage and deception. It tells the story of Nick and Amy Dunne, whose seemingly perfect marriage unravels in the wake of Amy\'s disappearance, revealing secrets and lies.',
        image: 'images/gonegirl.jpg'
    },
    // Add more recommended book objects as needed
];

// Function to load all books and recommended books initially
window.onload = () => {
    displayBooks(books);
    displayRecommendedBooks(); // Display recommended books
}

// Function to display books based on a given array
function displayBooks(bookArray) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    bookArray.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;

        const bookInfo = document.createElement('div');
        bookInfo.className = 'book-info';
        bookInfo.innerHTML = `<h3>${book.title}</h3><p>${book.description}</p>`;

        bookCard.appendChild(bookImage);
        bookCard.appendChild(bookInfo);
        resultsDiv.appendChild(bookCard);

        // Add click event for modal interaction
        bookCard.addEventListener('click', () => openBookModal(book));
    });
}

// Function to display recommended books
function displayRecommendedBooks() {
    const recommendedResultsDiv = document.getElementById('recommended-results');
    recommendedResultsDiv.innerHTML = ''; // Clear previous results

    recommendedBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;

        const bookInfo = document.createElement('div');
        bookInfo.className = 'book-info';
        bookInfo.innerHTML = `<h3>${book.title}</h3><p>${book.description}</p>`;

        bookCard.appendChild(bookImage);
        bookCard.appendChild(bookInfo);
        recommendedResultsDiv.appendChild(bookCard);

        // Add click event for modal interaction
        bookCard.addEventListener('click', () => openBookModal(book));
    });
}

// Function to search books
function searchBooks() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.genre.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query)
    );

    displayBooks(filteredBooks);

    // Scroll to the books section
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Function to filter books by category
function filterByCategory() {
    const category = document.getElementById('category-select').value;
    if (category === 'all') {
        displayBooks(books);
    } else {
        const filteredBooks = books.filter(book => book.genre === category);
        displayBooks(filteredBooks);
    }

    // Scroll to the books section
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Function to open book details modal
function openBookModal(book) {
    document.getElementById('modal-book-title').innerText = book.title;
    document.getElementById('modal-book-author').innerText = `Author: ${book.author}`;
    document.getElementById('modal-book-description').innerText = book.description;
    document.getElementById('modal-book-image').innerHTML = `<img src="${book.image}" alt="${book.title}" style="width: 100%;">`;

    // Add event listener for adding to favorites
    document.getElementById('add-to-favorites').onclick = () => addToFavorites(book);

    // Show the modal
    document.getElementById('book-modal').style.display = 'block';
}

// Function to close the book details modal
function closeBookModal() {
    document.getElementById('book-modal').style.display = 'none';
}

// Function to add a book to favorites
function addToFavorites(book) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(book);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`"${book.title}" has been added to your favorites!`);
}

// Event listener for closing the modal
document.querySelector('.modal .close').addEventListener('click', closeBookModal);

// Initialize favorite books from local storage
let favoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks")) || [];

// Function to add a book to favorites
function addToFavorites(book) {
  // Check if the book is already in favorites
  if (!favoriteBooks.some(favBook => favBook.id === book.id)) {
    favoriteBooks.push(book);
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
    alert(`${book.title} has been added to your favorites!`);
    displayFavorites(); // Update favorites section
  } else {
    alert(`${book.title} is already in your favorites.`);
  }
}

// Function to display favorite books
function displayFavorites() {
  const favoritesContainer = document.getElementById("favorite-books-list");
  favoritesContainer.innerHTML = ""; // Clear previous content

  if (favoriteBooks.length === 0) {
    favoritesContainer.innerHTML = "<p>No favorite books yet.</p>";
    return;
  }

  favoriteBooks.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="book-image">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    `;
    favoritesContainer.appendChild(bookCard);
  });
}

// Function to remove a book from favorites
function removeFromFavorites(bookId) {
  favoriteBooks = favoriteBooks.filter(book => book.id !== bookId);
  localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
  displayFavorites(); // Update favorites section
}

// Function to clear all favorites
function clearFavorites() {
  favoriteBooks = [];
  localStorage.removeItem("favoriteBooks");
  displayFavorites(); // Update favorites section
}

// Attach clearFavorites function to the button
document.getElementById("clear-favorites").addEventListener("click", clearFavorites);

// Call displayFavorites on page load to display any saved favorite books
document.addEventListener("DOMContentLoaded", displayFavorites);

// Get the elements for About Us modal
const aboutUsBtn = document.getElementById('aboutUsBtn');
const aboutUsContainer = document.getElementById('aboutUsContainer');
const closeAboutUsBtn = document.getElementById('closeAboutUsBtn');

// When the user clicks on the About Us button, show the container
aboutUsBtn.addEventListener('click', () => {
  aboutUsContainer.style.display = 'block';
});

// When the user clicks on the close button (x), hide the container
closeAboutUsBtn.addEventListener('click', () => {
  aboutUsContainer.style.display = 'none';
});

// Optional: Close the container if the user clicks anywhere outside of it
window.addEventListener('click', (event) => {
  if (event.target === aboutUsContainer) {
    aboutUsContainer.style.display = 'none';
  }
});

// Get the elements for Contact Me modal
const contactMeBtn = document.getElementById('contactMeBtn');
const contactMeContainer = document.getElementById('contactMeContainer');
const closeContactMeBtn = document.getElementById('closeContactMeBtn');

// When the user clicks on the Contact Me button, show the container
contactMeBtn.addEventListener('click', () => {
  contactMeContainer.style.display = 'block';
});

// When the user clicks on the close button (x), hide the container
closeContactMeBtn.addEventListener('click', () => {
  contactMeContainer.style.display = 'none';
});

// Optional: Close the container if the user clicks anywhere outside of it
window.addEventListener('click', (event) => {
  if (event.target === contactMeContainer) {
    contactMeContainer.style.display = 'none';
  }
});

// Get the elements for Privacy Policy modal
const privacyPolicyBtn = document.getElementById('privacyPolicyBtn');
const privacyPolicyContainer = document.getElementById('privacyPolicyContainer');
const closePrivacyPolicyBtn = document.getElementById('closePrivacyPolicyBtn');

// When the user clicks on the Privacy Policy button, show the container
privacyPolicyBtn.addEventListener('click', () => {
  privacyPolicyContainer.style.display = 'block';
});

// When the user clicks on the close button (x), hide the container
closePrivacyPolicyBtn.addEventListener('click', () => {
  privacyPolicyContainer.style.display = 'none';
});

// Optional: Close the container if the user clicks anywhere outside of it
window.addEventListener('click', (event) => {
  if (event.target === privacyPolicyContainer) {
    privacyPolicyContainer.style.display = 'none';
  }
});
