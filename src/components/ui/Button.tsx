import type { AnchorHTMLAttributes } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'outline';
}

export function Button({ href, variant = 'primary', children, className, ...props }: ButtonProps) {
  const base =
    'inline-block rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const variants = {
    primary: 'bg-sage text-white hover:bg-sage-deep focus-visible:outline-sage',
    outline:
      'border border-sage text-sage-deep hover:bg-sage-light focus-visible:outline-sage',
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className ?? ''}`} {...props}>
      {children}
    </a>
  );
}
