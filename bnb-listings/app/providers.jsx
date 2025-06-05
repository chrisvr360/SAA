'use client';

import { ThemeProvider } from './theme-provider';
import { Toaster } from 'sonner';

function Providers({ children }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}

export default Providers;