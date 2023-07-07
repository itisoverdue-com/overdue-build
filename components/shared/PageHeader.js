import FullBleedContainer from "../Layout/Container/FullBleedContainer"

export default function PageHeader() {
   return (
      <FullBleedContainer
         sx="h-[50vh] bg-black bg-opacity-30"
         backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441391/backgrounds/education_fbvmrv.jpg"
         childSx="flex justify-center items-center h-full"
      >
         <h1 className="text-7xl font-bold text-primary bg-opacity-">
            Contact Us
         </h1>
      </FullBleedContainer>
   )
}
