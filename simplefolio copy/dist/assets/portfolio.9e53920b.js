!function(e){if(e(document).on("click",".nav-menu a, .mobile-nav a",(function(o){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=this.hash;if(e(t).length)return o.preventDefault(),e(this).parents(".nav-menu, .mobile-nav").length&&(e(".nav-menu .active, .mobile-nav .active").removeClass("active"),e(this).closest("li").addClass("active")),"#header"==t?(e("#header").removeClass("header-top"),void e("section").removeClass("section-show")):(e("#header").hasClass("header-top")?(e("section").removeClass("section-show"),e(t).addClass("section-show")):(e("#header").addClass("header-top"),setTimeout((function(){e("section").removeClass("section-show"),e(t).addClass("section-show")}),350)),e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").fadeOut()),!1)}})),window.location.hash){var o=window.location.hash;e(o).length&&(e("#header").addClass("header-top"),e(".nav-menu .active, .mobile-nav .active").removeClass("active"),e(".nav-menu, .mobile-nav").find('a[href="'+o+'"]').parent("li").addClass("active"),setTimeout((function(){e("section").removeClass("section-show"),e(o).addClass("section-show")}),350))}if(e(".nav-menu").length){var t=e(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"});e("body").append(t),e("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),e("body").append('<div class="mobile-nav-overly"></div>'),e(document).on("click",".mobile-nav-toggle",(function(o){e("body").toggleClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").toggle()})),e(document).click((function(o){var t=e(".mobile-nav, .mobile-nav-toggle");t.is(o.target)||0!==t.has(o.target).length||e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").fadeOut())}))}else e(".mobile-nav, .mobile-nav-toggle").length&&e(".mobile-nav, .mobile-nav-toggle").hide();e('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3}),e(".skills-content").waypoint((function(){e(".progress .progress-bar").each((function(){e(this).css("width",e(this).attr("aria-valuenow")+"%")}))}),{offset:"80%"}),e(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:1},768:{items:2},900:{items:3}}});var n,a=document.getElementsByClassName("collapsible");for(n=0;n<a.length;n++)a[n].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}));e(window).on("load",(function(){var o=e(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});e("#portfolio-flters li").on("click",(function(){e("#portfolio-flters li").removeClass("filter-active"),e(this).addClass("filter-active"),o.isotope({filter:e(this).data("filter")})}))})),e(document).ready((function(){e(".venobox").venobox()})),fetch("https://api.github.com/users/batuhantoker/repos?page=1&per_page=1000").then((e=>e.json())).then((e=>{const o=document.querySelector("#repo-list");o.innerHTML="",e.forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");if(n.href=e.html_url,n.textContent=e.name,n.style.color="#4C514B",n.target="_blank",t.appendChild(n),t.appendChild(document.createTextNode(" ")),e.description){const o=document.createElement("a");o.href="#",o.style.marginLeft="10px",o.style.color="green",o.style.fontWeight="bold",o.textContent="[+ More info]";const n=document.createElement("p");n.textContent=e.description,n.style.color="#526664",n.style.display="none",t.appendChild(o),t.appendChild(n),o.addEventListener("click",(e=>{e.preventDefault(),n.style.display="none"===n.style.display?"block":"none"}))}o.appendChild(t)}))}))}(jQuery);
//# sourceMappingURL=portfolio.9e53920b.js.map
