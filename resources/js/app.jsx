import './bootstrap';
import '../css/app.css';
import 'flowbite';
import './i18n';

import { createRoot }                   from 'react-dom/client';
import { createInertiaApp }             from '@inertiajs/react';
import { resolvePageComponent }         from 'laravel-vite-plugin/inertia-helpers';
import { Inertia }                      from '@inertiajs/inertia';
import { Suspense }                     from "react";


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Warner';


/* Checking the page for the success state */
Inertia.on('success', (e) => {

    /* Setting the Variable to be added to the local storage. */
    let isAuthenticated     = e.detail.page.props.auth.user !== null;

    /* Adding to the local storage */
    window.localStorage.setItem('isAuthenticated', isAuthenticated)
})

/* Adding a window event listener to check for the local storage variable */
window.addEventListener('popstate', (e) => {

    if(window.localStorage.getItem('isAuthenticated') === 'false'){

        e.stopImmediatePropagation()

        window.location.replace('/login')
    }
})

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<Suspense fallback="Loading ..."><App {...props} /></Suspense>);
    },
    progress: {
        color: '#4B5563',
    },
});
