/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1024px",
				xl: "1280px"
			},
			padding: '2rem',
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Outfit', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				// Light mode colors
				'light-theme': '#f0f2f5',
				'primary-light': '#3b82f6',
				'primary-hover-light': '#2563eb',

				// Dark mode colors
				'dark-theme': '#030712',
				'primary-dark': '#6366f1',
				'primary-hover-dark': '#4f46e5',

				// Accents
				'accent-purple': '#818cf8',
				'accent-pink': '#f472b6',
				'accent-cyan': '#22d3ee',

				// Neutrals
				'n950': '#030712',
				'n900': '#111827',
				'n800': '#1f2937',
				'n700': '#374151',
				'n600': '#4b5563',
				'n500': '#6b7280',
				'n400': '#9ca3af',
				'n300': '#d1d5db',
				'n200': '#e5e7eb',
				'n100': '#f3f4f6',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
