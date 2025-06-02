// app/DebugProvider.js
"use client";

import { useEffect } from 'react';

export default function DebugProvider({ children }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Simple debug highlighting without external dependencies
      const style = document.createElement('style');
      style.textContent = `
        [data-debug]:hover {
          outline: 2px dashed #4CAF50 !important;
          position: relative;
        }
        [data-debug]:hover::after {
          content: attr(data-debug);
          position: absolute;
          top: -25px;
          left: 0;
          background: #4CAF50;
          color: white;
          padding: 2px 5px;
          font-size: 12px;
          border-radius: 3px;
          white-space: nowrap;
          z-index: 9999;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return <>{children}</>;
}