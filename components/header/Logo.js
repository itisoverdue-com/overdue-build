import Link from "next/link"

import Brand from "../Brand" // default width = 117px

export default function Logo() {
   const logoWidth = "117px"
   return (
      <div
         className={`z-50 lg:z-0 w-[calc(${logoWidth}*0.8)] md:w-[calc(${logoWidth}*0.9)] lg:w-[${logoWidth}] lg:basis-auto lg:shrink-0 lg:grow-0`}
      >
         <Link href="/">
            <Brand styles="w-full h-full object-cover" />
         </Link>
      </div>
   )
}
