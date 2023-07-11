/**
 * Function to generate the className string based on the given props.
 * @param {string} variant - The variant style of the card.
 * @return {string} - The generated className string.
 */
function generateClassName(variant, imgWidth) {
   const baseClasses = "relative mx-auto rounded-3xl"

   const variantClasses = {
      text: `z-[1] w-full sm:w-[95%] max-w-[700px] py-6 px-8 sm:py-8 sm:px-14 shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] text-left leading-8 bg-white md:text-lg md:leading-10`,
      image: `overflow-hidden md:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)]`,
   }

   return `${baseClasses} ${variantClasses[variant]}`
}

/**
 * Card componenent generated using the returned className string and optional styles prop.
 * @param {string} sx - Additional CSS rules (will override any existing rules for the same property)
 * @returns
 */
export default function Card({ children, sx = "", variant }) {
   const className = generateClassName(variant)

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
    sx="w-screen aspect-[7/5]"
  >
    <Image
      src="..."
      fill
      style={{
          objectFit: "cover",
      }}
      alt="Alt text"
    />
  </Card>
*/
}
