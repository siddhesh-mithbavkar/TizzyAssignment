const secondaryInput = document.querySelector('.secondary');
const suggestionList = document.querySelector('.suggestion-list');

secondaryInput.addEventListener('click', function (e) {
    e.stopPropagation();
    suggestionList.style.display = suggestionList.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function () {
    suggestionList.style.display = 'none';
});

suggestionList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        secondaryInput.value = e.target.textContent;
        suggestionList.style.display = 'none';
    }
});



const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 1;

    const updateCounter = () => {
        const speed = 90;
        if (count < target) {
            counter.textContent = formatNumber(count);
            count++;
            setTimeout(updateCounter, speed);
        } else {
            counter.textContent = formatNumber(target);
        }
    };

    const formatNumber = (num) => {
        return num.toLocaleString() + "+";
    };

    updateCounter();
});




$(function () {
    var owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 3,                  // Number of items visible
        margin: 15,                // Space between items
        loop: true,                // Enable infinite loop
        nav: false,                 // Show next/prev arrows
        dots: false,                // Show pagination dots
        autoplay: true,           // Enable auto-play
        autoplayTimeout: 2000,    // Delay between auto cycles (in ms)
        autoplayHoverPause: true, // Pause on hover
        smartSpeed: 800,          // Transition speed (in ms)
        // navText: [                // Custom nav arrows
        //   "<i class='fa fa-chevron-left'></i>",
        //   "<i class='fa fa-chevron-right'></i>"
        // ],
        responsive: {
            0: {
                items: 1,               // Mobile phones (portrait)
                margin: 10
            },
            480: {
                items: 1,               // Mobile phones (landscape)
                margin: 10
            },
            768: {
                items: 2,               // Tablets (portrait)
                margin: 15
            },
            992: {
                items: 3,               // Tablets/Laptops (landscape)
                margin: 20
            },
            1200: {
                items: 3,               // Desktop
                margin: 25
            },
            1600: {
                items: 3,               // Large desktop / Ultra-wide
                margin: 30
            }
        }
    });
});


