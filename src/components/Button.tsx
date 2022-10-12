import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

// children is passed within props and spread out onto the component
export function Button({ asChild, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={clsx(
        'bg-cyan-500 py-4 px-3 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'
      )}
      {...props}
    />
  );
}
