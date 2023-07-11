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
            page="Education"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441391/backgrounds/education_fbvmrv.jpg"
         />
         <FullBleedContainer
            sx="bg-background"
            childSx="py-20 lg:py-32 flex flex-col justify-center items-center  text-center"
         >
            {/* Title, Accent Line, Subheader */}
            <>
               <h2>Education Events</h2>
               <div className="border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28" />
               <h3 className="text-dark-grey font-normal">
                  Environment Arts Festival - Recycle art festival, Recycle arts
                  competition, kids exhibition, and more!
               </h3>
            </>

            {/* Events Grid Masonry */}
            <section className="h-auto w-full columns-1 my-16 md:gap-6 md:columns-2 lg:gap-12 lg:my-20 ">
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
            <section className="w-full mt-20">
               {/* Header, List of Locations */}
               <>
                  <h4 className="text-3xl mb-8 md:text-4xl md:mb-10">
                     Student Chapter Locations
                  </h4>
                  <ul className="grid grid-cols-2 gap-3 md:gap-0 md:flex md:flex-wrap md:items-center md:justify-evenly">
                     {locations.map((item) => (
                        <li
                           key={item}
                           className="text-start w-full md:text-center md:mb-6 md:w-1/4"
                        >
                           <span className="py-2 px-4 bg-darkest-grey block  text-white rounded-full text-sm md:text-base md:inline-block lg:text-lg">
                              📍 {item}
                           </span>
                        </li>
                     ))}
                  </ul>
               </>

               {/* Image of Students */}
               <div className="relative aspect-video rounded-2xl overflow-hidden mt-10 md:mt-8 md:rounded-3xl">
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
                  <span key={key} className="block mt-1 lg:mt-3">
                     {t}
                  </span>
               )
            })}
         </p>
      )
   }
   return (
      <Card
         sx={`mb-8 shadow-lg w-full h-auto overflow-hidden ${aspectRatio[aspect]} md:mb-6 lg:transtion-all lg:duration-150 lg:mb-12 lg:hover:scale-105 lg:hover:shadow-xl`}
      >
         {/* Image */}
         <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 768px) 50vw, 100vw"
         />

         {/* Title, Text */}
         <div className=" bg-black text-white bg-opacity-80  text-start p-6 w-full absolute left-1/2 -translate-x-1/2 bottom-0 lg:rounded-2xl lg:w-11/12 lg:bottom-8">
            <h3 className="text-primary mb-1 text-2xl lg:mb-3 lg:text-4xl">
               {title}
            </h3>
            {renderText(text)}
         </div>
      </Card>
   )
}
