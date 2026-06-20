const lightbox = GLightbox({
  selector: '.glightbox'
});



document.querySelectorAll('.offcanvas-body .nav-link').forEach(link => {
    link.addEventListener('click', function () {
      const offcanvasElement = document.querySelector('.offcanvas');
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  });