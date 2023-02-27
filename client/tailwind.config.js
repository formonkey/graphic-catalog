/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{html,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F7EA83',
                },
                secondary: {
                    DEFAULT: '#F7EA83',
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
