function toggleDetails(companyId) {
    const details = document.getElementById(companyId);
    const allDetails = document.querySelectorAll('.details');

    // Hide all other details
    allDetails.forEach(detail => {
        if (detail !== details) {
            detail.style.display = 'none';
        }
    });

    // Toggle the clicked company's details
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}


// Scroll to the experience section when "Explore My Work" is clicked
document.getElementById('explore-button').addEventListener('click', function() {
    const experienceSection = document.getElementById('experience-section');
    experienceSection.scrollIntoView({ behavior: 'smooth' });
});
