import Link from 'next/link';
import FullBleedContainer from '@/components/Layout/Container/FullBleedContainer';
import Button from '@/components/shared/Button';

export default function Hero({ page, backgroundImageSrc = "" }) {
    return (
       <FullBleedContainer
          sx="h-[80vh] md:h-[50vh]"
          backgroundImageSrc={`${backgroundImageSrc}`}
          childSx="flex justify-center items-start h-full relative text-white text-2xl
          md:text-4xl lg:text-5xl xl:text-6xl font-bold flex-col space-y-5"
       >
          {/* Header w/ underline */}
          <h1>
             {page}
             <span className="mt-2 block w-1/3 border-t-8 border-primary rounded-2xl mx-auto" />
          </h1>
        {/* Subheader */}
        <div className="flex flex-col justify-center items-start">
            <h2 className="text-2xl md:text-4xl font-normal">
                We are the future.  We are the solution.
            </h2>
            <h2 className="text-2xl md:text-4xl font-normal">
                We will make your city the cleanest city.
            </h2>
        </div>
        {/* Button */}
        <div className="flex flex-col justify-center items-center">
            <Button variant="primary" size="lg">Join Our Team!</Button>
            <Button variant="outline" size="lg">Join Our Team!</Button>
        </div>
       </FullBleedContainer>
    )
 }