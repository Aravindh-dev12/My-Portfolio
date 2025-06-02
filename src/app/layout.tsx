import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { CustomThemeProvider } from './theme/ThemeProvider';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A beautiful portfolio built with Next.js, Tailwind CSS, and MUI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}