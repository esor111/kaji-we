jQuery(document).ready(function () {
  // Add state change to header on scroll  ****************************** //

  if (jQuery("#masthead").length) {
    var header = jQuery("#masthead");
    jQuery(window).scroll(function () {
      var scroll = jQuery(window).scrollTop();
      if (scroll >= 20) {
        header.addClass("header-scroll");
      } else {
        header.removeClass("header-scroll");
      }
    });
  }

  //Tabbed Content  ****************************** //

  if (jQuery(".tab-wrapper").length) {
    var jQuerywrapper = jQuery(".tab-wrapper"),
      jQueryallTabs = jQuerywrapper.find(
        ".tab-content > div.tab-content__wrapper"
      ),
      jQuerytabMenu = jQuerywrapper.find(".tab-menu li");

    jQueryallTabs.not(":first-of-type").hide();
    jQuerytabMenu.filter(":first-of-type").addClass("active");
    jQuerytabMenu.filter(":first-of-type").find(":first").width("100%");

    jQuerytabMenu.each(function (i) {
      jQuery(this).attr("data-tab", "tab" + i);
    });

    jQueryallTabs.each(function (i) {
      jQuery(this).attr("data-tab", "tab" + i);
    });

    jQuerytabMenu.on("click", function () {
      var dataTab = jQuery(this).data("tab"),
        jQuerygetWrapper = jQuery(this).closest(jQuerywrapper);

      jQuerygetWrapper.find(jQuerytabMenu).removeClass("active");
      jQuery(this).addClass("active");

      jQuerygetWrapper.find(jQueryallTabs).hide();
      jQuerygetWrapper
        .find(jQueryallTabs)
        .filter("[data-tab=" + dataTab + "]")
        .show();
    });
  }

  // Tabbed Content Mobile - Optional  ****************************** //

  if (jQuery(".tab-mobile-wrapper").length) {
    jQuery(".tab-mobile-single-wrap .tab-information").slideUp();
    jQuery(".tab-mobile-single-wrap:first-of-type").addClass("active");
    jQuery(".tab-mobile-single-wrap:first-of-type .tab-information").slideDown();

    jQuery(".tab-topic").on("click", function () {
      const parentWrap = jQuery(this).closest(".tab-mobile-single-wrap");

      if (parentWrap.hasClass("active")) {
        parentWrap.removeClass("active");
        parentWrap.find(".tab-information").slideUp();
      } else {
        jQuery(".tab-mobile-single-wrap").removeClass("active");
        jQuery(".tab-information").slideUp();

        parentWrap.addClass("active");
        parentWrap.find(".tab-information").slideDown();
      }
    });
  }

  // Reviews Tiny Slider  ****************************** //

  if (jQuery(".reviews__slider").length) {
    if (document.getElementsByClassName(".reviews__slider")) {
      let reviews_slider = tns({
        container: ".reviews__slider",
        loop: true,
        mouseDrag: true,
        items: 1,
        slideBy: 1,
        edgePadding: 0,
        gutter: 0,
        autoplay: true,
        autoplayButtonOutput: false,
        nav: false,
        controls: true,
        speed: 600,
      });
    }
  }

  // Trust Factor Tiny Slider For Hero Component  ****************************** //

  if (jQuery(".trust-factors__slider").length) {
    if (document.getElementsByClassName(".trust-factors__slider")) {
      let tf_slider = tns({
        container: ".trust-factors__slider",
        autoWidth: false,
        items: 2,
        slideBy: 1,
        gutter: 0,
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        nav: false,
        controls: false,
        speed: 600,
        loop: false,
        responsive: {
          400: {
            items: 3,
          },
          992: {
            items: 4,
          },
        },
      });
    }
  }

  if (jQuery(".faqs__wrapper").length) {
    jQuery(".faq-single:first-of-type").addClass("active");
    jQuery(".faq-single:first-of-type .faq-content").slideDown();

    jQuery(".faq-single").click(function () {
      if (jQuery(this).hasClass("active")) {
        jQuery(".faq-single").removeClass("active");
        jQuery(".faq-content").slideUp();
      } else {
        jQuery(".faq-single").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".faq-content").slideUp();
        jQuery(this).find(".faq-content").slideDown();
      }
    });
  }

  // process 

  if (jQuery(".process-steps").length) {
    var $ser_accordions = jQuery('.process-steps'),
      $ser_topTab = $ser_accordions.find('.process-steps-accordian');

    $ser_topTab.each(function (i) {
      jQuery(this).attr("data-tab", "tab" + i);
    });

    jQuery(".process-image-wrapper .pocess-image-box").each(function (i) {
      jQuery(this).attr("data-tab", "tab" + i);
    });

    $ser_topTab.removeClass('active').find('.process-btn').hide();
    $ser_topTab.filter(':first-of-type').addClass('active').find('.process-btn').slideDown();
    jQuery(".process-image-wrapper .pocess-image-box").removeClass("active")
      .filter(":first-of-type").addClass("active");
    jQuery('.process-steps .process-steps-accordian').click(function () {
      if (jQuery(this).hasClass('active')) return;
      var sermyEm = jQuery(this).attr("data-tab");
      $ser_topTab.removeClass("active").find(".process-btn").slideUp(300);
      jQuery(this).addClass("active").find(".process-btn").slideDown(300);
      jQuery('.pocess-image-box').removeClass("active");
      jQuery('.pocess-image-box[data-tab="' + sermyEm + '"]').addClass('active');
    });
  }

  if (jQuery(".mob-process-steps").length) {
    var $ser_accordions = jQuery('.mob-process-step'),
      $ser_topTab = $ser_accordions.find('.mob-process-steps-accordian');

    $ser_accordions.removeClass('active')
    $ser_topTab.find('.process-btn').slideUp();
    $ser_accordions.filter(':first-of-type').addClass('active').find('.process-btn').slideDown();
    $ser_accordions.find('.mob-process-image-wrapper').slideUp()
    $ser_accordions.filter(':first-of-type').addClass('active').find('.mob-process-image-wrapper').slideDown()
    jQuery('.mob-process-step').click(function () {
      if (jQuery(this).hasClass('active')) return;
      $ser_accordions.removeClass("active").find(".process-btn").slideUp(300);
      jQuery(this).addClass("active").find(".process-btn").slideDown(300);
      $ser_accordions.removeClass("active").find(".mob-process-image-wrapper").slideUp(300);
      jQuery(this).addClass("active").find(".mob-process-image-wrapper").slideDown(300);
    });
  }

  // Magnifi Pop-up  ****************************** //

  if (jQuery(".yt-video").length) {
    jQuery(document).ready(function (jQuery) {
      jQuery(".yt-video").magnificPopup({
        type: "iframe",
      });
    });
  }
  if (jQuery(".image-popup").length) {
    jQuery(document).ready(function (jQuery) {
      jQuery(".image-popup").magnificPopup({
        type: "image",
      });
    });
  }
  if (jQuery(".content-popup").length) {
    jQuery(document).ready(function (jQuery) {
      jQuery(".content-popup").magnificPopup({
        type: "inline",
        preloader: false,
        focus: "#name",
      });
    });
  }
  if (jQuery(".popup").length) {
    jQuery(document).ready(function (jQuery) {
      jQuery(".popup").magnificPopup({
        type: "iframe",
      });
    });
  }

  //Process Section

  jQuery(window).on('load scroll', function () {
  jQuery('.company-promise').each(function () {
    var $this = jQuery(this);
    if ($this.hasClass('show')) return;

    var elementTop = $this.offset().top;
    var elementBottom = elementTop + $this.outerHeight();
    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();

    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      $this.addClass('show');
        var signature = bodymovin.loadAnimation({
          container: document.getElementById('company_signature'),
          path: "../wp-content/themes/lorenz-plumbing-hvac/inc/img/Mike Signature Animation.json",
          autoplay: true,
          renderer: 'svg',
          loop: false
        })
    }
  });
});

  // Single post scroll progress  ****************************** //

  if (jQuery(".post-progress").length) {
    window.onscroll = function () {
      blogProgress();
    };
    function blogProgress() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("scroll-progress").style.width = scrolled + "%";
    }
  }

  // coupon print popup  ****************************** //

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  if (getUrlParameter('print') === '1') {
    const printSection = jQuery('.single-coupon-sec');
    if (printSection.length) {
      const printContent = printSection.clone();
      jQuery('body').empty().append(printContent);
      window.print();
    } else {
      console.log('No #single-coupon-sec found');
    }
  }

  // Header Search Lightbox  ****************************** //

  if (jQuery(".open-search-lightbox").length) {
    jQuery('.open-search-lightbox').magnificPopup({
      type: 'inline',
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-container',
      callbacks: {
        open: function () {
          jQuery('.search-popup').show();
        },
        beforeClose: function () {
          jQuery('.search-popup').hide();
        },
      }
    });
  }

  // Removes Card Links on PPC Page  ****************************** //

  jQuery(".page-template-page-ppc .card--block-link").on("click", function (e) {
    e.preventDefault();
  });
  jQuery(".page-template-page-ppc .ppc-no-link").on("click", function (e) {
    e.preventDefault();
  });

  // Facetwp Tab load after ****************************** //

  jQuery('.facetwp-page').on('click', function () {
    console.log(this);
    var mastHeight = jQuery('#masthead').outerHeight();
    jQuery('html, body').animate({
      scrollTop: jQuery(".filter-label").offset().top - mastHeight - 40
    }, 1000);
  });

  jQuery('.filters-wrap .facetwp-radio span').on('click', function () {
    var mastHeight = jQuery('#masthead').outerHeight();
    jQuery('html, body').animate({
      scrollTop: jQuery('.filter-label').offset().top - mastHeight - 40
    }, 1000);
  });

  jQuery(document).on("facetwp-loaded", function () {
    jQuery('.facetwp-page').on('click', function () {
      console.log(this);
      var mastHeight = jQuery('#masthead').outerHeight();
      jQuery('html, body').animate({
        scrollTop: jQuery(".filter-label").offset().top - mastHeight - 40
      }, 1000);
    });
    jQuery('.filters-wrap .facetwp-radio span').on('click', function () {
      var mastHeight = jQuery('#masthead').outerHeight();
      jQuery('html, body').animate({
        scrollTop: jQuery('.filter-label').offset().top - mastHeight - 40
      }, 1000);
    });
  });

  console.log("All Scrips Loaded");
}); // End Document.Ready

const service = document.querySelector('.services');
const process = document.querySelector('.process');
const blog = document.querySelector('.recent-articles');
const footercta = document.querySelector('.cta-banner');
const footer = document.querySelector('.site-footer');

if (service && process && service.nextElementSibling === process) {
  service.classList.add('before-process');
}

if (blog && footercta && blog.nextElementSibling === footercta) {
  blog.classList.add('before-cta');
}

if (footer && footercta && footer.previousElementSibling != footercta) {
  footer.classList.add('with-cta');
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const headerheight = header ? header.offsetHeight : 0;
  const noscrollclasses = ["card--block-link"];
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      if (noscrollclasses.some(cls => this.classList.contains(cls))) {
        return console.log(">>>> no scroll");
      }
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 20;
        const offsetPosition = targetPosition - headerheight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
