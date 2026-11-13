// VER CARACTERÍSTICAS

const products = [
{
id:1,name:"Sensor ultrasónico HC-SR04",
cat:"Sensores",price:35,icon:"📡",
img:"Img/Screenshot_20261109_213941_ChatGPT.jpg",
description:"Sensor electrónico que utiliza ondas ultrasónicas para medir distancias.",
features:"• Alimentación: 5V.\n• Medición sin contacto.\n• Cuatro pines de conexión.",
usage:"Sirve para detectar obstáculos y medir distancias. Se utiliza en robots que evitan objetos."
},
{
id:2,name:"Arduino UNO",
cat:"Microcontroladores",price:95,icon:"💻",
img:"Img/Screenshot_20261109_213952_ChatGPT.jpg",
description:"Placa electrónica programable basada en el microcontrolador ATmega328P.",
features:"• 14 pines digitales.\n• 6 entradas analógicas.\n• Conexión USB.\n• Compatible con Arduino IDE.",
usage:"Sirve para crear proyectos de robótica, automatización y control de sensores, luces y motores."
},
{
id:3,name:"Motor DC",
cat:"Motores",price:28,icon:"⚙️",
img:"Img/Screenshot_20261109_214018_ChatGPT.jpg",
description:"Motor eléctrico que transforma energía eléctrica en movimiento giratorio.",
features:"• Corriente continua.\n• Movimiento rotativo.\n• Velocidad según voltaje y modelo.",
usage:"Sirve para dar movimiento a pequeños vehículos, robots y mecanismos electrónicos."
},
{
id:4,name:"Servo SG90",
cat:"Actuadores",price:32,icon:"🔧",
img:"Img/Screenshot_20261109_214109_ChatGPT.jpg",
description:"Servomotor compacto que permite controlar posiciones angulares.",
features:"• Alimentación aproximada de 4.8 a 6V.\n• Control PWM.\n• Giro aproximado de 180°.",
usage:"Sirve para mover brazos robóticos, compuertas y mecanismos que necesitan posiciones controladas."
},
{
id:5,name:"Kit Robótica Educativa",
cat:"Kits",price:180,icon:"🤖",
img:"Img/Screenshot_20261109_214127_ChatGPT.jpg",
description:"Conjunto de componentes para aprender electrónica y robótica.",
features:"• Componentes electrónicos.\n• Material educativo.\n• Ideal para prácticas.",
usage:"Sirve para construir robots y aprender programación, electrónica y automatización."
},
{
id:6,name:"Protoboard",
cat:"Otros",price:25,icon:"🔌",
img:"Img/Screenshot_20261109_214138_ChatGPT.jpg",
description:"Placa reutilizable para montar circuitos electrónicos sin soldadura.",
features:"• Conexiones reutilizables.\n• Diferentes tamaños.\n• Fácil montaje.",
usage:"Sirve para realizar pruebas de circuitos electrónicos antes de construirlos definitivamente."
},
{
id:7,name:"Arduino Nano ATmega328P",
cat:"Microcontroladores",price:50,icon:"🔵",
img:"Img/Screenshot_20261109_214200_ChatGPT.jpg",
description:"Placa de desarrollo compacta basada en ATmega328P.",
features:"• Microcontrolador ATmega328P.\n• Pines digitales y analógicos.\n• Tamaño compacto.",
usage:"Sirve para controlar sensores, motores y circuitos en proyectos pequeños de robótica."
},
{
id:8,name:"Switch con fusible 15A",
cat:"Interruptores y protección",price:15,icon:"🔘",
img:"Img/Screenshot_20261109_214209_ChatGPT.jpg",
description:"Interruptor eléctrico con portafusible integrado.",
features:"• Corriente nominal indicada: 15A.\n• Tensión indicada: 110/220V AC.\n• Portafusible incorporado.",
usage:"Sirve para encender y apagar equipos eléctricos y alojar un fusible de protección. Debe utilizarse respetando las especificaciones del fabricante."
},
{
id:9,name:"Diodo Zener 1N4740A 10V",
cat:"Componentes electrónicos",price:2,icon:"⚡",
img:"Img/Screenshot_20261109_214240_ChatGPT.jpg",
description:"Componente semiconductor utilizado para regular tensión.",
features:"• Tensión Zener: 10V.\n• Potencia nominal: 1W.\n• Encapsulado axial.",
usage:"Sirve para estabilizar voltajes en circuitos electrónicos y proteger determinadas etapas de alimentación."
},
{
id:10,name:"Módulo Bluetooth HM-10",
cat:"Comunicación",price:45,icon:"📶",
img:"Img/Screenshot_20261109_214250_ChatGPT.jpg",
description:"Módulo de comunicación inalámbrica Bluetooth Low Energy.",
features:"• Tecnología BLE.\n• Comunicación serial UART.\n• Conexión inalámbrica.",
usage:"Sirve para comunicar proyectos Arduino con celulares y otros dispositivos compatibles con Bluetooth BLE."
},
{
id:11,name:"Servomotor DC",
cat:"Actuadores",price:60,icon:"⚙️",
img:"Img/Screenshot_20261109_214324_ChatGPT.jpg",
description:"Actuador electromecánico que produce movimiento controlado.",
features:"• Alimentación DC según modelo.\n• Movimiento mecánico.\n• Diferentes tamaños y aplicaciones.",
usage:"Sirve para realizar movimientos controlados en mecanismos y sistemas de automatización."
},
{
id:12,name:"LED 5MM",
cat:"Componentes electrónicos",price:1,icon:"💡",
img:"Img/Screenshot_20261109_214338_ChatGPT.jpg",
description:"Diodo emisor de luz de tamaño compacto.",
features:"• Diámetro de 5mm.\n• Diferentes colores.\n• Tiene polaridad positiva y negativa.",
usage:"Sirve para indicar estados de funcionamiento, crear señales luminosas y realizar proyectos electrónicos."
}
];


