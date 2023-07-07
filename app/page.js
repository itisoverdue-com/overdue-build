import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"

export default function Home() {
   return (
      <main>
         <FullBleedContainer sx="h-96 bg-blue-200">
            <p className="bg-red-200 h-">Hello World</p>
         </FullBleedContainer>
      </main>
   )
}
