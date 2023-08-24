"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import SectionSubheader from "@/components/Pages/SectionSubheader"
import Button from "@/components/shared/Button"
import DonationModal from "@/components/Pages/Donate/DonationModal"

export default function Donate() {
   const [showModal, setShowModal] = useState(false)
   const [scrollTop, setScrollTop] = useState(0)
   const [wrapper, setWrapper] = useState(null)

   // lock body when modal is active
   useEffect(() => setWrapper(document.getElementById("wrapper")), [])
   const toggleModal = (value) => {
      setShowModal(value)
      // add scrollY value to state only if the modal is being activated
      value && setScrollTop(window.scrollY)
      // add "is-fixed" global style to wrapper div to lock body
      value
         ? wrapper.classList.add("is-fixed")
         : wrapper.classList.remove("is-fixed")
   }
   useEffect(() => {
      // if showModal scroll the wrapper
      // if !showModal scroll the entire window
      wrapper && showModal
         ? wrapper.scroll(0, scrollTop)
         : window.scrollTo(0, scrollTop)
   })

   return (
      <>
         {showModal && (
            <DonationModal
               setShowModal={setShowModal}
               toggleModal={toggleModal}
            />
         )}
         <div>
            <PageHero
               route="donate"
               header="Donate To Us"
               backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692290089/backgrounds/donate-backbround_pphohl_7d94c3.png"
            />
            <FullBleedContainer
               sx="bg-background dark:bg-darkest-grey"
               childSx="py-20 lg:py-32"
            >
               <section>
                  <div className="className=flex flex-col items-center justify-center text-center md:flex-row md:flex-wrap md:px-4 min-[1400px]:px-0">
                     <SectionSubheader
                        header="Protect the environment for everyone"
                        borderSx="md:mx-auto"
                     >
                        <h3 className="mx-auto mt-8 text-center font-normal text-dark-grey sm:text-2xl md:text-3xl md:leading-[3rem]">
                           With your help, together we can make a difference in
                           protecting the environment.
                        </h3>
                        <h3 className="mx-auto mt-4 text-center font-normal text-dark-grey sm:text-2xl md:text-3xl md:leading-[3rem]">
                           Join us today!
                        </h3>
                     </SectionSubheader>
                     {/* --- Donation Options --- */}
                     <div className="mt-16 w-full">
                        <h4 className="text-3xl dark:text-white md:text-4xl">
                           Donation Options
                        </h4>
                        <div className="mt-8 flex flex-col gap-y-8 lg:mt-12 lg:flex-row lg:justify-center lg:gap-x-12 lg:gap-y-0">
                           <div>
                              <Button
                                 variant="primary"
                                 darkVariant="grey"
                                 size="xl"
                                 sx="w-full mx-auto sm:w-3/5 lg:w-[380px]"
                                 href="https://account.venmo.com/u/itisoverdue"
                              >
                                 <div className="mx-auto flex items-center justify-center">
                                    Donate with Venmo
                                    <Image
                                       src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692289493/venmo_v7tv4l.png"
                                       alt="Venmo icon"
                                       width={28}
                                       height={28}
                                       className="ml-2.5"
                                    />
                                 </div>
                              </Button>
                           </div>
                           <div>
                              <Button
                                 variant="primary"
                                 darkVariant="grey"
                                 size="xl"
                                 sx="w-full mx-auto sm:w-3/5 lg:w-[380px]"
                                 onClick={() => toggleModal(true)}
                              >
                                 <div className="mx-auto flex items-center justify-center">
                                    Donate with Donorbox
                                    <Image
                                       src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692289493/donorbox_v6jd4j.png"
                                       alt="Donorbox icon"
                                       width={28}
                                       height={28}
                                       className="ml-2.5"
                                    />
                                 </div>
                              </Button>
                           </div>
                        </div>
                     </div>
                     {/* --- Scan to Donate --- */}
                     <div className="mt-16 w-full">
                        <h4 className="text-3xl dark:text-white md:text-4xl">
                           Scan to Donate
                        </h4>
                        <div className="flex flex-col items-center justify-center lg:mt-4 lg:flex-row lg:gap-x-12">
                           <div className="mt-8 w-full max-w-[380px] rounded-xl border border-lighter-grey bg-white py-6 lg:h-[320px]">
                              <div className="mx-auto flex w-fit flex-col items-center justify-center gap-y-2">
                                 <Image
                                    src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692137264/overdue-venmo-qr_spnqmi.svg"
                                    alt="Venmo QR"
                                    width={200}
                                    height={200}
                                 />
                                 <Image
                                    src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692302219/Venmo_Logo_bwg5oc.svg"
                                    alt="Venmo logo"
                                    width={125}
                                    height={23}
                                    className="mt-4"
                                 />
                              </div>
                           </div>
                           <div className="mt-8 w-full max-w-[380px] rounded-xl border border-lighter-grey bg-white py-6 lg:h-[320px]">
                              <div className="mx-auto flex w-fit flex-col items-center justify-center gap-y-2">
                                 <Image
                                    src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692137264/overdue-donorbox-qr_wfdtdr.png"
                                    alt="Donorbox QR"
                                    width={200}
                                    height={200}
                                 />
                                 <Image
                                    src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1692302958/donorbox-logo_yqh235.png"
                                    alt="Donorbox logo"
                                    width={125}
                                    height={28}
                                    className="mt-4"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section>
                  <div className="mx-auto mt-16 w-[92%] text-center md:w-3/4 lg:w-1/2">
                     <h5 className="dark:text-white md:text-2xl lg:text-3xl">
                        Thank You for Being the Change!
                     </h5>
                     <p className="mt-6">
                        Every contribution, big or small, plays a vital role in
                        shaping a better tomorrow.
                     </p>
                     <p className="mt-4">
                        Your support doesn&apos;t just end with your donation;
                        it&apos;s the beginning of a partnership that
                        strengthens neighborhoods, nurtures nature, and unites
                        us all.
                     </p>
                  </div>
               </section>
            </FullBleedContainer>
         </div>
      </>
   )
}
