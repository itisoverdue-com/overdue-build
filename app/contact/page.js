import PageHero from "@/components/shared/PageHero"
import Container from "@/components/Layout/Container"
import {
   PhoneIcon,
   EnvelopeIcon,
   AtSymbolIcon,
} from "@heroicons/react/24/outline"
import { SOCIALS } from "@/lib/constants"

import Link from "next/link"

export default function Contact() {
   const cards = [
      {
         icon: <PhoneIcon />,
         header: "Call Us",
         content: (
            <>
               <div>
                  <h5 className="font-bold mb-3">+1 818 854-5273</h5>
                  <p className="text-sm">We are available 9:00 AM - 4 PM PST</p>
               </div>
            </>
         ),
      },
      {
         icon: <EnvelopeIcon />,
         header: "Email Us",
         content: (
            <>
               <div>
                  <h5 className="font-bold">General/Administrative</h5>
                  <p className="mb-3">admin@itisoverdue.org</p>
                  <h5 className="font-bold">Education</h5>
                  <p>education@itisoverdue.org</p>
               </div>
            </>
         ),
      },
      {
         icon: <AtSymbolIcon />,
         header: "Connect on Social Media",
         content: (
            <>
               <div>
                  <Link href={SOCIALS.facebook} target="_blank">
                     {icons.facebook}
                  </Link>
                  <p>+1 818 854-5273</p>
                  <p>We are available 9:00 AM - 4 PM PST</p>
               </div>
            </>
         ),
      },
   ]

   return (
      <div>
         <PageHero
            page="contact"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441391/backgrounds/education_fbvmrv.jpg"
         />
         <Container sx="py-16 flex flex-col justify-center items-center">
            {/* Title, Accent Line, Subheader */}
            <>
               <h2 className="text-5xl font-bold">IT IS OVERDUE</h2>
               <div className="border-t-8 border-primary w-28 rounded-full my-5" />
               <h3 className="text-2xl font-bold">
                  We are a team based in Woodland Hills, CA.
               </h3>
            </>

            <div className="grid grid-cols-3 gap-x-16">
               {cards.map((item) => (
                  <Card
                     key={item.header}
                     icon={item.icon}
                     header={item.header}
                     content={item.content}
                  />
               ))}
            </div>
         </Container>
      </div>
   )
}

const Card = ({ icon, header, content }) => {
   return (
      <div className="flex flex-col justify-start items-center bg-white rounded-xl shadow-lg p-14 text-center ">
         <div className="mb-6">
            <span className="w-16 h-16 bg-primary  rounded-full p-4 text-darker-grey block mx-auto mb-3">
               {icon}
            </span>
            <h4 className="text-2xl font-bold">{header}</h4>
         </div>
         {content}
      </div>
   )
}

const SocialMediaIcon = ({ link, value }) => {
   const icons = {
      facebook: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-inherit"
            width="24"
            height="24"
         >
            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
         </svg>
      ),
      instagram: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-inherit"
            width="24"
            height="24"
         >
            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
            <circle cx="11.994" cy="11.979" r="3.003"></circle>
         </svg>
      ),
      twitter: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-inherit"
            width="24"
            height="24"
         >
            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
         </svg>
      ),
      youtube: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-inherit"
            width="24"
            height="24"
         >
            <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
         </svg>
      ),
   }
   return (
      <Link href={link} target="_blank">
         <button>
            <span>{icons[value]}</span>
            <span>{value}</span>
         </button>
      </Link>
   )
}
