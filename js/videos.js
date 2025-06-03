
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.video-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 640; // largeur de la carte
    track.style.transform = `translateX(${offset}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;

    // Stop toutes les vidéos
    cards.forEach(card => {
      const video = card.querySelector('video');
      video.pause();
      video.currentTime = 0;
      video.style.display = 'none';
      card.querySelector('.thumbnail').style.display = 'block';
      card.querySelector('.play-button').style.display = 'flex';
    });
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  cards.forEach(card => {
    const playBtn = card.querySelector('.play-button');
    const video = card.querySelector('video');
    const thumbnail = card.querySelector('.thumbnail');

    playBtn.addEventListener('click', () => {
      thumbnail.style.display = 'none';
      playBtn.style.display = 'none';
      video.style.display = 'block';
      video.play();
    });
  });

  updateCarousel(); // initialiser
