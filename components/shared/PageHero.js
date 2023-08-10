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
         <ul className="item-center absolute -bottom-6 left-3 flex max-w-xs space-x-3 rounded-md bg-darker-grey px-3 py-2 text-sm font-medium text-white shadow-md md:max-w-full md:rounded-xl md:px-5 md:py-4 md:text-base lg:text-lg">
            {links.map((item, index) => (
               <li key={item.href} className="flex space-x-3">
                  <Link
                     href={item.href}
                     className="capitalize transition-colors duration-200 last:text-primary hover:text-primary last:hover:text-primaryDark"
                  >
                     <span className="hidden md:inline-block">{item.text}</span>
                     <span className="md:hidden">{item.truncatedText}</span>
                  </Link>

                  {/* Last Child: No Arrow */}
                  {index !== links.length - 1 && (
                     <span>
                        <ArrowLongRightIcon className="h-6 w-6 " />
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
            <h1 className="text-center capitalize">
               {header}
               <span className="mx-auto mt-2 block w-1/3 rounded-2xl border-t-8 border-primary" />
            </h1>
         )}

         {/* Breadcrumbs: Home --> {segment(s)} --> {page} */}
         {renderBreadcrumbLinks()}
      </FullBleedContainer>
   )
}
