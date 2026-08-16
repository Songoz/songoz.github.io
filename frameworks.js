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
   FIND ELEMENTS ON THE PAGE
   ========================================= */

const leaves =
    document.querySelectorAll(".framework-leaf");

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
   KEEP TRACK OF CURRENT FRAMEWORK
   ========================================= */

let currentFramework = null;


/* =========================================
   WHEN SOMEONE CLICKS A LEAF
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
       If the same framework is clicked again,
       don't restart everything.
       ------------------------------------- */

    if (currentFramework === framework) {
        return;
    }


    /* -------------------------------------
       Bring previously selected leaf back
       ------------------------------------- */

    leaves.forEach(function(item) {

        item.classList.remove("falling");

    });


    /* -------------------------------------
       Make the selected leaf fall
       ------------------------------------- */

    leaf.classList.add("falling");


    /* -------------------------------------
       Remember which framework is active
       ------------------------------------- */

    currentFramework = framework;


    /* -------------------------------------
       Wait for the leaf animation to finish
       before changing the dashboard.
       ------------------------------------- */

    setTimeout(function() {

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


        /* Open Overview tab */

        openTab("overview");

    }, 800);

}


/* =========================================
   DASHBOARD TAB SYSTEM
   ========================================= */

tabs.forEach(function(button) {

    button.addEventListener("click", function() {

        const tabName =
            button.dataset.tab;

        openTab(tabName);

    });

});


function openTab(tabName) {

    /* Remove active state from buttons */

    tabs.forEach(function(button) {

        button.classList.remove("active");

    });


    /* Remove active state from content */

    tabContents.forEach(function(content) {

        content.classList.remove("active");

    });


    /* Activate selected button */

    const selectedButton =
        document.querySelector(
            `[data-tab="${tabName}"]`
        );

    if (selectedButton) {

        selectedButton.classList.add("active");

    }


    /* Activate selected content */

    const selectedContent =
        document.getElementById(tabName);

    if (selectedContent) {

        selectedContent.classList.add("active");

    }

}
