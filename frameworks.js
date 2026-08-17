/* =========================================
   FRAMEWORK INFORMATION
   ========================================= */

const frameworkData = {

    gri: {

        title: "Global Reporting Initiative",

        description:
            "A framework focused on helping organisations understand and communicate their impacts on people, the environment and the economy.",

        overview:
            "GRI provides a structured approach to reporting an organisation's impacts and communicating those impacts to stakeholders.",

        conceptOne:
            "Impact reporting",

        conceptTwo:
            "Material topics",

        conceptThree:
            "Stakeholder-focused disclosure"

    },


    esrs: {

        title: "European Sustainability Reporting Standards",

        description:
            "The ESRS provide the reporting requirements used under the European Union's Corporate Sustainability Reporting framework.",

        overview:
            "ESRS reporting connects sustainability impacts, risks and opportunities through the principle of double materiality.",

        conceptOne:
            "Double materiality",

        conceptTwo:
            "Impact & financial materiality",

        conceptThree:
            "Structured disclosures"

    },


    issb: {

        title: "IFRS S1 & S2 — ISSB",

        description:
            "Investor-focused sustainability standards designed to communicate sustainability-related risks and opportunities that may affect enterprise value.",

        overview:
            "ISSB standards organise sustainability-related information around governance, strategy, risk management, and metrics and targets.",

        conceptOne:
            "Enterprise value",

        conceptTwo:
            "Risks & opportunities",

        conceptThree:
            "Metrics & targets"

    },


    taxonomy: {

        title: "EU Taxonomy",

        description:
            "A classification system that helps determine whether economic activities can be considered environmentally sustainable.",

        overview:
            "The EU Taxonomy provides technical criteria for assessing whether economic activities contribute substantially to environmental objectives.",

        conceptOne:
            "Eligibility",

        conceptTwo:
            "Taxonomy alignment",

        conceptThree:
            "Environmental objectives"

    }

};


/* =========================================
   FIND FRAMEWORK LEAVES
   ========================================= */

const leaves =
    document.querySelectorAll(".leaf[data-framework]");


/* =========================================
   DASHBOARD ELEMENTS
   ========================================= */

const title =
    document.querySelector("#framework-title");

const description =
    document.querySelector("#framework-description");

const overviewText =
    document.querySelector("#overview-text");

const conceptOne =
    document.querySelector("#concept-one");

const conceptTwo =
    document.querySelector("#concept-two");

const conceptThree =
    document.querySelector("#concept-three");

const tabs =
    document.querySelectorAll(".tab-button");

const tabContents =
    document.querySelectorAll(".tab-content");


/* =========================================
   CURRENT FRAMEWORK
   ========================================= */

let currentFramework = null;


/* =========================================
   FRAMEWORK LEAF CLICK
   ========================================= */

leaves.forEach(function(leaf) {

    leaf.addEventListener("click", function() {

        const framework =
            leaf.dataset.framework;

        selectFramework(framework, leaf);

    });

});


/* =========================================
   SELECT FRAMEWORK
   ========================================= */
function selectFramework(framework, leaf) {

    const data =
        frameworkData[framework];


    /* -------------------------------------
       Prevent clicking the same leaf again
       ------------------------------------- */

    if (currentFramework === framework) {
        return;
    }


    /* -------------------------------------
       Remove previous states
       ------------------------------------- */

    leaves.forEach(function(item) {

        item.classList.remove("falling");
        item.classList.remove("active-leaf");

    });


    rootSplash.classList.remove("active");


    /* -------------------------------------
       Remember framework
       ------------------------------------- */

    currentFramework = framework;


    /* -------------------------------------
       Make selected leaf fall
       ------------------------------------- */

    leaf.classList.add("falling");


    /* -------------------------------------
       Wait until leaf reaches the roots
       ------------------------------------- */

    setTimeout(function() {

        /* Trigger splash */

        rootSplash.classList.remove("active");

        void rootSplash.offsetWidth;

        rootSplash.classList.add("active");


        /* ---------------------------------
           Update framework information
           --------------------------------- */

        title.textContent =
            data.title;

        description.textContent =
            data.description;

        overviewText.textContent =
            data.overview;

        conceptOne.textContent =
            data.conceptOne;

        conceptTwo.textContent =
            data.conceptTwo;

        conceptThree.textContent =
            data.conceptThree;


        /* Open Overview */

        openTab("overview");


    }, 2800);

}


        /*
           Create the splash effect.
        */

        createRootSplash();


        /*
           Reset the leaf so it can be clicked again.
        */

        setTimeout(function() {

            leaf.classList.remove("falling");
            leaf.classList.remove("active-leaf");

        }, 700);


    }, 1600);

}


/* =========================================
   DASHBOARD TABS
   ========================================= */

tabs.forEach(function(button) {

    button.addEventListener("click", function() {

        const tabName =
            button.dataset.tab;

        openTab(tabName);

    });

});


/* =========================================
   OPEN TAB
   ========================================= */

function openTab(tabName) {

    tabs.forEach(function(button) {

        button.classList.remove("active");

    });


    tabContents.forEach(function(content) {

        content.classList.remove("active");

    });


    const selectedButton =
        document.querySelector(
            `[data-tab="${tabName}"]`
        );


    if (selectedButton) {

        selectedButton.classList.add("active");

    }


    const selectedContent =
        document.getElementById(tabName);


    if (selectedContent) {

        selectedContent.classList.add("active");

    }

}


/* =========================================
   ROOT SPLASH
   ========================================= */

function createRootSplash() {

    const tree =
        document.querySelector(".big-tree");

    if (!tree) {
        return;
    }


    const splash =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
        );

    splash.classList.add("root-splash");


    /*
       Small droplets.
    */

    for (let i = 0; i < 8; i++) {

        const drop =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );

        drop.setAttribute("cx", 300);
        drop.setAttribute("cy", 710);

        drop.setAttribute(
            "r",
            Math.random() * 3 + 2
        );

        drop.style.setProperty(
            "--x",
            `${(Math.random() - 0.5) * 100}px`
        );

        drop.style.setProperty(
            "--y",
            `${-(Math.random() * 45 + 15)}px`
        );

        splash.appendChild(drop);

    }


    tree.appendChild(splash);


    setTimeout(function() {

        splash.remove();

    }, 900);

}
