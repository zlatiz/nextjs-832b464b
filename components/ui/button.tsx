"use client";
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ children, onClick, href, className = '' }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={"button-primary " + className}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={"button-primary " + className}>
      {children}
    </button>
  );
}
