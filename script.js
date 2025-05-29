// Instagram Gallery Placeholder
// Replace this with real Instagram API or plugin when ready
document.addEventListener('DOMContentLoaded', function () {
  const instaFeed = document.getElementById('insta-feed');
  if (instaFeed) {
    instaFeed.innerHTML = '';
    // Placeholder images
    for (let i = 1; i <= 6; i++) {
      const img = document.createElement('img');
      img.src = `assets/insta${i}.jpg`; // Place your placeholder images here
      img.alt = 'Instagram style';
      instaFeed.appendChild(img);
    }
    // If you want to link to Instagram, wrap images in <a>
  }
});
