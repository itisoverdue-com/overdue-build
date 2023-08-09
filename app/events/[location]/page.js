"use client"
import { useEffect, useState, useRef } from "react"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/shared/Button"
import Card from "@/components/shared/Card"
import Loading from "@/components/shared/Loading"
import Error from "@/components/shared/Error"
import {
   ArrowTopRightOnSquareIcon,
   CalendarDaysIcon,
   ClipboardIcon,
   ListBulletIcon,
   ChevronDownIcon,
   ChevronUpIcon,
} from "@heroicons/react/24/outline"
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/solid"
import { LOCATIONS } from "@/lib/data"
import parse from "html-react-parser"
import { DateTime } from "luxon"

export default function EventLocationPage({ params: { location } }) {
   const [view, setView] = useState("calendar")
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [events, setEvents] = useState(null)
   const [active, setActive] = useState(0)
   const contentRef = useRef(null)

   useEffect(() => {
      async function fetchData() {
         setLoading(true)
         try {
            const locationDetails = LOCATIONS[formatHeader()]
            const extension = `${locationDetails.lat},${locationDetails.lon}`
            const res = await fetch(`/api/events/${extension}`)
            const data = await res.json()
            setEvents([...data])
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
      } else if (index === -1 && active === 0) {
         setActive(events.length - 1)
      } else {
         setActive(index)
      }
      scrollToRef(contentRef)
   }

   const scrollToRef = (ref) => {
      const offset = ref.current.offsetTop * 5
      window.scrollTo({
         top: offset,
         behavior: "smooth",
      })
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
            childSx="py-16 lg:py-28 "
         >
            {error ? (
               <Error />
            ) : loading ? (
               <Loading />
            ) : (
               <>
                  {/* <--- Event Details, Calendar/List ---> */}
                  <div
                     ref={contentRef}
                     className="grid grid-cols-1 lg:grid-cols-3 gap-10 backdrop-blur-md"
                  >
                     {events.length > 0 ? (
                        <EventDetails event={events[active]} />
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

const EventDetails = ({ event }) => {
   const { title, when, location, description, link, image } = event
   const [showMore, setShowMore] = useState(false)
   const handleToggleShowMore = () => setShowMore((prevState) => !prevState)

   return (
      <section className="flex flex-col space-y-8 md:space-y-10 lg:space-y-12 justify-between lg:col-span-2">
         {/* <--- Header ---> */}
         <h2 className="text-xl  text-darkest-grey bg-primary w-max px-3 py-1 -mb-4 lg:text-4xl">
            Upcoming Event:
         </h2>

         {/* <--- Title ---> */}
         <div>
            <div className="w-full h-auto aspect-[6/2] relative mb-3 md:mb-5 rounded-md overflow-hidden md:rounded-lg lg:rounded-xl">
               <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(min-width: 1024px) 900px, (min-width: 768px) 740px, 360px"
               />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-5xl">{title}</h3>
         </div>

         {/* <--- When/Where ---> */}
         <div className="flex flex-col space-y-2">
            <h4 className="mb-3 text-xl md:text-2xl md:mb-4 lg:mb-5">
               When and where:
            </h4>

            <div className="grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-2">
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
         </div>

         {/* <--- Description ---> */}
         <div className="flex flex-col space-y-2">
            <h4 className="mb-3 text-xl md:text-2xl">About this event:</h4>
            <div
               className={`${
                  showMore ? "h-full" : "h-48"
               } overflow-hidden transition-all duration-500 ease-out relative`}
            >
               {/* Gradient Effect */}
               <div
                  className={`${
                     !showMore
                        ? "from-transparent to-white bg-gradient-to-b "
                        : "-z-10"
                  } absolute w-full h-1/2 bottom-0`}
               />
               {parse(description)}
            </div>
            <button
               onClick={handleToggleShowMore}
               className={`w-full outline-none text-sm font-semibold ${
                  showMore ? "text-black" : "text-light-grey"
               } `}
            >
               {showMore ? (
                  <>
                     <span>Show Less</span>
                     <ChevronUpIcon className="w-4 h-5 inline-block ml-1" />
                  </>
               ) : (
                  <>
                     <span>Show More</span>
                     <ChevronDownIcon className="w-4 h-5 inline-block ml-1" />
                  </>
               )}
            </button>
         </div>

         {/* <--- EventBrite URL ---> */}
         <div className="lg:max-w-md">
            <Button
               href={link}
               size="lg"
               variant="primary"
               target="_blank"
               fullWidth
            >
               <p className="mx-auto lg:mx-0">
                  <ClipboardIcon className="w-5 h-5 mb-0.5 mr-1 inline-block" />
                  <span>Sign Up</span>
               </p>
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
   const handleListClick = (index) => handleActiveChange(index)

   function formatDateList(date) {
      const months = {
         January: "1",
         February: "2",
         March: "3",
         April: "4",
         May: "5",
         June: "6",
         July: "7",
         August: "8",
         September: "9",
         October: "10",
         November: "11",
         December: "12",
      }
      const _ = date.split(", ")
      const weekday = _[0].slice(0, 3)
      const __ = _[1].split(" ")
      const month = months[__[0]]
      const day = __[1]

      return [weekday, `${month}/${day}`]
   }

   return (
      <section className="mt-10 lg:mt-0 flex flex-col justify-start items-center lg:items-end ">
         {/* Container */}
         <div className="bg-white w-full shadow-lg md:shadow-xl rounded-xl aspect-square h-auto max-w-lg relative mt-20">
            {/* <--- Toggle: Calendar & List ---> */}
            <div className="rounded-md overflow-hidden bg-white mb-10 shadow-md md:w-1/2 flex absolute left-1/2 -translate-x-1/2 -top-20">
               <button
                  name="calendar"
                  onClick={handleViewChange}
                  className={`${
                     view === "calendar" ? "bg-black text-primary" : ""
                  } transition p-3 w-full flex items-center justify-center`}
               >
                  <CalendarDaysIcon className="w-6 h-6 md:w-4 md:h-4 inline-block mr-1" />
                  <span className="hidden md:inline">Calendar</span>
               </button>
               <button
                  name="list"
                  onClick={handleViewChange}
                  className={`${
                     view === "list" ? "bg-black text-primary" : ""
                  } transition p-3 w-full flex items-center justify-center`}
               >
                  <ListBulletIcon className="w-6 h-6 md:w-4 md:h-4 inline-block mr-1" />
                  <span className="hidden md:inline">List</span>
               </button>
            </div>

            {/* <--- View: Calendar --->*/}
            <div
               className={`h-full w-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                  view === "calendar"
                     ? "scale-100 z-10 bg-lightest-grey text-black"
                     : "scale-75 z-0 bg-transparent text-transparent"
               } transition-all duration-300`}
            >
               CALENDAR
            </div>

            {/* <--- View: List --->*/}
            <ul
               className={`h-full w-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                  view === "list"
                     ? "scale-100 z-10 bg-inherit text-black"
                     : "scale-75 z-0 bg-transparent text-transparent"
               } transition-all duration-300 overflow-x-hidden  rounded-xl overflow-y-auto flex flex-col`}
            >
               {events.map((item, index) => {
                  const [weekday, date] = formatDateList(item.when.date)
                  return (
                     <li
                        key={item.id}
                        className={`${
                           active === index ? "bg-primary" : "bg-white"
                        } py-3 px-2 cursor-pointer grid grid-cols-12 gap-2 items-center ${
                           index === events.length - 1 ? "" : "border-b-2"
                        }`}
                        onClick={() => handleListClick(index)}
                     >
                        {/* Date */}
                        <div className="col-span-2 flex flex-col items-center justify-center ">
                           <span className="">{date}</span>
                           <span className=" uppercase font-semibold">
                              {weekday}
                           </span>
                        </div>

                        {/* Time */}
                        <span className="col-span-3 mx-auto">
                           {item.when.time.split(" -")[0]}
                        </span>

                        {/* Title */}
                        <span className="truncate col-span-7">
                           {item.title}
                        </span>
                     </li>
                  )
               })}

               <li className="text-light-grey text-sm italic w-full text-center py-5 bg-lightest-grey flex-1  ">
                  End of Events
               </li>
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
