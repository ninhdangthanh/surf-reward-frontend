import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = (props: ContainerProps) => {
  return (
    <div {...props} className={`container mx-auto px-4 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