let cart = [];
let favorites = [];
let currentList = products;

// MOSTRAR PRODUCTOS
function render(lista = products) {
  currentList = lista;

  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (lista.length === 0) {
    grid.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  grid.innerHTML = lista.map(p => `
    <article class="product">
      <div class="pic">
        <span class="fallback">${p.icon}</span>
        <img src="${p.img}" alt="${p.name}"
          style="width:100%;height:100%;object-fit:contain"
          onerror="this.style.display='none'">
      </div>

      <h3>${p.name}</h3>
      <p class="cat">${p.cat}</p>
      <p class="price">Bs ${p.price}</p>

      <div class="actions">
        <button onclick="showProduct(${p.id})">Ver más</button>
        <button class="heart"
          onclick="toggleFavorite(${p.id})">
          ${favorites.includes(p.id) ? "❤️" : "♡"}
        </button>
      </div>

      <div class="actions">
        <button onclick="addCart(${p.id})">
          🛒 Agregar
        </button>
      </div>
    </article>
  `).join("");
}

// VER CARACTERÍSTICAS
function showProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById("modalBox").innerHTML = `
    <h2>${p.icon} ${p.name}</h2>

    <img src="${p.img}" alt="${p.name}"
      style="width:100%;height:180px;object-fit:contain">

    <p>${p.description}</p>

    <h3>Características</h3>
    <p style="white-space:pre-line">${p.features}</p>

    <h3>¿Para qué sirve?</h3>
    <p>${p.usage}</p>

    <h3 style="color:#3020c9;margin-top:15px">
      Precio: Bs ${p.price}
    </h3>

    <button onclick="addCart(${p.id});closeModal()">
      🛒 Agregar al carrito
    </button>

    <button onclick="closeModal()">Cerrar</button>
  `;

  openModal();
}

// AGREGAR AL CARRITO
function addCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  cart.push(p);

  document.getElementById("cartCount").textContent =
    cart.length;

  toast("Producto agregado al carrito 🛒");
}

// ELIMINAR DEL CARRITO
function removeCart(index) {
  cart.splice(index, 1);

  document.getElementById("cartCount").textContent =
    cart.length;

  showCart();
}

// MOSTRAR CARRITO
function showCart() {
  const total = cart.reduce((s, p) => s + p.price, 0);

  document.getElementById("modalBox").innerHTML = `
    <h2>🛒 Mi carrito</h2>

    ${cart.length ? cart.map((p, i) => `
      <div class="cart-item">
        <span>${p.icon} ${p.name}<br>
        <b>Bs ${p.price}</b></span>

        <button onclick="removeCart(${i})">
          Eliminar
        </button>
      </div>
    `).join("") : "<p>Tu carrito está vacío.</p>"}

    <h3 style="margin-top:15px">
      Total: Bs ${total}
    </h3>

    <button onclick="checkout()">Finalizar compra</button>
    <button onclick="closeModal()">Cerrar</button>
  `;

  openModal();
}

