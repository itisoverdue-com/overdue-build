import { Roboto } from "next/font/google"

import "./globals.css"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto({
   weight: ["100", "300", "400", "500", "700", "900"],
   style: ["normal", "italic"],
   subsets: ["latin"],
   display: "swap",
})

export const metadata = {
   title: "Overdue",
   description:
      "OVERDUE is a collective of individuals who pick up trash together to make their communities cleaner, greener and friendlier. We are the future. We are the solution.",
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={roboto.className}>
            <div id="wrapper">
               <Header />
               <main>{children}</main>
               <Footer />
               <Analytics />
            </div>
         </body>
      </html>
   )
}
