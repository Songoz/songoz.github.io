/* =====================================================
   ESG DASHBOARD
   ===================================================== */


/* =====================================================
   CASE STUDY NAVIGATION
   ===================================================== */

const caseStudyButtons =
    document.querySelectorAll(".case-study-button");


caseStudyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const section =
            button.dataset.section;


        /*
           The first section currently has a
           completed case study page.
        */

        if (section === "people") {

            window.location.href =
                "company.html";

            return;
        }


        /*
           These sections are intentionally
           reserved for future case studies.
        */

        if (
            section === "climate" ||
            section === "resources" ||
            section === "governance"
        ) {

            showComingSoon(section);

        }

    });

});



/* =====================================================
   FUTURE SECTION MESSAGE
   ===================================================== */

function showComingSoon(section) {

    const names = {

        climate:
            "Climate & Emissions",

        resources:
            "Resources & Circularity",

        governance:
            "Governance & Ethics"

    };


    const sectionName =
        names[section];


    if (!sectionName) {
        return;
    }


    /*
       Rather than navigating to an empty page,
       temporarily give the user a small message.
    */

    const existingMessage =
        document.querySelector(
            ".coming-soon-message"
        );


    if (existingMessage) {

        existingMessage.remove();

    }


    const message =
        document.createElement("div");


    message.className =
        "coming-soon-message";


    message.innerHTML = `
        <strong>${sectionName}</strong>
        <span>This case study section will be developed next.</span>
    `;


    document.body.appendChild(message);


    setTimeout(function() {

        message.classList.add("visible");

    }, 20);


    setTimeout(function() {

        message.classList.remove("visible");

        setTimeout(function() {

            message.remove();

        }, 300);

    }, 2800);

}



/* =====================================================
   FALLING LEAVES
   ===================================================== */

const fallingLeafContainer =
    document.querySelector("#falling-leaves");


function createFallingLeaf() {

    if (!fallingLeafContainer) {
        return;
    }


    const leaf =
        document.createElement("span");


    leaf.className =
        "falling-leaf";


    /*
       Leaves should begin around the
       outer canopy rather than randomly
       across the entire screen.
    */

    const startingPositions = [
        25,
        31,
        38,
        45,
        53,
        60,
        67,
        73
    ];


    const position =
        startingPositions[
            Math.floor(
                Math.random() *
                startingPositions.length
            )
        ];


    leaf.style.left =
        position + "%";


    /*
       Give every leaf a slightly
       different fall.
    */

    const duration =
        5.5 +
        Math.random() * 4;


    leaf.style.setProperty(
        "--fall-duration",
        duration + "s"
    );


    const driftOne =
        (-35 + Math.random() * 70) + "px";

    const driftTwo =
        (-80 + Math.random() * 160) + "px";

    const driftThree =
        (-110 + Math.random() * 220) + "px";

    const driftFour =
        (-140 + Math.random() * 280) + "px";


    leaf.style.setProperty(
        "--drift-one",
        driftOne
    );

    leaf.style.setProperty(
        "--drift-two",
        driftTwo
    );

    leaf.style.setProperty(
        "--drift-three",
        driftThree
    );

    leaf.style.setProperty(
        "--drift-four",
        driftFour
    );


    /*
       Slight differences in size
       prevent the leaves from looking
       cloned.
    */

    const size =
        0.75 +
        Math.random() * 0.6;


    leaf.style.transform =
        `scale(${size})`;


    fallingLeafContainer.appendChild(leaf);


    /*
       Remove the leaf after it finishes
       so the DOM does not fill with
       hundreds of old leaves.
    */

    setTimeout(function() {

        leaf.remove();

    }, (duration + 1) * 1000);

}



/* =====================================================
   START FALLING LEAF LOOP
   ===================================================== */

function startLeafAnimation() {

    /*
       Create the first leaf shortly
       after the page loads.
    */

    setTimeout(function() {

        createFallingLeaf();

    }, 1800);


    /*
       Then approximately one leaf every
       1.8 to 2.5 seconds.
    */

    setInterval(function() {

        createFallingLeaf();

    }, 2100);

}


startLeafAnimation();



/* =====================================================
   PAGE LOAD FADE
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        document.body.classList.add(
            "dashboard-loaded"
        );

    }
);
