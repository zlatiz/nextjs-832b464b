"use client";
import React from 'react';

interface InputProps {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  name?: string;
}

export default function Input({ value = '', onChange, placeholder = '', name }: InputProps) {
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
      className="border p-2 rounded"
    />
  );
}
