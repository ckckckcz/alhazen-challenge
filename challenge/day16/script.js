// Product data
const products = [
  {
    id: 1,
    name: "Acer Swift 3",
    price: 9999000,
    description:
      "Laptop ringan dengan performa tinggi, layar 14 inci Full HD dan baterai tahan lama. Ideal untuk pekerjaan dan penggunaan sehari-hari.",
    features: [
      "Prosesor Intel Core i5-1135G7",
      "RAM 8GB DDR4",
      "SSD 512GB NVMe",
      "Layar 14 inci Full HD IPS",
      "Baterai hingga 16 jam",
      "Berat hanya 1,2 kg",
      "Windows 11 Home",
    ],
    images: [
      "https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/24/548ef113-01dd-4d2b-89c6-65dfcae8d4b7.jpg.webp?ect=4g",
      "https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/24/df66dd9b-3271-4582-bb9f-2c5305b72e66.jpg.webp?ect=4g",
      "https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/24/75a103a3-915a-422a-bf19-970b9e70d861.jpg.webp?ect=4g",
    ],
  },
  {
    id: 2,
    name: "Lenovo IdeaPad Slim 3",
    price: 7499000,
    description:
      "Laptop dengan desain tipis, keyboard nyaman dan performa handal untuk kebutuhan sehari-hari. Cocok untuk pelajar dan profesional.",
    features: [
      "Prosesor AMD Ryzen 5 5500U",
      "RAM 8GB DDR4",
      "SSD 256GB NVMe",
      "Layar 15,6 inci Full HD",
      "Baterai hingga 7 jam",
      "Keyboard numerik lengkap",
      "Windows 11 Home",
    ],
    images: [
      "https://images.tokopedia.net/img/cache/700/attachment/2021/10/13/162839454/162839454_b941d531-da80-40ef-8daa-fe0d8803a5f6.jpg.webp?ect=4g",
      "https://images.tokopedia.net/img/cache/700/attachment/2021/10/13/162839454/162839454_5c9f9413-5317-4d61-bbdb-27d746767981.jpg.webp?ect=4g",
      "https://images.tokopedia.net/img/cache/700/attachment/2021/10/13/162839454/162839454_4a82a698-e162-4697-a2c6-bfb1cd88a791.jpg.webp?ect=4g",
    ],
  },
  {
    id: 3,
    name: "ASUS VivoBook 14",
    price: 8299000,
    description:
      "Laptop dengan layar NanoEdge, performa cepat dan desain modern yang stylish. Sempurna untuk kreator konten dan multitasking.",
    features: [
      "Prosesor Intel Core i5-1135G7",
      "RAM 8GB DDR4",
      "SSD 512GB NVMe",
      "Layar 14 inci Full HD NanoEdge",
      "Baterai hingga 8 jam",
      "Fingerprint reader",
      "Windows 11 Home",
    ],
    images: [
      "https://images.tokopedia.net/img/cache/700/OJWluG/2024/1/4/81525f00-ffc2-47ff-829a-b3682716312f.jpg.webp?ect=4g",
      "https://images.tokopedia.net/img/cache/700/OJWluG/2024/1/4/ed233837-e6d8-4bcd-a146-f2d0cce35533.jpg.webp?ect=4g",
      "https://images.tokopedia.net/img/cache/700/OJWluG/2024/1/8/ceed80cb-cbe0-4109-8a17-1939511e66d8.jpg.webp?ect=4g",
    ],
  },
  {
    id: 4,
    name: "HP Pavilion 15",
    price: 10499000,
    description:
      "Laptop dengan layar 15.6 inci, audio premium dan performa tinggi untuk multitasking. Ideal untuk hiburan dan produktivitas.",
    features: [
      "Prosesor Intel Core i7-1165G7",
      "RAM 16GB DDR4",
      "SSD 512GB NVMe",
      "Layar 15,6 inci Full HD IPS",
      "Audio by Bang & Olufsen",
      "Kartu grafis NVIDIA MX450 2GB",
      "Windows 11 Home",
    ],
    images: [
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/26/bcea6dd7-5b32-44e6-a433-50d2f023c9aa.jpg",
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/26/77479273-36f7-4407-9b90-8205c66672b8.jpg",
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/26/7b6d3cb4-a123-47b2-9637-24c03b76d9e8.jpg",
    ],
  },
]

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || []
updateCartCount()

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector("nav")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  }

  // Product detail page functionality
  const productDetailPage = document.querySelector(".product-detail")
  if (productDetailPage) {
    loadProductDetails()
  }

  // Checkout page functionality
  const checkoutPage = document.querySelector(".checkout")
  if (checkoutPage) {
    loadCheckoutItems()
    setupPaymentToggle()
  }

  // Add page transition effect
  document.body.classList.add("page-loaded")
})

