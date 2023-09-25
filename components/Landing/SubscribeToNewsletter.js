// Import necessary components
import FullBleedContainer from "../Layout/Container/FullBleedContainer"

/**
 * A component that displays a newsletter subscription form iframe create through Brevo.
 */
export default function SubscribeToNewsletter() {
   // Styling for the iframe
   const iframeStyle = {
      width: "100%",
      height: "100%",
   }

   // URL for the subscription iframe
   const iframeSrc =
      "https://b9f7feb2.sibforms.com/serve/MUIFAECC9xw99FkR3SQlCrPvcgyA4QPvnA0bkrlv_XAkTmt7dsnpv602rsmcY3hCys9hmoIj-ikXoz4jCyJjxCXd691madniWn1ygSxRBIjNBWQPy2mdJRTEN090FIw-gc4JBPTNR8ZprPFiw2Bg1s9O7-7n5UPzrG0OcTxpDJZMeXlsQqzBdbghKB1CguJ9N_aQyWqrJU7JaWC1"

   return (
      <FullBleedContainer
         sx="py-10"
         backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1693796403/subscribe_rsxz6i_ligfxe.jpg"
         childSx="flex flex-col justify-between md:items-center md:flex-row gap-2 px-0 md:px-6 lg:px-12"
      >
         <div className="flex w-full flex-col items-center justify-center py-6 md:items-start">
            <h2 className="text-4xl font-normal text-white">
               Subscribe to our Newsletter
            </h2>
            <p className="text-lg text-lightest-grey">
               Get the latest updates about our ongoing and upcoming events!
            </p>
         </div>
         <div className="h-[580px] w-full self-center md:self-start">
            <iframe
               style={iframeStyle}
               src={iframeSrc}
               title="Sign-up form for the Overdue Newsletter"
            ></iframe>
         </div>
      </FullBleedContainer>
   )
}
