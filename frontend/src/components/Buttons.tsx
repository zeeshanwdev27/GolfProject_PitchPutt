import React from 'react'
import { ArrowUpRight } from 'lucide-react';

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
    <button className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-[#96BA34] text-white hover:bg-green-700 active:scale-95 transition cursor-pointer ${className}`} {...props} >
        {children}
    </button>
);

export const BlackButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
    <button className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-black text-[#96BA34] hover:opacity-90 active:scale-95 transition cursor-pointer ${className}`} {...props} >
        {children}
    </button>
);


export const ArrowButton: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => (
  <span className={`inline-flex items-center justify-center rounded-full bg-white text-[#96BA34] p-2 ${className}`} {...props}>
    <ArrowUpRight className="w-5 h-5" />
  </span>
);