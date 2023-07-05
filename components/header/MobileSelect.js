import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function MobileSelect({ showNav, setShowNav }) {
   return (
      <div className="lg:hidden z-50 flex items-center">
         <button onClick={() => setShowNav(showNav ? false : true)}>
            {showNav ? (
               <div>
                  <XMarkIcon className="h-10 w-10 md:h-14 md:w-14 text-white" />
               </div>
            ) : (
               <div>
                  <Bars3Icon className="h-10 w-10 md:h-14 md:w-14 text-white" />
               </div>
            )}
         </button>
      </div>
   )
}
