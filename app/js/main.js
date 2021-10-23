$(document).ready(function () {




});

// Themes Slider
const swiper = new Swiper('.themes__slider', {
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev'
	},

	pagination: {
		el: ".swiper-pagination",
		// type: "fraction",
	},

	breakpoints: {
		375: { // when window width is >= 375px
		},
		1024: { // when window width is >= 1024px
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		1200: { // when window width is >= 1200px
		}
	}
});

// For Slider
const swiper1 = new Swiper('.for__slider1', {
	// slidesPerView: 2,
	slidesPerView: 'auto',
	// spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: '.swiper-next1',
		prevEl: '.swiper-prev1'
	},

	breakpoints: {
		375: { // when window width is >= 375px
		},
		1024: { // when window width is >= 1024px
		},
		1200: { // when window width is >= 1200px
		}
	}
});

const swiper2 = new Swiper('.for__slider2', {
	slidesPerView: 'auto',
	// spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: '.swiper-next2',
		prevEl: '.swiper-prev2'
	},

	breakpoints: {
		375: { // when window width is >= 375px
		},
		1024: { // when window width is >= 1024px
		},
		1200: { // when window width is >= 1200px
			// slidesPerView: 2,
			// slidesPerGroup: 2,
		}
	}
});

const swiper3 = new Swiper('.for__slider3', {
	slidesPerView: 'auto',
	// spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: '.swiper-next3',
		prevEl: '.swiper-prev3'
	},

	breakpoints: {
		375: { // when window width is >= 375px
		},
		1024: { // when window width is >= 1024px
		},
		1200: { // when window width is >= 1200px
		}
	}
});


// Timer
let out = document.getElementById('timeleft');
let start = new Date(out.dataset.end);

let timer = () => {
  let diff = start.getTime() - Date.now();
  if (diff <= 0) return clearInterval(i); // Конец
  diff /= 1e3; // мс -> с
  out.innerText = [
    diff / 3600 % 24 |0, // hours
    diff / 60 % 60   |0, // minutes
    diff / 1 % 60    |0  // seconds
  ].map(d => d<10?'0'+d:d).join(':');
};

let i = setInterval(timer, 450);
timer();