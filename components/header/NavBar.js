import Link from "next/link"

export default function NavBar({ showNav, setShowNav }) {
   const handleClick = () => setShowNav(false)
   return (
      <div
         className={`z-40 fixed w-full h-full top-0 ${
            showNav ? "right-0 duration-500" : "right-full duration-0"
         } bg-black/90 transition-right`}
      >
         <nav className="mt-16 md:mt-20 border">
            <ul className="w-5/6 mx-auto text-white md:text-lg">
               <div className="w-full mx-auto border-b border-dark-grey">
                  <Link href="/">
                     <li
                        className="py-4 md:py-6  text-left"
                        onClick={handleClick}
                     >
                        Home
                     </li>
                  </Link>
               </div>
               <div className="mx-auto border-b border-dark-grey">
                  <li className="py-4 md:py-6 text-left" onClick={handleClick}>
                     <Link href="/about">About</Link>
                  </li>
               </div>
               <div className="mx-auto border-b border-dark-grey">
                  <li className="py-4 md:py-6 text-left" onClick={handleClick}>
                     <Link href="/education">Education</Link>
                  </li>
               </div>
               <div className="mx-auto border-b border-dark-grey">
                  <li className="py-4 md:py-6 text-left" onClick={handleClick}>
                     <Link href="/faq">FAQ</Link>
                  </li>
               </div>
               <div className="mx-auto border-b border-dark-grey">
                  <li className="py-4 md:py-6 text-left" onClick={handleClick}>
                     <Link href="/contact">Contact</Link>
                  </li>
               </div>
               <div className="mx-auto border-b border-dark-grey">
                  <li className="py-4 md:py-6 text-left" onClick={handleClick}>
                     <Link href="/sponsor">Sponsor</Link>
                  </li>
               </div>
               <div className="mx-auto border-b border-dark-grey">
                  <li className="py-4 md:py-6 text-left" onClick={handleClick}>
                     <Link href="/join">Join the Team</Link>
                  </li>
               </div>
               <div className="mx-auto border-b border-dark-grey">
                  <li className="py-4 md:py-6 text-left" onClick={handleClick}>
                     <Link href="/events">Events</Link>
                  </li>
               </div>
               <div className="mx-auto">
                  <li className="py-4 md:py-6 text-left" onClick={handleClick}>
                     <Link href="/donate">Donate</Link>
                  </li>
               </div>
            </ul>
         </nav>
      </div>
   )
}
