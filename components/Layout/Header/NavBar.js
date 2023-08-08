import Link from "next/link"

import NavLink from "./NavLink"

export default function NavBar({ showNav, setShowNav }) {
   const handleClick = () => setShowNav(false)
   const links = [
      {
         id: 1,
         href: "about",
         text: "About Us",
      },
      {
         id: 2,
         href: "events",
         text: "Events",
      },
      {
         id: 3,
         href: "education",
         text: "Education",
      },
      {
         id: 4,
         href: "blog",
         text: "Blog",
      },
      {
         id: 5,
         href: "#",
         text: "Shop",
      },
      {
         id: 6,
         href: "faq",
         text: "FAQ",
      },
      {
         id: 7,
         href: "contact",
         text: "Contact",
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
                  .map(({ id, href, text }) => {
                     return (
                        <NavLink
                           key={id}
                           href={href}
                           text={text}
                           handleClick={handleClick}
                        />
                     )
                  })}
               {/* --- DONATE LINK --- */}
               <div className="w-fit lg:mx-4 xl:mx-6 2xl:mx-8">
                  <Link href="/donate">
                     <li
                        className="w-fit py-2 md:py-2.5 px-4 mt-2.5 lg:mt-0 rounded-md bg-primary text-black lg:hover:scale-110 transition duration-300"
                        onClick={handleClick}
                     >
                        Donate
                     </li>
                  </Link>
               </div>
            </ul>
         </nav>
      </div>
   )
}
