"use client"
import { useEffect, useState } from "react"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Link from "next/link"
import Button from "@/components/shared/Button"
import Card from "@/components/shared/Card"
import Loading from "@/components/shared/Loading"
import Error from "@/components/shared/Error"
import {
   ArrowTopRightOnSquareIcon,
   CalendarDaysIcon,
   ClipboardIcon,
   ListBulletIcon,
} from "@heroicons/react/24/outline"

import { CalendarIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/solid"
import { LOCATIONS } from "@/lib/data"
import parse from "html-react-parser"
import { DateTime } from "luxon"

export default function EventLocationPage({ params: { location } }) {
   const [view, setView] = useState("calendar")
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [events, setEvents] = useState(null)
   const [active, setActive] = useState(0)

   useEffect(() => {
      async function fetchData() {
         setLoading(true)
         try {
            const locationDetails = LOCATIONS[formatHeader()]
            const extension = `${locationDetails.lat},${locationDetails.lon}`
            const res = await fetch(`/api/events/${extension}`)
            const data = await res.json()
            setEvents(data)
         } catch (err) {
            setError(err)
         }
         setLoading(false)
      }
      if (events === null) {
         fetchData()
      }
   })

   const handleViewChange = (e) => setView(e.currentTarget.name)
   const formatHeader = () =>
      location.split("%20").join(" ").split("%2C").join(",")

   const handleActiveChange = (index) => {
      if (index === events.length) {
         setActive(0)
      } else {
         setActive(index)
      }
   }

   if (events) {
      console.log(events[active])
   }
   return (
      <div>
         <PageHero
            route={formatHeader()}
            segments={["events"]}
            header={formatHeader()}
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/backgrounds/events_fpfx1s.jpg"
         />
         <FullBleedContainer
            sx="bg-white bg-opacity-90"
            // backgroundImageSrc={`${
            //    events && events.length > 0 ? events[active].image : ""
            // }`}
            childSx="py-16 lg:py-28 "
         >
            {error ? (
               <Error />
            ) : loading ? (
               <Loading />
            ) : (
               <>
                  {/* <--- Event Details, Calendar/List ---> */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 backdrop-blur-md">
                     {events.length > 0 ? (
                        <EventDetails
                           event={events[active]}
                           active={active}
                           handleActiveChange={handleActiveChange}
                        />
                     ) : (
                        <h2>No Events</h2>
                     )}

                     {/* Calendar, List */}
                     <CalendarList
                        events={events}
                        view={view}
                        active={active}
                        handleViewChange={handleViewChange}
                        handleActiveChange={handleActiveChange}
                     />
                  </div>

                  {/* <--- Subscribe Card, Link to FAQ and Contact --->*/}
                  <NewsletterCard location={formatHeader()} />
               </>
            )}
         </FullBleedContainer>
      </div>
   )
}

const EventDetails = ({ event, active, handleActiveChange }) => {
   const { title, when, location, description, link } = event
   const [showMore, setShowMore] = useState(false)

   const handleNext = () => {
      setShowMore(false)
   }

   const handleToggleShowMore = () => setShowMore((prevState) => !prevState)
   return (
      <section className="flex flex-col space-y-8 md:space-y-10 lg:space-y-10 justify-between">
         {/* Header */}
         <div className="flex">
            <h2 className="text-xl bg-primary text-white py-2 px-5 mr-3 rounded-lg w-max shadow-md  lg:rounded-xl lg:px-6 lg:py-3 lg:text-4xl">
               Upcoming Event:
            </h2>
            <div></div>
         </div>

         {/* Title of Event */}
         <h3 className="text-5xl lg:text-6xl">{title}</h3>

         {/* Date and Time, Location/Parking */}
         <div>
            <h4 className="mb-3 text-xl md:text-2xl">When and where:</h4>

            <div className="grid grid-cols-2">
               {/* When */}
               <div className="flex space-x-3 items-start">
                  <span className="p-1 bg-lightest-grey w-10 h-10 inline-flex justify-center items-center">
                     <CalendarIcon className="w-5/6 h-5/6 text-darkest-grey" />
                  </span>

                  <div>
                     <span className="block font-semibold mb-1">
                        Date and Time
                     </span>
                     <span className="block mb-1">{when.date}</span>
                     <span className="block">{when.time}</span>
                  </div>
               </div>

               {/* Where */}
               <div className="flex space-x-3 items-start">
                  <span className="p-1 bg-lightest-grey w-10 h-10 inline-flex justify-center items-center">
                     <MapPinIcon className="w-5/6 h-5/6 text-darkest-grey" />
                  </span>

                  <div>
                     <span className="font-semibold block mb-1">Location</span>
                     <span className="block mb-1">{location.name}</span>
                     {location.address.map((item) => (
                        <p key={item}>{item}</p>
                     ))}
                     <Link href={location.href} target="_blank">
                        <button className="font-medium flex space-x-2 items-center mt-1">
                           <span>Open in Maps</span>
                           <ArrowTopRightOnSquareIcon className="w-4 h-5 " />
                        </button>
                     </Link>
                  </div>
               </div>
            </div>

            {/* Location */}
         </div>

         {/* Description */}
         <div className="flex flex-col">
            <h4 className="mb-3 text-xl md:text-2xl">About this event:</h4>
            <div
               className={`${
                  showMore ? "h-full" : "h-40"
               } overflow-hidden transition-all duration-500`}
            >
               {parse(description)}
            </div>
            <button onClick={handleToggleShowMore} className="w-full ring-8">
               {showMore ? (
                  <>
                     <span>Show Less</span>
                  </>
               ) : (
                  <>
                     <span>Show More</span>
                  </>
               )}
            </button>
         </div>

         {/* Sign Up */}
         <div className="md:max-w-md">
            <Button
               href={link}
               size="lg"
               variant="primary"
               target="_blank"
               fullWidth
            >
               <ClipboardIcon className="w-5 h-5 mb-0.5 mr-1" />
               <span>Sign Up</span>
            </Button>
         </div>
      </section>
   )
}

const CalendarList = ({
   events,
   view,
   active,
   handleViewChange,
   handleActiveChange,
}) => {
   const handleListOnClick = (index) => handleActiveChange(index)

   return (
      <section className="flex flex-col justify-start items-center lg:items-end ">
         {/* Container */}
         <div className="bg-white w-full  shadow-lg rounded-xl aspect-square h-auto max-w-lg relative  mt-20">
            {/* <--- Toggle: Calendar & List ---> */}
            <div className="rounded-md overflow-hidden bg-white mb-10 shadow-md w-1/2 flex absolute left-1/2 -translate-x-1/2 -top-20">
               <button
                  name="calendar"
                  onClick={handleViewChange}
                  className={`${
                     view === "calendar" ? "bg-black text-primary" : ""
                  } transition py-3 w-full flex items-center justify-center`}
               >
                  <CalendarDaysIcon className="w-4 h-4 inline-block mr-1" />
                  <span>Calendar</span>
               </button>
               <button
                  name="list"
                  onClick={handleViewChange}
                  className={`${
                     view === "list" ? "bg-black text-primary" : ""
                  } transition py-3 w-full flex items-center justify-center`}
               >
                  <ListBulletIcon className="w-4 h-4 inline-block  mr-1" />
                  <span>List</span>
               </button>
            </div>

            {/* <--- View: Calendar --->*/}
            <div
               className={`h-[98%] w-[98%]  absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                  view === "calendar"
                     ? "scale-100 z-10 bg-lightest-grey text-black"
                     : "scale-75 z-0 bg-transparent text-transparent"
               } transition-all duration-300`}
            >
               CALENDAR
            </div>

            {/* <--- View: List --->*/}
            <ul
               className={`h-[98%] w-[98%]  absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                  view === "list"
                     ? "scale-100 z-10 bg-lightest-grey text-black"
                     : "scale-75 z-0 bg-transparent text-transparent"
               } transition-all duration-300 `}
            >
               {events.map((item, index) => (
                  <li
                     key={item.id}
                     className={`${
                        active === index ? "bg-darkest-grey" : "bg-white"
                     } py-3  cursor-pointer`}
                     onClick={() => handleListOnClick(index)}
                  >
                     {item.title}
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

const NewsletterCard = ({ location }) => {
   return (
      <section className="mt-32 mx-auto text-center">
         {/* Subscribe Card */}
         <Card variant="text" sx="flex flex-col space-y-5 text-center">
            <h5 className="text-3xl text-center">Stay Up to Date!</h5>
            <p>Be the first to learn about our upcoming events.</p>
            <Button
               href={LOCATIONS[location].newsletter}
               size="xl"
               variant="primary"
               target="_blank"
            >
               <span className="mx-auto">Subcribe to {location}</span>
            </Button>
         </Card>
         {/* Link to FAQ and Contact */}
         <p className="text-lg mt-20 text-dark-grey">
            Have any questions? Visit our{" "}
            <Link href="/faq" className="underline text-sky-600 mr-1">
               FAQ
            </Link>
            page or feel free to contact us{" "}
            <Link href="/contact" className="underline text-sky-600">
               here
            </Link>
            .
         </p>
      </section>
   )
}
