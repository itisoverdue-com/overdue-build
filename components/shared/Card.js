/**
 * Function to generate the className string based on the given props.
 * @param {string} variant - The variant style of the card.
 * @param {string} imgWidth - The width settings for the image container div across all breakpoints.
 * @return {string} - The generated className string.
 */
function generateClassName(variant, imgWidth) {
   const baseClasses = "relative mx-auto rounded-3xl"

   const variantClasses = {
      text: `w-full max-w-[700px] py-6 px-8 shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] leading-8 bg-white z-[1] text-sm`,
      image: `overflow-hidden max-w-full ${imgWidth}`,
   }

   return `${baseClasses} ${variantClasses[variant]}`
}

/**
 * Card componenent generated using the returned className string and optional styles prop.
 * @param {string} sx - Additional CSS rules (will override any existing rules for the same property)
 * @returns
 */
export default function Card({ children, sx = "", variant, imgWidth }) {
   const className = generateClassName(variant, imgWidth)

   return <div className={`${className} ${sx}`}>{children}</div>
}

{
   /*
Example Card with "text" variant

  <Card variant="text" sx="top-[-35px]">
    <h4>Header Text</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam quisque.
    </p>
  </Card>

Example Card with "image" variant

  <Card
    variant="image"
    imgWidth="w-[90%] lg:w-[700px]"
    sx="border-2"
  >
    <Image
        src="..."
        width={700}
        height={500}
        alt="Alt text"
    />
  </Card>
*/
}
