// components/ui/Button.tsx
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "filled" | "tonal" | "outlined" | "text" | "dark";
type ButtonSize = "sm" | "md";

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}

interface ButtonAsChildProps extends BaseButtonProps {
  asChild: true;
  href?: never;
}

interface ButtonLinkProps extends BaseButtonProps {
  asChild?: false;
  href: string;
}

interface ButtonElementProps extends BaseButtonProps {
  asChild?: false;
  href?: never;
}

type ButtonProps = ButtonElementProps | ButtonLinkProps | ButtonAsChildProps;

const variants = {
  filled: `
    bg-[var(--color-primary)]
    text-white
    hover:bg-[var(--color-primary-hover)]
  `,
  tonal: `
    bg-[var(--color-primary-container)]
    text-[var(--color-on-primary-container)]
    hover:brightness-95
  `,
  outlined: `
    border
    border-[var(--color-border)]
    text-[var(--color-text-primary)]
    hover:bg-black/5
  `,
  text: `
    text-[var(--color-primary)]
    hover:bg-black/5
  `,
  dark: `
    bg-[#202124]
    text-white
    hover:bg-black
  `,
};

const sizes = {
  sm: `
    px-4
    py-2
    text-sm
  `,
  md: `
    px-6
    py-3
    text-base
  `,
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "filled",
    size = "md",
    className,
    disabled = false,
    asChild = false,
    ...rest
  } = props;

  const baseClasses = cn(
    `
    relative
    inline-flex
    items-center
    justify-center

    overflow-hidden

    rounded-full

    font-medium

    transition

    duration-200

    select-none

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--color-primary)]

    disabled:pointer-events-none
    disabled:opacity-50

    before:absolute
    before:inset-0
    before:bg-black/0

    hover:before:bg-black/10
    `,
    variants[variant],
    sizes[size],
    className
  );

  // JIKA asChild: clone child dengan className yang digabung
  if (asChild) {
    if (!React.isValidElement(children)) {
      throw new Error("Button with asChild must have a single child element");
    }
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: cn(baseClasses, child.props.className),
      disabled: child.props.disabled || disabled,
    } as any);
  }

  // JIKA ada href: render sebagai Link (next/link)
  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={baseClasses} {...linkProps}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  // DEFAULT: render sebagai button
  return (
    <button className={baseClasses} disabled={disabled} {...rest}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}