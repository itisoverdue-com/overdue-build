import React from "react"

function Container({ children, sx = "" }) {
   return <div className={`max-w-[1400px] mx-auto px-3 ${sx}`}>{children}</div>
}

export default Container
