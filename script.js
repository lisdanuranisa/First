var portfolioItems = document.getElementsByClassName('portfolio-item');
for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('click', function() {
        alert('Anda mengklik ' + this.id);
    });
}
