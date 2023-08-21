"use client"
import Link from "next/link"

/**
 * Function to generate the className string based on the given props.
 *
 * @param {string} size - The size of the button.
 * @param {string} variant - The variant style of the button.
 * @param {boolean} fullWidth - If true, the button takes full width of its container.
 * @param {boolean} disabled - If true, the button appears disabled and won't accept clicks.
 * @return {string} The generated className string.
 */
function generateClassName(size, variant, fullWidth, disabled, sx) {
   const baseClasses = `
      transition-all
      hover:-translate-y-1
      flex
      items-center
      ease-in-out
      duration-300
      font-bold
      rounded-lg
      focus-visible:ring-white
   `

   const sizeClasses = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-md",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
   }

   const variantClasses = {
      primary:
         "bg-primary dark:bg-primaryDark text-black dark:text-darkest-grey hover:bg-black hover:text-primary dark:hover:bg-grey dark:hover:text-white",
      dark: "bg-darker-grey dark:bg-primaryDark text-white dark:text-darkest-grey hover:bg-black dark:hover:bg-grey hover:text-white dark:hover:text-white",
      outline:
         "bg-transparent text-primary outline outline-primary outline-1 outline-offset-0 hover:bg-primary hover:text-black",
   }

   const fullWidthClass = fullWidth ? "w-full" : ""

   const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : ""

   return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidthClass} ${disabledClass} ${sx}`
}

// The Button component
export default function Button({
   children,
   variant,
   size,
   fullWidth = false,
   disabled = false,
   href,
   sx,
   ...props
}) {
   const className = generateClassName(size, variant, fullWidth, disabled, sx)

   return href ? (
      <Link href={href} className={className} {...props}>
         {children}
      </Link>
   ) : (
      <button className={className} onClick={props.onClick} {...props}>
         {children}
      </button>
   )
}

{
   /* 
All the examples below are for the Button component above.
   <h1>Button Variants</h1>

   <h2>Primary Buttons</h2>
   <Button variant="primary" size="sm" >Small Primary Button</Button>
   <Button variant="primary" size="md" >Medium Primary Button</Button>
   <Button variant="primary" size="lg" >Large Primary Button</Button>
   <Button variant="primary" size="xl" >Extra Large Primary Button</Button>

   <h2>Dark Buttons</h2>
   <Button variant="dark" size="sm" >Small Dark Button</Button>
   <Button variant="dark" size="md" >Medium Dark Button</Button>
   <Button variant="dark" size="lg" >Large Dark Button</Button>
   <Button variant="dark" size="xl" >Extra Large Dark Button</Button>

   <h2>Outline Buttons</h2>
   <Button variant="outline" size="sm" >Small Outline Button</Button>
   <Button variant="outline" size="md" >Medium Outline Button</Button>
   <Button variant="outline" size="lg" >Large Outline Button</Button>
   <Button variant="outline" size="xl" >Extra Large Outline Button</Button>

   <h2>Full Width Buttons</h2>
   <Button variant="primary" size="md" fullWidth >Full Width Button</Button>

   <h2>Disabled Buttons</h2>
   <Button variant="primary" size="md" disabled >Disabled Button</Button>

   <h2>Link Button</h2>
   <Button variant="primary" href="/otherPage" size="md" >Link Button to Other Page</Button> 
*/
}
