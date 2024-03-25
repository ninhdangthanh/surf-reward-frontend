import React from 'react';
import { ButtonPrimaryProps } from './type';
import './index.scss';

const ButtonPrimary = ({ children, className }: ButtonPrimaryProps) => {
  return <div className={`button-primary ${className}`}>{children}</div>;
};

export default ButtonPrimary;
