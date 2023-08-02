"use client"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import { useState, useEffect, use } from "react"
import Card from "@/components/shared/Card"
import Image from "next/image"

export default function BlogPage() {
   const [loading, setLoading] = useState(true)
   const [errors, setErrors] = useState(null)
   const [blogs, setBlogs] = useState(null)
   const [page, setPage] = useState(0)

   useEffect(() => {
      async function fetchBlogs() {
         setLoading(true)
         try {
            const res = await fetch("/api/blogs")
            const data = await res.json()
            setBlogs(data)
         } catch (error) {
            setErrors(error)
         }
         setLoading(false)
      }
      fetchBlogs()
   }, [])

   const handlePageChange = (newPage) => setPage(newPage)
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
            <section>
               {loading ? (
                  <h3>Loading...</h3>
               ) : (
                  <>
                     <ListOfBlogs blogs={blogs[page]} />
                     <Pagination
                        numberOfPages={Object.keys(blogs).length}
                        currentPage={page}
                        handlePageChange={handlePageChange}
                     />
                  </>
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

const Pagination = ({ numberOfPages, currentPage, handlePageChange }) => {
   const handleClick = (e) => {
      handlePageChange(parseInt(e.currentTarget.name.split("-")[1]))
   }

   return (
      <ol className="flex space-x-3 justify-center">
         {Array.from({ length: numberOfPages }).map((_item, index) => (
            <button
               key={index}
               name={`pagination-${index}`}
               onClick={handleClick}
               className={`${
                  index === currentPage
                     ? "bg-primary "
                     : "bg-darkest-grey text-white hover:text-primary hover:bg-black transition-all"
               }  aspect-square w-11 rounded-lg`}
            >
               {index + 1}
            </button>
         ))}
      </ol>
   )
}
