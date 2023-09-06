"use client"
import { useEffect, useState } from "react"
import { BlogCard, Loading } from "@/app/blog/page"
import Button from "@/components/shared/Button"

function LatestBlogs() {
   const [blogs, setBlogs] = useState([])

   const [error, setError] = useState(false)
   useEffect(() => {
      async function fetchBlogs() {
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
      }
      fetchBlogs()
   }, [])
   return (
      !error && (
         <section className="mt-32">
            <h3 className="mb-10 text-center text-3xl md:mb-14  lg:w-max lg:text-start lg:text-4xl">
               Latest Blogs & Updates
               <span className="mx-auto mt-4 block h-2 w-1/3 rounded-full bg-primary lg:mr-auto" />
            </h3>
            {blogs.length > 0 ? (
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
            ) : (
               <Loading />
            )}
            <div className="mx-auto mt-10 w-max md:mt-20">
               <Button href="/blog" variant={"dark"} size={"xl"}>
                  See Our Latest Blog Post
               </Button>
            </div>
         </section>
      )
   )
}

export default LatestBlogs
