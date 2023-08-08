import Image from "next/image"

function Brand({ styles }) {
   return (
      <Image
         src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/landing/logo_ttu7fl.png"
         alt="itisOVERDUE logo"
         width={136}
         height={70}
         priority
         className={`inline-block ${styles}`}
      />
   )
}

export default Brand
