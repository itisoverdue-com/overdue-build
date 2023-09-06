"use client"
import { useEffect, useState } from "react"
import { BlogCard, Loading } from "@/app/blog/page"
import Button from "@/components/shared/Button"

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
                  "https://blog.itisoverdue.org/wp-json/wp/v2/posts?_embed=author,wp:term&per_page=4&order=desc&status=publish"
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
         <section className="mt-32">
            {blogs.length > 0 ? (
               <>
                  <h3 className="mb-14 w-max text-4xl">
                     Latest Blogs & Updates
                     <span className="mt-4 block h-2 w-1/3 rounded-full bg-primary" />
                  </h3>
                  <ol className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                     {blogs.map((item) => (
                        <BlogCard
                           key={item.id}
                           date={item.date}
                           image={item.jetpack_featured_media_url}
                           title={item.title.rendered}
                           author={item._embedded.author[0].name}
                           slug={item.slug}
                           blogId={item.id}
                           sx="lg:last:hidden"
                        />
                     ))}
                  </ol>
                  <div className="mx-auto mt-20 w-max">
                     <Button href="/blog" variant={"dark"} size={"xl"}>
                        See Our Latest Blog Post
                     </Button>
                  </div>
               </>
            ) : (
               <Loading />
            )}
         </section>
      )
   )
}

export default LatestBlogs
