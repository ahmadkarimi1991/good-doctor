module.exports = {
    purge: [
        './public/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: '#72569D',
            }
        },
    },
    variants: {
        extend: {
            ringWidth: ['hover', 'active'],
        },
    },
    plugins: [
        require('tailwindcss-rtl'),
    ],
}