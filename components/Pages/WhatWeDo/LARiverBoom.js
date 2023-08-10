import Image from "next/image"

import Card from "@/components/shared/Card"

function generateText(variant) {
   const variantText = {
      home: "Save the wildlife! We are committed to installing a 'trash boom', a net-like barrier, in the river to prevent the trash from going into the natural habitat area.",
      about: "While working within the Lake Balboa section of the Los Angeles river, we have witnessed the harsh reality of waste contamination and its effects on wildlife. After observing a turtle who could not dive due to the styrofoam it ingested, we were moved to take action and set a goal to build a 'trash boom', a net-like barrier, in the river. With this, we at OVERDUE hope to stop the flow of trash and more easily clean up the river itself.",
   }

   return variantText[variant]
}

export default function LARiverBoom({ variant }) {
   const text = generateText(variant)

   return (
      <div className="relative mt-16 flex w-full flex-col lg:flex-row lg:items-center lg:justify-end xl:mt-24">
         <Card
            variant="image"
            sx="order-1 w-[75vw] max-w-[calc(576px*0.8)] aspect-[576/400] md:ml-0 lg:w-[30%] lg:h-[400px] lg:max-w-[576px] lg:mr-4 xl:w-2/5 min-[1512px]:order-2 min-[1512px]:w-full min-[1512px]:mr-0 min-[1512px]:ml-4"
         >
            <Image
               alt="Trash on the ground in a wilderness area"
               src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441389/events/tertiaryevent_rhegxq.jpg"
               fill
               style={{ objectFit: "cover" }}
            />
         </Card>
         <Card
            variant="text"
            sx="flex flex-col justify-center order-2 mt-4 max-w-none md:mr-0 md:w-[90%] lg:mx-auto lg:mt-0 lg:h-[400px] min-[1512px]:order-1"
         >
            <h3 className="text-xl sm:text-2xl">
               Los Angeles River Trash Boom Project
            </h3>
            <p className="mt-4">{text}</p>
         </Card>
      </div>
   )
}
