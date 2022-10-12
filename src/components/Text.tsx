import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

// children is passed within props and spread out onto the component
export function Text({ size = 'md', asChild, ...props }: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
      {...props}
    />
  );
}