// Product detail page functions
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))

  if (!productId) return

  const product = products.find((p) => p.id === productId)

  if (!product) return

  document.title = `${product.name} - KaitoStore`
  document.getElementById("product-breadcrumb").textContent = product.name
  document.getElementById("product-title").textContent = product.name
  document.getElementById("product-price").textContent = formatRupiah(product.price)
  document.getElementById("product-description").textContent = product.description
  document.getElementById("product-main-image").src = product.images[0]
  document.getElementById("product-main-image").alt = product.name

  // Set thumbnail images
  const thumbnails = document.querySelectorAll(".thumbnail-images img")
  for (let i = 0; i < thumbnails.length && i < product.images.length; i++) {
    thumbnails[i].src = product.images[i]
    thumbnails[i].alt = `${product.name} - Gambar ${i + 1}`
  }

  const featuresList = document.getElementById("product-features")
  featuresList.innerHTML = ""
  product.features.forEach((feature) => {
    const li = document.createElement("li")
    li.textContent = feature
    featuresList.appendChild(li)
  })
}

function formatRupiah(number) {
  return "Rp " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function changeImage(src) {
  document.getElementById("product-main-image").src = src

  // Add animation effect
  const mainImage = document.getElementById("product-main-image")
  mainImage.style.opacity = "0"
  setTimeout(() => {
    mainImage.style.opacity = "1"
  }, 100)
}

function decreaseQuantity() {
  const quantityInput = document.getElementById("quantity")
  const quantity = Number.parseInt(quantityInput.value)
  if (quantity > 1) {
    quantityInput.value = quantity - 1
  }
}

function increaseQuantity() {
  const quantityInput = document.getElementById("quantity")
  const quantity = Number.parseInt(quantityInput.value)
  if (quantity < 10) {
    quantityInput.value = quantity + 1
  }
}

function addToCart() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))

  if (!productId) return

  const product = products.find((p) => p.id === productId)

  if (!product) return

  const qty = Number.parseInt(document.getElementById("quantity").value)

  // Check if product is already in cart
  const existingItemIndex = cart.findIndex((item) => item.id === product.id)

  if (existingItemIndex !== -1) {
    // Update quantity if product already exists in cart
    cart[existingItemIndex].quantity += qty
  } else {
    // Add new item to cart
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: qty,
    })
  }

  // Save cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Update cart count
  updateCartCount()

  // Show confirmation message with animation
  const confirmationMsg = document.createElement("div")
  confirmationMsg.className = "cart-confirmation"
  confirmationMsg.innerHTML = `
        <div class="cart-confirmation-content">
            <i class="fas fa-check-circle"></i>
            <p>${product.name} telah ditambahkan ke keranjang!</p>
        </div>
    `
  document.body.appendChild(confirmationMsg)

  setTimeout(() => {
    confirmationMsg.classList.add("show")
  }, 100)

  setTimeout(() => {
    confirmationMsg.classList.remove("show")
    setTimeout(() => {
      document.body.removeChild(confirmationMsg)
    }, 300)
  }, 3000)
}

function buyNow() {
  addToCart()
  window.location.href = "checkout.html"
}

