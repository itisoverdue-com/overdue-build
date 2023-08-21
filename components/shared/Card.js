/**
 * Function to generate the className string based on the given props.
 * @param {string} variant - The variant style of the card.
 * @return {string} - The generated className string.
 */
function generateClassName(variant) {
   const baseClasses = "relative mx-auto rounded-3xl"

   const variantClasses = {
      text: `z-[1] w-full max-w-[700px] py-6 px-8 sm:py-8 sm:px-14 shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] text-left leading-8 bg-white dark:bg-dark-grey md:text-lg md:leading-10`,
      textDark: `z-[1] flex flex-col justify-center w-full text-white text-left leading-8 bg-black/[.85] py-6 px-8 rounded-b-3xl rounded-t-none sm:px-14 md:text-lg md:leading-10`,
      image: `overflow-hidden`,
      contactItem: `w-full flex flex-col justify-start items-center bg-white fill-darker-grey rounded-xl shadow-lg py-20 px-6 md:hover:shadow-2xl md:hover:scale-105 md:transition-all md:duration-300`,
      actionItem: `flex items-center w-full max-w-[560px] bg-white dark:bg-grey rounded-xl shadow-lg py-8 px-4 lg:flex-col lg:gap-y-20 xl:py-12`,
   }

   return `${baseClasses} ${variantClasses[variant]}`
}

/**
 * Card componnent generated using the returned className string and optional styles prop.
 * @param {string} sx - Additional CSS rules (will override any existing rules for the same property)
 */
export default function Card({ children, sx = "", variant }) {
   const className = generateClassName(variant)

   return <div className={`${className} ${sx}`}>{children}</div>
}

{
   /*
  Example Card with "text" variant

  <Card variant="text" sx="m-4 p-4">
    <h4>Header Text</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam quisque.
    </p>
  </Card>

  Example Card with "image" variant

  <Card
    variant="image"
    sx="w-full aspect-[16/9]"
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
