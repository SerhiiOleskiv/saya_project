/* =============================================================================
   SAYA HOLISTIC SPA — main.js
   Vanilla JS · IIFE · No dependencies
   ============================================================================= */
(function () {
  'use strict';

  /* ==========================================================================
     1. NAV — scroll state
     ========================================================================== */
  var nav       = document.getElementById('nav');
  var stickyBar = document.getElementById('stickyBar');
  var heroSection = document.getElementById('home');

  function handleScroll() {
    var y = window.scrollY;

    nav.classList.toggle('nav--solid', y > 50);

    if (stickyBar && heroSection) {
      var heroH = heroSection.offsetHeight;
      var showBar = y > heroH * 0.65;
      stickyBar.classList.toggle('is-visible', showBar);
      stickyBar.setAttribute('aria-hidden', showBar ? 'false' : 'true');
      var stickyLink = stickyBar.querySelector('.sticky-bar__btn');
      if (stickyLink) { stickyLink.tabIndex = showBar ? 0 : -1; }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     2. MOBILE MENU
     ========================================================================== */
  var burger     = document.getElementById('navBurger');
  var mobileMenu = document.getElementById('mobileMenu');

  function getMenuLinks() {
    return mobileMenu ? mobileMenu.querySelectorAll('.mobile-menu__link, .mobile-menu__link--cta, .mobile-menu__instagram') : [];
  }

  function openMenu() {
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    getMenuLinks().forEach(function (l) { l.tabIndex = 0; });
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    getMenuLinks().forEach(function (l) { l.tabIndex = -1; });
    document.body.style.overflow = '';
  }

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      burger.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    getMenuLinks().forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.classList.contains('is-open')) {
        closeMenu();
        burger.focus();
      }
    });
  }

  /* ==========================================================================
     3. HERO ENTRANCE
     ========================================================================== */
  var heroBg    = document.getElementById('heroBg');
  var heroH1    = document.getElementById('heroH1');
  var heroCta   = document.getElementById('heroCta');

  function runHeroEntrance() {
    if (heroBg)  { heroBg.classList.add('is-loaded'); }
    setTimeout(function () {
      if (heroH1)  { heroH1.classList.add('is-visible'); }
    }, 120);
    setTimeout(function () {
      if (heroCta) { heroCta.classList.add('is-visible'); }
    }, 450);
  }

  if (document.readyState === 'complete') {
    runHeroEntrance();
  } else {
    window.addEventListener('load', runHeroEntrance);
  }

  /* ==========================================================================
     4. SCROLL REVEALS — IntersectionObserver
     ========================================================================== */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -36px 0px'
    });

    revealEls.forEach(function (el) { revealObs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ==========================================================================
     5. TREATMENT TABS
     ========================================================================== */
  var tabs = document.querySelectorAll('.tab');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var targetPanelId = tab.getAttribute('aria-controls');

      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', 'false');
      });

      document.querySelectorAll('.treatments__panel').forEach(function (p) {
        p.classList.add('treatments__panel--hidden');
      });

      tab.setAttribute('aria-selected', 'true');

      var panel = document.getElementById(targetPanelId);
      if (!panel) { return; }
      panel.classList.remove('treatments__panel--hidden');

      /* Reset to first list item in newly opened panel */
      panel.querySelectorAll('.t-list__item').forEach(function (item) {
        item.classList.remove('t-list__item--active');
        var btn = item.querySelector('.t-list__btn');
        if (btn) { btn.setAttribute('aria-expanded', 'false'); }
      });
      panel.querySelectorAll('.t-detail').forEach(function (d) {
        d.classList.add('t-detail--hidden');
      });

      var firstItem = panel.querySelector('.t-list__item');
      var firstBtn  = firstItem && firstItem.querySelector('.t-list__btn');
      if (firstItem) { firstItem.classList.add('t-list__item--active'); }
      if (firstBtn)  { firstBtn.setAttribute('aria-expanded', 'true'); }

      /* Show matching detail for first item */
      if (firstBtn) {
        var firstDetailId = 'detail-' + firstBtn.getAttribute('data-detail');
        var firstDetail   = document.getElementById(firstDetailId);
        if (firstDetail)  { firstDetail.classList.remove('t-detail--hidden'); }
      }
    });
  });

  /* ==========================================================================
     6. TREATMENT LIST ITEMS → DETAIL PANEL
     ========================================================================== */
  document.querySelectorAll('.t-list__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel    = btn.closest('.treatments__panel');
      var detailId = 'detail-' + btn.getAttribute('data-detail');

      panel.querySelectorAll('.t-list__item').forEach(function (item) {
        item.classList.remove('t-list__item--active');
        var b = item.querySelector('.t-list__btn');
        if (b) { b.setAttribute('aria-expanded', 'false'); }
      });
      panel.querySelectorAll('.t-detail').forEach(function (d) {
        d.classList.add('t-detail--hidden');
      });

      var parentItem = btn.closest('.t-list__item');
      if (parentItem) { parentItem.classList.add('t-list__item--active'); }
      btn.setAttribute('aria-expanded', 'true');

      var detail = document.getElementById(detailId);
      if (detail) { detail.classList.remove('t-detail--hidden'); }
    });
  });

  /* ==========================================================================
     7. TESTIMONIALS CAROUSEL
     ========================================================================== */
  var slides    = document.querySelectorAll('.testi-slide');
  var dots      = document.querySelectorAll('.testi-dot');
  var curSlide  = 0;
  var autoTimer = null;

  function goToSlide(idx) {
    slides[curSlide].classList.remove('testi-slide--active');
    slides[curSlide].setAttribute('aria-hidden', 'true');
    dots[curSlide].classList.remove('testi-dot--active');
    dots[curSlide].setAttribute('aria-current', 'false');

    curSlide = ((idx % slides.length) + slides.length) % slides.length;

    slides[curSlide].classList.add('testi-slide--active');
    slides[curSlide].removeAttribute('aria-hidden');
    dots[curSlide].classList.add('testi-dot--active');
    dots[curSlide].setAttribute('aria-current', 'true');
  }

  function startAutoplay() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function () { goToSlide(curSlide + 1); }, 5000);
  }

  if (slides.length > 0 && dots.length > 0) {
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goToSlide(parseInt(dot.getAttribute('data-slide'), 10));
        startAutoplay();
      });
    });

    /* Pause autoplay when section not visible */
    if ('IntersectionObserver' in window) {
      var testiSection = document.getElementById('testimonials');
      if (testiSection) {
        var testiObs = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            startAutoplay();
          } else {
            clearInterval(autoTimer);
          }
        }, { threshold: 0.3 });
        testiObs.observe(testiSection);
      }
    } else {
      startAutoplay();
    }
  }

  /* ==========================================================================
     8. SMOOTH SCROLL
     ========================================================================== */
  var NAV_HEIGHT = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '70',
    10
  );

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var hash = a.getAttribute('href');
      if (!hash || hash === '#') { return; }
      var target = document.querySelector(hash);
      if (!target) { return; }
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

}());
