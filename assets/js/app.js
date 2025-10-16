// Template Name: DriveLux
// Template URL: https://uiparadox.co.uk/templates/drivelux/
// Description: DriveLux - Car Rental HTML5 Bootstrap website Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.searchFunction();
      Init.dropdown();
      Init.salActivation();
      Init.intializeSlick();
      Init.formValidation();
      Init.contactForm();
      Init.customSlector();
      Init.bar();
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    preloader: function () {
      setTimeout(function () { $('#preloader').hide('slow') }, 2000);
    },
    salActivation: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },
    searchFunction: function () {
      if ($("#searchInput").length) {
        $("#searchInput").on("keyup", function () {
          var value = $(this).val().toLowerCase();
          $(".item-card").filter(function () {
            var hasMatch = $(this).find(".product-title").text().toLowerCase().indexOf(value) > -1;
            $(this).toggle(hasMatch);
          });
        });
      }
    },

    dropdown: function () {
      const selectedAll = document.querySelectorAll(".wrapper-dropdown");

      selectedAll.forEach((selected) => {
        const optionsContainer = selected.children[2];
        const optionsList = selected.querySelectorAll(
          "div.wrapper-dropdown li"
        );

        selected.addEventListener("click", () => {
          let arrow = selected.children[1];

          if (selected.classList.contains("active")) {
            handleDropdown(selected, arrow, false);
          } else {
            let currentActive = document.querySelector(
              ".wrapper-dropdown.active"
            );

            if (currentActive) {
              let anotherArrow = currentActive.children[1];
              handleDropdown(currentActive, anotherArrow, false);
            }

            handleDropdown(selected, arrow, true);
          }
        });

        // update the display of the dropdown
        for (let o of optionsList) {
          o.addEventListener("click", () => {
            selected.querySelector(".selected-display").innerHTML = o.innerHTML;
          });
        }
      });

      // check if anything else ofther than the dropdown is clicked
      window.addEventListener("click", function (e) {
        if (e.target.closest(".wrapper-dropdown") === null) {
          closeAllDropdowns();
        }
      });

      // close all the dropdowns
      function closeAllDropdowns() {
        const selectedAll = document.querySelectorAll(".wrapper-dropdown");
        selectedAll.forEach((selected) => {
          const optionsContainer = selected.children[2];
          let arrow = selected.children[1];

          handleDropdown(selected, arrow, false);
        });
      }

      // open all the dropdowns
      function handleDropdown(dropdown, arrow, open) {
        if (open) {
          arrow.classList.add("rotated");
          dropdown.classList.add("active");
        } else {
          arrow.classList.remove("rotated");
          dropdown.classList.remove("active");
        }
      }
    },

    intializeSlick: function (e) {
      if ($(".logo-slider").length) {
        $(".logo-slider").slick({
          infinite: !0,
          slidesToShow: 6,
          arrows: !1,
          autoplay: !0,
          cssEase: "linear",
          autoplaySpeed: 0,
          speed: 3000,
          pauseOnFocus: !1,
          pauseOnHover: !1,
          // infinite: true,
          // slidesToShow: 6,
          // slidesToScroll: 1,
          // arrows: false,
          // centerPadding: '0px',
          // autoplay: true,
          // cssEase: 'linear',
          // autoplaySpeed: 2000,
          responsive: [
            
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                arrows: false
              },
            },
          ],
        });
      }
      if ($(".card-slider").length) {
        $(".card-slider").slick({
          slidesToShow: 3,
          autoplay: true,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerMode: false,
          responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".client-slider").length) {
        $(".client-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: '0px',
          centerMode: true,
          autoplay: true,
          dots: true,
          cssEase: 'linear',
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              },
            },
          ],
        });
      }
      if ($(".review-slider").length) {
        $(".review-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          fade: true,
          asNavFor: ".review-slider-nav",
          responsive: [
            {
              breakpoint: 1400,
              settings: {
                arrows: false,
              },
            }
          ],
        });
      }
      if ($(".review-slider-nav").length) {
        $(".review-slider-nav").slick({
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: ".review-slider",
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 1400,
              settings: {
                arrows: true,
              },
            },
            {
              breakpoint: 990,
              settings: {
                arrows: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
          ],
        });
      }
      if ($(".booking-slider").length) {
        $(".booking-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: ".booking-slider-nav",
        });
      }
      if ($(".booking-slider-nav").length) {
        $(".booking-slider-nav").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: ".booking-slider",
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 990,
              settings: {
                arrows: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
          ],
        });
      }

    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
    },
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "<h3 class='bg-primary text-white p-3 mt-3'>Email Sent Successfully</h3>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h3 class='bg-primary text-white p-3 mt-3'>There is an error</h3>";
              }
              $("#message").show("slow");
              $("#message").slideDown("slow");
              setTimeout(function () {
                $("#message").slideUp("hide");
                $("#message").hide("slow");
              }, 3000);
            },
          });
        } else {
          return false;
        }
      });
    },
    customSlector: function(){
      let cs = $('.custom_select');
      let csMenu = $('.select_menu');
      let csMenuOpt = $('.select_menu li')

      cs.click(function() {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).children('.select_menu').slideToggle(300);
      })
      cs.focusout(function() {
        $(this).removeClass('active');
        $(this).children('.select_menu').slideUp(300);
      })
      csMenuOpt.click(function() {
        var div = $(this).html();
        $('.selected').children().replaceWith(div)
      })
    },
    bar: function () {

    },

  }
  Init.i();
})(window, document, jQuery);