// Checkout page functions
function loadCheckoutItems() {
  updateCartSummary()

  if (cart.length === 0) {
    document.getElementById("empty-cart-message").classList.remove("hidden")
    document.getElementById("checkout-content").classList.add("hidden")
    return
  }

  const cartItemsContainer = document.getElementById("cart-items")
  cartItemsContainer.innerHTML = ""

  cart.forEach((item) => {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"
    cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">${formatRupiah(item.price)}</p>
                <div class="cart-item-quantity">
                    <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <span class="cart-item-remove" onclick="removeCartItem(${item.id})">
                        <i class="fas fa-trash"></i> Hapus
                    </span>
                </div>
            </div>
            <div class="cart-item-total">
                ${formatRupiah(item.price * item.quantity)}
            </div>
        `
    cartItemsContainer.appendChild(cartItem)
  })

  // Set current date for order confirmation
  const today = new Date()
  const options = { year: "numeric", month: "long", day: "numeric" }
  document.getElementById("order-date").textContent = today.toLocaleDateString("id-ID", options)

  // Generate random order number
  const orderNumber = "ORD-" + Math.floor(10000 + Math.random() * 90000)
  document.getElementById("order-number").textContent = orderNumber
}

function updateCartItemQuantity(productId, newQuantity) {
  if (newQuantity < 1) return

  const itemIndex = cart.findIndex((item) => item.id === productId)

  if (itemIndex !== -1) {
    cart[itemIndex].quantity = newQuantity
    localStorage.setItem("cart", JSON.stringify(cart))
    loadCheckoutItems()
    updateCartCount()
  }
}

function removeCartItem(productId) {
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  loadCheckoutItems()
  updateCartCount()

  if (cart.length === 0) {
    document.getElementById("empty-cart-message").classList.remove("hidden")
    document.getElementById("checkout-content").classList.add("hidden")
  }
}

function updateCartSummary() {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 5000000 ? 0 : 50000
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  // Update cart summary
  document.getElementById("cart-subtotal").textContent = formatRupiah(subtotal)
  document.getElementById("cart-shipping").textContent = shipping === 0 ? "GRATIS" : formatRupiah(shipping)
  document.getElementById("cart-tax").textContent = formatRupiah(tax)
  document.getElementById("cart-total").textContent = formatRupiah(total)

  // Update payment summary
  if (document.getElementById("payment-subtotal")) {
    document.getElementById("payment-subtotal").textContent = formatRupiah(subtotal)
    document.getElementById("payment-shipping").textContent = shipping === 0 ? "GRATIS" : formatRupiah(shipping)
    document.getElementById("payment-tax").textContent = formatRupiah(tax)
    document.getElementById("payment-total").textContent = formatRupiah(total)
  }

  // Update order total
  if (document.getElementById("order-total")) {
    document.getElementById("order-total").textContent = formatRupiah(total)
  }
}

function setupPaymentToggle() {
  const creditCardRadio = document.getElementById("credit-card")
  const bankTransferRadio = document.getElementById("bank-transfer")
  const creditCardForm = document.getElementById("credit-card-form")
  const bankTransferForm = document.getElementById("bank-transfer-form")

  if (creditCardRadio && bankTransferRadio) {
    creditCardRadio.addEventListener("change", () => {
      creditCardForm.classList.remove("hidden")
      bankTransferForm.classList.add("hidden")
    })

    bankTransferRadio.addEventListener("change", () => {
      creditCardForm.classList.add("hidden")
      bankTransferForm.classList.remove("hidden")
    })
  }
}

function goToStep(step) {
  // Hide all sections
  const sections = document.querySelectorAll(".checkout-section")
  sections.forEach((section) => {
    section.classList.remove("active")
  })

  // Show selected section
  let sectionId
  switch (step) {
    case 1:
      sectionId = "cart-section"
      break
    case 2:
      sectionId = "shipping-section"
      break
    case 3:
      sectionId = "payment-section"
      break
    case 4:
      sectionId = "confirmation-section"
      // Clear cart on order completion
      if (step === 4) {
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart))
        updateCartCount()
      }
      break
  }

  const targetSection = document.getElementById(sectionId)
  targetSection.style.opacity = "0"
  targetSection.classList.add("active")

  setTimeout(() => {
    targetSection.style.opacity = "1"
  }, 100)

  // Update steps
  const stepElements = document.querySelectorAll(".step")
  stepElements.forEach((stepEl, index) => {
    if (index < step) {
      stepEl.classList.add("active")
    } else {
      stepEl.classList.remove("active")
    }
  })

  // Update payment summary when going to payment step
  if (step === 3) {
    updateCartSummary()
  }

  // Scroll to top of the section
  window.scrollTo({
    top: document.querySelector(".checkout-steps").offsetTop - 100,
    behavior: "smooth",
  })
}

function updateCartCount() {
  const cartCountElements = document.querySelectorAll("#cart-count")
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  cartCountElements.forEach((element) => {
    element.textContent = itemCount

    // Add animation effect when cart count changes
    element.classList.add("pulse")
    setTimeout(() => {
      element.classList.remove("pulse")
    }, 300)
  })
}

// Tambahkan fungsi validasi untuk form pengiriman
function validateShippingAndProceed() {
  const form = document.getElementById("shipping-form")
  const inputs = form.querySelectorAll("input[required], select[required]")
  let isValid = true

  // Reset semua error
  form.querySelectorAll(".form-group").forEach((group) => {
    group.classList.remove("error")
  })

  // Validasi setiap input
  inputs.forEach((input) => {
    const formGroup = input.closest(".form-group")
    let inputValid = true

    // Validasi berdasarkan tipe input
    if (input.value.trim() === "") {
      inputValid = false
    } else if (input.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      inputValid = emailRegex.test(input.value)
    } else if (input.id === "phone") {
      const phoneRegex = /^[0-9+\-\s]{10,15}$/
      inputValid = phoneRegex.test(input.value)
    } else if (input.id === "zip") {
      const zipRegex = /^[0-9]{5}$/
      inputValid = zipRegex.test(input.value)
    }

    if (!inputValid) {
      formGroup.classList.add("error")
      formGroup.classList.add("shake")
      setTimeout(() => {
        formGroup.classList.remove("shake")
      }, 600)
      isValid = false
    }
  })

  // Jika valid, lanjut ke step berikutnya
  if (isValid) {
    goToStep(3)
  } else {
    // Scroll ke error pertama
    const firstError = form.querySelector(".form-group.error")
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    // Tampilkan pesan error umum
    showNotification("Mohon lengkapi semua data dengan benar", "error")
  }
}

// Tambahkan fungsi validasi untuk form pembayaran
function validatePaymentAndProceed() {
  // Cek metode pembayaran yang dipilih
  const isCreditCard = document.getElementById("credit-card").checked
  const isBankTransfer = document.getElementById("bank-transfer").checked

  if (isCreditCard) {
    const form = document.getElementById("payment-form")
    const inputs = document.querySelectorAll("#credit-card-form input[required]")
    let isValid = true

    // Reset semua error
    form.querySelectorAll(".form-group").forEach((group) => {
      group.classList.remove("error")
    })

    // Validasi setiap input
    inputs.forEach((input) => {
      const formGroup = input.closest(".form-group")
      let inputValid = true

      // Validasi berdasarkan tipe input
      if (input.value.trim() === "") {
        inputValid = false
      } else if (input.id === "card-number") {
        // Validasi nomor kartu kredit (hanya angka, spasi, dan dash)
        const cardRegex = /^[0-9\s-]{16,19}$/
        inputValid = cardRegex.test(input.value.replace(/\s/g, ""))
      } else if (input.id === "expiry-date") {
        // Validasi format MM/YY
        const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
        inputValid = expiryRegex.test(input.value)
      } else if (input.id === "cvv") {
        // Validasi CVV (3 atau 4 digit)
        const cvvRegex = /^[0-9]{3,4}$/
        inputValid = cvvRegex.test(input.value)
      }

      if (!inputValid) {
        formGroup.classList.add("error")
        formGroup.classList.add("shake")
        setTimeout(() => {
          formGroup.classList.remove("shake")
        }, 600)
        isValid = false
      }
    })

    // Jika valid, lanjut ke step berikutnya
    if (isValid) {
      goToStep(4)
    } else {
      // Scroll ke error pertama
      const firstError = form.querySelector(".form-group.error")
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" })
      }

      // Tampilkan pesan error umum
      showNotification("Mohon lengkapi data kartu kredit dengan benar", "error")
    }
  } else if (isBankTransfer) {
    // Untuk transfer bank, tidak perlu validasi tambahan
    goToStep(4)
  } else {
    // Jika tidak ada metode pembayaran yang dipilih
    showNotification("Silakan pilih metode pembayaran", "error")
  }
}

// Tambahkan fungsi untuk menampilkan notifikasi
function showNotification(message, type = "success") {
  const notificationClass = type === "error" ? "notification-error" : "notification-success"
  const icon = type === "error" ? "fa-exclamation-circle" : "fa-check-circle"

  const notification = document.createElement("div")
  notification.className = `notification ${notificationClass}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icon}"></i>
            <p>${message}</p>
        </div>
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.classList.add("show")
  }, 100)

  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Tambahkan event listener untuk validasi real-time
