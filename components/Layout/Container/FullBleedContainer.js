import React from "react"
import Container from "."
import Image from "next/image"

function FullBleedContainer({
   children,
   sx = "",
   imgSx = "",
   childSx = "",
   backgroundImageSrc = "",
}) {
   return (
      <div className={`relative w-full ${sx}`}>
         {backgroundImageSrc && (
            <Image
               src={backgroundImageSrc}
               alt={backgroundImageSrc}
               fill
               className={`-z-10 object-cover ${imgSx}`}
               priority
               quality={50}
            />
         )}
         <Container sx={`z-10 ${childSx}`}>{children}</Container>
      </div>
   )
}

export default FullBleedContainer
