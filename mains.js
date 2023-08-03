// data base

let headphonesTypes = [
  {
    image:
      "images/633aae19a947653d096c3d2f-beats-solo3-wireless-on-ear-headphones-removebg-preview.png",
    namE: "Beats",
    price: 300,
    description: "",
    color: "black",
    quantity: 1,
  },
  {
    image: "images/61O7S27O+jL._AC_SL1468_-removebg-preview.png",
    namE: "Soundcore Anker Life Q20 Hybrid",
    price: 59,
    description: "Wireless Over Ear Bluetooth Headphones",
    color: "black",
    quantity: 1,
  },
  {
    image: "images/51fxSx4avUL._AC_SL1500_-removebg-preview.png",
    namE: "Generic",
    price: 22,
    description: "Wireless Over Ear Headset (Macaron Pink)",
    color: "Macaron Pink",
    quantity: 1,
  },
  {
    image: "images/61DqKs7xflL._SL1500_-removebg-preview.png",
    namE: "Beats ",
    price: 60.9,
    description: "Wireless Noise Cancelling",
    color: "black",
    quantity: 1,
  },
  {
    image:
      "images/pc-studiobudsplus-ivory-case-open-floating-removebg-preview.png",
    namE: "Beats Studio Buds +",
    price: 199.95,
    description: "Powerful sound. Perfect feelings.",
    color: "white",
    quantity: 1,
  },
  {
    image: "images/ur-1036137_1-removebg-preview.png",
    namE: "Urbanista",
    price: 248.0,
    description: "noise Cancelling Bluetooth Ruby Red Wireless",
    color: "red",
    quantity: 1,
  },
  {
    image: "images/sk100571_930x930-removebg-preview.png",
    namE: "AV Link ",
    price: 21.6,
    description: "Wireless earphones tailored for people on-the-go",
    color: "purple",
    quantity: 1,
  },
  {
    image: "images/detail_2000-removebg-preview.png",
    namE: "Lavender",
    price: 27.26,
    description:
      "Extra comfortable over-ear headphones for better noise cancellation.",
    color: "red",
    quantity: 1,
  },
  {
    image:
      "images/pc-fit-pro-tidal-blue-case-closed-floating-removebg-preview.png",
    namE: "Beats Fit Pro",
    price: 199.99,
    description: "True Wireless Noise Cancelling Earbuds",
    color: "blue",
    quantity: 1,
  },
  {
    image: "images/81pOBM-pLZL-removebg-preview.png",
    namE: "Sony ",
    price: 60,
    description: "Wireless Bluetooth On-Ear Headset ",
    color: "white",
    quantity: 1,
  },
  {
    image: "images/Beoplay-EX-Black-Anthracite-Hero.webp",
    namE: "BEOPLAY EX",
    price: 30.75,
    description: "Next-gen wireless earbuds",
    color: "black",
    quantity: 1,
  },
  {
    image: "images/urbanears-pampas-bluetooth-black-removebg-preview.png",
    namE: "UrbanEars",
    price: 135.0,
    description: "Pampas Bluetooth – Black",
    color: "black",
    quantity: 1,
  },
];

// showing the product in the page

let cards = document.getElementsByClassName("cards")[0];
function showProduct() {
  headphonesTypes.forEach(function (value, key) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML += `<figure class='image-product'>
            <img src="${value.image}">
            <i class="fa-solid fa-heart ff" onclick="changeHeartColor(this)"></i>
          </figure>
          <div class="name-price">
            <h4>${value.namE}</h4>
            <h4>$${value.price}</h4>
          </div>
          <p>${value.description}</p>
          <button onclick ="addToCard(${key})" class="dodo">Add to cart</button>
        </div>`;
    cards.appendChild(card);
    let select = document.getElementById("type");
    let option = document.createElement("option");
    option.textContent += `${value.namE}`;
    select.appendChild(option);
  });
}
showProduct();
let cardBuying = document.querySelector(".cart-buying");
let cardBuyingg = [];

function addToCard(key) {
  if (cardBuyingg[key] == null) {
    cardBuyingg[key] = headphonesTypes[key];
    cardBuyingg[key].totalPrice = cardBuyingg[key].price; // Initialize totalPrice
  }
  reloadCard();
}

function addQuantity(key) {
  cardBuyingg[key].quantity++;
  cardBuyingg[key].totalPrice =
    cardBuyingg[key].quantity * cardBuyingg[key].price;
  reloadCard();
}

function minesQuantity(key) {
  if (cardBuyingg[key].quantity > 1) {
    cardBuyingg[key].quantity--;
    cardBuyingg[key].totalPrice =
      cardBuyingg[key].quantity * cardBuyingg[key].price;
  } else {
    delete cardBuyingg[key];
  }
  reloadCard();
}

function reloadCard() {
  let listCards = document.querySelector(".listcards");
  listCards.innerHTML = "";
  let totalPrice = 0;

  cardBuyingg.forEach(function (value, key) {
    if (value != null) {
      let slectedItem = document.createElement("div");
      slectedItem.classList.add("add-card");
      slectedItem.innerHTML += `
        <figure class="add-img">
            <img src="${value.image}">
        </figure>
        <div class="name-price space">
            <h4>${value.namE}</h4>
            <h4>$${value.price}</h4>
        </div>
        <div class="plus-mines">
            <div class="plus"><i class="fa-solid fa-plus" onclick ="addQuantity(${key})"></i></div>
            <div class="mines" ><i class="fa-solid fa-minus" onclick ="minesQuantity(${key})"></i></div>
            <div class="mini-totale"><p>$${value.totalPrice}</p></div>
        </div>
        `;
      listCards.appendChild(slectedItem);
      totalPrice += value.totalPrice;
    }
  });

  let totalePrice = document.querySelector(".totalePrice");
  totalePrice.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

/// showing the product in the add card

let closeCard = document.getElementsByClassName("fa-x");
let openCard = document.getElementsByClassName("fa-cart-plus");
let card = document.querySelector(".cards");
let searchBar = document.querySelector(".search-bar");
let searchIcon = document.querySelector(".fa-magnifying-glass");
let accountLogIn = document.querySelector(".loginNow");

closeCard[0].onclick = function () {
  cardBuying.style.left = "100%";
  card.classList.add("cards");
  card.classList.remove("split");
};

openCard[0].onclick = function () {
  cardBuying.style.left = "calc(100% - 35%)";
  card.classList.add("split");
  card.classList.remove("cards");
};

function changeHeartColor(heartIcon) {
  heartIcon.classList.toggle("pink-heart");
}

function openBarsearch() {
  searchBar.classList.toggle("active");
  accountLogIn.classList.remove("active");
}
function openAccountLog() {
  accountLogIn.classList.toggle("active");
  searchBar.classList.remove("active");
}

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
