 // Select all the gradient and centered-div elements
 const cards = document.querySelectorAll('.centered-div');
 const gradients = document.querySelectorAll('.gradient');

 // Loop through all cards and add event listeners
 cards.forEach((card, index) => {
   const gradient = gradients[index];

   card.addEventListener('mousemove', (e) => {
     const rect = card.getBoundingClientRect(); // Get the card's bounding rectangle
     const offsetX = e.clientX - rect.left; // Calculate cursor position relative to the card
     const offsetY = e.clientY - rect.top;  // Calculate cursor position relative to the card

     // Center the gradient over the cursor
     gradient.style.transform = `translate(${offsetX - gradient.offsetWidth / 2}px, ${offsetY - gradient.offsetHeight / 2}px)`;
     gradient.style.opacity = 1; // Show gradient on mouse move
   });

   card.addEventListener('mouseleave', () => {
     gradient.style.opacity = 0; // Hide gradient when mouse leaves
   });
 });