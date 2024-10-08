const companyItems = document.querySelectorAll('.company-item');
const detailsSections = document.querySelectorAll('.details');

companyItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        const targetId = item.getAttribute('data-company');
        
        detailsSections.forEach(detail => {
            if (detail.id === targetId) {
                detail.classList.add('active');
                detail.classList.remove('hidden');
            } else {
                detail.classList.remove('active');
                detail.classList.add('hidden');
            }
        });
    });
});
