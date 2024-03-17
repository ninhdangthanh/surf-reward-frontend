import { HTMLProps, ReactNode } from 'react';

import { Footer, Header } from '@/components/Sections/Home';

export interface DefaultLayoutProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>['className'];
}

const DefaultLayout = ({ children, className }: DefaultLayoutProps) => {
  return (
    <div className="bg-[#0d1117]">
      <Header />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
