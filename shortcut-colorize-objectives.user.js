// ==UserScript==
// @name        Shortcut Objective Colorizer
// @description Apply colors to Shortcut Objectives
// @author      Reece Hart <reecehart@gmail.com>
// @grant       none
// @icon        https://www.google.com/s2/favicons?domain=shortcut.com
// @license     MIT
// @match       https://app.shortcut.com/*/roadmap
// @namespace   Violentmonkey Scripts
// @version     1.0
// ==/UserScript==


(function () {
    'use strict';

    // Custom CSS to be injected
    const css = `
        .myome-partner  { background: #cfe2f3 !important;  // light blue 3   }
        .myome-planning { background: #d9d2e9 !important;  // light purple 3 }
        .myome-platform { background: #fff2cc !important;  // light yellow 3 }
        .myome-product  { background: #d9ead3 !important;  // light green 3  }
        .myome-research { background: #f4cccc !important;  // light red 3    }
`;

    // Function to inject CSS into the document
    const injectCSS = () => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    };

    // Function to add class to matching elements
    const addClassToProductLinks = () => {
        const mappings = {
            'Partner:': 'myome-partner',
            'Platform:': 'myome-platform',
            'Planning:': 'myome-planning',
            'Product:': 'myome-product',
            'Research:': 'myome-research',
        };

        Object.keys(mappings).forEach(prefix => {
            const className = mappings[prefix];
            const links = document.querySelectorAll(`a[aria-label^="${prefix}"]`);
            links.forEach(link => {
                link.classList.add(className);
            });
        });
    };

    // Inject the custom CSS
    injectCSS();

    // Add class to matching elements
    addClassToProductLinks();

    // Observe the document for changes and re-run the function if new elements are added
    const observer = new MutationObserver(addClassToProductLinks);
    observer.observe(document.body, { childList: true, subtree: true });
})();
