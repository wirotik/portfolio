// Simple script to handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message, je vous répondrai bientôt !');
  });

  let currentVideoIndex = 0;
  const videos = [
    'https://www.youtube.com/embed/JuNok98Znm8', // Ta vidéo ajoutée ici
    'https://www.youtube.com/embed/VIDÉO_ID_2',
    'https://www.youtube.com/embed/VIDÉO_ID_3'
  ];

  function changeVideo(direction) {
    currentVideoIndex += direction;
    if (currentVideoIndex < 0) {
      currentVideoIndex = videos.length - 1;
    } else if (currentVideoIndex >= videos.length) {
      currentVideoIndex = 0;
    }
    document.getElementById('project-video').src = videos[currentVideoIndex];
  }
  