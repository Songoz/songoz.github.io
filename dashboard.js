/* =========================================================
   RUFARO SONGORE
   SUSTAINABILITY DISCLOSURE LAB
   DASHBOARD JAVASCRIPT
   ========================================================= */


/* =========================================================
   FALLING LEAVES
   ========================================================= */

const fallingLeavesContainer =
    document.querySelector("#falling-leaves");


function createFallingLeaf() {

    if (!fallingLeavesContainer) {
        return;
    }


    const leaf =
        document.createElement("span");


    leaf.classList.add("falling-leaf");


    /* -----------------------------------------
       RANDOM START POSITION
       ----------------------------------------- */

    const startPosition =
        25 + Math.random() * 50;


    leaf.style.left =
        startPosition + "%";


    leaf.style.top =
        (8 + Math.random() * 20) + "%";


    /* -----------------------------------------
       RANDOM MOVEMENT
       ----------------------------------------- */

    const duration =
        5 + Math.random() * 3;


    const rotation =
        Math.random() * 360;


    leaf.style.animationDuration =
        duration + "s";


    leaf.style.transform =
        "rotate(" + rotation + "deg)";


    /* -----------------------------------------
       RANDOM SIZE
       ----------------------------------------- */

    const size =
        0.65 + Math.random() * 0.65;


    leaf.style.scale =
        size;


    /* -----------------------------------------
       ADD TO TREE
       ----------------------------------------- */

    fallingLeavesContainer.appendChild(leaf);


    /* -----------------------------------------
       REMOVE AFTER ANIMATION
       ----------------------------------------- */

    setTimeout(function () {

        leaf.remove();

    }, (duration + 0.5) * 1000);

}


/* =========================================================
   CONTINUOUS FALL
   ========================================================= */

function beginLeafFall() {

    createFallingLeaf();


    const nextLeaf =
        1200 + Math.random() * 900;


    setTimeout(
        beginLeafFall,
        nextLeaf
    );

}


/* =========================================================
   START
   ========================================================= */

beginLeafFall();
