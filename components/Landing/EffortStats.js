"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useInterval } from 'react-use';

// StatItem component represents a single statistic item
const StatItem = ({ stat }) => {
  const [displayedTotal, setDisplayedTotal] = useState(0);

  // Check whether the stat is not 'Days since we started'
  const isNotDaysStat = stat.desc !== 'Days since we started';

  const finalTotal = isNotDaysStat 
    ? parseFloat(stat.total) * 1000  // Converting 'K' representation back to actual number
    : stat.total;  // Keep as is for 'Days since we started'

    useInterval(() => {
      setDisplayedTotal(prev => {
        if (prev < finalTotal) {
          return prev + Math.ceil(finalTotal / 100); // Increase by 1% each time
        }
        return finalTotal;
      });
    }, 20); // Update every 20 milliseconds

  return (
    <li className="flex flex-col justify-center items-center text-center">
      <div className="flex justify-center">
        <Image src={stat.image} alt={`Icon for ${stat.desc}`} width={80} height={80} placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4Ii8+Cg==" />
      </div>
      <div className="text-4xl font-bold  pt-4 ">{isNotDaysStat ? toKFormat(displayedTotal) : displayedTotal}</div>
      <div className="text-md text-grey">{stat.desc}</div>
    </li>
  );
};

// stats is the array of statistics data to display
const EffortStats = () => {
  const stats = [
    {
      image: 'https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/trash-collected_a4ux4r.svg',
      total: toKFormat(64000), 
      desc: 'Lbs of Trash Collected'
    },
    {
      image: 'https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/hours-effort_z0ngip.svg',
      total: toKFormat(10000),
      desc: 'Hours of Effort'
    },
    {
      image: 'https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/volunteers-enrolled_p6x9no.svg',
      total: toKFormat(5000),
      desc: 'Volunteers Enrolled'
    },
    {
      image: 'https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/days-start_efmqvt.svg',
      total: daysSince('10/18/2020'),
      desc: 'Days since we started'
    }
  ];
  
  // Render a list of StatItem components
  return (
    <div className="flex flex-col px-0 md:px-4 xl:px-12">
      <ul className="bg-white rounded-2xl p-12 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20">
        {stats.map(stat => (
          <StatItem key={stat.desc} stat={stat} />
        ))}
      </ul>
    </div>
  );
};

// toKFormat function formats a number to K (for thousands) representation
const toKFormat = number => {
  return number >= 1000 ? `${(number/1000).toFixed(1)}K` : number;
};

// daysSince function calculates the number of days between a provided date and today
const daysSince = date => {
  const start = new Date(date);
  const end = new Date();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  // We divide by milliseconds per day and round down to ignore partial days
  return Math.floor((end - start) / millisecondsPerDay);
};


export default EffortStats;