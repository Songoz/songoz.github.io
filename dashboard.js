/* =====================================================
   PORTFOLIO DASHBOARD INTERACTIONS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       FALLING LEAVES
    ================================================= */

    const leavesContainer =
        document.querySelector("#falling-leaves");

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    function createFallingLeaf() {

        if (!leavesContainer || reducedMotion) {
            return;
        }

        const leaf =
            document.createElement("span");

        leaf.classList.add("falling-leaf");

        const startPosition =
            Math.random() * 85 + 5;

        const duration =
            Math.random() * 5 + 7;

        const size =
            Math.random() * 7 + 7;

        const rotation =
            Math.random() * 180;

        leaf.style.left =
            startPosition + "%";

        leaf.style.width =
            size + "px";

        leaf.style.height =
            size * 1.4 + "px";

        leaf.style.animationDuration =
            duration + "s";

        leaf.style.transform =
            `rotate(${rotation}deg)`;

        leavesContainer.appendChild(leaf);


        setTimeout(() => {

            leaf.remove();

        }, duration * 1000);

    }


    function beginLeafFall() {

        if (!leavesContainer || reducedMotion) {
            return;
        }

        createFallingLeaf();

        const nextLeaf =
            Math.random() * 1200 + 900;

        setTimeout(
            beginLeafFall,
            nextLeaf
        );

    }


    beginLeafFall();


    /* =================================================
       EXPANDABLE PROJECT OUTLINES
    ================================================= */

    const detailButtons =
        document.querySelectorAll(".details-toggle");


    detailButtons.forEach(button => {

        button.addEventListener("click", () => {

            const targetId =
                button.getAttribute("aria-controls");

            const target =
                document.getElementById(targetId);

            if (!target) {
                return;
            }

            const isOpen =
                target.classList.toggle("open");

            button.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            const symbol =
                button.querySelector("span");

            if (symbol) {

                symbol.textContent =
                    isOpen ? "−" : "+";

            }

        });

    });


    /* =================================================
       NAVIGATION SCROLL
    ================================================= */

    const navigationLinks =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );


    navigationLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: reducedMotion
                        ? "auto"
                        : "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =================================================
       FOOTER YEAR / OPTIONAL
    ================================================= */

    const currentYear =
        document.querySelector("[data-current-year]");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});
