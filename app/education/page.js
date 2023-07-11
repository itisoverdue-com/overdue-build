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
         title: "OVERDUE Environmental Festivals At School",
         text: "Recycle art festival coming up soon!",
      },
      {
         img: "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/education/3_uopfwj.jpg",
         title: "Viewpoint High School",
         text: "Recycle art festival coming up soon!",
      },
   ]
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
