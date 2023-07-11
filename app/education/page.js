import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"

export default function Education() {
   const events = [
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1689101537/education/Leadership_Awards_Ceremony_s8we3h.jpg",
         title: "Our First-Ever Annual Leadership Awards Ceremony",
         text: "A congratulations is OVERDUE for these outstanding student leaders!",
      },
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/education/1a_mmlgpw.jpg",
         title: "OVERDUE Kids Beach Cleanup",
         text: "We educate kids how fun the beach cleanup is and tell them what impact they made using animal references. \nBeach workshops under development. Follow us to be updated!",
      },
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/education/1b_yegvfp.jpg",
         title: "OVERDUE Environmental Festivals at School",
         text: "Recycle art festival coming up soon!",
      },
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/education/3_uopfwj.jpg",
         title: "We Are Educating School All About Waste",
         text: "Students at Viewpoint High School, St. Bernardine of Siena School, & USC Engineering Department\nLearned all about:\nE-Waste Recycling Lessons\nBeach Cleanups\nUpcycling Art Class\nLA River Project - Capstone Class",
      },
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/education/2a_x1scri.jpg",
         title: "Education Program News",
         text: "We visit local schools to speak in class/ zoom call about E- waste/ plastic waste.",
      },
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/education/2b_dfvkyz.jpg",
         title: "Student Chapter at Local Schools",
         text: "We have 12 hubs (and more to come!) that are led by local leaders. Sign up to make a chapter at your school and inspire other students! Get a hands on experience about environmentalism!",
      },
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/education/4_kzsovb.jpg",
         title: "Our Time @ Notre Dame High School",
         text: "Ocean Microplastics and Marine Life Lessons\nKahoot Quiz\nBeach Cleanup",
      },
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441389/education/5_gdzbyl.jpg",
         title: "Student Chapters",
         text: "Host Monthly Meetings\nCoordinate Frequent Cleanup Events\nEngage the Students in their Community\nEarn Community Hours\nLearn Leadership in Sustainability",
      },
   ]

   const renderText = (text) => {
      return (
         <p className="md:text-lg">
            {text.split("\n").map((t, key) => {
               return (
                  <span key={key} className="block">
                     {t}
                  </span>
               )
            })}
         </p>
      )
   }
   return (
      <div>
         <PageHero
            page="Education"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441391/backgrounds/education_fbvmrv.jpg"
         />
         <FullBleedContainer
            sx="bg-background"
            childSx="py-20 lg:py-32 flex flex-col justify-center items-center text-center"
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
            <div className="columns-1 md:columns-2 md:gap-8 lg:gap-10">
               {/* {events.map((item) => (

               ))} */}
            </div>
         </FullBleedContainer>
      </div>
   )
}

// const EventCard = ({img, title, text}) => {
//    return ()
// }
