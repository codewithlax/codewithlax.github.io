// Get all the company cards and contents
const companyCards = document.querySelectorAll('.company-card');
const companyContents = document.querySelectorAll('.company-content');

// Add click event listener to each card
companyCards.forEach(card => {
    card.addEventListener('click', function() {
        // Get the company ID from data attribute
        const companyId = this.getAttribute('data-company');
        
        // Hide all company contents
        companyContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Show the clicked company's content
        document.getElementById(companyId).classList.add('active');
    });
});
