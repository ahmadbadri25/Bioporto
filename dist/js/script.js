// Darkmode Toogle Start
const darkToogle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToogle.addEventListener('click', function () {
  if (darkToogle.checked) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
});

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToogle.checked = true;
} else {
  darkToogle.checked = false;
}

darkToogle.addEventListener('click', function () {
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});
// Darkmode Toogle End

// Home JS Start
var typed = new Typed('#typed', {
  strings: ['Web Frontend Developer', 'Indraprasta PGRI University', 'Moeslim', 'IT Support'],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
});

const icons = document.querySelectorAll('.icon');

if (icons.length) {
  icons.forEach((link) => {
    link.addEventListener('click', (e) => {
      icons.forEach((link) => {
        link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

const filterSosmeds = document.querySelectorAll('.filter-sosmed');
const sosmedItems = document.querySelectorAll('.sosmed-item');

filterSosmeds.forEach((sosmedItem) => {
  sosmedItem.addEventListener('click', () => {
    const filter = sosmedItem.getAttribute('sosmed-filter');
    sosmedItems.forEach((sosmedItem) => {
      if (sosmedItem.classList.contains(filter) || filter === 'all') {
        sosmedItem.classList.remove('hidden');
      } else {
        sosmedItem.classList.add('hidden');
      }
    });
  });
});
// Home JS End

// Education JS Start
var splide = new Splide('#education', {
  perPage: 1.5,
  perMove: 1,
  focus: 0,
  omitEnd: true,
});

splide.mount();
// Education JS End

// Skills JS Start
const skills = document.querySelectorAll('.btn-skills');

if (skills.length) {
  skills.forEach((link) => {
    link.addEventListener('click', (e) => {
      skills.forEach((link) => {
        link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

const filterSkills = document.querySelectorAll('.filter-skills');
const skillsItems = document.querySelectorAll('.skills-item');

filterSkills.forEach((filterSkill) => {
  filterSkill.addEventListener('click', () => {
    const filter = filterSkill.getAttribute('skills-filter');
    skillsItems.forEach((skillItem) => {
      const category = skillItem.getAttribute('skills-category');
      if (filter === 'all' || filter === category) {
        skillItem.classList.remove('hidden');
      } else {
        skillItem.classList.add('hidden');
      }
    });
  });
});
// Skills JS End

// Hobbies JS Start
var splide = new Splide('#hobbies', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
});

splide.mount();
// Hobbies JS End

// Certificate JS Start
const certificates = document.querySelectorAll('.btn-certificates');

if (certificates.length) {
  certificates.forEach((link) => {
    link.addEventListener('click', (e) => {
      certificates.forEach((link) => {
        link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

const filterCertificates = document.querySelectorAll('.filter-certificates');
const certificatesItems = document.querySelectorAll('.certificates-item');

filterCertificates.forEach((filterCertificate) => {
  filterCertificate.addEventListener('click', () => {
    const filter = filterCertificate.getAttribute('certificates-filter');
    certificatesItems.forEach((certificateItem) => {
      if (certificateItem.classList.contains(filter) || filter === 'all') {
        certificateItem.classList.remove('hidden');
      } else {
        certificateItem.classList.add('hidden');
      }
    });
  });
});

var mainAll = new Splide('.main-slider-all', {
  type: 'fade',
  heightRatio: 0.7,
  pagination: false,
  arrows: false,
  cover: true,
});

var thumbnailsAll = new Splide('.thumbnail-slider-all', {
  rewind: true,
  fixedWidth: 104,
  fixedHeight: 58,
  isNavigation: true,
  gap: 8,
  focus: 'center',
  pagination: false,
  cover: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    640: {
      fixedWidth: 66,
      fixedHeight: 38,
    },
  },
});

mainAll.sync(thumbnailsAll);
mainAll.mount();
thumbnailsAll.mount();

var mainCompletion = new Splide('.main-slider-completion', {
  type: 'fade',
  heightRatio: 0.7,
  pagination: false,
  arrows: false,
  cover: true,
});

var thumbnailsCompletion = new Splide('.thumbnail-slider-completion', {
  rewind: true,
  fixedWidth: 104,
  fixedHeight: 58,
  isNavigation: true,
  gap: 8,
  focus: 'center',
  pagination: false,
  cover: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    640: {
      fixedWidth: 66,
      fixedHeight: 38,
    },
  },
});

mainCompletion.sync(thumbnailsCompletion);
mainCompletion.mount();
thumbnailsCompletion.mount();

var mainSeminar = new Splide('.main-slider-seminar', {
  type: 'fade',
  heightRatio: 0.7,
  pagination: false,
  arrows: false,
  cover: true,
});

var thumbnailsSeminar = new Splide('.thumbnail-slider-seminar', {
  rewind: true,
  fixedWidth: 104,
  fixedHeight: 58,
  isNavigation: true,
  gap: 8,
  focus: 'center',
  pagination: false,
  cover: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    640: {
      fixedWidth: 66,
      fixedHeight: 38,
    },
  },
});

mainSeminar.sync(thumbnailsSeminar);
mainSeminar.mount();
thumbnailsSeminar.mount();
// Certificate Code End

// Portfolio JS Start
const filterPortfolios = document.querySelectorAll('.filter-portfolio');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterPortfolios.forEach((filterPortfolio) => {
  filterPortfolio.addEventListener('click', () => {
    const filter = filterPortfolio.getAttribute('portfolio-filter');
    portfolioItems.forEach((portfolioItem) => {
      const category = portfolioItem.getAttribute('portfolio-category');
      if (filter === 'all' || filter === category) {
        portfolioItem.classList.remove('hidden');
      } else {
        portfolioItem.classList.add('hidden');
      }
    });
  });
});

var splide = new Splide('#thumbnail-portfolio', {
  perPage: 2.5,
  perMove: 1,
  focus: 0,
  omitEnd: true,
});

splide.mount();
// Portfolio JS End

// Contact JS Start
const scriptURL = 'https://script.google.com/macros/s/AKfycbw7WPSC6nhc7l4-bfa2XYZXdTe98Wum4HRUc9yPoMGNiA2h5vGl-Z-bpXsLu1FWhUq-/exec';
const form = document.forms['badri-contact-form'];
const btnSent = document.querySelector('#btn-sent');
const btnLoading = document.querySelector('#btn-loading');
const myAlert = document.querySelector('#my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('hidden');
  btnSent.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('hidden');
      btnSent.classList.toggle('hidden');
      myAlert.classList.toggle('hidden');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

const closeAlert = document.querySelector('#close-alert');

closeAlert.addEventListener('click', function () {
  myAlert.classList.add('hidden');
});
// Contact JS End
