/* =========================================================
   ICARUS WIND & SOLAR
   Interactive dashboard behaviour
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ECOSCORE OPENING ANIMATION
       ----------------------------------------------------- */

    const ecoScore = document.querySelector(".ecoscore-ring");

    if (ecoScore) {
        setTimeout(() => {
            ecoScore.classList.add("animate-in");
        }, 180);
    }


    /* -----------------------------------------------------
       QUARTERLY LINE GRAPH ANIMATION
       ----------------------------------------------------- */

    const graphLines = document.querySelectorAll(".trend-line");
    const graphPoints = document.querySelectorAll(".trend-point");

    if (graphLines.length) {
        setTimeout(() => {
            graphLines.forEach((line, index) => {
                setTimeout(() => {
                    line.classList.add("animate-line");
                }, index * 180);
            });
        }, 550);
    }

    if (graphPoints.length) {
        graphPoints.forEach((point, index) => {
            setTimeout(() => {
                point.classList.add("show-point");
            }, 850 + (index * 90));
        });
    }


    /* -----------------------------------------------------
       SCOPE 1 / 2 / 3 INFORMATION
       -----------------------------------------------------

       Desktop:
       Hovering over a scope item shows the explanation
       through CSS.

       Touch devices:
       Tapping a scope item keeps the explanation visible.
       Tapping another scope closes the previous one.
       ----------------------------------------------------- */

    const scopeItems = document.querySelectorAll(".scope-item");

    scopeItems.forEach(item => {

        item.addEventListener("click", event => {
            event.stopPropagation();

            const alreadyActive = item.classList.contains("active");

            scopeItems.forEach(scope => {
                scope.classList.remove("active");
            });

            if (!alreadyActive) {
                item.classList.add("active");
            }
        });

    });


    /* -----------------------------------------------------
       CLOSE SCOPE POP-UP WHEN CLICKING ELSEWHERE
       ----------------------------------------------------- */

    document.addEventListener("click", () => {
        scopeItems.forEach(item => {
            item.classList.remove("active");
        });
    });


    /* -----------------------------------------------------
       ICARUS TITLE TOOLTIP
       ----------------------------------------------------- */

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


    /* -----------------------------------------------------
       PREVENT TOOLTIP CLICK FROM CLOSING IT
       ----------------------------------------------------- */

    const tooltip = document.querySelector(".icarus-tooltip");

    if (tooltip) {
        tooltip.addEventListener("click", event => {
            event.stopPropagation();
        });
    }

});
