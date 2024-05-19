// In your swiper-initialization.js file
var swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 2,
	autoplay: {
		delay: 2000,
	},
	grid: {
		rows: 4,
		fill: 'column',
	},
	spaceBetween: 5, // Add space between slides
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Include additional options and breakpoints as needed
	breakpoints: {
		280: {
			slidesPerView: 2,
			spaceBetween: 40,
			grid: {
				rows: 4,
				fill: 'column',
			},
		},
		350: {
			slidesPerView: 3,
			spaceBetween: 10,
			grid: {
				rows: 4,
				fill: 'column',
			},
		},
		550: {
			slidesPerView: 4,
			spaceBetween: 10,
			grid: {
				rows: 4,
				fill: 'column',
			},
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 50,
			grid: {
				rows: 4,
				fill: 'column',
			},
		},
		1600: {
			slidesPerView: 5,
			spaceBetween: 80,
			grid: {
				rows: 4,
				fill: 'column',
			},
		},
	},
})
