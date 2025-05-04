(function () {
    'use strict';

    // Custom CSS to be injected
    const css = `
        .x-partner  {
            border: #9fc5e8 2px solid !important;
            }
        .x-planning {
            border: #b4a7d6 2px solid !important;
            }
        .x-platform {
            border: #ffe599 2px solid !important;
            }
        .x-product  {
            border: #b6d7a8 2px solid !important;
            }
        .x-research {
            border: #ea9999 2px solid !important;
            }
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
            'Partner:': 'x-partner',
            'Platform:': 'x-platform',
            'Planning:': 'x-planning',
            'Product:': 'x-product',
            'Research:': 'x-research',
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
