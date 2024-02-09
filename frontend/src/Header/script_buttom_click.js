document.addEventListener('DOMContentLoaded', function () {
    const refreshButton = document.querySelector('.ec');
  
    refreshButton.addEventListener('click', () => {
        location.reload();
    });
});
