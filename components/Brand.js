import Image from "next/image"

function Brand({ styles }) {
   return (
      <Image
         src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688603896/overdue-logo_ozw8xb.svg"
         alt="OVERDUE"
         width={117}
         height={60}
         priority
         className={`inline-block ${styles}`}
      />
   )
}

export default Brand
