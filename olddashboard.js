/* =========================================
   SUSTAINABILITY DASHBOARD
   ========================================= */


/* -----------------------------------------
   TOPIC BUTTONS
   ----------------------------------------- */

const topicButtons = document.querySelectorAll(".topic-button");

topicButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const topic = button.dataset.topic;

        topicButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");


        /*
         * The current Dashboard is a landing page.
         * Selecting a topic takes the visitor to
         * the corresponding section of the company
         * case study.
         */

        if (topic === "people") {

            window.location.href =
                "company.html#people";

            return;
        }


        /*
         * These sections are prepared for future
         * case-study development.
         *
         * For now they lead to the company page.
         */

        if (
            topic === "overview" ||
            topic === "climate" ||
            topic === "resources" ||
            topic === "governance"
        ) {

            window.location.href =
                "company.html#" + topic;

        }

    });

});


/* -----------------------------------------
   FALLING LEAVES
   ----------------------------------------- */

const fallingLeavesContainer =
    document.querySelector("#falling-leaves");


function createFallingLeaf() {

    if (!fallingLeavesContainer) {
        return;
    }


    const leaf = document.createElement("span");

    leaf.classList.add("falling-leaf");


    /*
     * Start leaves at different positions
     * around the upper canopy.
     */

    const startPosition =
        25 + Math.random() * 50;

    leaf.style.left =
        startPosition + "%";

    leaf.style.top =
        (8 + Math.random() * 20) + "%";


    /*
     * Slight variation makes the leaves
     * feel less mechanically repeated.
     */

    const duration =
        5 + Math.random() * 3;

    const rotation =
        Math.random() * 360;

    leaf.style.animationDuration =
        duration + "s";

    leaf.style.transform =
        "rotate(" + rotation + "deg)";


    /*
     * Randomise leaf size.
     */

    const size =
        0.65 + Math.random() * 0.65;

    leaf.style.scale = size;


    fallingLeavesContainer.appendChild(leaf);


    /*
     * Remove the leaf once the animation
     * has finished so the page does not
     * accumulate hundreds of elements.
     */

    setTimeout(function () {

        leaf.remove();

    }, (duration + 0.5) * 1000);

}


/* -----------------------------------------
   CONTINUOUS LEAF FALL
   ----------------------------------------- */

function beginLeafFall() {

    createFallingLeaf();


    const nextLeaf =
        1200 + Math.random() * 900;


    setTimeout(
        beginLeafFall,
        nextLeaf
    );

}


/* -----------------------------------------
   START
   ----------------------------------------- */

beginLeafFall();
