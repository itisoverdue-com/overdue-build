import React from "react"

function Container({ children, sx = "" }) {
   return (
      <section className={`max-w-[1512px] mx-auto px-3 ${sx}`}>
         {children}
      </section>
   )
}

export default Container
