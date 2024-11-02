const addButtons = document.querySelectorAll('.add-btn');
addButtons.forEach(button => {
    button.addEventListener('click', function() {
        const name = this.dataset.name;
        alert(name + 'has been added to cart');
    });
});