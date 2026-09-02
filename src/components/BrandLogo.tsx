"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  className = "",
  showText = true,
  size = "md",
}: BrandLogoProps) {
  const iconSizes = { sm: 36, md: 44, lg: 56 };
  const textSizes = { sm: "text-sm", md: "text-base", lg: "text-xl" };
  const s = iconSizes[size];

  return (
    <div className={"flex items-center gap-2.5 " + className}>
      <div className="relative shrink-0" style={{ width: s, height: s }}>
        <Image
          src="/images/logo.png"
          alt="Temple Town Stay logo"
          fill
          className="object-contain"
          sizes={s + "px"}
          priority
        />
      </div>
      {showText && (
        <span
          className={"font-heading font-bold tracking-widest text-charcoal " + textSizes[size]}
        >
          TEMPLE TOWN STAY
        </span>
      )}
    </div>
  );
}
