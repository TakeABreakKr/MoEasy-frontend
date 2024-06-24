'use client';

import { ButtonHTMLAttributes } from 'react';

import buttonStyles from './button.module.css';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, children, ...props }: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={[buttonStyles['button'], buttonStyles[`button--${size}`], buttonStyles[mode]].join(' ')}
      {...props}
    >
      {children}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
