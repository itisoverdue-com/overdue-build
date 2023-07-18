import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"

export default function Events() {
   return (
      <div>
         <PageHero
            page="Events"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/backgrounds/events_fpfx1s.jpg"
         />
         <FullBleedContainer
            sx="bg-background"
            childSx="py-20 lg:py-32 flex flex-col justify-center items-center  text-center"
         >
            {/* Title, Accent Line, Subheader */}
            <>
               <h2>Select Chapter</h2>
               <div className="border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28" />
               <h3 className="text-dark-grey font-normal">
                  We are constantly expanding! Click on a chapter pin and see
                  what events we have in store for you!
               </h3>
            </>
         </FullBleedContainer>
      </div>
   )
}
