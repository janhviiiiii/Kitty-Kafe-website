// JavaScript to control modal behavior
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const modalTriggers = document.querySelectorAll('[id^="view"]'); // Select all links with IDs starting with "view"

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('id').replace('view', 'modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    modals.forEach(modal => {
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});