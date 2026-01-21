//1 number count 1ver
const didinimas = document.getElementById("didinimas");
const action = document.getElementById("action");
const countSpan = document.getElementById("count");

let numBer = 0;

didinimas.addEventListener("click", function () {
  if (numBer >= 0) {
    numBer += 1;
    countSpan.textContent = numBer;
  }
  if (numBer < 10) {
    action.textContent = "Pradžia";
    action.style.background = "rgb(255, 255, 255)";
  } else if (numBer < 20) {
    action.textContent = "10! GREIČIAU!";
    action.style.background = "rgb(255,164,0)";
  } else if (numBer < 30) {
    action.textContent = "20! DAR GREIČIAU!";
    action.style.background = "rgb(254,80,0)";
  } else if (numBer < 40) {
    action.textContent = "30! DAR GREEEIČIAU!";
    action.style.background = "rgb(225,6,0)";
  } else {
    action.textContent = "40+ PRALAIMEJAI!";
    action.style.background = "rgb(205,0,26)";
  }
});

//2 even and odd numbers
const numeris = document.getElementById("numeris");
const lygusNeLygus = document.getElementById("lygusNelygus");
const iveskSkaiciu = document.getElementById("iveskSkaiciu");

iveskSkaiciu.addEventListener("click", function () {
  const value = Number(numeris.value);
  if (value % 2 === 0) {
    lygusNeLygus.textContent = `${value} Lyginis skaičius`;
    lygusNeLygus.style.background = "rgb(0,135,62)";
  } else {
    lygusNeLygus.textContent = `${value} Nelyginis skaičius`;
    lygusNeLygus.style.background = "rgb(205,0,26)";
  }
});

//3 number count 2ver
const count2 = document.getElementById("count2");
const pirmyn = document.getElementById("pirmyn");
const atgal = document.getElementById("atgal");

let pliusMinus = 1;

pirmyn.addEventListener("click", () => {
  if (pliusMinus === 5) {
    pliusMinus = 1;
    count2.textContent = pliusMinus;
  } else {
    pliusMinus += 1;
    count2.textContent = pliusMinus;
  }
});

atgal.addEventListener("click", () => {
  if (pliusMinus === 1) {
    pliusMinus = 5;
    count2.textContent = pliusMinus;
  } else {
    pliusMinus -= 1;
    count2.textContent = pliusMinus;
  }
});

//4 simple BMI calc
const skaiciuoti = document.getElementById("skaiciuoti");
const svorisInput = document.getElementById("svorisInput");
const ugisInput = document.getElementById("ugisInput");
const rezultatas = document.getElementById("rezultatas");

skaiciuoti.addEventListener("click", function () {
  const ugisCm = ugisInput.value;
  const svorisKg = svorisInput.value;

  if (!ugisCm || !svorisKg) {
    rezultatas.textContent = `Pradziai ivesk kazka!`;
    rezultatas.style.background = "red";
    return;
  }

  const ugisM = ugisCm / 100;
  const bmi = (svorisKg / (ugisM * ugisM)).toFixed(1);

  if (bmi < 18.5) {
    rezultatas.textContent = `Jusu BMI ${bmi} Sveriate per mazai`;
    rezultatas.style.background = "yelllow";
  } else if (bmi < 25) {
    rezultatas.textContent = `Jusu BMI ${bmi} Sveriate gerai`;
    rezultatas.style.background = "green";
  } else {
    rezultatas.textContent = `Jusu BMI ${bmi} Nutukimas`;
    rezultatas.style.background = "red";
  }
});

//5 text zoom
const visiTekstai = document.querySelectorAll(".didelisTekstas");
const btn = document.getElementById("didinimoBtn");

let isBig = false;

btn.addEventListener("click", () => {
  visiTekstai.forEach((el) => {
    el.style.fontSize = isBig ? "1rem" : "2rem";
  });
  isBig = !isBig;
});

//7 dark/light mode
const darkMode = document.getElementById("dark-mode");
const purpleMode = document.getElementById("purple-mode");
const modeChanger = document.getElementById("modeChanger");
const toggle = document.getElementById("themeToggle");

modeChanger.addEventListener("click", function () {
  const element = document.body;
  element.classList.toggle("dark-mode");
});

//6 font style changer
const fontSizeChanger = document.getElementById("fontSizeChanger");
const normalBtn = document.getElementById("normalBtn");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const text = document.getElementById("text");

fontSizeChanger.addEventListener("input", function () {
  text.style.fontSize = fontSizeChanger.value + "px";
});

