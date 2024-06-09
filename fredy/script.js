document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item, .highlighted-photo');
    const fullSizeViewer = document.querySelector('.full-size-viewer');
    const fullSizeImage = document.getElementById('full-size-image');
    const closeButton = document.getElementById('close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            fullSizeImage.src = imgSrc;
            fullSizeViewer.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        fullSizeViewer.style.display = 'none';
    });

    // Close the full-size viewer when clicking outside the image
    fullSizeViewer.addEventListener('click', (e) => {
        if (e.target === fullSizeViewer) {
            fullSizeViewer.style.display = 'none';
        }
    });
});
