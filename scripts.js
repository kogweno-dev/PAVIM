document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseover', function() {
        btn.style.backgroundColor = '#e68900';
    });
    btn.addEventListener('mouseleave', function() {
        btn.style.backgroundColor = '#ff9800';
    });
});