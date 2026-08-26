// components/layout/MobileNavigation.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';  // <--- TAMBAHKAN INI
import { Button } from '@/components/ui/Button';  // <--- TAMBAHKAN INI

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  currentPath: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  items,
  currentPath,
}: MobileNavigationProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Trap focus when open
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = overlayRef.current?.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    if (focusableElements?.length) {
      (focusableElements[0] as HTMLElement).focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-[var(--color-background)] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex flex-col h-full p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="self-end p-2 text-[var(--color-text-primary)]"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />  {/* <--- GANTI INI */}
        </button>

        {/* Nav links */}
        <nav className="mt-8 flex-1" aria-label="Mobile navigation">
          <ul className="space-y-6 text-2xl font-medium">
            {items.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block transition-colors ${
                      isActive
                        ? 'text-[var(--color-primary)]'
                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact CTA at bottom */}
        <div className="pt-6 border-t border-[var(--color-border)]">
          <Button
            variant="filled"
            size="md"
            className="w-full"
            asChild
          >
            <a
              href="mailto:vito.pratama@gmail.com"  // TODO: ganti dengan email asli
              onClick={onClose}
            >
              Contact via Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}