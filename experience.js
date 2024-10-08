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
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}
