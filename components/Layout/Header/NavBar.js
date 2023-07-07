import NavLink from "./NavLink"
import DonateLink from "./DonateLink"

export default function NavBar({ showNav, setShowNav }) {
   const handleClick = () => setShowNav(false)
   return (
      <div
         className={`max-lg:z-40 max-lg:fixed w-full h-full top-0 ${
            showNav ? "left-0 duration-500" : "left-full duration-0"
         } bg-black/90 lg:bg-transparent transition-left`}
      >
         <nav className="mt-14 md:mt-[90px] lg:mt-0">
            <ul className="lg:flex lg:items-center lg:justify-end w-5/6 lg:w-full mx-auto md:text-lg lg:text-base">
               <NavLink handleClick={handleClick} href="/about" text="About" />
               <NavLink
                  handleClick={handleClick}
                  href="/events"
                  text="Events"
               />
               {/* Todo: Add link to Shop */}
               <NavLink handleClick={handleClick} href="#" text="Shop" />
               {/* Todo: Add link to Blog */}
               <NavLink handleClick={handleClick} href="#" text="Blog" />
               <NavLink
                  handleClick={handleClick}
                  href="/education"
                  text="Education"
               />
               <NavLink handleClick={handleClick} href="/faq" text="FAQ" />
               <NavLink
                  handleClick={handleClick}
                  href="/contact"
                  text="Contact"
               />
               <DonateLink handleClick={handleClick} />
            </ul>
         </nav>
      </div>
   )
}
