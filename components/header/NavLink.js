import Link from "next/link"

export default function NavLink({ handleClick, href, text }) {
   return (
      <div className="w-full mx-auto border-b border-dark-grey">
         <Link href={href}>
            <li
               className="py-4 md:py-6 pl-2 text-left active:bg-darker-grey"
               onClick={handleClick}
            >
               {text}
            </li>
         </Link>
      </div>
   )
}
