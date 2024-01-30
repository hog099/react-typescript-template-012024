/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    darkMode: 'class',
    content: ['src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                mdtop: '-1px 0 6px 2px rgb(0 0 0 / 0.1)',
            },
        },
    },
    //   plugins: [],
    plugins: [
        // eslint-disable-next-line no-undef
        require('@tailwindcss/forms'),
    ],
};
