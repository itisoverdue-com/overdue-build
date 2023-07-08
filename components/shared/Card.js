/**
 * Function to generate the className string based on the given props.
 * @param {string} variant - The variant style of the card.
 * @param {string} imgWidth - The width settings for the image across all breakpoints.
 * @param {string} imgAspect - The aspect ratio setting for the image (sets height in relation to width).
 * @return {string} - The generated className string.
 */
function generateClassName(variant, imgWidth, imgAspect) {
   const baseClasses = "relative mx-auto rounded-3xl"

   const variantClasses = {
      text: `w-full max-w-[700px] py-6 px-8 shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] leading-8 bg-white z-[1] text-sm`,
      image: `overflow-hidden max-w-full ${imgWidth} ${imgAspect}`,
   }

   return `${baseClasses} ${variantClasses[variant]}`
}

/**
 * Card componenent generated using the returned className string and optional styles prop.
 * @param {string} styles - Additional CSS rules (will override any existing rules for the same property)
 * @returns
 */
export default function Card({
   children,
   styles,
   variant,
   imgWidth,
   imgAspect,
}) {
   const className = generateClassName(variant, imgWidth, imgAspect)

   return (
      <div className={`${className} ${styles ? styles : ""}`}>{children}</div>
   )
}

{
   /*
Example Card with "text" variant

  <Card variant="text" styles="top-[-35px]">
    <h4>Header Text</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam quisque.
    </p>
  </Card>

Example Card with "image" variant

  <Card
    variant="image"
    imgWidth="w-[90%] lg:w-[700px]"
    imgAspect="aspect-[7/5]"
    styles="border-2"
  >
    <Image
        src="..."
        fill={true} // Causes the image to fill the parent element
        alt="Alt text"
    />
  </Card>
*/
}
