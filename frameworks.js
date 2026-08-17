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
            "The ESRS provide the reporting requirements used under the European Union's sustainability reporting framework.",

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

const leaves = document.querySelectorAll(
    ".framework-leaf[data-framework]"
);


/* =========================================
   DASHBOARD ELEMENTS
   ========================================= */

const title = document.querySelector("#framework-title");

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
   ROOT SPLASH
   ========================================= */

const rootSplash =
    document.querySelector("#root-splash");


/* =========================================
   CURRENT FRAMEWORK
   ========================================= */

let currentFramework = null;


/* =========================================
   FRAMEWORK LEAF CLICK
   ========================================= */

leaves.forEach(function (leaf) {

    leaf.addEventListener("click", function () {

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

    if (!data) {
        return;
    }


    /* -------------------------------------
       Prevent repeated click
       ------------------------------------- */

    if (currentFramework === framework) {
        return;
    }


    /* -------------------------------------
       Reset other leaves
       ------------------------------------- */

    leaves.forEach(function (item) {

        item.classList.remove("falling");
        item.classList.remove("active-leaf");

    });


    /* -------------------------------------
       Reset splash
       ------------------------------------- */

    if (rootSplash) {

        rootSplash.classList.remove("active");

        /*
           Force browser reflow so the
           animation can play again.
        */

        void rootSplash.offsetWidth;
    }


    /* -------------------------------------
       Store current framework
       ------------------------------------- */

    currentFramework = framework;


    /* -------------------------------------
       Make selected leaf fall
       ------------------------------------- */

    leaf.classList.add("falling");


    /* -------------------------------------
       Wait for leaf to reach the roots
       ------------------------------------- */

    setTimeout(function () {


        /* ================================
           TRIGGER SPLASH
           ================================ */

        if (rootSplash) {

            rootSplash.classList.remove("active");

            void rootSplash.offsetWidth;

            rootSplash.classList.add("active");

        }


        /* ================================
           UPDATE DASHBOARD
           ================================ */

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


        /* ================================
           OPEN OVERVIEW TAB
           ================================ */

        openTab("overview");


    }, 2800);

}


/* =========================================
   DASHBOARD TABS
   ========================================= */

tabs.forEach(function (button) {

    button.addEventListener("click", function () {

        const tabName =
            button.dataset.tab;

        openTab(tabName);

    });

});


/* =========================================
   OPEN TAB
   ========================================= */

function openTab(tabName) {

    tabs.forEach(function (button) {

        button.classList.remove("active");

    });


    tabContents.forEach(function (content) {

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
