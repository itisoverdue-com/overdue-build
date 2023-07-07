import Link from "next/link"

export default function DonateLink({ handleClick }) {
   return (
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
   )
}
