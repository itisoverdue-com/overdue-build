import NavLink from "./NavLink"

export default function NavBar({ showNav, setShowNav }) {
   const handleClick = () => setShowNav(false)
   return (
      <div
         className={`z-40 fixed w-full h-full top-0 ${
            showNav ? "left-0 duration-500" : "left-full duration-0"
         } bg-black/90 transition-left`}
      >
         <nav className="mt-14 md:mt-[90px]">
            <ul className="w-5/6 mx-auto text-white md:text-lg">
               <NavLink handleClick={handleClick} href="/" text="Home" />
               <NavLink handleClick={handleClick} href="/about" text="About" />
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
               <NavLink
                  handleClick={handleClick}
                  href="/sponsor"
                  text="Sponsor"
               />
               <NavLink handleClick={handleClick} href="/join" text="Join" />
               <NavLink
                  handleClick={handleClick}
                  href="/events"
                  text="Events"
               />
               <NavLink
                  handleClick={handleClick}
                  href="/donate"
                  text="Donate"
               />
            </ul>
         </nav>
      </div>
   )
}
