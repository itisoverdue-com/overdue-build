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
   CalendarIcon,
   CalendarDaysIcon,
   ClipboardIcon,
   ListBulletIcon,
} from "@heroicons/react/24/outline"
import { LOCATIONS } from "@/lib/data"
const sampleData = {
   when: {
      date: "Thu, May 17",
      time: "9:30am - 10:30am PDT",
   },
   title: "Cleanup Lake Balboa",
   location: {
      name: "Balboa Blvd. & LA River",
      href: "/",
   },
   parking: {
      name: "Dirt Parking Lot or On the Street",
      href: "/",
   },
   instructions:
      "Look for yellow OVERDUE flags and banners and you'll find us on the bike path by the bridge",
   signup: "/",
   calendar: "/",
}

/**
 * eventData Interface
 * when: {
 *    date: event.start.local to event.end.local
 *    time: event.start.local to event.end.local
 * },
 * title: event.name.text
 * location: {
 *    name: ""
 *    href: ""
 * }
 * parking: {
 *    name: "",
 *    href: ""
 * },
 * instruction: event.
 */

export default function EventLocationPage({ params: { location } }) {
   const [view, setView] = useState("calendar")
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [eventData, setEventData] = useState(null)

   useEffect(() => {
      async function fetchData() {
         setLoading(true)
         try {
            const locationDetails = LOCATIONS[formatHeader()]
            const extension = `${locationDetails.lat},${locationDetails.lon}`
            const res = await fetch(`/api/events/${extension}`)
            const data = await res.json()
            setEventData(data)
         } catch (err) {
            setError(err)
         }
         setLoading(false)
      }
      if (eventData === null) {
         fetchData()
      }
   })

   const handleViewChange = (e) => setView(e.currentTarget.name)
   const formatHeader = () =>
      location.split("%20").join(" ").split("%2C").join(",")

   if (eventData) {
      eventData.forEach((item) => {
         console.log(item)
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
         <FullBleedContainer sx="bg-background" childSx="py-16 lg:py-28 ">
            {error ? (
               <Error />
            ) : loading ? (
               <Loading />
            ) : (
               <>
                  {/* <--- Event Details, Calendar/List ---> */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                     {/* Event Details */}
                     <section className="flex flex-col space-y-8 md:space-y-10 lg:space-y-0 justify-between">
                        {/* Header */}
                        <h2 className="text-xl bg-primary text-white py-2 px-5 rounded-lg w-max shadow-md  lg:rounded-xl lg:px-6 lg:py-3 lg:text-4xl">
                           Upcoming Events:
                        </h2>

                        {/* Title of Event */}
                        <h3 className="text-5xl lg:text-6xl">
                           {sampleData.title}
                        </h3>

                        {/* Date and Time, Location/Parking */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                           {/* Date and Time */}
                           <div className="col-span-1">
                              <h4 className="mb-1 underline underline-offset-2 text-xl md:text-2xl">
                                 Date and Time:
                              </h4>
                              <p className="md:text-lg">
                                 {sampleData.when.date}
                              </p>
                              <p className="md:text-lg">
                                 @ {sampleData.when.time}
                              </p>
                           </div>

                           {/* Location/Parking */}
                           <div className="col-span-2">
                              <h4 className="mb-1 underline underline-offset-2 text-xl md:text-2xl">
                                 Location/Parking
                              </h4>

                              {/* Location */}
                              <p className="md:text-lg">
                                 <span className="mr-2">
                                    {sampleData.location.name}
                                 </span>

                                 <Link
                                    href={sampleData.location.href}
                                    target="_blank"
                                 >
                                    <button className="hover:underline items-center space-x-1 inline-flex text-sm bg-neutral-200 rounded-lg px-2">
                                       <span>Open in Maps</span>
                                       <ArrowTopRightOnSquareIcon className="w-4 h-5 " />
                                    </button>
                                 </Link>
                              </p>

                              {/* Parking */}
                              <p className="md:text-lg">
                                 <span className="mr-2">
                                    {sampleData.parking.name}
                                 </span>
                                 <Link
                                    href={sampleData.parking.href}
                                    target="_blank"
                                 >
                                    <button className="hover:underline items-center space-x-1 inline-flex text-sm bg-neutral-200 rounded-lg px-2">
                                       <span>Open in Maps</span>
                                       <ArrowTopRightOnSquareIcon className="w-4 h-5 " />
                                    </button>
                                 </Link>
                              </p>
                           </div>
                        </div>

                        {/* Instructions */}
                        <div>
                           <h4 className="mb-2 underline underline-offset-2 text-xl md:text-2xl">
                              Instructions:
                           </h4>
                           <p className="md:text-lg px-4 py-2 bg-neutral-200 rounded-md md:rounded-lg">
                              {sampleData.instructions}
                           </p>
                        </div>

                        {/* Sign Up, Add To Calendar */}
                        <div className="flex space-x-3 md:space-x-5 md:max-w-md">
                           <Button
                              href={sampleData.signup}
                              size="lg"
                              variant="primary"
                              target="_blank"
                              fullWidth
                              style={{ fontSize: "1rem", padding: "0.5rem" }}
                           >
                              <ClipboardIcon className="w-5 h-5 mb-0.5 mr-1" />
                              <span>Sign Up</span>
                           </Button>
                           <Button
                              href={sampleData.signup}
                              size="lg"
                              variant="primary"
                              target="_blank"
                              fullWidth
                              style={{
                                 fontSize: "1rem",
                                 padding: "0.5rem",
                              }}
                           >
                              <CalendarIcon className="w-5 h-5 mb-0.5 mr-1" />
                              <span>Add to Calendar</span>
                           </Button>
                        </div>
                     </section>

                     {/* Calendar, List */}
                     <section className="flex flex-col justify-center items-center lg:items-end ">
                        {/* Container */}
                        <div className="bg-white w-full  shadow-lg rounded-xl aspect-square h-auto max-w-lg relative  mt-20">
                           {/* Calendar, List Toggle */}
                           <div className="rounded-md overflow-hidden bg-white mb-10 shadow-md w-1/2 flex absolute left-1/2 -translate-x-1/2 -top-20">
                              <button
                                 name="calendar"
                                 onClick={handleViewChange}
                                 className={`${
                                    view === "calendar"
                                       ? "bg-black text-primary"
                                       : ""
                                 } transition py-3 w-full flex items-center justify-center`}
                              >
                                 <CalendarDaysIcon className="w-4 h-4 inline-block mr-1" />
                                 <span>Calendar</span>
                              </button>
                              <button
                                 name="list"
                                 onClick={handleViewChange}
                                 className={`${
                                    view === "list"
                                       ? "bg-black text-primary"
                                       : ""
                                 } transition py-3 w-full flex items-center justify-center`}
                              >
                                 <ListBulletIcon className="w-4 h-4 inline-block  mr-1" />
                                 <span>List</span>
                              </button>
                           </div>

                           {/* Calendar, List */}

                           <div
                              className={`h-[98%] w-[98%]  absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                                 view === "calendar"
                                    ? "scale-100 z-10 bg-lightest-grey text-black"
                                    : "scale-75 z-0 bg-transparent text-transparent"
                              } transition-all duration-300`}
                           >
                              CALENDAR
                           </div>

                           <ul
                              className={`h-[98%] w-[98%] bg-lightest-grey absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                                 view === "list"
                                    ? "scale-100 z-10 bg-lightest-grey text-black"
                                    : "scale-75 z-0 bg-transparent text-transparent"
                              } transition-all duration-300`}
                           >
                              LIST
                           </ul>
                        </div>
                     </section>
                  </div>

                  {/* <--- Subscribe Card, Link to FAQ and Contact --->*/}
                  <section className="mt-32 mx-auto text-center">
                     {/* Subscribe Card */}
                     <Card
                        variant="text"
                        sx="flex flex-col space-y-5 text-center"
                     >
                        <h5 className="text-3xl text-center">
                           Stay Up to Date!
                        </h5>
                        <p>Be the first to learn about our upcoming events.</p>
                        <Button
                           href={sampleData.signup}
                           size="xl"
                           variant="primary"
                           target="_blank"
                        >
                           <span className="mx-auto">
                              Subcribe to {formatHeader()}
                           </span>
                        </Button>
                     </Card>
                     {/* Link to FAQ and Contact */}
                     <p className="text-lg mt-20 text-dark-grey">
                        Have any questions? Visit our{" "}
                        <Link
                           href="/faq"
                           className="underline text-sky-600 mr-1"
                        >
                           FAQ
                        </Link>
                        page or feel free to contact us{" "}
                        <Link
                           href="/contact"
                           className="underline text-sky-600"
                        >
                           here
                        </Link>
                        .
                     </p>
                  </section>
               </>
            )}
         </FullBleedContainer>
      </div>
   )
}
