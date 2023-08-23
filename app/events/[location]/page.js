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
import Calendar from "react-calendar"
import "./styles.css"

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
            sx="bg-white bg-opacity-90 dark:bg-darkest-grey"
            childSx="py-16 lg:py-28 "
         >
            {error ? (
               <Error />
            ) : loading ? (
               <Loading />
            ) : (
               <>
                  {/* <--- Event Details, Calendar/List ---> */}

                  {events.length > 0 ? (
                     <div
                        ref={contentRef}
                        className="flex flex-col space-y-20 lg:flex-row lg:space-x-10 lg:space-y-0"
                     >
                        <EventDetails event={events[active]} />
                        <CalendarList
                           events={events}
                           view={view}
                           active={active}
                           handleViewChange={handleViewChange}
                           handleActiveChange={handleActiveChange}
                        />
                     </div>
                  ) : (
                     <h2 className="pt-10 text-center text-light-grey">
                        No Nearby Events
                     </h2>
                  )}

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
      <section className="flex flex-col justify-between space-y-8 md:space-y-10 lg:space-y-12">
         {/* <--- Header ---> */}
         <h2 className="-mb-4  w-max bg-primary px-3 py-1 text-xl text-darkest-grey dark:bg-dark-grey lg:text-4xl">
            Upcoming Event:
         </h2>

         {/* <--- Title ---> */}
         <div>
            <div className="relative mb-3 aspect-[6/2] h-auto w-full overflow-hidden rounded-md md:mb-5 md:rounded-lg lg:rounded-xl">
               <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(min-width: 1024px) 900px, (min-width: 768px) 740px, 360px"
                  priority
               />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-5xl">{title}</h3>
         </div>

         {/* <--- When/Where ---> */}
         <div className="flex flex-col space-y-2">
            <h4 className="mb-3 text-xl dark:text-white md:mb-4 md:text-2xl lg:mb-5">
               When and where:
            </h4>

            <div className="grid grid-cols-1 gap-y-5 dark:text-white md:grid-cols-2 md:gap-y-0">
               {/* When */}
               <div className="flex items-start space-x-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center bg-lightest-grey p-1 dark:bg-dark-grey">
                     <CalendarIcon className="h-5/6 w-5/6 text-darkest-grey dark:text-white" />
                  </span>

                  <div>
                     <span className="mb-1 block font-semibold">
                        Date and Time
                     </span>
                     <span className="mb-1 block">
                        {DateTime.fromISO(when.date).toLocaleString(
                           DateTime.DATE_MED_WITH_WEEKDAY
                        )}
                     </span>
                     <span className="block">{when.time}</span>
                  </div>
               </div>

               {/* Where */}
               <div className="flex items-start space-x-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center bg-lightest-grey p-1 dark:bg-dark-grey">
                     <MapPinIcon className="h-5/6 w-5/6 text-darkest-grey dark:text-white" />
                  </span>

                  <div>
                     <span className="mb-1 block font-semibold">Location</span>
                     <span className="mb-1 block">{location.name}</span>
                     {location.address.map((item) => (
                        <p key={item}>{item}</p>
                     ))}
                     <Link href={location.href} target="_blank">
                        <button className="mt-1 flex items-center space-x-2 font-medium">
                           <span>Open in Maps</span>
                           <ArrowTopRightOnSquareIcon className="h-5 w-4 " />
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         {/* <--- Description ---> */}
         <div className="flex flex-col space-y-2 dark:bg-dark-grey dark:p-2 dark:text-white">
            <h4 className="mb-3 text-xl dark:text-white md:text-2xl">
               About this event:
            </h4>
            <div
               className={`${
                  showMore ? "h-full" : "h-48"
               } relative overflow-hidden transition-all duration-500 ease-out`}
            >
               {/* Gradient Effect */}
               <div
                  className={`${
                     !showMore
                        ? "bg-gradient-to-b from-transparent to-white dark:bg-none"
                        : "-z-10"
                  } absolute bottom-0 h-1/2 w-full`}
               />
               {parse(description)}
            </div>
            <button
               onClick={handleToggleShowMore}
               className={`w-full text-sm font-semibold outline-none ${
                  showMore
                     ? "text-black dark:text-white"
                     : "text-light-grey dark:text-white"
               } `}
            >
               {showMore ? (
                  <>
                     <span className="dark:text-white">Show Less</span>
                     <ChevronUpIcon className="ml-1 inline-block h-5 w-4" />
                  </>
               ) : (
                  <>
                     <span className="text-white">Show More</span>
                     <ChevronDownIcon className="ml-1 inline-block h-5 w-4" />
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
               <div className="mx-auto lg:mx-0">
                  <ClipboardIcon className="mb-0.5 mr-1 inline-block h-5 w-5" />
                  <span>Sign Up</span>
               </div>
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
   const [calendarDay, setCalendarDay] = useState(new Date())
   let allEventDates = {}

   events.forEach((item, index) => {
      const key = DateTime.fromISO(item.when.date).toLocaleString(
         DateTime.DATE_FULL
      )
      allEventDates = {
         ...allEventDates,
         [key]: index,
      }
   })

   const handleListClick = (index) => handleActiveChange(index)
   const handleCalendarChange = (e) => {
      const calendarDate = DateTime.fromJSDate(e)
      const key = calendarDate.toLocaleString(DateTime.DATE_FULL)
      if (allEventDates.hasOwnProperty(key)) {
         handleListClick(allEventDates[key])
      }
      setCalendarDay(e)
   }

   const renderTileContent = ({ activeStartDate, date: _, view }) => {
      let content = "none"
      const date = DateTime.fromJSDate(_)
      const today = DateTime.fromJSDate(new Date())
      const isToday =
         today.diff(date, "hours").values.hours < 24 &&
         today.diff(date, "hours").values.hours > 0

      if (isToday) {
         content = "Today"
      }

      if (
         allEventDates.hasOwnProperty(date.toLocaleString(DateTime.DATE_FULL))
      ) {
         content = "Event"
      }
      return (
         <span
            className={`block text-xs ${
               content !== "none" ? "" : "text-transparent"
            }`}
         >
            {content}
         </span>
      )
   }

   function formatDateList(date) {
      const [weekday, monthDay] = DateTime.fromISO(date)
         .toFormat("ccc-L/d")
         .split("-")
      return [weekday, monthDay]
   }

   return (
      <>
         <section className=" flex aspect-square flex-col items-center justify-start md:min-w-[400px] lg:items-end">
            {/* Container */}
            <div className="relative mt-20 aspect-square h-auto w-full max-w-lg rounded-xl bg-white shadow-lg md:shadow-xl">
               {/* <--- Toggle: Calendar & List ---> */}
               <div className="absolute -top-20 left-1/2 mb-10 flex -translate-x-1/2 overflow-hidden rounded-md bg-white shadow-md md:w-1/2">
                  <button
                     name="calendar"
                     onClick={handleViewChange}
                     className={`${
                        view === "calendar"
                           ? "bg-black text-primary dark:bg-dark-grey dark:text-primaryDark"
                           : ""
                     } flex w-full items-center justify-center p-3 transition`}
                  >
                     <CalendarDaysIcon className="mr-1 inline-block h-6 w-6 md:h-4 md:w-4" />
                     <span className="hidden md:inline">Calendar</span>
                  </button>
                  <button
                     name="list"
                     onClick={handleViewChange}
                     className={`${
                        view === "list"
                           ? "bg-black text-primary dark:bg-dark-grey dark:text-primaryDark"
                           : ""
                     } flex w-full items-center justify-center p-3 transition`}
                  >
                     <ListBulletIcon className="mr-1 inline-block h-6 w-6 md:h-4 md:w-4" />
                     <span className="hidden md:inline">List</span>
                  </button>
               </div>

               {/* <--- View: Calendar --->*/}
               <div
                  className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 ${
                     view === "calendar"
                        ? "z-10 scale-100 bg-inherit text-black"
                        : "z-0 scale-75 bg-transparent text-transparent"
                  } overflow-hidden rounded-xl transition-all duration-300 `}
               >
                  <Calendar
                     minDate={new Date()}
                     tileContent={renderTileContent}
                     // tileDisabled={isDisabled}
                     onChange={handleCalendarChange}
                     value={calendarDay}
                  />
               </div>

               {/* <--- View: List --->*/}
               <ul
                  className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 ${
                     view === "list"
                        ? "z-10 scale-100 bg-inherit text-black"
                        : "z-0 scale-75 bg-transparent text-transparent"
                  } flex flex-col overflow-y-auto overflow-x-hidden rounded-xl transition-all duration-300`}
               >
                  {events.map((item, index) => {
                     const [weekday, date] = formatDateList(item.when.date)
                     return (
                        <li
                           key={item.id}
                           className={`${
                              active === index ? "bg-primary" : "bg-white"
                           } grid cursor-pointer grid-cols-12 items-center gap-2 px-2 py-3 ${
                              index === events.length - 1 ? "" : "border-b-2"
                           }`}
                           onClick={() => handleListClick(index)}
                        >
                           {/* Date */}
                           <div className="col-span-2 flex flex-col items-center justify-center ">
                              <span className="">{date}</span>
                              <span className=" font-semibold uppercase">
                                 {weekday}
                              </span>
                           </div>

                           {/* Time */}
                           <span className="col-span-3 mx-auto">
                              {item.when.time.split(" -")[0]}
                           </span>

                           {/* Title */}
                           <span className="col-span-7 truncate">
                              {item.title}
                           </span>
                        </li>
                     )
                  })}

                  <li className="w-full flex-1 bg-[#F5F5F5] py-5 text-center text-sm italic text-light-grey  ">
                     End of Events
                  </li>
               </ul>
            </div>
         </section>
      </>
   )
}

const NewsletterCard = ({ location }) => {
   return (
      <section className="mx-auto mt-20 text-center md:mt-0 lg:mt-28">
         {/* Subscribe Card */}
         <Card variant="text" sx="flex flex-col space-y-5 text-center">
            <h5 className="text-center text-3xl dark:text-white">
               Stay Up to Date!
            </h5>
            <p>Be the first to learn about our upcoming events.</p>
            <Button
               href={LOCATIONS[location].newsletter}
               size="xl"
               variant="primary"
               sx="dark:hover:bg-black dark:hover:text-primary"
               target="_blank"
            >
               <span className="mx-auto">Subcribe to {location}</span>
            </Button>
         </Card>
         {/* Link to FAQ and Contact */}
         <p className="mt-20 text-lg text-dark-grey">
            Have any questions? Visit our{" "}
            <Link href="/faq" className="mr-1 text-sky-600 underline">
               FAQ
            </Link>
            page or feel free to contact us{" "}
            <Link href="/contact" className="text-sky-600 underline">
               here
            </Link>
            .
         </p>
      </section>
   )
}
