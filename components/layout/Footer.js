import React from "react"
import { SOCIALS } from "@/lib/constants"

function Footer() {
   return (
      <footer className="bg-primary w-screen">
         <div className="max-w-screen-xl mx-auto p-20 grid grid-cols-4">
            {/* Brand, Subheader, Social Links */}
            <div className="flex flex-col space-y-5">
               <h1 className="text-3xl font-black">OVERDUE</h1>
               <p>
                  To inspire and educate communities to take action for a better
                  tomorrow.
               </p>
               <ul></ul>
            </div>
         </div>
      </footer>
   )
}

export default Footer
