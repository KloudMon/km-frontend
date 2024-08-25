'use client';
import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { experimental_createTheme } from '@clerk/themes';

const customClerkTheme = experimental_createTheme({
  variables: {
      colorBackground: '#09090b',
      colorNeutral: 'white',
      colorPrimary: '#ffffff',
      colorTextOnPrimaryBackground: 'black',
      colorText: 'white',
      colorInputText: 'white',
      colorInputBackground: '#09090b',
  },
  elements: {
      providerIcon__apple: { filter: 'invert(1)' },
      providerIcon__github: { filter: 'invert(1)' },
      activeDeviceIcon: {
          '--cl-chassis-bottom': '#d2d2d2',
          '--cl-chassis-back': '#e6e6e6',
          '--cl-chassis-screen': '#e6e6e6',
          '--cl-screen': '#111111',
      },
  },
})

export default function Providers({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ClerkProvider appearance={{ baseTheme: customClerkTheme }}>{children}</ClerkProvider>
      </ThemeProvider>
    </>
  );
}
