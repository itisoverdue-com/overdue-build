"use client"
import { useEffect, useState } from "react"
import { BlogCard, Loading } from "@/app/blog/page"

function LatestBlogs() {
   const [blogs, setBlogs] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)
   useEffect(() => {
      async function fetchBlogs() {
         setLoading(true)
         try {
            // Fetching Blogs
            const blogsRes = await (
               await fetch(
                  "https://blog.itisoverdue.org/wp-json/wp/v2/posts?_embed=author,wp:term&per_page=3&order=desc&status=publish"
               )
            ).json()
            setBlogs(blogsRes)
         } catch (err) {
            setError(err)
         }
         setLoading(false)
      }
      fetchBlogs()
   }, [])
   return (
      !error && (
         <section>
            {blogs.length > 0 ? (
               <ol className="grid grid-cols-3">
                  {blogs.map((item) => (
                     <BlogCard
                        key={item.id}
                        date={item.date}
                        image={item.jetpack_featured_media_url}
                        title={item.title.rendered}
                        author={item._embedded.author[0].name}
                        slug={item.slug}
                        blogId={item.id}
                     />
                  ))}
               </ol>
            ) : (
               <Loading />
            )}
         </section>
      )
   )
}

export default LatestBlogs
