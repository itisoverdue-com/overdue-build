import React from 'react';
import Image from 'next/image';

const EffortStats = () => {
  const stats = [
    {
      image: 'https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/trash-collected_a4ux4r.svg',
      total: 64000, 
      desc: 'Lbs of Trash Collected'
    },
    {
      image: 'https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/hours-effort_z0ngip.svg',
      total: 10000,
      desc: 'Hours of Effort'
    },
    {
      image: 'https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/volunteers-enrolled_p6x9no.svg',
      total: 5000,
      desc: 'Volunteers Enrolled'
    },
    {
      image: 'https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/days-start_efmqvt.svg',
      total: 1002,
      desc: 'Days since we started'
    }
  ];

  return (
    <div className="flex flex-col px-0 md:px-4 xl:px-12">
      <ul className="bg-white rounded-2xl p-12 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20">
        {stats.map((stat, index) => (
          <li key={index} className="flex flex-col justify-center items-center text-center">
            <div className="flex justify-center">
              <Image src={stat.image} alt={stat.desc} width={80} height={80} />
            </div>
            <div className="text-4xl font-bold  pt-4 ">{stat.total}</div>
            <div className="text-md text-grey">{stat.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EffortStats;