// FINALIZAR COMPRA (SIMULACIÓN)
function checkout() {
  if (!cart.length) {
    toast("Agrega un producto primero");
    return;
  }

  const total = cart.reduce((s, p) => s + p.price, 0);

  cart = [];

  document.getElementById("cartCount").textContent = 0;

  document.getElementById("modalBox").innerHTML = `
    <h2>✅ Compra registrada</h2>
    <p>Tu compra de demostración fue registrada correctamente.</p>
    <h3>Total: Bs ${total}</h3>
    <button onclick="closeModal()">Aceptar</button>
  `;
}

// FAVORITOS
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(x => x !== id);
    toast("Producto eliminado de favoritos");
  } else {
    favorites.push(id);
    toast("Agregado a favoritos ❤️");
  }

  render(currentList);
}

// MOSTRAR FAVORITOS
function showFavorites() {
  const lista = products.filter(p =>
    favorites.includes(p.id)
  );

  document.getElementById("modalBox").innerHTML = `
    <h2>❤️ Mis favoritos</h2>

    ${lista.length ? lista.map(p => `
      <div class="cart-item">
        <span>${p.icon} ${p.name}<br>Bs ${p.price}</span>
        <button onclick="toggleFavorite(${p.id});showFavorites()">
          Quitar
        </button>
      </div>
    `).join("") : "<p>Aún no tienes productos favoritos.</p>"}

    <button onclick="closeModal()">Cerrar</button>
  `;

  openModal();
}

// PERFIL
function showProfile() {
  document.getElementById("modalBox").innerHTML = `
    <h2>👤 Mi perfil</h2>
    <p>Bienvenido a RoboEdu.</p>
    <p style="margin-top:10px">
      Aquí podrás gestionar tus datos, pedidos y favoritos.
    </p>
    <button onclick="closeModal()">Cerrar</button>
  `;

  openModal();
}

// FILTRAR CATEGORÍAS
function filterCategory(cat) {
  document.getElementById("searchInput").value = "";

  render(products.filter(p => p.cat === cat));

  document.getElementById("productos").scrollIntoView({
    behavior: "smooth"
  });
}

// MOSTRAR TODAS LAS CATEGORÍAS
function showAllCategories() {
  const categorias = [...new Set(products.map(p => p.cat))];

  document.getElementById("modalBox").innerHTML = `
    <h2>📂 Todas las categorías</h2>

    ${categorias.map(cat => `
      <button onclick="filterCategory('${cat}');closeModal()">
        ${cat}
      </button>
    `).join("")}

    <button onclick="closeModal()">Cerrar</button>
  `;

  openModal();
}

// VER TODOS LOS PRODUCTOS
function showAllProducts() {
  document.getElementById("searchInput").value = "";

  render(products);

  document.getElementById("productos").scrollIntoView({
    behavior: "smooth"
  });
}

// BUSCADOR
function searchProducts() {
  const q = document.getElementById("searchInput")
    .value.toLowerCase().trim();

  const resultado = products.filter(p =>
    (p.name + " " + p.cat + " " +
     p.description + " " + p.usage)
    .toLowerCase().includes(q)
  );

  render(resultado);
}

// NAVEGACIÓN
function goTo(id) {
  const elemento = document.getElementById(id);

  if (elemento) {
    elemento.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// MENÚ
function toggleMenu() {
  document.getElementById("sideMenu")
    .classList.toggle("open");
}

// MODALES
function openModal() {
  document.getElementById("modal")
    .classList.add("show");
}

function closeModal(e) {
  if (!e || e.target.id === "modal") {
    document.getElementById("modal")
      .classList.remove("show");
  }
}

// NOTIFICACIONES
function toast(msg) {
  const t = document.createElement("div");

  t.textContent = msg;

  t.style.cssText = `
    position:fixed;
    z-index:100;
    bottom:90px;
    left:50%;
    transform:translateX(-50%);
    background:#222;
    color:#fff;
    padding:12px 18px;
    border-radius:20px;
    font-size:14px;
    max-width:90%;
    text-align:center;
  `;

  document.body.appendChild(t);

  setTimeout(() => t.remove(), 1800);
}

// INICIAR ROBOEDU
render();
