const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.product-item');
const buttons = document.querySelectorAll('.filter');

const changeClass = (filter) => {
  buttons.forEach((button) => {
    // بررسی تطابق دکمه با مقدار فیلتر
    if (button.dataset.filter === filter) {
      button.classList.add('selected'); // اضافه کردن کلاس
    } else {
      button.classList.remove('selected'); // حذف کلاس
    }
  });
};

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter; // مقدار data-filter دکمه کلیک‌شده
  changeClass(filter); // تغییر کلاس دکمه‌ها

  products.forEach((product) => {
    const category = product.dataset.category.toLowerCase(); // مقدار data-category محصول

    if (filter === 'all') {
      product.style.display = 'block'; // نمایش همه محصولات
    } else {
      filter === category
        ? (product.style.display = 'block')
        : (product.style.display = 'none');
    }
  });
};

// رویداد جستجو
searchInput.addEventListener('keyup', searchHandler);

// اضافه کردن رویداد کلیک به دکمه‌ها
buttons.forEach((button) => {
  button.addEventListener('click', filterHandler);
});
