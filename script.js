```javascript
/* ==========================================
   LANGUAGEFEELING JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE NAVIGATION
       ========================================== */

    const menuButton = document.getElementById("mobileMenuBtn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-active");

            menuButton.textContent =
                navLinks.classList.contains("mobile-active")
                ? "✕"
                : "☰";

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("mobile-active");
                menuButton.textContent = "☰";

            });

        });

    }

    /* ==========================================
       FAQ ACCORDION
       ========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach(faq => {
                faq.classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
            }

        });

    });

    /* ==========================================
       SCROLL REVEAL ANIMATIONS
       ========================================== */

    const revealElements = document.querySelectorAll(
        ".section, .pricing-card, .service-card, .approach-card, .location-card, .credibility-card"
    );

    revealElements.forEach(el => {
        el.classList.add("reveal");
    });

    const revealOnScroll = () => {

        const triggerBottom =
            window.innerHeight * 0.88;

        revealElements.forEach(element => {

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }

        });

    };

    revealOnScroll();

    window.addEventListener(
        "scroll",
        revealOnScroll,
        { passive: true }
    );

    /* ==========================================
       ACTIVE NAVIGATION LINK
       ========================================== */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    const highlightCurrentSection = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active-link");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active-link");
            }

        });

    };

    window.addEventListener(
        "scroll",
        highlightCurrentSection,
        { passive: true }
    );

    highlightCurrentSection();

    /* ==========================================
       SMOOTH SCROLL FOR INTERNAL LINKS
       ========================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const targetId =
                    this.getAttribute("href");

                if (targetId === "#") return;

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                e.preventDefault();

                const navbarHeight =
                    document.querySelector(".navbar")
                    ?.offsetHeight || 80;

                const targetPosition =
                    target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            });

        });

    /* ==========================================
       NAVBAR SHADOW ON SCROLL
       ========================================== */

    const navbar =
        document.querySelector(".navbar");

    const updateNavbar = () => {

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.08)";

        } else {

            navbar.style.boxShadow =
                "0 2px 15px rgba(0,0,0,0.05)";

        }

    };

    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    /* ==========================================
       INTERSECTION OBSERVER
       PERFORMANCE BOOST
       ========================================== */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "active"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        document
            .querySelectorAll(".reveal")
            .forEach(el => observer.observe(el));
    }

    /* ==========================================
       CURRENT YEAR AUTO UPDATE
       ========================================== */

    const footerYear =
        document.querySelector(".footer-year");

    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }

});
```
