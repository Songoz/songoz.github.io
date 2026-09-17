```javascript
/* =========================================================
   ICARUS WIND & SOLAR
   INTERACTIVE CASE STUDY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ICARUS TITLE INFORMATION
    ===================================================== */

    const titleWrap =
        document.querySelector(".icarus-title-wrap");

    const titleTrigger =
        document.querySelector(".title-info-trigger");


    if (titleWrap && titleTrigger) {

        titleTrigger.addEventListener("click", event => {

            event.stopPropagation();

            titleWrap.classList.toggle("tooltip-active");

        });


        document.addEventListener("click", event => {

            if (!titleWrap.contains(event.target)) {

                titleWrap.classList.remove(
                    "tooltip-active"
                );

            }

        });

    }


    /* =====================================================
       SCOPE INFORMATION
    ===================================================== */

    const scopeCards =
        document.querySelectorAll(
            ".scope-hover-card"
        );

    const ecoHotspots =
        document.querySelectorAll(
            ".eco-hotspot"
        );

    const scopeItems =
        document.querySelectorAll(
            ".scope-item"
        );


    function hideScopeCards() {

        scopeCards.forEach(card => {

            card.classList.remove("visible");

        });

    }


    function clearScopeActiveStates() {

        ecoHotspots.forEach(button => {

            button.classList.remove("active");

        });

        scopeItems.forEach(item => {

            item.classList.remove("active");

        });

    }


    function showScope(scope) {

        hideScopeCards();

        clearScopeActiveStates();


        scopeCards.forEach(card => {

            if (
                card.dataset.scopeInfo === scope
            ) {

                card.classList.add("visible");

            }

        });


        ecoHotspots.forEach(button => {

            if (
                button.dataset.scope === scope
            ) {

                button.classList.add("active");

            }

        });


        scopeItems.forEach(item => {

            if (
                item.dataset.scope === scope
            ) {

                item.classList.add("active");

            }

        });

    }


    /* =====================================================
       ECOSCORE HOTSPOTS
    ===================================================== */

    ecoHotspots.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                showScope(
                    button.dataset.scope
                );

            }
        );


        button.addEventListener(
            "focus",
            () => {

                showScope(
                    button.dataset.scope
                );

            }
        );


        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                showScope(
                    button.dataset.scope
                );

            }
        );

    });


    /* =====================================================
       EMISSIONS BREAKDOWN
    ===================================================== */

    scopeItems.forEach(item => {

        item.addEventListener(
            "mouseenter",
            () => {

                showScope(
                    item.dataset.scope
                );

            }
        );


        item.addEventListener(
            "focus",
            () => {

                showScope(
                    item.dataset.scope
                );

            }
        );


        item.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                showScope(
                    item.dataset.scope
                );

            }
        );

    });


    /* =====================================================
       KEEP POPUP OPEN WHILE HOVERING DATA AREA
    ===================================================== */

    const climateDashboard =
        document.querySelector(
            ".climate-dashboard"
        );


    if (climateDashboard) {

        climateDashboard.addEventListener(
            "mouseleave",
            () => {

                if (
                    window.innerWidth > 760
                ) {

                    hideScopeCards();

                    clearScopeActiveStates();

                }

            }
        );

    }


    /* =====================================================
       TREND CHART OBSERVER
    ===================================================== */

    const trendCharts =
        document.querySelectorAll(
            ".trend-chart"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const chartObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "chart-visible"
                            );

                            chartObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.25
                }
            );


        trendCharts.forEach(chart => {

            chartObserver.observe(chart);

        });

    }


    /* =====================================================
       NAVIGATION ACTIVE STATE
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navigationLinks =
        document.querySelectorAll(
            ".case-nav-link"
        );


    navigationLinks.forEach(link => {

        const href =
            link.getAttribute("href");


        if (
            href &&
            href !== "#" &&
            href === currentPage
        ) {

            navigationLinks.forEach(navLink => {

                navLink.classList.remove(
                    "active"
                );

            });

            link.classList.add(
                "active"
            );

        }

    });


    /* =====================================================
       HERO IMAGE FALLBACK
    ===================================================== */

    const heroImage =
        document.querySelector(
            ".hero-image"
        );


    if (heroImage) {

        heroImage.addEventListener(
            "error",
            () => {

                const hero =
                    document.querySelector(
                        ".icarus-hero"
                    );


                if (hero) {

                    hero.style.background =
                        "linear-gradient(135deg, #102f46, #416f60)";

                }

                heroImage.style.display =
                    "none";

            }
        );

    }


    /* =====================================================
       KEYBOARD ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                hideScopeCards();

                clearScopeActiveStates();

                if (titleWrap) {

                    titleWrap.classList.remove(
                        "tooltip-active"
                    );

                }

            }

        }
    );

});
```
