import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './input.module.css';

type InputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={clsx(styles.input, className)} {...props} />;
};
