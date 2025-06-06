import { SITE_NAME } from '@/lib/constants';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center text-gray-600 text-sm">
        &copy; {currentYear} {SITE_NAME} | All right reserved!
      </div>
    </footer>
  );
}
