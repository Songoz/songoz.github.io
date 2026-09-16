/* =========================================
   GALACTIC ENERGIES
   SUSTAINABILITY REPORTING CASE STUDY
   ========================================= */


/* -----------------------------------------
   CASE STUDY CONTENT
   ----------------------------------------- */

const companyData = {

    overview: {
        title: "Overview",

        label: "COMPANY PROFILE",

        intro:
            "Galactic Energies presents itself as a company focused on responsible energy development, employee opportunity and stronger relationships with the communities in which it operates.",

        description:
            "This illustrative case study examines how sustainability information can become difficult to evaluate when broad statements, attractive imagery and percentages are presented without enough supporting information.",

        status:
            "Illustrative reporting example"
    },

    climate: {
        title: "Climate & Emissions",

        label: "CLIMATE & EMISSIONS",

        intro:
            "Galactic Energies communicates its commitment to reducing its environmental footprint and transitioning towards lower-carbon operations.",

        description:
            "The section is intentionally presented as an example of a disclosure where positive environmental language may appear persuasive while important details such as boundaries, baselines, methodologies and progress against targets remain unclear.",

        status:
            "Illustrative disclosure"
    },

    resources: {
        title: "Resources & Circularity",

        label: "RESOURCES & CIRCULARITY",

        intro:
            "The company highlights responsible resource use, waste reduction and efforts to improve the efficiency of its operations.",

        description:
            "The example demonstrates how statements about circularity can be difficult for stakeholders to assess when the underlying quantities, definitions, reporting boundaries and outcomes are not clearly disclosed.",

        status:
            "Illustrative disclosure"
    },

    people: {
        title: "People & Communities",

        label: "PEOPLE & COMMUNITIES",

        intro:
            "Galactic Energies describes itself as becoming a more inclusive workplace while expanding opportunities for women and supporting community initiatives.",

        description:
            "This section deliberately demonstrates a weak form of sustainability disclosure. The language sounds positive, but the evidence underneath the claims is limited.",

        status:
            "Illustrative greenwashing scenario"
    },

    governance: {
        title: "Governance & Ethics",

        label: "GOVERNANCE & ETHICS",

        intro:
            "Galactic Energies communicates its commitment to ethical leadership, responsible decision-making and stronger accountability.",

        description:
            "The example highlights the importance of explaining how governance commitments are measured rather than relying solely on broad statements about values and responsibility.",

        status:
            "Illustrative disclosure"
    }

};


/* -----------------------------------------
   PAGE ELEMENTS
   ----------------------------------------- */

const topicButtons = document.querySelectorAll(".company-topic-button");

const companyTitle = document.querySelector("#company-section-title");
const companyLabel = document.querySelector("#company-section-label");
const companyIntro = document.querySelector("#company-section-intro");
const companyDescription = document.querySelector("#company-section-description");
const companyStatus = document.querySelector("#company-section-status");

const sectionPanels = document.querySelectorAll(".company-section-panel");


/* -----------------------------------------
   INITIALISE PAGE
   ----------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {

    const requestedSection = window.location.hash.replace("#", "");

    if (requestedSection && companyData[requestedSection]) {
        activateSection(requestedSection);
    } else {
        activateSection("people");
    }

});


/* -----------------------------------------
   TOPIC BUTTONS
   ----------------------------------------- */

topicButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedTopic = button.dataset.topic;

        if (!companyData[selectedTopic]) {
            return;
        }

        activateSection(selectedTopic);

        /*
         * Update the URL without forcing
         * the browser to reload the page.
         */

        history.replaceState(
            null,
            "",
            "#" + selectedTopic
        );

    });

});


/* -----------------------------------------
   ACTIVATE SECTION
   ----------------------------------------- */

function activateSection(sectionName) {

    const data = companyData[sectionName];

    if (!data) {
        return;
    }


    /* -------------------------------------
       Update active navigation button
       ------------------------------------- */

    topicButtons.forEach(function (button) {

        button.classList.remove("active");

        if (button.dataset.topic === sectionName) {
            button.classList.add("active");
        }

    });


    /* -------------------------------------
       Hide all content panels
       ------------------------------------- */

    sectionPanels.forEach(function (panel) {

        panel.classList.remove("active");

    });


    /* -------------------------------------
       Show selected panel
       ------------------------------------- */

    const selectedPanel = document.querySelector(
        `[data-section="${sectionName}"]`
    );

    if (selectedPanel) {
        selectedPanel.classList.add("active");
    }


    /* -------------------------------------
       Update main heading
       ------------------------------------- */

    if (companyTitle) {
        companyTitle.textContent = data.title;
    }


    /* -------------------------------------
       Update section label
       ------------------------------------- */

    if (companyLabel) {
        companyLabel.textContent = data.label;
    }


    /* -------------------------------------
       Update introduction
       ------------------------------------- */

    if (companyIntro) {
        companyIntro.textContent = data.intro;
    }


    /* -------------------------------------
       Update description
       ------------------------------------- */

    if (companyDescription) {
        companyDescription.textContent = data.description;
    }


    /* -------------------------------------
       Update status
       ------------------------------------- */

    if (companyStatus) {
        companyStatus.textContent = data.status;
    }

}


/* -----------------------------------------
   COMPANY TOOLTIP
   ----------------------------------------- */

const companyName = document.querySelector(".company-name-trigger");
const companyTooltip = document.querySelector(".company-tooltip");

if (companyName && companyTooltip) {

    companyName.addEventListener("mouseenter", function () {
        companyTooltip.classList.add("visible");
    });

    companyName.addEventListener("mouseleave", function () {
        companyTooltip.classList.remove("visible");
    });

}


/* -----------------------------------------
   TRANSPARENCY CHECKS
   ----------------------------------------- */

const transparencyItems = document.querySelectorAll(
    ".transparency-item"
);

transparencyItems.forEach(function (item) {

    item.addEventListener("click", function () {

        item.classList.toggle("expanded");

    });

});


/* -----------------------------------------
   CLAIM CARDS
   ----------------------------------------- */

const claimCards = document.querySelectorAll(".claim-card");

claimCards.forEach(function (card) {

    card.addEventListener("click", function () {

        card.classList.toggle("expanded");

    });

});


/* -----------------------------------------
   REDUCED MOTION
   ----------------------------------------- */

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (prefersReducedMotion.matches) {

    document.documentElement.classList.add(
        "reduced-motion"
    );

}
