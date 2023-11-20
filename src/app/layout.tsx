import type { Metadata } from 'next'
import StyledComponentsRegistry from './registry'

export const metadata: Metadata = {
	title: 'Sick Fits',
	description: 'Sick Fits online shoe store',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<html lang="en-CA">
				<body>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</body>
			</html>
		</>
	)
}
