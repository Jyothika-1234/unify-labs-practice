// ================= PRODUCTS =================
const products = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    price: 1499,
    category: "electronics",
    image: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 1999,
    category: "fashion",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 2999,
    category: "home",
    image: "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    name: "Organic Honey",
    price: 499,
    category: "grocery",
    image: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    name: "Smartphone",
    price: 12999,
    category: "electronics",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

// ================= VARIABLES =================
let cart = [];
let filteredProducts = [...products];

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartSidebar = document.getElementById("cartSidebar");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryButtons = document.querySelectorAll(".categories button");

// ================= DISPLAY PRODUCTS =================
function displayProducts(items) {
  productGrid.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button>Add to Cart</button>
    `;

    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
      addToCart(product.id);
    });

    productGrid.appendChild(card);
  });
}

// ================= ADD TO CART =================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartCount();
}

// ================= UPDATE CART COUNT =================
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// ================= FILTER CATEGORY =================
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    if (category === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(p => p.category === category);
    }

    displayProducts(filteredProducts);
  });
});

// ================= SEARCH =================
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const searched = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  displayProducts(searched);
});

// ================= SORT =================
sortSelect.addEventListener("change", () => {
  const value = sortSelect.value;

  if (value === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (value === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(filteredProducts);
});

// ================= CART SIDEBAR =================
document.getElementById("cartBtn").addEventListener("click", () => {
  cartSidebar.classList.add("active");
  renderCart();
});

document.getElementById("closeCartBtn").addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

// ================= RENDER CART =================
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const p = document.createElement("p");
    p.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(p);
  });

  totalAmount.textContent = total;
}

// ================= INITIAL LOAD =================
displayProducts(products);
updateCartCount();