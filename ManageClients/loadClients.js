document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  fetch('./ManageClients/clients.json')
    .then(response => {
      console.log("Fetching clients.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Client data fetched");
      const clientsContainer = document.querySelector('.swiper-wrapper');
      data.forEach(client => {
        const clientElement = document.createElement('div');
        clientElement.classList.add('swiper-slide');

        const img = document.createElement('img');
        img.classList.add('client-image');
        img.src = client.src;
        img.alt = client.alt;
        img.loading = 'lazy';

        clientElement.appendChild(img);
        clientsContainer.appendChild(clientElement);
      });

      console.log("Client logos added. Initializing Swiper.");
      // Initialize Swiper after the slides are added
      new Swiper('.swiper', {
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
        }
      });
    })
    .catch(error => console.error('Error loading clients:', error));
});
