import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            // Breakpoints personalizados
            screens: {
                xs: '480px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },

            // Fontes
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                serif: ['Merriweather', 'ui-serif', 'Georgia'],
                mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
            },

            // Cores
            colors: {
                primary: '#2563eb',
                secondary: '#1e293b',
                accent: '#22c55e',
                background: '#f8fafc',
                muted: '#64748b',
                danger: '#ef4444',
                warning: '#facc15',
                success: '#10b981',
                info: '#3b82f6',
                'gradient-start': '#6366f1',
                'gradient-end': '#ec4899',
            },

            // Font sizes
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },

            // Sombra
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)',
                md: '0 4px 6px rgba(0, 0, 0, 0.1)',
                lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
                xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
                '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
                inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
                none: 'none',
            },

            // Espaçamentos
            spacing: {
                18: '4.5rem',
                22: '5.5rem',
                26: '6.5rem',
                30: '7.5rem',
                72: '18rem',
                84: '21rem',
                96: '24rem',
            },

            // Gradientes
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
                'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
                'fancy-gradient': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                'blue-green': 'linear-gradient(90deg, #3b82f6 0%, #10b981 100%)',
            },

            // Animações customizadas
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                pulseFast: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                bounceY: {
                    '0%, 100%': { transform: 'translateY(-10%)' },
                    '50%': { transform: 'translateY(0)' },
                },
            },

            animation: {
                fade: 'fadeIn 0.5s ease-in-out',
                slide: 'slideInUp 0.5s ease-out',
                pulseFast: 'pulseFast 1s infinite',
                bounceY: 'bounceY 0.6s infinite',
            },

            // Transições
            transitionProperty: {
                width: 'width',
                spacing: 'margin, padding',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}

export default config
