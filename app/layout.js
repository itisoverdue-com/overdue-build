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

// https://res.cloudinary.com/di7ejl8jx/image/upload/v1691692174/seo-image_vuc28g.png
export const metadata = {
   metadataBase: new URL(process.env.BASE_URL),
   title: {
      template: "Overdue - %s",
      default: "Overdue - Home", // a default is required when creating a template
   },
   description:
      "itisOVERDUE - LA-based 501c3 nonprofit that focuses on cleanups, community gardens, and education. We love making an impact and making our community a better place.",
   authors: [
      { name: "Jonathan Carpena" },
      { name: "Francisco Gramajo " },
      { name: "Tim Kent" },
   ],
   publisher: "itisOVERDUE",
   themeColor: "#FDD92A",
   twitter: {
      card: "summary_large_image",
      title: "itisOverdue",
      description:
         "itisOVERDUE - LA-based 501c3 nonprofit that focuses on cleanups, community gardens, and education. We love making an impact and making our community a better place.",
      images: ["./openGraph.png"],
   },
   openGraph: {
      title: "itisOVERDUE",
      description:
         "itisOVERDUE - LA-based 501c3 nonprofit that focuses on cleanups, community gardens, and education. We love making an impact and making our community a better place.",
      url: "/",
      siteName: "Next.js",
      images: [
         {
            url: "./openGraph.png",
            width: 1200,
            height: 628,
         },
      ],
      locale: "en_US",
      type: "website",
   },
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
