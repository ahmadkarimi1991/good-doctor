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
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    variants: {
        extend: {
            ringWidth: ['hover', 'active'],
        },
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('tailwindcss-rtl'),
        function({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '56rem',
                    },
                    '@screen md': {
                        maxWidth: '64rem',
                    },
                    '@screen lg': {
                        maxWidth: '72rem',
                    },
                    '@screen xl': {
                        maxWidth: '80rem',
                    },
                }
            })
        },
    ],
}