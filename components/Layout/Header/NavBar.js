import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar({ showNav, setShowNav }) {
   const pathname = usePathname()
   const handleClick = () => setShowNav(false)
   const links = [
      {
         id: 1,
         page: "about",
         text: "About Us",
      },
      {
         id: 2,
         page: "events",
         text: "Events",
      },
      {
         id: 3,
         page: "education",
         text: "Education",
      },
      {
         id: 4,
         page: "blog",
         text: "Blog",
      },
      {
         id: 5,
         page: "#",
         text: "Shop",
      },
      {
         id: 6,
         page: "faq",
         text: "FAQ",
      },
      {
         id: 7,
         page: "contact",
         text: "Contact",
      },
      {
         id: 8,
         page: "donate",
         text: "Donate",
      },
   ]
   return (
      <div
         className={`max-lg:z-40 max-lg:fixed w-full h-full top-0 ${
            showNav ? "left-0 duration-500" : "left-full duration-0"
         } bg-black/90 lg:bg-transparent transition-left`}
      >
         <nav className="mt-[68px] md:mt-[80px] lg:mt-0">
            <ul className="lg:flex lg:items-center lg:justify-end w-5/6 lg:w-full mx-auto md:text-lg lg:text-base">
               {links
                  .sort((a, b) => a.id - b.id)
                  .map(({ id, page, text }) => {
                     return (
                        <div
                           key={id}
                           className={
                              page === "donate"
                                 ? "w-fit lg:mx-4 xl:mx-6 2xl:mx-8"
                                 : "w-full lg:w-fit max-lg:mx-auto lg:mx-4 xl:mx-6 2xl:mx-8 border-b border-dark-grey lg:border-none"
                           }
                        >
                           <Link href={`/${page}`}>
                              <li
                                 className={
                                    page === "donate"
                                       ? "w-fit py-2 md:py-2.5 px-4 mt-2.5 lg:mt-0 rounded-md bg-primary text-black lg:hover:scale-110 transition duration-300"
                                       : `py-4 md:py-6 lg:py-0 pl-2 lg:pl-0 text-left lg:text-center lg:hover:text-primary ${
                                            page === pathname.slice(1)
                                               ? "text-primary"
                                               : "text-white"
                                         }`
                                 }
                                 onClick={handleClick}
                              >
                                 {text}
                              </li>
                           </Link>
                        </div>
                     )
                  })}
            </ul>
         </nav>
      </div>
   )
}
