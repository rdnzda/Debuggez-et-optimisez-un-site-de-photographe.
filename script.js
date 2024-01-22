$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

const navItems = document.querySelectorAll('.nav-item li');
navItems.forEach(bouton => {
    bouton.addEventListener('click', function() {
        navItems.forEach(b => b.classList.remove('nav-link.active'));
        bouton.classList.add('nav-link.active');
    });
});