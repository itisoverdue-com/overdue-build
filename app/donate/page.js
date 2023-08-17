"use client"
import { useState } from "react"
import Image from "next/image"

import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import SectionSubheader from "@/components/Pages/SectionSubheader"
import Button from "@/components/shared/Button"
import DonationModal from "@/components/Pages/Donate/DonationModal"

export default function Donate() {
   const [showModal, setShowModal] = useState(false)
   return (
      <div>
         <PageHero
            route="donate"
            header="Donate To Us"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692290089/backgrounds/donate-backbround_pphohl_7d94c3.png"
         />
         <FullBleedContainer sx="bg-background" childSx="py-20 lg:py-32">
            {showModal && <DonationModal setShowModal={setShowModal} />}
            <section>
               <div className="className=flex flex-col items-center justify-center text-center md:flex-row md:flex-wrap md:px-4 min-[1400px]:px-0">
                  <SectionSubheader header="Protect the environment for everyone">
                     <h3 className="mx-auto mt-8 text-center font-normal text-dark-grey sm:text-2xl md:text-left md:text-3xl md:leading-[3rem]">
                        With your help, together we can make a difference in
                        protecting the environment.
                     </h3>
                     <h3 className="mx-auto mt-4 text-center font-normal text-dark-grey sm:text-2xl md:text-left md:text-3xl md:leading-[3rem]">
                        Join us today!
                     </h3>
                  </SectionSubheader>
                  {/* --- Donation Options --- */}
                  <div className="mt-16 w-full">
                     <h4 className="text-3xl md:text-4xl">Donation Options</h4>
                     <div className="mt-8 flex flex-col gap-y-8">
                        <div className="w-full">
                           <Button
                              variant="primary"
                              size="xl"
                              href="https://account.venmo.com/u/itisoverdue"
                           >
                              <div className="mx-auto flex items-center justify-center">
                                 Donate with Venmo
                                 <Image
                                    src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692289493/venmo_v7tv4l.png"
                                    alt="Venmo logo"
                                    width={28}
                                    height={28}
                                    className="ml-2.5"
                                 />
                              </div>
                           </Button>
                        </div>
                        <div className="w-full">
                           <Button
                              variant="primary"
                              size="xl"
                              onClick={() => setShowModal((prev) => !prev)}
                           >
                              <div className="mx-auto flex items-center justify-center">
                                 Donate with Donorbox
                                 <Image
                                    src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692289493/donorbox_v6jd4j.png"
                                    alt="Donorbox logo"
                                    width={28}
                                    height={28}
                                    className="ml-2.5"
                                 />
                              </div>
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </FullBleedContainer>
      </div>
   )
}
