'use client';

import { Container } from '@/components';
import DefaultLayout from '@/layout/DefaultLayout';
import './index.scss';

const JobsPage = () => {
  const jobs = [
    {
      title: 'JavaScript Developer (m/f)',
      desc: 'Full-time · Düsseldorf, Germany',
    },
    {
      title: 'Marketing & Sales Employees (m/f)',
      desc: 'Full-time · Düsseldorf, Germany',
    },
    {
      title: 'Customer service (m/f)',
      desc: 'Full-time · Düsseldorf, Germany',
    },
  ];

  return (
    <DefaultLayout>
      <div className="bg-underline-jobs">
        <Container>
          <div className="py-20">
            <h1 className="job-title">
              We are looking forward <br /> to <span className="job-title-gradient">you</span>.
            </h1>
            <p className="text-center text-lg xl:text-xl text-gray-400 mt-5">
              Discover active job offers and positions
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-20">
          <p className="border-b border-[#21262d] py-4 text-base xl:text-xl text-[#c5cfd9] font-semibold">
            Open positions:
          </p>
          {jobs?.map((job, index) => (
            <JobItem key={index} {...job} />
          ))}
          <p className="text-gray-400 text-base xl:text-lg w-[90%] md:w-4/5 mx-auto mt-4">
            If you are interested, you can request the exact job description by email to
            jobs@surfreward.io. Please note that the place of work is Düsseldorf and home office is
            only possible to a limited extent. Furthermore, English and German language skills are
            required.
          </p>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export interface JobItemProps {
  title: string;
  desc: string;
}

export const JobItem = ({ title, desc }: JobItemProps) => {
  return (
    <div className="my-1">
      <p className="text-xl text-[#c5cfd9] font-bold">{title}</p>
      <p className="text-[#3aecba] text-xs mt-2">{desc}</p>
    </div>
  );
};

export default JobsPage;
