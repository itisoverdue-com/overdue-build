import Image from "next/image"

import Card from "@/components/shared/Card"
import Button from "@/components/shared/Button"

function generateText(variant) {
   const variantText = {
      home: "We work with schools and tutoring centers to inspire the youth to make a better future.",
      about: "We know the most important key to solving our environmental problems is education at an early age. There are many ways that students can get involved with OVERDUE, including creating a student chapter, participating in events, and interning.",
   }

   return variantText[variant]
}

export default function EducationalPrograms({ variant }) {
   const text = generateText(variant)

   return (
      <div className="relative flex flex-col w-full mt-16 lg:flex-row lg:justify-end lg:items-center xl:mt-24">
         <Card
            variant="image"
            sx="order-1 w-[65vw] max-w-[350px] aspect-[350/400] md:ml-0 lg:order-2 lg:h-[400px] lg:w-[45%] lg:mr-0 lg:ml-4"
         >
            <Image
               alt="text"
               src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/events/secondaryevent_ww20ea.jpg"
               fill
               style={{ objectFit: "cover" }}
            />
         </Card>
         <Card
            variant="text"
            sx="flex flex-col justify-center order-2 mt-[-50px] max-sm:text-sm max-sm:leading-8 md:mt-[-100px] md:w-[90%] md:mt-0 md:mr-0 lg:order-1 lg:mt-0 lg:h-[400px]"
         >
            <h3 className="text-xl sm:text-2xl">Educational Programs</h3>
            <p className="mt-4 mb-6">{text}</p>
            <div className="mx-auto w-fit lg:ml-0">
               <Button variant="dark" size="xl" href="/education">
                  Learn More
               </Button>
            </div>
         </Card>
      </div>
   )
}
