document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.nav-icon').addEventListener('click', function () {
        document.querySelector('.nav-links').classList.toggle('active');
    });
});