document.addEventListener("DOMContentLoaded", () => {
  // Validasi real-time untuk form pengiriman
  const shippingForm = document.getElementById("shipping-form")
  if (shippingForm) {
    const inputs = shippingForm.querySelectorAll("input[required], select[required]")

    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateInput(this)
      })

      input.addEventListener("input", function () {
        const formGroup = this.closest(".form-group")
        if (formGroup.classList.contains("error")) {
          validateInput(this)
        }
      })
    })
  }

  // Validasi real-time untuk form pembayaran
  const paymentForm = document.getElementById("payment-form")
  if (paymentForm) {
    const inputs = paymentForm.querySelectorAll("#credit-card-form input[required]")

    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateInput(this)
      })

      input.addEventListener("input", function () {
        const formGroup = this.closest(".form-group")
        if (formGroup.classList.contains("error")) {
          validateInput(this)
        }
      })
    })

    // Format nomor kartu kredit saat diketik
    const cardNumberInput = document.getElementById("card-number")
    if (cardNumberInput) {
      cardNumberInput.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, "")
        if (value.length > 16) value = value.slice(0, 16)

        // Format dengan spasi setiap 4 digit
        let formattedValue = ""
        for (let i = 0; i < value.length; i++) {
          if (i > 0 && i % 4 === 0) {
            formattedValue += " "
          }
          formattedValue += value[i]
        }

        this.value = formattedValue
      })
    }

    // Format tanggal kadaluarsa
    const expiryDateInput = document.getElementById("expiry-date")
    if (expiryDateInput) {
      expiryDateInput.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, "")
        if (value.length > 4) value = value.slice(0, 4)

        if (value.length > 2) {
          this.value = value.slice(0, 2) + "/" + value.slice(2)
        } else {
          this.value = value
        }
      })
    }
  }
})

