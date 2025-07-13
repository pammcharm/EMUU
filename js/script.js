// ==== Dynamic Gallery Loader ====
document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.querySelector(".gallery-grid");

  const images = [
    { src: 'assets/images/img1.jpg', alt: 'Description 1', description: 'All  children playing' },
    { src: 'assets/images/img2.jpg', alt: 'Description 2', description: 'All  children playing' },
    { src: 'assets/images/img3.jpg', alt: 'Description 3', description: 'All  children playing' },
    { src: 'assets/images/img4.jpg', alt: 'Description 4', description: 'All  children playing' },
    { src: 'assets/images/img5.jpg', alt: 'Description 5', description: 'All  children playing' },
    { src: 'assets/images/img6.jpg', alt: 'Description 6', description: 'All  children playing' },
    { src: 'assets/images/img7.jpg', alt: 'Description 7', description: 'All  children playing' },
    { src: 'assets/images/img8.jpg', alt: 'Description 8', description: 'All  children playing' },
    { src: 'assets/images/img9.jpg', alt: 'Description 9', description: 'All  children playing' },
    { src: 'assets/images/img10.jpg', alt: 'Description 10', description: 'All  children playing' },
    { src: 'assets/images/img11.jpg', alt: 'Description 11', description: 'All  children playing' },
    { src: 'assets/images/img12.jpg', alt: 'Description 12', description: 'All  children playing' },
    { src: 'assets/images/img13.jpg', alt: 'Description 13', description: 'All  children playing' },
  ];

  images.forEach(img => {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.alt;

    const caption = document.createElement('div');
    caption.className = 'gallery-caption';
    caption.textContent = img.description;

    card.appendChild(image);
    card.appendChild(caption);
    galleryGrid.appendChild(card);
  });
});

// ==== Dropdown Hover (mobile support fallback) ====
document.querySelectorAll(".dropdown").forEach(drop => {
  drop.addEventListener("click", (e) => {
    e.currentTarget.querySelector(".dropdown-content").classList.toggle("show");
  });
});

// Optional: Smooth scroll for anchor links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
