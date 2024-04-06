// Example: Add smooth scrolling for your nav links (Optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.nav-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

