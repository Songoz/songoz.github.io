```css
/* =========================================================
   ICARUS WIND & SOLAR
   Climate & Emissions Case Study
========================================================= */


/* =========================================================
   VARIABLES
========================================================= */

:root {
    --icarus-blue: #102f46;
    --icarus-blue-deep: #0b2437;

    --icarus-green: #5f8f7d;
    --icarus-green-dark: #416f60;
    --icarus-green-light: #dbe8e1;

    --icarus-gold: #c6a15b;

    --sheet: #f8f8f5;
    --white: #ffffff;

    --ink: #20302d;
    --muted: #687570;

    --line: #dce3df;
    --line-dark: #cbd5d0;

    --positive: #b36b58;

    --shadow: 0 24px 70px rgba(4, 22, 34, 0.18);
}


/* =========================================================
   RESET
========================================================= */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--icarus-blue);
    color: var(--ink);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
}

button,
a {
    font: inherit;
}

button {
    border: 0;
}

a {
    color: inherit;
    text-decoration: none;
}


/* =========================================================
   CASE STUDY NAVIGATION
========================================================= */

.case-study-nav {
    position: sticky;
    top: 0;
    z-index: 1000;

    width: 100%;

    background: rgba(16, 47, 70, 0.94);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.nav-inner {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;

    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.case-nav-link {
    position: relative;

    padding: 15px 18px 13px;

    color: rgba(255, 255, 255, 0.62);

    transition:
        color 0.25s ease,
        opacity 0.25s ease;
}

.case-nav-link span {
    display: block;

    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.case-nav-link small {
    display: block;

    margin-top: 1px;

    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;

    opacity: 0.65;
}

.case-nav-link:hover {
    color: rgba(255, 255, 255, 0.95);
}

.case-nav-link.active {
    color: #ffffff;
}

.case-nav-link.active::after {
    content: "";

    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 0;

    height: 3px;

    background: var(--icarus-green);
    border-radius: 3px 3px 0 0;
}


/* =========================================================
   MAIN PAGE
========================================================= */

.icarus-page {
    width: 100%;
}


/* =========================================================
   HERO
========================================================= */

.icarus-hero {
    position: relative;

    width: min(1180px, calc(100% - 40px));
    min-height: 560px;

    margin: 0 auto;

    overflow: hidden;

    border-radius: 0 0 32px 32px;

    box-shadow: var(--shadow);
}

.hero-image {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    filter: saturate(0.95) contrast(0.98);

    transform: scale(1.015);

    animation: heroReveal 1.2s ease both;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(10, 38, 55, 0.72) 0%,
            rgba(10, 38, 55, 0.42) 42%,
            rgba(10, 38, 55, 0.10) 100%
        );
}

.hero-content {
    position: relative;
    z-index: 2;

    min-height: 560px;

    padding: 75px 70px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.case-number {
    display: inline-block;

    margin-bottom: 10px;

    color: rgba(255, 255, 255, 0.75);

    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.hero-heading h1 {
    color: #ffffff;

    font-size: clamp(4.5rem, 11vw, 9rem);
    font-weight: 500;
    line-height: 0.82;
    letter-spacing: -0.07em;
}

.hero-sector {
    margin-top: 18px;

    color: rgba(255, 255, 255, 0.9);

    font-size: 1.15rem;
    letter-spacing: 0.04em;
}

.hero-information {
    width: min(570px, 100%);
}

.hero-information-inner {
    padding: 23px 26px;

    background: rgba(255, 255, 255, 0.13);

    border: 1px solid rgba(255, 255, 255, 0.22);

    border-radius: 18px;

    backdrop-filter: blur(13px);
    -webkit-backdrop-filter: blur(13px);

    color: #ffffff;
}

.information-label {
    display: block;

    margin-bottom: 9px;

    color: rgba(255, 255, 255, 0.72);

    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.hero-information p {
    max-width: 500px;

    font-size: 0.98rem;
    line-height: 1.65;
}

.hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 24px;

    margin-top: 18px;
    padding-top: 15px;

    border-top: 1px solid rgba(255, 255, 255, 0.18);

    color: rgba(255, 255, 255, 0.67);

    font-size: 0.67rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}


/* =========================================================
   WHITE REPORT SHEET
========================================================= */

.icarus-sheet {
    position: relative;
    z-index: 3;

    width: min(1180px, calc(100% - 40px));

    margin: 32px auto 0;

    background: var(--sheet);

    border-radius: 32px 32px 0 0;

    box-shadow: var(--shadow);

    overflow: hidden;
}


/* =========================================================
   REPORT INTRODUCTION
========================================================= */

.report-introduction {
    padding: 85px 75px 75px;

    border-bottom: 1px solid var(--line);
}

.section-kicker {
    display: inline-block;

    color: var(--icarus-green-dark);

    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.introduction-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 90px;

    margin-top: 28px;
}

.introduction-grid h2 {
    max-width: 650px;

    font-size: clamp(2.2rem, 4vw, 4.2rem);
    font-weight: 500;
    line-height: 1.05;
    letter-spacing: -0.045em;
}

.introduction-copy {
    padding-top: 9px;
}

.introduction-copy > p:first-child {
    color: #465652;

    font-size: 1.02rem;
    line-height: 1.8;
}

.data-notice {
    margin-top: 28px;
    padding: 16px 18px;

    background: rgba(95, 143, 125, 0.08);

    border-left: 3px solid var(--icarus-green);

    color: var(--muted);

    font-size: 0.78rem;
    line-height: 1.6;
}

.data-notice strong {
    color: var(--ink);
}


/* =========================================================
   GENERAL REPORT SECTIONS
========================================================= */

.report-section {
    padding: 75px;
    border-bottom: 1px solid var(--line);
}

.section-heading-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 30px;

    margin-bottom: 50px;
}

.section-heading-row h2 {
    margin-top: 7px;

    font-size: clamp(2rem, 3.5vw, 3.4rem);
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.045em;
}

.section-heading-row > p {
    color: var(--muted);

    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.09em;
}


/* =========================================================
   CLIMATE DASHBOARD
========================================================= */

.climate-dashboard {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 70px;
}

.ecoscore-area,
.emissions-area {
    min-width: 0;
}

.visual-label {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 20px;

    padding-bottom: 15px;

    border-bottom: 1px solid var(--line);
}

.visual-label > span {
    font-size: 0.85rem;
    font-weight: 700;
}

.visual-label > small {
    color: var(--muted);

    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}


/* =========================================================
   ECOSCORE
========================================================= */

.ecoscore-container {
    position: relative;

    min-height: 405px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.ecoscore-ring {
    position: relative;

    width: 315px;
    height: 315px;

    border-radius: 50%;

    background:
        conic-gradient(
            from -90deg,
            var(--icarus-green) 0 33.5%,
            var(--icarus-gold) 33.5% 42.3%,
            var(--icarus-green-dark) 42.3% 100%
        );

    box-shadow:
        0 0 0 1px rgba(32, 48, 45, 0.04),
        0 20px 45px rgba(16, 47, 70, 0.10);

    transform: scale(0.82) rotate(-20deg);

    opacity: 0;

    animation: ecoScoreEnter 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.ecoscore-ring::before {
    content: "";

    position: absolute;
    inset: 22px;

    background: var(--sheet);

    border-radius: 50%;
}

.ecoscore-ring:hover {
    transform: scale(1.04);

    transition: transform 0.35s ease;
}

.eco-scope {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    border-radius: 50%;

    background: transparent;

    cursor: pointer;

    z-index: 4;
}

.eco-scope-1 {
    clip-path: polygon(
        50% 50%,
        50% 0%,
        80% 5%,
        100% 25%,
        50% 50%
    );
}

.eco-scope-2 {
    clip-path: polygon(
        50% 50%,
        100% 25%,
        100% 75%,
        78% 95%,
        50% 50%
    );
}

.eco-scope-3 {
    clip-path: polygon(
        50% 50%,
        78% 95%,
        50% 100%,
        20% 95%,
        0% 75%,
        0% 25%,
        20% 5%,
        50% 0%,
        50% 50%
    );
}

.ecoscore-centre {
    position: absolute;
    inset: 22px;

    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    pointer-events: none;

    border-radius: 50%;
}

.ecoscore-number {
    color: var(--icarus-blue);

    font-size: 5.6rem;
    font-weight: 600;
    line-height: 0.85;
    letter-spacing: -0.08em;
}

.ecoscore-unit {
    margin-top: 5px;

    color: var(--muted);

    font-size: 0.85rem;
}

.ecoscore-label {
    margin-top: 12px;

    color: var(--icarus-green-dark);

    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
}

.scope-information {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 245px;

    pointer-events: none;
}

.scope-hover-card {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 245px;

    padding: 17px 19px;

    background: rgba(255, 255, 255, 0.97);

    border: 1px solid var(--line);

    border-radius: 14px;

    box-shadow: 0 14px 35px rgba(16, 47, 70, 0.13);

    opacity: 0;
    transform: translateY(10px);

    transition:
        opacity 0.2s ease,
        transform 0.2s ease;
}

.scope-hover-card.visible {
    opacity: 1;
    transform: translateY(0);
}

.scope-hover-card > span {
    display: block;

    color: var(--icarus-green-dark);

    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
}

.scope-hover-card strong {
    display: inline-block;

    margin-top: 6px;

    color: var(--icarus-blue);

    font-size: 2rem;
    line-height: 1;
}

.scope-hover-card small {
    color: var(--muted);
    font-size: 0.65rem;
}

.scope-hover-card p {
    margin-top: 10px;

    color: var(--muted);

    font-size: 0.72rem;
    line-height: 1.5;
}

.scope-hover-card em {
    display: block;

    margin-top: 9px;

    color: var(--ink);

    font-size: 0.65rem;
    font-style: normal;
}

.ecoscore-footer {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    padding-top: 16px;

    border-top: 1px solid var(--line);

    color: var(--muted);

    font-size: 0.68rem;
}

.ecoscore-footer strong {
    color: var(--icarus-green-dark);
}


/* =========================================================
   EMISSIONS COMPOSITION
========================================================= */

.emissions-visual {
    min-height: 405px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.scope-donut {
    position: relative;

    width: 230px;
    height: 230px;

    margin: 0 auto 35px;

    border-radius: 50%;

    background:
        conic-gradient(
            var(--icarus-green) 0 33.5%,
            var(--icarus-gold) 33.5% 42.3%,
            var(--icarus-green-dark) 42.3% 100%
        );
}

.scope-donut::before {
    content: "";

    position: absolute;
    inset: 20px;

    background: var(--sheet);

    border-radius: 50%;
}

.donut-centre {
    position: absolute;
    inset: 20px;

    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.donut-centre strong {
    color: var(--icarus-blue);

    font-size: 2.45rem;
    font-weight: 600;
    line-height: 1;

    letter-spacing: -0.055em;
}

.donut-centre span {
    margin-top: 7px;

    color: var(--muted);

    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.scope-breakdown {
    border-top: 1px solid var(--line);
}

.scope-item {
    width: 100%;

    display: grid;
    grid-template-columns: 12px 1fr auto auto;
    align-items: center;
    gap: 12px;

    padding: 13px 0;

    background: transparent;

    border-bottom: 1px solid var(--line);

    text-align: left;

    cursor: pointer;

    transition: padding 0.2s ease;
}

.scope-item:hover,
.scope-item.active {
    padding-left: 7px;
}

.scope-marker {
    width: 8px;
    height: 8px;

    border-radius: 50%;
}

.scope-marker-1 {
    background: var(--icarus-green);
}

.scope-marker-2 {
    background: var(--icarus-gold);
}

.scope-marker-3 {
    background: var(--icarus-green-dark);
}

.scope-name {
    color: var(--ink);

    font-size: 0.75rem;
    font-weight: 600;
}

.scope-item strong {
    color: var(--icarus-blue);

    font-size: 0.9rem;
}

.scope-item small {
    width: 40px;

    color: var(--muted);

    font-size: 0.65rem;
    text-align: right;
}


/* =========================================================
   KPI TABLE
========================================================= */

.kpi-table-wrapper {
    width: 100%;
}

.kpi-table {
    width: 100%;

    border-collapse: collapse;

    font-size: 0.85rem;
}

.kpi-table thead {
    border-bottom: 2px solid var(--ink);
}

.kpi-table th,
.kpi-table td {
    padding: 17px 12px;

    border-bottom: 1px solid var(--line);

    text-align: right;
}

.kpi-table th:first-child,
.kpi-table td:first-child {
    padding-left: 0;

    text-align: left;
}

.kpi-table thead th {
    color: var(--muted);

    font-size: 0.63rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.kpi-table tbody th {
    color: var(--ink);

    font-weight: 600;
}

.kpi-table tbody td {
    color: var(--ink);

    font-variant-numeric: tabular-nums;
}

.kpi-table tbody td:nth-child(2) {
    font-size: 1.1rem;
    font-weight: 600;
}

.kpi-table .negative {
    color: var(--icarus-green-dark);
    font-weight: 700;
}

.kpi-table .positive {
    color: var(--positive);
    font-weight: 700;
}

.kpi-table .total-row {
    border-top: 2px solid var(--ink);
}

.kpi-table .total-row th,
.kpi-table .total-row td {
    padding-top: 20px;
    padding-bottom: 20px;

    font-weight: 700;
}

.table-note {
    margin-top: 13px;

    color: var(--muted);

    font-size: 0.66rem;
}


/* =========================================================
   TRENDS
========================================================= */

.trends-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
}

.trend {
    padding: 0 28px;

    border-left: 1px solid var(--line);
}

.trend:first-child {
    padding-left: 0;

    border-left: 0;
}

.trend:last-child {
    padding-right: 0;
}

.trend-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 15px;

    margin-bottom: 22px;
}

.trend-header > div > span {
    display: block;

    color: var(--muted);

    font-size: 0.72rem;
}

.trend-header strong {
    display: inline-block;

    margin-top: 7px;

    color: var(--icarus-blue);

    font-size: 2.25rem;
    font-weight: 600;
    line-height: 1;

    letter-spacing: -0.05em;
}

.trend-header small {
    color: var(--muted);

    font-size: 0.63rem;
}

.trend-header b {
    color: var(--icarus-green-dark);

    font-size: 0.7rem;
}

.trend-chart {
    display: block;

    width: 100%;
    height: 150px;

    overflow: visible;
}

.trend-grid-line {
    stroke: var(--line);
    stroke-width: 1;
}

.trend-line {
    fill: none;

    stroke: var(--icarus-green);
    stroke-width: 3;

    stroke-linecap: round;
    stroke-linejoin: round;

    stroke-dasharray: 600;
    stroke-dashoffset: 600;

    animation: drawTrend 1.4s ease forwards;
}

.trend-point {
    fill: var(--sheet);

    stroke: var(--icarus-green);
    stroke-width: 3;

    opacity: 0;

    animation: pointAppear 0.4s ease forwards;
    animation-delay: 1s;
}

.chart-labels {
    display: flex;
    justify-content: space-between;

    margin-top: 4px;

    color: var(--muted);

    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}


/* =========================================================
   DISCLOSURE VISIBILITY
========================================================= */

.visibility-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
}

.visibility-item {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 20px;

    padding-top: 25px;

    border-top: 1px solid var(--ink);
}

.visibility-icon {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--icarus-green);

    border-radius: 50%;

    color: var(--icarus-green-dark);

    font-size: 0.62rem;
    font-weight: 700;
}

.visibility-item h3 {
    color: var(--ink);

    font-size: 1.15rem;
    font-weight: 600;
}

.visibility-item p {
    max-width: 430px;

    margin-top: 8px;

    color: var(--muted);

    font-size: 0.82rem;
    line-height: 1.7;
}


/* =========================================================
   FOOTER
========================================================= */

.report-footer {
    padding: 40px 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #f1f3ef;
}

.report-footer p {
    margin-top: 5px;

    color: var(--muted);

    font-size: 0.72rem;
}

.report-footer > a {
    padding: 10px 17px;

    border: 1px solid var(--icarus-green);

    border-radius: 20px;

    color: var(--icarus-green-dark);

    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    transition:
        background 0.2s ease,
        color 0.2s ease;
}

.report-footer > a:hover {
    background: var(--icarus-green);
    color: #ffffff;
}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes heroReveal {

    from {
        opacity: 0;
        transform: scale(1.04);
    }

    to {
        opacity: 1;
        transform: scale(1.015);
    }

}

@keyframes ecoScoreEnter {

    from {
        opacity: 0;
        transform: scale(0.72) rotate(-30deg);
    }

    to {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }

}

@keyframes drawTrend {

    to {
        stroke-dashoffset: 0;
    }

}

@keyframes pointAppear {

    to {
        opacity: 1;
    }

}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 950px) {

    .hero-content {
        padding: 60px 45px;
    }

    .report-introduction,
    .report-section {
        padding: 60px 45px;
    }

    .introduction-grid {
        gap: 45px;
    }

    .climate-dashboard {
        grid-template-columns: 1fr;
        gap: 65px;
    }

    .ecoscore-container {
        min-height: 430px;
    }

    .scope-information {
        right: 0;
    }

    .trends-grid {
        grid-template-columns: 1fr;
        gap: 45px;
    }

    .trend,
    .trend:first-child,
    .trend:last-child {
        padding: 0 0 40px;

        border-left: 0;
        border-bottom: 1px solid var(--line);
    }

    .trend:last-child {
        padding-bottom: 0;
        border-bottom: 0;
    }

}


@media (max-width: 700px) {

    .nav-inner {
        width: 100%;
        overflow-x: auto;

        justify-content: flex-start;
    }

    .case-nav-link {
        flex: 0 0 auto;

        padding-left: 15px;
        padding-right: 15px;
    }

    .case-nav-link.active::after {
        left: 15px;
        right: 15px;
    }

    .icarus-hero,
    .icarus-sheet {
        width: calc(100% - 20px);
    }

    .icarus-hero {
        min-height: 600px;

        border-radius: 0 0 24px 24px;
    }

    .hero-content {
        min-height: 600px;

        padding: 45px 25px;
    }

    .hero-heading h1 {
        font-size: clamp(4rem, 21vw, 6rem);
    }

    .hero-information {
        width: 100%;
    }

    .icarus-sheet {
        margin-top: 20px;

        border-radius: 24px 24px 0 0;
    }

    .report-introduction,
    .report-section {
        padding: 50px 25px;
    }

    .introduction-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .introduction-grid h2 {
        font-size: 2.2rem;
    }

    .section-heading-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;

        margin-bottom: 35px;
    }

    .visual-label {
        align-items: flex-start;
        flex-direction: column;
        gap: 4px;
    }

    .ecoscore-ring {
        width: 270px;
        height: 270px;
    }

    .ecoscore-number {
        font-size: 4.6rem;
    }

    .scope-information {
        position: relative;
        right: auto;
        bottom: auto;

        width: 100%;
        min-height: 130px;

        margin-top: 20px;
    }

    .scope-hover-card {
        width: 100%;
    }

    .ecoscore-footer {
        margin-top: 15px;
    }

    .emissions-visual {
        min-height: auto;
    }

    .scope-donut {
        width: 200px;
        height: 200px;
    }

    .kpi-table {
        min-width: 540px;
    }

    .kpi-table-wrapper {
        overflow-x: auto;
    }

    .visibility-grid {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .report-footer {
        align-items: flex-start;
        flex-direction: column;
        gap: 25px;

        padding: 35px 25px;
    }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

}
```
