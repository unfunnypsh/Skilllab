  document.addEventListener("DOMContentLoaded", function() {
    const incrementButtons = document.querySelectorAll(".increment");
    const decrementButtons = document.querySelectorAll(".decrement");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    incrementButtons.forEach(button => {
      button.addEventListener("click", function() {
        const input = button.parentElement.querySelector("input");
        input.value = parseInt(input.value) + 1;
      });
    });
    decrementButtons.forEach(button => {
      button.addEventListener("click", function() {
        const input = button.parentElement.querySelector("input");
        if (parseInt(input.value) > 1) {
          input.value = parseInt(input.value) - 1;
        }
      });
    });
  });

