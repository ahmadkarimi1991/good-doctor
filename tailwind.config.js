module.exports = {
    purge: [
        './public/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: '#3EBDC6',
                cream: '#FFF4EA',
                main: '#0096D1',
                content: '#282828',
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
                        maxWidth: '36rem',
                    },
                    '@screen md': {
                        maxWidth: '48rem',
                    },
                    '@screen lg': {
                        maxWidth: '60rem',
                    },
                    '@screen xl': {
                        maxWidth: '68rem',
                    },
                    '@screen 2xl': {
                        maxWidth: '80rem',
                    },
                }
            })
        },
    ],
}