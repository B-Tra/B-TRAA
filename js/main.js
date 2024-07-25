
    (function ($) {
      "use strict";

      // Spinner
      var spinner = function () {
        setTimeout(function () {
          if ($("#spinner").length > 0) {
            $("#spinner").removeClass("show");
          }
        }, 1);
      };
      spinner();
      // Initiate the wowjs
      new WOW().init();
      // Sticky Navbar
      $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
          $(".navbar").addClass("sticky-top shadow-sm");
        } else {
          $(".navbar").removeClass("sticky-top shadow-sm");
        }
      });
      // Dropdown on mouse hover
      const $dropdown = $(".dropdown");
      const $dropdownToggle = $(".dropdown-toggle");
      const $dropdownMenu = $(".dropdown-menu");
      const showClass = "show";

      $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
          $dropdown.hover(
            function () {
              const $this = $(this);
              $this.addClass(showClass);
              $this.find($dropdownToggle).attr("aria-expanded", "true");
              $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
              const $this = $(this);
              $this.removeClass(showClass);
              $this.find($dropdownToggle).attr("aria-expanded", "false");
              $this.find($dropdownMenu).removeClass(showClass);
            }
          );
        } else {
          $dropdown.off("mouseenter mouseleave");
        }
      });

      // Back to top button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $(".back-to-top").fadeIn("slow");
        } else {
          $(".back-to-top").fadeOut("slow");
        }
      });
      $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
      });

      // Facts counter
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000,
      });
      // Testimonials carousel
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      });


  const sendBtn = document.getElementById('send-btn');

  sendBtn.addEventListener('click', () => {
    const phoneNumber = '+85599482719'; // Replace with the manager's phone number
    const message = 'Hello, this is an alert message to the manager!';

    // Using Twilio API as an example
    const accountSid = 'your_account_sid';
    const authToken = 'your_auth_token';
    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({
        body: message,
        from: '+1987654321', // Replace with your Twilio phone number
        to: phoneNumber
      })
      .then(message => console.log(`Message sent: ${message.sid}`))
      .done();
  });

    })(jQuery);
