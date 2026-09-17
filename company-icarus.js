```javascript
/* =========================================================
   ICARUS WIND & SOLAR
   Interactive Case Study
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ECO SCORE SCOPE INTERACTION
    ===================================================== */

    const ecoScopeButtons = document.querySelectorAll(".eco-scope");
    const scopeCards = document.querySelectorAll(".scope-hover-card");

    function showScope(scope) {

        scopeCards.forEach(card => {
            card.classList.remove("visible");

            if (card.dataset.scopeInfo === scope) {
                card.classList.add("visible");
            }
        });

    }

    function hideScopes() {

        scopeCards.forEach(card => {
            card.classList.remove("visible");
        });

    }


    ecoScopeButtons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            showScope(button.dataset.scope);
        });

        button.addEventListener("focus", () => {
            showScope(button.dataset.scope);
        });

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            const scope = button.dataset.scope;

            const matchingCard = document.querySelector(
                `[data-scope-info="${scope}"]`
            );

            if (!matchingCard) return;

            const isVisible = matchingCard.classList.contains("visible");

            hideScopes();

            if (!isVisible) {
                matchingCard.classList.add("visible");
            }

        });

    });


    /* =====================================================
       EMISSIONS BREAKDOWN INTERACTION
    ===================================================== */

    const scopeItems = document.querySelectorAll(".scope-item");

    scopeItems.forEach(item => {

        item.addEventListener("mouseenter", () => {
            showScope(item.dataset.scope);
        });

        item.addEventListener("focus", () => {
            showScope(item.dataset.scope);
        });

        item.addEventListener("click", () => {

            scopeItems.forEach(scopeItem => {
                scopeItem.classList.remove("active");
            });

            item.classList.add("active");

            showScope(item.dataset.scope);

        });

    });


    /* =====================================================
       REMOVE SCOPE POPUPS WHEN LEAVING THE DATA AREA
    ===================================================== */

    const climateDashboard =
        document.querySelector(".climate-dashboard");

    if (climateDashboard) {

        climateDashboard.addEventListener("mouseleave", () => {

            if (window.innerWidth > 700) {
                hideScopes();
            }

        });

    }


    /* =====================================================
       HERO IMAGE FALLBACK
    ===================================================== */

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        heroImage.addEventListener("error", () => {

            heroImage.style.display = "none";

            const hero = document.querySelector(".icarus-hero");

            if (hero) {
                hero.style.background =
                    "linear-gradient(135deg, #102f46, #416f60)";
            }

        });

    }


    /* =====================================================
       INTERSECTION ANIMATION FOR TRENDS
    ===================================================== */

    const trendCharts =
        document.querySelectorAll(".trend-chart");

    const trendObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("chart-visible");

                        trendObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.25
            }
        );


    trendCharts.forEach(chart => {
        trendObserver.observe(chart);
    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navigationLinks =
        document.querySelectorAll(".case-nav-link");

    navigationLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            href &&
            href !== "#" &&
            href === currentPage
        ) {

            navigationLinks.forEach(navLink => {
                navLink.classList.remove("active");
            });

            link.classList.add("active");

        }

    });


    /* =====================================================
       KEYBOARD ESCAPE
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            hideScopes();

            scopeItems.forEach(item => {
                item.classList.remove("active");
            });

        }

    });

});
```
