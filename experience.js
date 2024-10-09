// Get all company cards and contents
const companyCards = document.querySelectorAll('.company-card');
const companyContents = document.querySelectorAll('.company-content');

// Function to show content on hover or click
companyCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Get the associated company content ID
        const companyId = this.getAttribute('data-company');

        // Hide all other company contents
        companyContents.forEach(content => content.classList.remove('active'));

        // Show the content of the hovered company
        document.getElementById(companyId).classList.add('active');
    });

    card.addEventListener('click', function() {
        // Same as hover functionality, but ensures the content remains visible
        const companyId = this.getAttribute('data-company');
        companyContents.forEach(content => content.classList.remove('active'));
        document.getElementById(companyId).classList.add('active');
    });
});
