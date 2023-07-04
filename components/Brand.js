import Image from "next/image"

function Brand({ styles }) {
   return (
      <Image
         src="/assets/logo.png"
         alt="OVERDUE"
         width={136}
         height={70}
         priority
         className={`inline-block ${styles}`}
      />
   )
}

export default Brand
