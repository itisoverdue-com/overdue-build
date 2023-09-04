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
      "https://b9f7feb2.sibforms.com/serve/MUIFAFwiFEM9nwjq3EOwKxl-zv-fR9j4trEiltFi0cUcbZFiYjs8OzETq1vE6YUrCMNoMREJ0yy0c1sgn8h6R5nBcnpoyxQtl6P9QHDTlTOzzqcihN1BDfCSvRLle-wuA_DsmKH7v-MVcSHck1CRCc6YHtCRGNDmLPKqOuI-X6LqIqAhOmM2UBTm_XXGkI1-6qWlanP81sYAH6T-"

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
         <div className="h-[380px] w-full self-center md:self-start">
            <iframe style={iframeStyle} src={iframeSrc}></iframe>
         </div>
      </FullBleedContainer>
   )
}
