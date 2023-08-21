import PageHero from "@/components/shared/PageHero"
import Card from "@/components/shared/Card"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Image from "next/image"
import Button from "@/components/shared/Button"

const ASPECTS = {
   square: "square",
   landscape: "landscape",
   portrait: "portrait",
}

export default function Education() {
   const events = [
      {
         image: {
            src: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1689101537/education/Leadership_Awards_Ceremony_s8we3h.jpg",
            aspect: ASPECTS.square,
         },
         title: "Our First-Ever Annual Leadership Awards Ceremony",
         text: "A congratulations is OVERDUE for these outstanding student leaders!",
      },
      {
         image: {
            src: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/education/1a_mmlgpw.jpg",
            aspect: ASPECTS.portrait,
         },
         title: "OVERDUE Kids Beach Cleanup",
         text: "We educate kids how fun the beach cleanup is and tell them what impact they made using animal references. \nBeach workshops under development. Follow us to be updated!",
      },
      {
         image: {
            src: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/education/1b_yegvfp.jpg",
            aspect: ASPECTS.portrait,
         },
         title: "OVERDUE Environmental Festivals at School",
         text: "Recycle art festival coming up soon!",
      },
      {
         image: {
            src: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/education/3_uopfwj.jpg",
            aspect: ASPECTS.portrait,
         },
         title: "We Help Students Learn All About Waste",
         text: "Viewpoint High School, St. Bernardine of Siena School, & USC Engineering Department where we discussed all about:\nE-Waste Recycling Lessons\nBeach Cleanups\nUpcycling Art Class\nLA River Project - Capstone Class",
      },
      {
         image: {
            src: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/education/2a_x1scri.jpg",
            aspect: ASPECTS.landscape,
         },
         title: "Education Program News",
         text: "We visit local schools to speak in class/ zoom call about E- waste/ plastic waste.",
      },
      {
         image: {
            src: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/education/2b_dfvkyz.jpg",
            aspect: ASPECTS.square,
         },
         title: "Student Chapter at Local Schools",
         text: "We have 12 hubs (and more to come!) that are led by local leaders. Sign up to make a chapter at your school and inspire other students! Get a hands on experience about environmentalism!",
      },
      {
         image: {
            src: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/education/4_kzsovb.jpg",
            aspect: ASPECTS.landscape,
         },
         title: "Our Time @ Notre Dame High School",
         text: "Ocean Microplastics and Marine Life Lessons\nKahoot Quiz\nBeach Cleanup",
      },
      {
         image: {
            src: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441389/education/5_gdzbyl.jpg",
            aspect: ASPECTS.square,
         },
         title: "Student Chapters",
         text: "Host Monthly Meetings\nCoordinate Frequent Cleanup Events\nEngage the Students in their Community\nEarn Community Hours\nLearn Leadership in Sustainability",
      },
   ]
   const locations = ["Sunrise, FL", "Seattle, WA", "Los Gatos, CA"]
   return (
      <div>
         <PageHero
            route="education"
            header="Education"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441391/backgrounds/education_fbvmrv.jpg"
         />
         <FullBleedContainer
            sx="bg-background dark:bg-darkest-grey"
            childSx="py-20 lg:py-32 flex flex-col justify-center items-center  text-center"
         >
            {/* Title, Accent Line, Subheader */}
            <>
               <h2>Education Events</h2>
               <div className="my-4 w-20 rounded-full border-t-8 border-primary md:my-5 md:w-28" />
               <h3 className="font-normal text-dark-grey">
                  Environment Arts Festival - Recycle art festival, Recycle arts
                  competition, kids exhibition, and more!
               </h3>
            </>

            {/* Events Grid Masonry */}
            <section className="my-16 h-auto w-full columns-1 md:columns-2 md:gap-6 lg:my-20 lg:columns-3 lg:gap-8 ">
               {events.map((item, index) => (
                  <EventCard
                     key={`event-${index}`}
                     image={item.image.src}
                     aspect={item.image.aspect}
                     title={item.title}
                     text={item.text}
                  />
               ))}
            </section>

            {/* Call to Action: School Chapter App */}
            <Button
               href="https://forms.gle/rNqwfswyfF1v7Ke28"
               size="xl"
               variant="dark"
               target="_blank"
               style={{ fontWeight: 400 }}
            >
               Submit a School Chapter Application Now
            </Button>

            {/* Student Chapter Locations */}
            <section className="mt-20 w-full">
               {/* Header, List of Locations */}
               <>
                  <h4 className="mb-8 text-3xl md:mb-10 md:text-4xl">
                     Student Chapter Locations
                  </h4>
                  <ul className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center md:justify-evenly md:gap-0">
                     {locations.map((item) => (
                        <li
                           key={item}
                           className="w-full text-start md:mb-6 md:w-1/4 md:text-center"
                        >
                           <span className="block rounded-full bg-darkest-grey px-4  py-2 text-sm text-white md:inline-block md:text-base lg:text-lg">
                              📍 {item}
                           </span>
                        </li>
                     ))}
                  </ul>
               </>

               {/* Image of Students */}
               <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl md:mt-8 md:rounded-3xl">
                  <Image
                     src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441394/education/end_lbfetc.jpg"
                     alt="student-chapter-locations"
                     fill
                     quality={100}
                     style={{ objectFit: "cover" }}
                  />
               </div>
            </section>
         </FullBleedContainer>
      </div>
   )
}

const EventCard = ({ image, aspect, title, text }) => {
   const aspectRatio = {
      square: "aspect-square",
      portrait: "aspect-[4/5]",
      landscape: "aspect-[5/4]",
   }

   // Render text with line breaks
   const renderText = (text) => {
      return (
         <p className="lg:text-lg">
            {text.split("\n").map((t, key) => {
               return (
                  <span key={key} className="mt-1 block">
                     {t}
                  </span>
               )
            })}
         </p>
      )
   }
   return (
      <Card
         sx={`mb-8 shadow-lg w-full h-auto overflow-hidden ${aspectRatio[aspect]} md:mb-6 lg:transtion-all lg:duration-150 lg:mb-8 lg:hover:scale-105 lg:hover:shadow-xl`}
      >
         {/* Image */}
         <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 768px) 30vw, 100vw"
         />

         {/* Title, Text */}
         <div className=" absolute bottom-0 left-1/2  w-full -translate-x-1/2 bg-black bg-opacity-80 p-6 text-start text-white">
            <h3 className="mb-1 text-2xl text-primary">{title}</h3>
            {renderText(text)}
         </div>
      </Card>
   )
}
