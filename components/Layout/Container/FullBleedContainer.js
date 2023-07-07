import React from "react"
import Container from "."
import Image from "next/image"

function FullBleedContainer({ children, sx = "", backgroundImageSrc = "" }) {
   return (
      <div className={`w-full relative ${sx}`}>
         {backgroundImageSrc && (
            <Image
               src={backgroundImageSrc}
               alt={backgroundImageSrc}
               style={{ objectFit: "cover" }}
               fill
               className="-z-10"
            />
         )}
         <Container sx="z-10">{children}</Container>
      </div>
   )
}

export default FullBleedContainer
