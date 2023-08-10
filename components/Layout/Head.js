import { default as NextHead } from "next/head"

export const DEFAULT = {
   title: "",
   description: "",
   keywords: "",
}

function Head({
   title = DEFAULT.title,
   description = DEFAULT.description,
   keywords = DEFAULT.keywords,
}) {
   return (
      <NextHead>
         <title>{title ? title : DEFAULT.title}</title>
         <meta
            name="description"
            content={description ? description : DEFAULT.description}
         />
         <meta
            name="keywords"
            content={keywords ? keywords : DEFAULT.keywords}
         />

         {/* Default */}
         <meta name="author" content="itisOverdue"></meta>
         <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
         ></meta>
         <meta charSet="UTF-8"></meta>

         {/* Favicon */}
         <link rel="icon" href="/favicon.ico" />
      </NextHead>
   )
}

export default Head