// Fungsi untuk memvalidasi input tunggal
function validateInput(input) {
  const formGroup = input.closest(".form-group")
  let isValid = true

  // Validasi berdasarkan tipe input
  if (input.value.trim() === "") {
    isValid = false
  } else if (input.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    isValid = emailRegex.test(input.value)
  } else if (input.id === "phone") {
    const phoneRegex = /^[0-9+\-\s]{10,15}$/
    isValid = phoneRegex.test(input.value)
  } else if (input.id === "zip") {
    const zipRegex = /^[0-9]{5}$/
    isValid = zipRegex.test(input.value)
  } else if (input.id === "card-number") {
    const cardRegex = /^[0-9\s-]{16,19}$/
    isValid = cardRegex.test(input.value.replace(/\s/g, ""))
  } else if (input.id === "expiry-date") {
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
    isValid = expiryRegex.test(input.value)
  } else if (input.id === "cvv") {
    const cvvRegex = /^[0-9]{3,4}$/
    isValid = cvvRegex.test(input.value)
  }

  if (!isValid) {
    formGroup.classList.add("error")
  } else {
    formGroup.classList.remove("error")
  }

  return isValid
}

// Add this to the CSS
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
.cart-confirmation {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--success-color);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transform: translateX(120%);
    transition: transform 0.3s ease-out;
}

.cart-confirmation.show {
    transform: translateX(0);
}

.cart-confirmation-content {
    display: flex;
    align-items: center;
}

.cart-confirmation i {
    margin-right: 10px;
    font-size: 20px;
}

.pulse {
    animation: pulse 0.3s ease-out;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

.page-loaded {
    opacity: 1;
}
</style>
`,
)

// Tambahkan CSS untuk notifikasi
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transform: translateX(120%);
    transition: transform 0.3s ease-out;
}

.notification.show {
    transform: translateX(0);
}

.notification-content {
    display: flex;
    align-items: center;
}

.notification-content i {
    margin-right: 10px;
    font-size: 20px;
}

.notification-success {
    background-color: var(--success-color);
    color: white;
}

.notification-error {
    background-color: var(--error-color);
    color: white;
}
</style>
`,
)

