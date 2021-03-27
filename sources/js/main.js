import '../scss/main.scss';

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btnHamburger = document.querySelector('.btn-hamburger');
  const header = document.querySelector('.header');
  const dropdown = document.querySelectorAll('.has-dropdown');

  const handleBtnHamburger = () => {
    body.classList.toggle('overflow-hidden');
    btnHamburger.classList.toggle('btn-hamburger--open');
    header.classList.toggle('mobile-nav--active');
  };

  const handleDropdownMenu = e => {
    console.log('click');
  };

  // EVENTS
  // mobile menu open/close
  btnHamburger.addEventListener('click', handleBtnHamburger);

  // dropdown menu
  document.addEventListener('click', e => {
    if (e.target.closest('.has-dropdown')) {
      const current = e.target.closest('.has-dropdown');

      // disabled all dropdown without clicked
      dropdown.forEach(content => {
        if (content !== current) {
          content.classList.remove('is-active');
        }
      });

      current.classList.toggle('is-active');
    }
  });
});
