import Link from "next/link"
import FullBleedContainer from "../Layout/Container/FullBleedContainer"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import { addEllipsis } from "@/lib/utils"

export default function PageHero({
   route,
   header,
   segments = [],
   backgroundImageSrc = "",
   showHeader = true,
}) {
   const renderBreadcrumbLinks = () => {
      const links = [{ href: "/", text: "Home", truncatedText: "Home" }]
      let root = "/"

      // Build on Root w/ Dynamic Link Href
      if (segments.length > 0) {
         segments.forEach((segment) => {
            root += `${segment}/`
            links.push({
               href: root,
               text: segment,
               truncatedText: addEllipsis(segment, 15),
            })
         })
      }

      // Add Current Page
      links.push({
         href: `${root}${route}`,
         text: header,
         truncatedText: addEllipsis(header, 15),
      })

      return (
         <ul className="absolute left-3 -bottom-6 flex item-center space-x-3 text-white bg-darker-grey px-3 py-2 rounded-md md:px-5 md:py-4 md:rounded-xl font-medium shadow-md max-w-xs text-sm md:text-base md:max-w-full lg:text-lg">
            {links.map((item, index) => (
               <li key={item.href} className="flex space-x-3">
                  <Link
                     href={item.href}
                     className="hover:text-primary transition-colors duration-200 last:text-primary last:hover:text-primaryDark capitalize"
                  >
                     <span className="hidden md:inline-block">{item.text}</span>
                     <span className="md:hidden">{item.truncatedText}</span>
                  </Link>

                  {/* Last Child: No Arrow */}
                  {index !== links.length - 1 && (
                     <span>
                        <ArrowLongRightIcon className="w-6 h-6 " />
                     </span>
                  )}
               </li>
            ))}
         </ul>
      )
   }
   return (
      <FullBleedContainer
         sx={`h-[40vh] md:h-[50vh] ${
            showHeader ? "bg-black bg-opacity-40" : ""
         }`}
         backgroundImageSrc={`${backgroundImageSrc}`}
         childSx="flex justify-center items-center h-full relative"
      >
         {/* Header w/ underline */}
         {showHeader && (
            <h1 className="capitalize text-center">
               {header}
               <span className="mt-2 block w-1/3 border-t-8 border-primary rounded-2xl mx-auto" />
            </h1>
         )}

         {/* Breadcrumbs: Home --> {segment(s)} --> {page} */}
         {renderBreadcrumbLinks()}
      </FullBleedContainer>
   )
}
