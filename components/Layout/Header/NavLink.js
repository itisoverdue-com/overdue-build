import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({ handleClick, href, text }) {
   const pathname = usePathname()
   const isActive = href === pathname
   return (
      <div className="w-full lg:w-fit max-lg:mx-auto lg:mx-4 xl:mx-6 2xl:mx-8 border-b border-dark-grey lg:border-none">
         <Link href={href}>
            <li
               className={`py-4 md:py-6 lg:py-0 pl-2 lg:pl-0 text-left lg:text-center lg:hover:text-primary ${
                  isActive ? "text-primary" : "text-white"
               }`}
               onClick={handleClick}
            >
               {text}
            </li>
         </Link>
      </div>
   )
}
