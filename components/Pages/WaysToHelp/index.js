import Image from "next/image"

import SectionSubheader from "../SectionSubheader"
import Card from "@/components/shared/Card"
import Button from "@/components/shared/Button"

export default function WaysToHelp() {
   const cards = [
      {
         text: "Sponsor",
         lgText: "Become a Sponsor",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441374/HandshakeIcon_shorny.svg",
         href: "/sponsor",
      },
      {
         text: "Donate",
         lgText: "Donate",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441374/DonateIcon_t2xdga.svg",
         href: "/donate",
      },
      {
         text: "Join",
         lgText: "Join Our Team",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441374/ClipboardIcon_ifyl2r.svg",
         href: "/join",
      },
   ]
   return (
      <section>
         <div className="flex flex-col justify-center text-center">
            <SectionSubheader
               header="Ways To Help"
               sx="mt-24"
               borderSx="md:mx-auto"
            />
            <div className="mt-8 flex flex-col items-center justify-evenly gap-y-12 md:flex-row md:flex-wrap md:gap-x-4 xl:flex-nowrap xl:justify-between">
               {cards.map((card) => {
                  return (
                     <Card
                        key={cards.indexOf(card)}
                        variant="actionItem"
                        sx="max-w-[300px] mx-0 xl:max-w-[360px]"
                     >
                        <div className="relative aspect-square w-[150px] xl:w-[180px]">
                           <Image
                              alt={card.text}
                              src={card.imgSrc}
                              fill
                              style={{ objectFit: "cover" }}
                           />
                        </div>
                        <div className="mt-12 xl:hidden">
                           <Button variant="primary" size="xl" href={card.href}>
                              {card.text}
                           </Button>
                        </div>
                        <div className="mt-12 max-xl:hidden">
                           <Button variant="primary" size="xl" href={card.href}>
                              {card.lgText}
                           </Button>
                        </div>
                     </Card>
                  )
               })}
            </div>
         </div>
      </section>
   )
}
