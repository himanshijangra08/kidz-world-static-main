document.addEventListener("DOMContentLoaded", function () {
  // Initialize cart count
  let cartCount = 0;
  // Initialize cart items
  const cartItems = {};

  // Function to update cart count
  function updateCartCount() {
    document.getElementById("cart-value").textContent = cartCount;
  }

  // Function to update and display cart items
  function updateAndDisplayCart() {
    console.log("Cart Items:");
    for (const item in cartItems) {
      console.log(`${item} - Quantity: ${cartItems[item]}`);
    }
    console.log(`Total Items in Cart: ${cartCount}`);
  }

  // Event delegation for "Add" buttons
  document.querySelector(".section-container").addEventListener("click", function (event) {
    const target = event.target;

    // Check if the clicked element is an "Add" button
    if (target.classList.contains("button")) {
      // Get the parent container of the clicked button
      const container = target.closest("div");

      // Increment cart count
      cartCount++;

      // Update cart count display
      updateCartCount();

      // Update cart items
      const itemName = container.querySelector("h3").textContent;
      if (cartItems[itemName]) {
        cartItems[itemName]++;
      } else {
        cartItems[itemName] = 1;
      }

      // Log the selected item details to the console
      const itemPrice = container.querySelector("p").textContent;
      console.log(`Added to cart: ${itemName} - ${itemPrice}`);
    }
  });

  // Event listener for cart items button
  document.getElementById("cart").addEventListener("click", function () {
    updateAndDisplayCart();
  });

  // Toggle navigation menu for mobile
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarLinks = document.querySelector(".navbar-links");

  navbarToggle.addEventListener("click", function () {
    navbarLinks.classList.toggle("show");
  });
});
