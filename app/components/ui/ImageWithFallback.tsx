"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  if (didError || !src) {
    return (
      <div className={`relative w-full h-full bg-slate-800 flex items-center justify-center ${className ?? ""}`}>
        <svg
          viewBox="0 0 88 88"
          className="w-12 h-12 opacity-30"
          aria-hidden="true"
        >
          <rect x="16" y="16" width="56" height="56" rx="6" fill="none" stroke="currentColor" strokeWidth="3.7" />
          <path d="M16 58 L44 40 L72 58" fill="none" stroke="currentColor" strokeWidth="3.7" strokeLinejoin="round" />
          <circle cx="53" cy="35" r="7" fill="none" stroke="currentColor" strokeWidth="3.7" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out"
        onError={() => setDidError(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
