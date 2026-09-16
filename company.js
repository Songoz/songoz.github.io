/* =========================================
   GALACTIC ENERGIES
   COMPANY CASE STUDY
   ========================================= */


/* -----------------------------------------
   COMPANY DATA
   ----------------------------------------- */

const companyData = {

    overview: {

        title: "Overview",

        label: "COMPANY PROFILE",

        intro:
            "Galactic Energies presents itself as an energy company focused on responsible development, employee opportunity and stronger relationships with the communities in which it operates.",

        status:
            "Illustrative reporting example"

    },


    climate: {

        title: "Climate & Emissions",

        label: "CLIMATE & EMISSIONS",

        intro:
            "Galactic Energies communicates its commitment to reducing its environmental footprint and transitioning towards lower-carbon operations.",

        status:
            "Illustrative disclosure"

    },


    resources: {

        title: "Resources & Circularity",

        label: "RESOURCES & CIRCULARITY",

        intro:
            "The company highlights responsible resource use, waste reduction and efforts to improve the efficiency of its operations.",

        status:
            "Illustrative disclosure"

    },


    people: {

        title: "People & Communities",

        label: "PEOPLE & COMMUNITIES",

        intro:
            "Galactic Energies describes itself as becoming a more inclusive workplace while expanding opportunities for women and supporting community initiatives.",

        status:
            "Illustrative greenwashing scenario"

    },


    governance: {

        title: "Governance & Ethics",

        label: "GOVERNANCE & ETHICS",

        intro:
            "Galactic Energies communicates its commitment to ethical leadership, responsible decision-making and stronger accountability.",

        status:
            "Illustrative disclosure"

    }

};


/* -----------------------------------------
   PAGE ELEMENTS
   ----------------------------------------- */

const companyButtons =
    document.querySelectorAll(
        ".company-topic-button"
    );


const sectionPanels =
    document.querySelectorAll(
        ".company-section-panel"
    );


const companyTitle =
    document.querySelector(
        "#company-section-title"
    );


const companyLabel =
    document.querySelector(
        "#company-section-label"
    );


const companyIntro =
    document.querySelector(
        "#company-section-intro"
    );


const companyStatus =
    document.querySelector(
        "#company-section-status"
    );


/* -----------------------------------------
   ACTIVATE COMPANY SECTION
   ----------------------------------------- */

function activateCompanySection(sectionName) {

    const data =
        companyData[sectionName];


    if (!data) {
        return;
    }


    /* -------------------------------------
       Update buttons
       ------------------------------------- */

    companyButtons.forEach(function (button) {

        button.classList.remove("active");

        if (
            button.dataset.topic === sectionName
        ) {

            button.classList.add("active");

        }

    });


    /* -------------------------------------
       Hide all panels
       ------------------------------------- */

    sectionPanels.forEach(function (panel) {

        panel.classList.remove("active");

    });


    /* -------------------------------------
       Show selected panel
       ------------------------------------- */

    const selectedPanel =
        document.querySelector(
            `[data-section="${sectionName}"]`
        );


    if (selectedPanel) {

        selectedPanel.classList.add("active");

    }


    /* -------------------------------------
       Update heading
       ------------------------------------- */

    if (companyTitle) {

        companyTitle.textContent =
            data.title;

    }


    /* -------------------------------------
       Update label
       ------------------------------------- */

    if (companyLabel) {

        companyLabel.textContent =
            data.label;

    }


    /* -------------------------------------
       Update introduction
       ------------------------------------- */

    if (companyIntro) {

        companyIntro.textContent =
            data.intro;

    }


    /* -------------------------------------
       Update status
       ------------------------------------- */

    if (companyStatus) {

        companyStatus.textContent =
            data.status;

    }

}


/* -----------------------------------------
   BUTTON INTERACTION
   ----------------------------------------- */

companyButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const sectionName =
                button.dataset.topic;


            activateCompanySection(
                sectionName
            );


            /*
             * Update the URL so that each
             * section can be opened directly.
             */

            history.replaceState(
                null,
                "",
                "#" + sectionName
            );

        }
    );

});


/* -----------------------------------------
   INITIAL PAGE STATE
   ----------------------------------------- */

function initialiseCompanyPage() {

    const hash =
        window.location.hash.replace(
            "#",
            ""
        );


    /*
     * If the Dashboard sent us to
     * company.html#people, open People.
     */

    if (
        hash &&
        companyData[hash]
    ) {

        activateCompanySection(hash);

        return;

    }


    /*
     * Otherwise People & Communities
     * is the default section.
     */

    activateCompanySection("people");

}


/* -----------------------------------------
   INITIALISE
   ----------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    initialiseCompanyPage
);
