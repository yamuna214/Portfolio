document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.backgroundColor = "#f0f8ff";
        card.style.transition = "0.3s ease-in-out";
      });
  
      card.addEventListener('mouseout', () => {
        card.style.backgroundColor = "white";
      });
    });
  });
  
