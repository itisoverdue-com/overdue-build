"use client"
import { useState, useEffect } from "react"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"

export default function BlogPage() {
   const [blogs, setBlogs] = useState([])
   const [page, setPage] = useState(0)
   const [loading, setLoading] = useState(true)
   const [errors, setErrors] = useState(null)

   useEffect(() => {
      async function getBlogs() {
         setLoading(true)
         try {
            const res = await fetch(
               "https://blog.itisoverdue.org/wp-json/wp/v2/posts?per_page=100&order=desc&status=publish"
            )
            const data = await res.json()
            setBlogs(data)
         } catch (error) {
            setErrors(error)
         }
         setLoading(false)
      }
      getBlogs()
   }, [])

   console.log(blogs)

   // Date
   // Title
   // Author
   // Slug
   // Image
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
            {/* Title, Accent Line, Subheader */}
            <section>
               {loading ? (
                  <p>Loading...</p>
               ) : blogs.length ? (
                  <ol>BLOGS</ol>
               ) : (
                  <p>NO BLOGS</p>
               )}
            </section>
         </FullBleedContainer>
      </div>
   )
}