function resetButtonBackground() {
  normalBtn.style.background =
    "linear-gradient(135deg, rgb(95, 156, 255), rgb(122, 108, 255))";
  boldBtn.style.background =
    "linear-gradient(135deg, rgb(95, 156, 255), rgb(122, 108, 255))";
  italicBtn.style.background =
    "linear-gradient(135deg, rgb(95, 156, 255), rgb(122, 108, 255))";
}

normalBtn.addEventListener("click", function () {
  resetButtonBackground();
  text.style.fontWeight = normalBtn.value + "normal";
  text.style.fontStyle = normalBtn.value + "normal";
  normalBtn.style.background = "rgb(95, 156, 255)";
});

boldBtn.addEventListener("click", function () {
  resetButtonBackground();
  text.style.fontWeight = boldBtn.value + "bold";
  text.style.fontStyle = boldBtn.value + "normal";
  boldBtn.style.background = "rgb(95, 156, 255)";
});

italicBtn.addEventListener("click", function () {
  resetButtonBackground();
  text.style.fontWeight = italicBtn.value + "normal";
  text.style.fontStyle = italicBtn.value + "italic";
  italicBtn.style.background = "rgb(95, 156, 255)";
});

// add / remove
const bulb = document.getElementById("bulb");
const bulbBtn = document.getElementById("bulbBtn");

let isOn = false;

bulbBtn.addEventListener("click", function () {
  if (isOn === false) {
    bulb.classList.add("on");
    isOn = true;
  } else {
    bulb.classList.remove("on");
    isOn = false;
  }
});

//data create
cars = [
  {
    brand: "Audi",
    image:
      "https://www.topgear.com/sites/default/files/news-listicle/image/2023/04/a386eRTT3uQ9HEG9kENzsqHyw4bakkaMdpm632e7.jpg",
    model: "A6",
    age: 2018,
  },
  {
    brand: "Tesla",
    image:
      "https://images.pexels.com/photos/12705093/pexels-photo-12705093.jpeg",
    model: "Model 3",
    age: 2011,
  },
  {
    brand: "BMW",
    image: "https://images.wsj.net/im-943781?width=1280&size=1.501",
    model: "3",
    age: 2016,
  },
  {
    brand: "Toyota",
    image:
      "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/FCEF/production/_86115746_86115745.jpg",
    model: "Colora",
    age: 2022,
  },
];

const carsCont = document.getElementById("cars-cont");
const currentYear = new Date().getFullYear();

cars.forEach((car) => {
  const carAge = currentYear - car.age;

  const card = document.createElement("div");
  card.classList.add("car");

  card.innerHTML = `
    <h3>${car.brand}</h3>
    <img src="${car.image}" alt="${car.brand}">
    <p>Model: ${car.model}</p>
    <p>Year: ${car.age}</p>
    <p>Jūsų automobiliui ${carAge} metų</p>
    <button>select</button>
  `;

  const carsBtn = card.querySelector("button");

  carsBtn.addEventListener("click", () => {
    alert(car.brand);

    const isActive = card.classList.toggle("active");
    carsBtn.textContent = isActive ? "selected" : "select";
  });

  carsCont.appendChild(card);
});

//products
let products = [
  {
    id: 1,
    name: "Sim kortelė",
    price: 2.0,
    quantity: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXxhD1FUmqL2Cz5VIeAmZ13OLPLzhHtGNNQ&s",
  },
  {
    id: 2,
    name: "Telefonas",
    price: 1200.0,
    quantity: 1,
    image:
      "https://toppng.com/uploads/preview/cell-phone-11549499222fnwoaxk7rl.png",
  },
  {
    id: 3,
    name: "SD kortelė",
    price: 35.0,
    quantity: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoZEsDLRRR0zUerd4zd2Mr-_nBThqe-BMxQ&s",
  },
];

const cartProducts = document.getElementById("cartProducts");
const totalPrice = document.getElementById("totalPrice");

products.forEach((product) => {
  const item = document.createElement("div");
  item.classList.add("cart-item");

  item.innerHTML = `
    <div class="product-info">
      <img src="${product.image}">
      <span>${product.name}</span>
    </div>

    <span>${product.price.toFixed(2)} €</span>

    <div class="quantity">
      <button class="minus">-</button>
      <span class="qty">${product.quantity}</span>
      <button class="plus">+</button>
    </div>

    <div class="total">
      <span class="row-total">
        ${(product.price * product.quantity).toFixed(2)} €
      </span>
    </div>
  `;

  const plusBtn = item.querySelector(".plus");
  const minusBtn = item.querySelector(".minus");
  const qty = item.querySelector(".qty");
  const rowTotal = item.querySelector(".row-total");

  plusBtn.addEventListener("click", () => {
    product.quantity++;
    updateCart();
  });

  minusBtn.addEventListener("click", () => {
    if (product.quantity > 0) {
      product.quantity--;
      updateCart();
    }
  });

  function updateCart() {
    qty.textContent = product.quantity;
    rowTotal.textContent = (product.price * product.quantity).toFixed(2) + " €";
    updateAll();
  }

  cartProducts.appendChild(item);
});

