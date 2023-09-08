import Link from "next/link"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Button from "@/components/shared/Button"

const SubHeading = ({ children }) => (
   <h2 className="text-2xl font-normal md:text-4xl">{children}</h2>
)

export default function Hero({ page, backgroundImageSrc = "" }) {
   return (
      <FullBleedContainer
         sx="h-[92vh] lg:h-[80vh] "
         backgroundImageSrc={`${backgroundImageSrc}`}
         childSx="flex sm:items-start sm:justify-center sm:pl-20 items-center justify-center  flex-col h-full relative text-white text-center text-2xl
          md:text-4xl lg:text-5xl xl:text-6xl font-bold flex-col space-y-5"
      >
         <h1>
            {page}
            <span className="mx-auto mt-2 block w-1/3 rounded-2xl border-t-8 border-primary" />
         </h1>

         <div className="flex flex-col items-start justify-center">
            <SubHeading>We are the future. We are the solution.</SubHeading>
            <SubHeading>We will make your city the cleanest city.</SubHeading>
         </div>

         <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Button variant="outline" size="lg" href="/join">
               Join Our Team!
            </Button>
            <Button
               variant="primary"
               size="lg"
               sx="dark:bg-primary dark:hover:bg-black dark:hover:text-primary"
               href="/donate"
            >
               Donate Now!
            </Button>
         </div>
      </FullBleedContainer>
   )
}
