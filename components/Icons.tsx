
import React from 'react';

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.98 10.82A1 1 0 0 0 21 10a1 1 0 0 0-1-1h-1V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2h-2V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v2H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1v2H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-1v-2h1.02zM9 9h2v2H9V9zm6 0h2v2h-2V9zm-6 6h2v2H9v-2zm6 0h2v2h-2v-2z"/>
  </svg>
);


export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export const GeminiIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        className={className}
        width="1em" 
        height="1em" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path d="M6.55998 12.01C6.55998 15.01 8.98998 17.45 12 17.45C15.01 17.45 17.44 15.01 17.44 12.01C17.44 9.00999 15.01 6.55999 12 6.55999C8.98998 6.55999 6.55998 9.00999 6.55998 12.01Z" fill="url(#paint0_linear_101_2)"/>
        <path d="M12 21.5C12.82 21.5 13.5 20.82 13.5 20C13.5 19.18 12.82 18.5 12 18.5C11.18 18.5 10.5 19.18 10.5 20C10.5 20.82 11.18 21.5 12 21.5Z" fill="url(#paint1_linear_101_2)"/>
        <path d="M4.00001 8.5C4.82001 8.5 5.50001 7.82 5.50001 7C5.50001 6.18 4.82001 5.5 4.00001 5.5C3.18001 5.5 2.50001 6.18 2.50001 7C2.50001 7.82 3.18001 8.5 4.00001 8.5Z" fill="url(#paint2_linear_101_2)"/>
        <defs>
        <linearGradient id="paint0_linear_101_2" x1="12" y1="6.55999" x2="12" y2="17.45" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#A855F7"/>
        </linearGradient>
        <linearGradient id="paint1_linear_101_2" x1="12" y1="18.5" x2="12" y2="21.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#A855F7"/>
        </linearGradient>
        <linearGradient id="paint2_linear_101_2" x1="4.00001" y1="5.5" x2="4.00001" y2="8.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#A855F7"/>
        </linearGradient>
        </defs>
    </svg>
);
