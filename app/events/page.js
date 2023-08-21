import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Link from "next/link"
import Image from "next/image"

const chapters = [
   {
      location: "Seattle, WA",
      lat: "left-[20%]",
      lon: "top-[5%]",
      zIndex: "z-[10]",
   },
   {
      location: "Woodland Hills, CA",
      lat: "left-[18%]",
      lon: "bottom-[47%]",
      zIndex: "z-[11]",
   },
   {
      location: "Miami, FL",
      lat: "right-[10%]",
      lon: "bottom-[16%]",
      zIndex: "z-[10]",
   },
   {
      location: "San Fernando Valley, CA",
      lat: "left-[20%]",
      lon: "bottom-[49%]",
      zIndex: "z-[11]",
   },
   {
      location: "Torrance, CA",
      lat: "left-[20%]",
      lon: "bottom-[43%]",
      zIndex: "z-[13]",
   },
   {
      location: "Long Beach, CA",
      lat: "left-[21%]",
      lon: "bottom-[43%]",
      zIndex: "z-[13]",
   },
   {
      location: "Northridge, CA",
      lat: "left-[18%]",
      lon: "bottom-[45%]",
      zIndex: "z-[12]",
   },
   {
      location: "Sacramento, CA",
      lat: "left-[16%]",
      lon: "top-[33%]",
      zIndex: "z-[10]",
   },
]

export default function Events() {
   return (
      <div>
         <PageHero
            route="events"
            header="Events"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/backgrounds/events_fpfx1s.jpg"
         />
         <FullBleedContainer
            sx="bg-background dark:bg-darkest-grey"
            childSx="py-20 lg:py-32 flex flex-col justify-center items-center  text-center"
         >
            {/* Title, Accent Line, Subheader */}
            <>
               <h2>Our Chapter Locations</h2>
               <div className="my-4 w-20 rounded-full border-t-8 border-primary dark:border-white md:my-5 md:w-28" />
               <h3 className="max-w-screen-xl font-normal text-dark-grey">
                  We need volunteers to help us in cleaning the environment and
                  be a part of a greater good. You can subscribe to any of the
                  events mentioned below.
               </h3>
            </>

            {/* US Map with Chapter Pins */}
            <ChapterMap />

            {/* Chapter Locations */}
            <div className="w-full max-w-5xl">
               <h4 className="mb-1 text-start text-dark-grey underline underline-offset-8 dark:text-white">
                  Select a Chapter:
               </h4>

               {/* List of Chapters */}
               <ul className="flex flex-col md:flex-row md:flex-wrap">
                  {chapters.map((item) => (
                     <Link
                        key={`${item.location}-textbox`}
                        href={`/events/${item.location}`}
                        className="md:mr-5"
                     >
                        <li className="mt-3 block w-full rounded-md bg-white p-3  text-start text-black shadow-md dark:bg-dark-grey dark:text-white md:mt-5 md:rounded-lg md:p-4 md:text-xl  md:transition-all md:hover:-translate-y-1.5 md:hover:bg-primary md:hover:shadow-lg lg:p-6">
                           📍 {item.location}
                        </li>
                     </Link>
                  ))}
               </ul>
            </div>
         </FullBleedContainer>
      </div>
   )
}

const ChapterPin = ({ location, lat, lon, zIndex = "z-10" }) => {
   return (
      <Link href={`/events/${location}`}>
         <button
            className={`absolute h-4 w-4 md:h-8 md:w-8 md:transition-all md:hover:-translate-y-2 md:hover:scale-110 lg:h-10 lg:w-10 ${zIndex} ${lat} ${lon}`}
         >
            {/* Map Pin SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 71">
               <path
                  d="M51.0033 17.7868L51.0032 17.7865C47.2585 7.87826 37.4526 1.523 27.0544 1.59434L25.6578 1.60393V1.63554C15.7952 2.12025 6.69909 8.34057 3.12485 17.7978L3.12484 17.7978C-1.51843 30.0842 5.80842 40.7598 6.44142 41.6565L6.44815 41.666L6.45504 41.6755C8.81651 44.9058 11.1786 48.1358 13.5408 51.3661C17.633 56.9621 21.7255 62.5586 25.816 68.1576L26.2638 68.7705L27.0218 68.7326L27.2468 68.7213L27.9162 68.6878L28.3118 68.1467C30.6727 64.9172 33.0345 61.6875 35.3966 58.4574C39.4891 52.8609 43.5824 47.2634 47.6733 41.6639L47.68 41.6546L47.6866 41.6453C48.3197 40.7485 55.6464 30.0787 51.0033 17.7868ZM27.064 38.6968C20.5061 38.6968 15.1953 33.3812 15.1953 26.8281C15.1953 20.2753 20.5113 14.9593 27.064 14.9593C33.6168 14.9593 38.9328 20.2753 38.9328 26.8281C38.9328 33.3808 33.6168 38.6968 27.064 38.6968Z"
                  fill="#FDD92A"
                  stroke="black"
                  strokeWidth="2.8125"
               />
               <path
                  d="M27.0637 40.1052C34.3987 40.1052 40.3387 34.1596 40.3387 26.8302C40.3387 19.5009 34.393 13.5553 27.0637 13.5553V3.00837C36.9018 2.94087 46.1605 8.95962 49.6874 18.2915C54.0581 29.8565 47.1449 39.9815 46.5374 40.8421C40.0855 49.6678 33.628 58.4934 27.1762 67.3246L26.9512 67.3359L27.0637 40.1109V40.1052Z"
                  fill="#FDD92A"
               />
            </svg>
         </button>
      </Link>
   )
}

const ChapterMap = () => {
   return (
      // Container for US Map + Chapter Pins
      <section className="my-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-white p-1 shadow-xl">
         {/* US Map + Chapter Pins */}
         <div className="relative aspect-[5/3] h-auto w-full">
            <Image
               src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1689879535/events/us-map_b2rpzs.png"
               alt="us-map"
               fill
               style={{ objectFit: "cover" }}
               sizes="100%"
            />
            {chapters.map((item) => (
               <ChapterPin
                  key={item.location}
                  location={item.location}
                  lat={item.lat}
                  lon={item.lon}
                  zIndex={item.zIndex}
               />
            ))}
         </div>
      </section>
   )
}
