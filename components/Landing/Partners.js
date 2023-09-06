import Image from "next/image"
import SectionSubheader from "../Pages/SectionSubheader"
import Card from "../shared/Card"
import Button from "../shared/Button"
import { PARTNERS_DATA } from "../../lib/data"

// Partners component
const Partners = () => (
   <section className="md:p-8">
      <SectionSubheader
         header="Our Partners"
         sx="mt-20 text-center md:text-start"
      />

      <div className="flex flex-col gap-8">
         <ul className="mt-5 flex flex-wrap justify-center gap-8 md:justify-evenly">
            {PARTNERS_DATA.map((partner) => (
               <li
                  key={partner.name}
                  className="flex items-center justify-center"
               >
                  <figure className="flex h-[140px] w-full items-center justify-center bg-white p-4 lg:h-[160px] lg:w-[240px]">
                     <Image
                        src={partner.imgURL}
                        alt={`Partner ${partner.name}`}
                        quality={50}
                        width={100}
                        height={100}
                     />
                  </figure>
               </li>
            ))}
         </ul>

         <div className="flex flex-row">
            <Card
               sx="hidden md:flex aspect-[2/1] mt-8  lg:h-[300px] md:w-[45%] md:mt-0 lg:w-[35%]  lg:mr-0 rounded-r-none"
               variant="image"
            >
               <Image
                  src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/partners/sponsor_e9feou.jpg"
                  alt="Who We Are"
                  layout="fill"
                  objectFit="cover"
                  quality={85}
               />
            </Card>

            <Card
               variant="text"
               sx="flex flex-col gap-4 lg:flex-row justify-center items-center max-w-none  mx-auto lg:w-[65%] lg:h-[300px] min-[1400px]:order-1 md:rounded-l-none"
            >
               <h3 className="text-center text-xl sm:text-2xl lg:w-[66%] lg:text-start">
                  We can make a real difference when we work together.
               </h3>
               <Button
                  variant="primary"
                  href="/sponsor"
                  size="lg"
                  sx="text-center"
               >
                  Become A Sponsor
               </Button>
            </Card>
         </div>
      </div>
   </section>
)

export default Partners
