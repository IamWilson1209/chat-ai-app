import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import ConvexClientProvider from '@/providers/convex-client-provider';
import { ReduxProvider } from '@/providers/store-provider';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*
            Setting in: Providers/convex-client-provider.tsx 
            Docs: https://docs.convex.dev/quickstart/nextjs 
          */}
          <ConvexClientProvider>
            <Toaster />
            <ReduxProvider>{children}</ReduxProvider>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
