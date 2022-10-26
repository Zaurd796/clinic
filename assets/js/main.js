document.addEventListener("DOMContentLoaded", function() {
 
  const toggle = document.querySelector(".site-header__toggle");
  const block = document.querySelector(".site-header__bottom-inner");
  const close = block.querySelector(".site-header__bottom-close")
  console.log(toggle, block, close);

  toggle.addEventListener("click", function() {
    block.classList.add("show");
  });

  window.addEventListener("keydown", function(e) {
    if (e.code == "Escape" && block.classList.contains("show")) {
      block.classList.remove("show");
    }
  });

  close.addEventListener("click", function() {
    block.classList.remove("show");
  });
});