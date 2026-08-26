// components/ui/Link.tsx

import NextLink from "next/link";
import React from "react";

import { cn } from "@/lib/utils";


interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

  href: string;

  children: React.ReactNode;

  className?: string;

}



export function Link({

  href,

  children,

  className,

  target,

  rel,

  ...props

}: LinkProps) {


  const classes = cn(

    `
    inline-flex
    items-center

    text-[var(--color-primary)]

    font-medium

    transition-colors
    duration-200

    hover:underline
    hover:underline-offset-4

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--color-primary)]

    rounded-sm
    `,

    className

  );



  const isExternal =
    href.startsWith("http")
    ||
    href.startsWith("mailto:")
    ||
    href.startsWith("tel:");



  if (isExternal) {

    return (

      <a

        href={href}

        target={target ?? "_blank"}

        rel={
          rel ??
          "noopener noreferrer"
        }

        className={classes}

        {...props}

      >

        {children}

      </a>

    );

  }



  return (

    <NextLink

      href={href}

      className={classes}

      {...props}

    >

      {children}

    </NextLink>

  );

}