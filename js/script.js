/*show mobile menu*/

function toggleMenu() {
  document.querySelector('.nav__small-screen').classList.toggle('nav__small-screen--invisible');
}

document.querySelector('.header__menu__icon--hamburger--mobile').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

/*show modal*/

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .modal__close').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });

  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('#logout').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#modal__logout');
});


/* chart */

var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.legend.display = false;

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [ 252, 351, 141, 94, 526, 6, 72, 9, 421, 588 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 236, 572, 101, 20, 447, 111, 550, 544, 463, 376 ],
    }]
  },
});


