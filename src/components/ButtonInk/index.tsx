import React, { HTMLProps, ReactNode } from 'react';
import Ink from 'react-ink';

interface ButtonInkProps {
  className?: HTMLProps<HTMLElement>['className'];
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonInk = ({ className, children, onClick }: ButtonInkProps) => {
  return (
    <button className={`relative ${className}`} onClick={(e) => (onClick ? onClick(e) : undefined)}>
      <Ink />
      {children}
    </button>
  );
};

export default ButtonInk;
