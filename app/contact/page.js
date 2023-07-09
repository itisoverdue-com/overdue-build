import PageHero from "@/components/shared/PageHero"
import Container from "@/components/Layout/Container"
import {
   PhoneIcon,
   EnvelopeIcon,
   AtSymbolIcon,
} from "@heroicons/react/24/outline"

export default function Contact() {
   const cards = [
      {
         icon: <PhoneIcon />,
         header: "Call Us",
         content: (
            <>
               <div className="">
                  <p>+1 818 854-5273</p>
                  <p>We are available 9:00 AM - 4 PM PST</p>
               </div>
            </>
         ),
      },
      {
         icon: <EnvelopeIcon />,
         header: "Email Us",
         content: (
            <>
               <div className="">
                  <p>+1 818 854-5273</p>
                  <p>We are available 9:00 AM - 4 PM PST</p>
               </div>
            </>
         ),
      },
      {
         icon: <AtSymbolIcon />,
         header: "Call Us",
         content: (
            <>
               <div className="">
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
      <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-lg p-14 text-center ">
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
