// components/ui/Image.tsx

"use client";

import NextImage from "next/image";
import React, { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageProps {
  src?: string | null;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "auto";
}

export function Image({
  src,
  alt,
  width = 800,
  height = 600,
  fill = false,
  className,
  containerClassName,
  priority = false,
  aspectRatio = "video",
}: ImageProps) {
  const [error, setError] = useState(false);

  const imageMissing = !src || error;

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "",
  };

  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden

        rounded-[var(--radius-lg)]

        bg-[var(--color-surface-variant)]
        `,
        aspectClasses[aspectRatio],
        containerClassName
      )}
    >
      {imageMissing ? (
        <div
          className="
            absolute
            inset-0

            flex
            flex-col
            items-center
            justify-center

            text-sm

            text-[var(--color-text-muted)]
          "
        >
          <ImageOff className="w-8 h-8 opacity-60 mb-1" />
          <span>No Image</span>
        </div>
      ) : (
        <NextImage
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          onError={() => setError(true)}
          className={cn(
            `
            object-cover

            transition-all
            duration-300
            `,
            className
          )}
        />
      )}
    </div>
  );
}