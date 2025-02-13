import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={`antialiased flex flex-col min-h-screen`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
