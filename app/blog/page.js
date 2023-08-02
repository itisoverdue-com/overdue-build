import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Blog from "@/components/Pages/Blog"

async function getData() {
   const BASE = process.env.NEXT_PUBLIC_BASE_URL
   const res = await fetch(`${BASE}/api/blogs`, { method: "GET" })
   const { data, error } = await res.json()

   if (error >= 400) {
      console.log("ERROR HERE")
   }
   return data
}

// async function getData() {
//    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//    // The return value is *not* serialized
//    // You can return Date, Map, Set, etc.

//    if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error("Failed to fetch data")
//    }

//    return res.json()
// }

// const BASE = process.env.NEXT_PUBLIC_BASE_URL
// const res = await fetch(`${BASE}/api/user`, {
//     method: 'POST',
//     body: JSON.stringify(code),
// })
// const { data, error } = await res.json()

// if (error === 401) {
//     redirect(endpoints.login)
// } else if (error > 400) {
//     redirect('/')
// }
// return data

export default async function BlogPage() {
   const data = await getData()

   return (
      <div>
         <PageHero
            route="blog"
            header="blog"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/backgrounds/blog_up1rht.jpg"
         />
         <FullBleedContainer
            sx="bg-background"
            childSx="py-28 flex flex-col justify-center items-center text-center md:py-32"
         >
            <h1>HEI</h1>
            {/* Title, Accent Line, Subheader */}
            {/* <section>
               <Blog blogs={blogs} />
            </section> */}
         </FullBleedContainer>
      </div>
   )
}
