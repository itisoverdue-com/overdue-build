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
         page: "/itsoverdue.myshopify.com/collections/all",
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
         className={`top-0 h-full w-full max-lg:fixed max-lg:z-40 ${
            showNav ? "left-0 duration-500" : "left-full duration-0"
         } transition-left order-3 bg-black/90 lg:order-2 lg:bg-transparent`}
      >
         <nav className="mt-[68px] md:mt-[80px] lg:mt-0">
            <ul className="mx-auto w-5/6 md:text-lg lg:flex lg:w-full lg:items-center lg:justify-end lg:text-base">
               {links
                  .sort((a, b) => a.id - b.id)
                  .map(({ id, page, text }) => {
                     return (
                        <div
                           key={id}
                           className={
                              page === "donate"
                                 ? "w-fit lg:mx-4 xl:mx-6 2xl:mx-8"
                                 : "w-full border-b border-dark-grey max-lg:mx-auto lg:mx-4 lg:w-fit lg:border-none xl:mx-6 2xl:mx-8"
                           }
                        >
                           <Link href={`/${page}`}>
                              <li
                                 className={
                                    page === "donate"
                                       ? "mt-2.5 w-fit rounded-md bg-primary px-4 py-2 text-black transition duration-300 dark:bg-primaryDark md:py-2.5 lg:mt-0 lg:hover:scale-110"
                                       : `py-4 pl-2 text-left md:py-6 lg:py-0 lg:pl-0 lg:text-center lg:hover:text-primary ${
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
