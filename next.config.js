/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	jest: {
		testEnvironment: 'jest-environment-jsdom',
	},
}

module.exports = nextConfig
