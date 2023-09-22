"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useInterval } from "react-use"
import { InView } from "react-intersection-observer"
import Papa from "papaparse"

// StatItem component represents a single statistic item
const StatItem = ({ stat }) => {
   const [displayedTotal, setDisplayedTotal] = useState(0)
   const [isVisible, setIsVisible] = useState(false)

   // Check whether the stat is not 'Days since we started'
   const isNotDaysStat = stat.desc !== "Days since we started"

   const finalTotal = isNotDaysStat
      ? parseFloat(stat.total) * 1000 // Converting 'K' representation back to actual number
      : stat.total // Keep as is for 'Days since we started'
   useInterval(() => {
      isVisible &&
         setDisplayedTotal((prev) => {
            if (prev < finalTotal) {
               return prev + Math.ceil(finalTotal / 100) // Increase by 1% each time
            }
            return finalTotal
         })
   }, 20) // Update every 20 milliseconds

   return (
      <InView
         as="div"
         threshold={0.75}
         triggerOnce
         onChange={(inView) => setIsVisible(inView)}
      >
         <li className="flex flex-col items-center justify-center text-center">
            <div className="flex justify-center">
               <Image
                  src={stat.image}
                  alt={`Icon for ${stat.desc}`}
                  width={80}
                  height={80}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4Ii8+Cg=="
               />
            </div>
            <div className="pt-4 text-4xl font-bold dark:text-white">
               {displayedTotal === 0 ? (
                  <span className="text-base font-light italic">
                     Loading...
                  </span>
               ) : isNotDaysStat ? (
                  toKFormat(displayedTotal)
               ) : (
                  displayedTotal
               )}
            </div>
            <div className="text-md text-grey dark:text-white">{stat.desc}</div>
         </li>
      </InView>
   )
}

// stats is the array of statistics data to display
const EffortStats = () => {
   const [collected, setCollected] = useState(0)
   const [effort, setEffort] = useState(0)
   const [volunteers, setVolunteers] = useState(0)

   // fetch data from google sheet
   useEffect(() => {
      Papa.parse(
         "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ78InTixyfD1RLkpfRpr833h9aEdn_YDURZseJxOaYOyO8anJgXmCuVmEMiLjBtuTYI6uQPVhqi9Sc/pub?gid=0&single=true&output=csv",
         {
            download: true,
            header: true,
            complete: (results) => {
               const { collected, effort, volunteers } = results.data[0]
               setCollected(Number(collected))
               setEffort(Number(effort))
               setVolunteers(Number(volunteers))
            },
         }
      )
   }, [])

   const stats = [
      {
         image: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/trash-collected_a4ux4r.svg",
         total: toKFormat(collected),
         desc: "Lbs of Trash Collected",
      },
      {
         image: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/hours-effort_z0ngip.svg",
         total: toKFormat(effort),
         desc: "Hours of Effort",
      },
      {
         image: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/volunteers-enrolled_p6x9no.svg",
         total: toKFormat(volunteers),
         desc: "Volunteers Enrolled",
      },
      {
         image: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1689626737/days-start_efmqvt.svg",
         total: daysSince("10/18/2020", collected),
         desc: "Days since we started",
      },
   ]

   // Render a list of StatItem components
   return (
      <div className="flex flex-col px-0 md:px-4 xl:px-12">
         <ul className="mt-12 grid grid-cols-1 gap-4 rounded-2xl bg-white p-12 shadow-xl dark:bg-dark-grey sm:grid-cols-2 md:mt-20 md:gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
               <StatItem key={stat.desc} stat={stat} />
            ))}
         </ul>
      </div>
   )
}

// toKFormat function formats a number to K (for thousands) representation
const toKFormat = (number) => {
   return number >= 1000 ? `${(number / 1000).toFixed(2)}K` : number
}

// daysSince function calculates the number of days between a provided date and today
const daysSince = (date, collected) => {
   const start = new Date(date)
   const end = new Date()
   const millisecondsPerDay = 24 * 60 * 60 * 1000

   // We divide by milliseconds per day and round down to ignore partial days
   // execution is delayed until google sheet prop is loaded
   return collected ? Math.floor((end - start) / millisecondsPerDay) : 0
}

export default EffortStats
