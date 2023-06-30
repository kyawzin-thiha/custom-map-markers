import './globals.scss';
import {NavBar} from '@/Components/NavBar';

export const metadata = {
    title: 'Custom Map Markers',
    description: 'This is a custom map, that allow users to create a marker at any location and save it to the local database.',
    authors: [{name: 'Kyaw Zin Thiha', url: 'https://kyawzinthiha.dev'}],
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1
    }
};

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <nav>
            <NavBar/>
        </nav>
        <>
            {children}
        </>
        </body>
        </html>
    );
}
