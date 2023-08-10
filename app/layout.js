import { Roboto } from "next/font/google"

import "./globals.css"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"

const roboto = Roboto({
   weight: ["100", "300", "400", "500", "700", "900"],
   style: ["normal", "italic"],
   subsets: ["latin"],
   display: "swap",
})

export const metadata = {
   title: "Overdue",
   description:
      "itisOVERDUE - LA-based 501c3 nonprofit that focuses on cleanups, community gardens, and education. We love making an impact and making our community a better place.",
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={roboto.className}>
            <Header />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   )
}
