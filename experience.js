// Get all company cards and contents
const companyCards = document.querySelectorAll('.company-card');
const companyContents = document.querySelectorAll('.company-content');

// Function to show content on hover
companyCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Get the associated company content ID
        const companyId = this.getAttribute('data-company');

        // Hide all other company contents
        companyContents.forEach(content => content.classList.remove('active'));

        // Show the content of the hovered company
        document.getElementById(companyId).classList.add('active');
    });
});

// Keep the content visible on click
companyCards.forEach(card => {
    card.addEventListener('click', function() {
        // Get the associated company content ID
        const companyId = this.getAttribute('data-company');

        // Hide all other company contents
        companyContents.forEach(content => content.classList.remove('active'));

        // Show the content of the clicked company
        document.getElementById(companyId).classList.add('active');
    });
});
