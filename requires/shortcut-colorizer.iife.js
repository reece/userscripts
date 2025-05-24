(function () {
    'use strict';

    // Custom CSS to be injected
    // border example: #9fc5e8 2px solid !important;
    const css = `
        .x-2025q2  {
            background: #d9ead3 !important;
            }
        .x-2025q3 {
            background: #fff2cc !important;
            }
        .x-2025q4 {
            background: #f4cccc !important;
            }
        .x-2026  {
            background: #ea9999 !important;
            }
`;

    // Function to inject CSS into the document
    const injectCSS = () => {
        const style = document.createElement('style');
        // style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    };

    // Function to add class to matching elements
    const addClassToProductLinks = () => {
        const mappings = {
            '2025Q2:': 'x-2025q2',
            '2025Q3:': 'x-2025q3',
            '2025Q4:': 'x-2025q4',
            '2026:': 'x-2026',
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
