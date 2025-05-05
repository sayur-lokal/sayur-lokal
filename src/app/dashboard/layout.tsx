'use client';
import { useState, useEffect } from 'react';
import '../css/euclid-circular-a-font.css';
import '../css/style.css';
import { ReduxProvider } from '@/redux/provider';

import AdminHeader from '@/components/Admin/AdminHeader';
import ScrollToTop from '@/components/Common/ScrollToTop';
import PreLoader from '@/components/Common/PreLoader';

import { AuthProvider } from '../context/AuthContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
              <AuthProvider>
              <AdminHeader />
              {children}</AuthProvider>
            </ReduxProvider>
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
}
