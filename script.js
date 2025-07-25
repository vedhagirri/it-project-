function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showCategory(type) {
  const data = {
    fruits: ["Mango", "Banana", "Apple", "Guava"],
    vegetables: ["Carrot", "Potato", "Tomato", "Onion"],
    spinach: ["Palak", "Methi", "Amaranth"],
    seeds: ["Tomato Seeds", "Carrot Seeds", "Spinach Seeds"]
  };
  const list = data[type].map(item => `<p>${item}</p>`).join('');
  document.getElementById("categoryDisplay").innerHTML = list;
}

function searchProduct() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const items = {
    apple: { name: "apple ", price: "₹120", img: "image/apple.jpg" },
    mango: { name: "Mango", price: "₹100", img: "image/mango.jpg" },
    banana: { name: "Banana", price: "₹50", img: "image/banana.jpg" },
    custard_apple: { name: "custard apple", price: "₹50", img: "image/custrad apple.jpg" },
    guava : { name: "guava", price: "₹80", img: "image/guava.jpg" },
    jack_fruit : { name: "jack fruit", price: "₹50", img: "image/jack fruit.jpg" },
    fig : { name: "fig", price: "₹70", img: "image/fig.jpg" },
    green_grapes: { name: "green grapes", price: "₹80", img: "image/green grapes.jpg" },
    purple_grapes : { name: "purple grapes", price: "₹80", img: "image/purple grapes.jpg" },
    small_amula: { name: "small amula", price: "₹40", img: "image/small amala.jpg" },
    gooseberry : { name: "gooseberry", price: "₹50", img: "image/gooseberry.jpg" },
    dargon_fruit : { name: "dargon fruit", price: "₹150", img: "image/dragon fruit.jpg" },
    jamun : { name: "jamun", price: "₹80", img: "image/jamun.jpg" },
    sapote: { name: "sapote", price: "₹40", img: "image/sapote.jpg" },
    watermelon : { name: "watermelon", price: "₹20", img: "image/watermelon.jpg" },


    tomato: { name: "Tomato", price: "₹40", img: "image/tomato.jpg" },
    "tomato seeds": { name: "Tomato Seeds", price: "₹20", img: "image/tomato-seeds.jpg" }
  };
  const p = items[value];
  if (p) {
    document.getElementById("searchResult").innerHTML = `
      <img src="${p.img}" width="200" height="100" />
      <p>${p.name} - ${p.price}</p>
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
      <button onclick="placeOrder('${p.name}')">Buy Now</button>
    `;
  } else {
    document.getElementById("searchResult").innerText = "Item not found.";
  }
}

let cart = [];
let orders = [];

function addToCart(item) {
  cart.push(item);
  document.getElementById("cartItems").innerHTML = cart.map(i => `<p>${i}</p>`).join('');
}

function placeOrder(item) {
  const delivery = new Date(Date.now() + 4 * 86400000).toDateString();
  orders.push({ item, delivery });
  document.getElementById("orderList").innerHTML = orders.map(o => `<p>${o.item} - Delivery by ${o.delivery}</p>`).join('');
  showPage('orders');
}

function signupUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch('signup.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("signupMessage").innerText = msg;
    e.target.reset();
  });
}

function loginUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch('login.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("loginMessage").innerText = msg;
    e.target.reset();
  });
}

function farmerLogin(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch('farmer_login.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("farmerMessage").innerText = msg;
    e.target.reset();
  });
}

function makePayment(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch('payment.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(msg => {
    const msgBox = document.getElementById("paymentMsg");
    msgBox.innerText = msg;
    msgBox.className = msg.includes("received") ? "success" : "error";
    e.target.reset();
  })
  .catch(() => {
    document.getElementById("paymentMsg").innerText = "Payment failed.";
    document.getElementById("paymentMsg").className = "error";
  });
}
