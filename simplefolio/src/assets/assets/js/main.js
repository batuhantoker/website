/**
* Template Name: Personal - v2.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  fetch('https://api.github.com/users/batuhantoker/repos?page=1&per_page=1000')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {

     // Get the placeholder element
  const repoList = document.querySelector('#repo-list');

  // Clear the repository list
  repoList.innerHTML = '';
    
    // Loop through the repository data and create a list item for each repository
    data.forEach(repo => {
      // Create the list item
      const li = document.createElement('li');

      // Create the repository link
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.textContent = repo.name;
      link.style.color = "#4C514B"; // set color of repo name to #4C514B
      // Set the target attribute to "_blank"
      link.target = "_blank";
      // Add the link to the list item
      li.appendChild(link);

      // Add a space between the repository name and the "More info" link
      li.appendChild(document.createTextNode(' '));

      // Add the "More info" link, if a description exists
      if (repo.description) {
        const moreInfoLink = document.createElement('a');
        moreInfoLink.href = '#';
        moreInfoLink.style.marginLeft = '10px';
        moreInfoLink.style.color = 'green';
        moreInfoLink.style.fontWeight = 'bold'; // set fontWeight to 'bold'
        moreInfoLink.textContent = '[+ More info]';

        // Create the description element and hide it by default
        const description = document.createElement('p');
        description.textContent = repo.description;
        description.style.color = "#526664"; // set color of description to #526664
        description.style.display = 'none';

        // Add the "More info" link and description to the list item
        li.appendChild(moreInfoLink);
        li.appendChild(description);

        // Add an event listener to the "More info" link to toggle the description visibility
        moreInfoLink.addEventListener('click', event => {
          event.preventDefault();
          description.style.display =
            description.style.display === 'none' ? 'block' : 'none';
        });
      }

      // Add the list item to the repository list
      repoList.appendChild(li);
    });
  });

  function updateRepoList(data) {
    // Get the placeholder element
    const repoList = document.querySelector('#repo-list');
  
    // Clear the repository list
    repoList.innerHTML = '';
  
    // Loop through the repository data and create a list item for each repository
    data.forEach(repo => {
      // Create the list item
      const li = document.createElement('li');
  
      // Create the repository link
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.style.fontWeight = 'bold';
      link.textContent = repo.name;
      
      // Add the link to the list item
      li.appendChild(link);
  
      // Add a space between the repository name and the "More info" link
      li.appendChild(document.createTextNode(' '));
  
      // Add the "More info" link, if a description exists
      if (repo.description) {
        const moreInfoLink = document.createElement('a');
        moreInfoLink.href = '#';
        moreInfoLink.style.marginLeft = '10px';
        moreInfoLink.style.color = 'green';
        moreInfoLink.style.fontWeight = 'bold'; // set fontWeight to 'bold'
        moreInfoLink.textContent = '[+ More info]';
          // Create the description element and hide it by default
  const description = document.createElement('p');
  description.textContent = repo.description;
  description.style.display = 'none';

  // Add the "More info" link and description to the list item
  li.appendChild(moreInfoLink);
  li.appendChild(description);

  // Add an event listener to the "More info" link to toggle the description visibility
  moreInfoLink.addEventListener('click', event => {
    event.preventDefault();
    description.style.display =
      description.style.display === 'none' ? 'block' : 'none';
  });
}

// Add the list item to the repository list
repoList.appendChild(li);
});
}



})(jQuery);