import SectionSubheader from "../SectionSubheader"
import CleanupEvents from "./CleanupEvents"
import EducationalPrograms from "./EducationalPrograms"
import LARiverBoom from "./LARiverBoom"

/**
 * "What We Do" component
 * @param {string} variant - Determines the variant text and styles of the component.
 */

export default function WhatWeDo({ variant }) {
   return (
      <section>
         <div className="flex flex-col justify-center text-center xl:px-12">
            <SectionSubheader
               header="What We Do"
               sx="mt-24"
               borderSx="md:mx-auto lg:ml-0"
            />
            <CleanupEvents variant={variant} />
            <EducationalPrograms variant={variant} />
            <LARiverBoom variant={variant} />
         </div>
      </section>
   )
}

{
   /*
  <WhatWeDo variant="home" />
  <WhatWeDo varant="about" />
  */
}
