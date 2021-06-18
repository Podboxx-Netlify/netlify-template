module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
            // padding: '2rem'
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        function ({addComponents}) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '515px',
                    },
                    '@screen md': {
                        maxWidth: '625px',
                    },
                    '@screen lg': {
                        maxWidth: '1120px',
                    },
                    '@screen xl': {
                        maxWidth: '1200px',
                    },
                }
            })
        }
    ],
}