updateAll();

function updateAll() {
  let total = 0;

  products.forEach((product) => {
    total += product.price * product.quantity;
  });

  totalPrice.textContent = total.toFixed(2) + " €";
}

//recipe

const recipes = [
  {
    title: "Vištiena su salotom",
    text: "AŠviežia vištiena su daržovėmis, lengvas, sotus ir sveikas patiekalas.",
    image:
      "https://antmedineslenteles.com/wp-content/uploads/2023/10/italiskos-salotos-su-vistiena1.jpg",
    ingredients: {
      vistiena: { amount: 300, unit: "g." },
      avokado: { amount: 1, unit: "vnt." },
      mocarela: { amount: 150, unit: "g." },
      pomidorai: { amount: 1, unit: "vnt." },
    },
  },
  {
    title: "Tortas su mėlynėm",
    text: "Saldus desertas su minkštu biskvitu ir šviežiomis mėlynėmis.",
    image:
      "https://www.lamaistas.lt/uploads/modules/recipes/without-watermark/18397.jpg",
    ingredients: {
      miltai: { amount: 500, unit: "g." },
      kiausiniai: { amount: 2, unit: "vnt." },
      melynes: { amount: 100, unit: "g." },
      cukrus: { amount: 2, unit: "saukst." },
    },
  },
  {
    title: "Makaronai su mėsa",
    text: "Sotūs makaronai su aromatinga mėsa, greitas ir skanus pasirinkimas.",
    image:
      "https://www.maistomegeja.lt/wp-content/uploads/2022/10/IMG_0948-1724x1024.jpg",
    ingredients: {
      makaronai: { amount: 300, unit: "g." },
      svogunai: { amount: 1, unit: "vnt." },
      farsas: { amount: 300, unit: "g." },
      aliejus: { amount: 1, unit: "saukst." },
    },
  },
];

const recipeCard = document.getElementById("recipeCard");
const rangeInput = document.getElementById("customRange");
const rangeValue = document.getElementById("rangeValue");
const ingredientsList = document.getElementById("ingredientsList");

let activeRecipe = null;

recipes.forEach((recipe) => {
  const card = document.createElement("div");
  card.classList.add("recipe-card");

  card.innerHTML = `
    <div class="recipe-img">
      <img src="${recipe.image}">
      <span class="check">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/500px-Eo_circle_green_checkmark.svg.png">
      </span>
    </div>
    <h3>${recipe.title}</h3>
    <p>${recipe.text}</p>
  `;

  card.addEventListener("click", () => {
    activeRecipe = recipe;
    setActiveCard(card);
    rangeInput.value = 1;
    rangeValue.textContent = 1;
    renderIngredients();
  });

  recipeCard.appendChild(card);
});

function setActiveCard(activeCard) {
  document.querySelectorAll(".recipe-card").forEach((card) => {
    card.classList.remove("active");
  });
  activeCard.classList.add("active");
}

function renderIngredients() {
  ingredientsList.innerHTML = "";

  if (!activeRecipe) return;

  const portions = rangeInput.value;

  for (let z in activeRecipe.ingredients) {
    const ing = activeRecipe.ingredients[z];
    const total = ing.amount * portions;

    const p = document.createElement("p");
    p.textContent = `${ingredientName(z)}: ${total} ${ing.unit}`;

    ingredientsList.appendChild(p);
  }
}

rangeInput.addEventListener("input", () => {
  rangeValue.textContent = rangeInput.value;

  if (activeRecipe) {
    renderIngredients();
  }
});

const ingredientName(z) {
    vistiena: "Vištienos",
    avokado: "Avokado",
    mocarela: "Mocarelos",
    pomidorai: "Pomidorų",
    miltai: "Miltų",
    kiausiniai: "Kiaušinių",
    melynes: "Mėlynių",
    cukrus: "Cukraus",
    makaronai: "Makaronų",
    svogunai: "Svogūnų",
    farsas: "Faršo",
    aliejus: "Aliejaus",
  };

function ingredientName(z) {
  if (ingredientName[z]) {
    return names[z];
  } else {
    return z;
  }
}
