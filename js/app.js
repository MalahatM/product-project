const searchInput = document.getElementById('search-input'); // Input field for product name search
const products = document.querySelectorAll('.product-item'); // All product elements
const buttons = document.querySelectorAll('.filter'); // Filter buttons
const priceInput = document.getElementById('search-price').querySelector('input'); // Input field for price search
const priceButton = document.getElementById('search-price').querySelector('button'); // Button for price search

// Function to handle changing the class of filter buttons
const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add('selected'); // Add 'selected' class to the clicked button
    } else {
      button.classList.remove('selected'); // Remove 'selected' class from other buttons
    }
  });
};

// Function to handle search by product name
const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim(); // Get and sanitize user input for product name

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase(); // Get product name
    if (productName.includes(searchValue)) {
      product.style.display = 'block'; // Show product if it matches the search
    } else {
      product.style.display = 'none'; // Hide product if it doesn't match
    }
  });
};

// Function to handle filtering by category
const filterHandler = (event) => {
  const filter = event.target.dataset.filter; // Get the selected filter from the clicked button
  changeClass(filter); // Update button classes

  products.forEach((product) => {
    const category = product.dataset.category.toLowerCase(); // Get product category
    if (filter === 'all') {
      product.style.display = 'block'; // Show all products if 'all' is selected
    } else {
      filter === category
        ? (product.style.display = 'block') // Show product if its category matches the filter
        : (product.style.display = 'none'); // Hide product otherwise
    }
  });
};

// Function to handle search by product price
const searchPriceHandler = () => {
  const searchPrice = +priceInput.value; // Get the user input for price and convert to number

  products.forEach((product) => {
    const productPrice = +product.children[2].innerText.replace('$', ''); // Extract price from product element and convert to number
    if (!searchPrice) {
      product.style.display = 'block'; // Show all products if no price is entered
    } else {
      searchPrice === productPrice
        ? (product.style.display = 'block') // Show product if its price matches the entered price
        : (product.style.display = 'none'); // Hide product otherwise
    }
  });
};



window.addEventListener('load',()=>{
	
	// Add event listeners to filter buttons
buttons.forEach((button) => {
	button.addEventListener('click', filterHandler);
  });
  
  // Add event listener for product name search
  searchInput.addEventListener('keyup', searchHandler);
  
  // Add event listener for product price search
  priceButton.addEventListener('click', searchPriceHandler);
});