import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

// children is passed within props and spread out onto the component
export function Heading({ size = 'md', asChild, ...props }: HeadingProps) {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component
      className={clsx('text-gray-100 font-bold font-sans', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
      {...props}
    />
  );
}
