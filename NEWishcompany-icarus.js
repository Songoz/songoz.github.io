/* =========================================================
   ICARUS WIND & SOLAR
   Interactive disclosure dashboard
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ECOSCORE OPENING ANIMATION
       ===================================================== */

    const ecoScore = document.querySelector(".ecoscore-ring");

    if (ecoScore) {
        setTimeout(() => {
            ecoScore.classList.add("animate-in");
        }, 180);
    }


    /* =====================================================
       QUARTERLY GRAPH ANIMATION
       ===================================================== */

    const graphLines = document.querySelectorAll(".trend-line");
    const graphPoints = document.querySelectorAll(".trend-point");

    graphLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add("animate-line");
        }, 650 + (index * 180));
    });

    graphPoints.forEach((point, index) => {
        setTimeout(() => {
            point.classList.add("show-point");
        }, 1050 + (index * 90));
    });


    /* =====================================================
       SCOPE 1 / 2 / 3 INFORMATION

       Desktop:
       Hover displays the information.

       Touch:
       Tap opens the information.
       ===================================================== */

    const scopeItems = document.querySelectorAll(".scope-item");

    scopeItems.forEach(item => {

        item.addEventListener("click", event => {
            event.stopPropagation();

            const wasActive = item.classList.contains("active");

            scopeItems.forEach(scope => {
                scope.classList.remove("active");
            });

            if (!wasActive) {
                item.classList.add("active");
            }
        });

    });


    /* =====================================================
       CLOSE SCOPE INFORMATION
       ===================================================== */

    document.addEventListener("click", () => {
        scopeItems.forEach(item => {
            item.classList.remove("active");
        });
    });


    /* =====================================================
       ICARUS TITLE EVALUATION

       Desktop hover is handled by CSS.
       Clicking is included for phones/tablets.
       ===================================================== */

    const titleWrap = document.querySelector(".icarus-title-wrap");

    if (titleWrap) {

        titleWrap.addEventListener("click", event => {
            event.stopPropagation();

            titleWrap.classList.toggle("tooltip-active");
        });

        document.addEventListener("click", () => {
            titleWrap.classList.remove("tooltip-active");
        });
    }


    /* =====================================================
       STOP TITLE TOOLTIP FROM CLOSING ITSELF
       ===================================================== */

    const tooltip = document.querySelector(".icarus-tooltip");

    if (tooltip) {
        tooltip.addEventListener("click", event => {
            event.stopPropagation();
        });
    }

});
