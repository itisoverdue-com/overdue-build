"use client"
import { useState, useEffect } from "react"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Card from "@/components/shared/Card"
import Image from "next/image"

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
                  <ListOfBlogs blogs={blogs} />
               ) : (
                  <p>NO BLOGS</p>
               )}
            </section>
         </FullBleedContainer>
      </div>
   )
}

const ListOfBlogs = ({ blogs }) => {
   return (
      <ol className="grid grid-cols-3 gap-20">
         {blogs.map((item) => (
            <BlogCard
               key={item.id}
               date={item.date}
               image={item.jetpack_featured_media_url}
               title={item.title.rendered}
               slug={item.slug}
            />
         ))}
      </ol>
   )
}
const BlogCard = ({ date, title, author, slug, image }) => {
   return (
      <Card sx="flex flex-col overflow-hidden shadow-lg w-full">
         {/* Image Container */}
         <div className="relative aspect-video">
            <Image
               src={image}
               alt={slug}
               fill
               style={{ objectFit: "cover" }}
               sizes="450px"
            />
         </div>
         <div className="px-5 py-7 text-start">
            <h3>{title}</h3>
         </div>
      </Card>
   )
}

/*
   WordPress Blog Interface
   acf: [],
   author: number,
   categories: number[],
   comment_status: string,
   content: {
      protected: boolean,
      rendered: string
   },
   date: Date,
   date_gmt: Date,
   excerpt: {
      protected: boolean,
      rendered: string
   },
   featured_media: number,
   format: string,
   guid: {
      rendered: string
   },
   id: number,
   jetpack_featured_media_url: string,
   link: string,
   meta: [],
   modified: Date,
   modified_gmt: Date,
   ping_status: string,
   slug: string,
   sticky: boolean,
   tags: number[],
   template: string,
   title: {
      rendered: string
   },
   type: string
*/
