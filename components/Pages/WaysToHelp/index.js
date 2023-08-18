"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

import SectionSubheader from "../SectionSubheader"
import Card from "@/components/shared/Card"
import Button from "@/components/shared/Button"

export default function WaysToHelp() {
   // detect screen width
   const [windowWidth, setWindowWidth] = useState(0)
   useEffect(() => {
      const resize = () => setWindowWidth(window.innerWidth)
      window.addEventListener("resize", resize)
      resize()
      return () => window.removeEventListener("resize", resize)
   }, [])

   const cards = [
      {
         id: 1,
         text: "Sponsor",
         lgText: "Become a Sponsor",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441374/HandshakeIcon_shorny.svg",
         page: "sponsor",
      },
      {
         id: 2,
         text: "Donate",
         lgText: "Donate",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441374/DonateIcon_t2xdga.svg",
         page: "donate",
      },
      {
         id: 3,
         text: "Join",
         lgText: "Join Our Team",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441374/ClipboardIcon_ifyl2r.svg",
         page: "join",
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
            <div className="mt-8 flex flex-col items-center justify-evenly gap-y-10 lg:flex-row lg:gap-x-16 xl:gap-x-28 min-[1400px]:gap-x-40">
               {cards
                  .sort((a, b) => a.id - b.id)
                  .map(({ id, text, lgText, imgSrc, page }) => {
                     return (
                        <Card key={id} variant="actionItem">
                           <div className="flex w-1/2 items-center justify-center border-none border-blue-500 lg:w-[150px]">
                              <div className="relative aspect-square w-[65%] drop-shadow-[4px_2px_2px_rgba(50,48,42,.75)] lg:w-full ">
                                 <Image
                                    alt={text}
                                    src={imgSrc}
                                    fill
                                    sizes="(max-width: 1024px) 65%, 100%"
                                    className="object-contain"
                                 />
                              </div>
                           </div>
                           <div className="mx-auto w-fit border-none border-red-500">
                              <Button
                                 variant="primary"
                                 size={windowWidth < 420 ? "lg" : "xl"}
                                 href={`/${page}`}
                              >
                                 {windowWidth < 1280 ? text : lgText}
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
