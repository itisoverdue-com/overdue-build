"use client"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import { useState, useEffect, useRef, createElement } from "react"
import Card from "@/components/shared/Card"
import Image from "next/image"
import Button from "@/components/shared/Button"
import {
   ArrowLeftCircleIcon,
   ArrowRightCircleIcon,
} from "@heroicons/react/24/outline"
import parse from "html-react-parser"

export default function BlogPage() {
   const [loading, setLoading] = useState(true)
   const [errors, setErrors] = useState(null)
   const [blogs, setBlogs] = useState(null)
   const [page, setPage] = useState(0)
   const blogSectionRef = useRef(null)
   const scrollToRef = (ref) => {
      const offset = ref.current.offsetTop * 3
      window.scrollTo({
         top: offset,
         behavior: "smooth",
      })
   }

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

   const handlePageChange = (newPage) => {
      setPage(newPage)
      scrollToRef(blogSectionRef)
   }
   const renderHTML = (rawHTML, htmlElement) =>
      React.createElement(htmlElement, {
         dangerouslySetInnerHTML: { __html: rawHTML },
      })
   return (
      <div>
         <PageHero
            route="blog"
            header="blog"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/backgrounds/blog_up1rht.jpg"
         />
         <FullBleedContainer
            sx="bg-background"
            childSx="py-28 text-center md:py-32"
         >
            <section ref={blogSectionRef}>
               {loading ? (
                  <h3>Loading...</h3>
               ) : (
                  <>
                     <ListOfBlogs blogs={blogs[page]} />
                     <Pagination
                        numberOfPages={Object.keys(blogs).length}
                        page={page}
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
      <ol className=" grid  w-full gap-6 mb-12 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:h-[800px]">
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
   const renderHTML = (rawHTML, htmlElement) =>
      createElement(htmlElement, {
         dangerouslySetInnerHTML: { __html: rawHTML },
      })
   return (
      <Card sx="flex flex-col overflow-hidden shadow-lg w-full aspect-[5/4]">
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
            <h3>{parse(title)}</h3>
         </div>
      </Card>
   )
}

const Pagination = ({ numberOfPages, page, handlePageChange }) => {
   const handlePaginationClick = (e) => {
      handlePageChange(parseInt(e.currentTarget.name.split("-")[1]))
   }

   const handleNavClick = (next) => {
      next
         ? handlePageChange((prevState) => prevState + 1)
         : handlePageChange((prevState) => prevState - 1)
   }

   return (
      <>
         {/* <--- Pagination for Desktop ---> */}
         <ol className="lg:flex space-x-5 justify-center hidden">
            {Array.from({ length: numberOfPages }).map((_item, index) => (
               <button
                  key={index}
                  name={`pagination-${index}`}
                  onClick={handlePaginationClick}
                  className={`${
                     index === page
                        ? "bg-primary "
                        : "bg-darker-grey text-white hover:text-primary hover:bg-black transition-all"
                  }  aspect-square w-11 rounded-lg`}
               >
                  {index + 1}
               </button>
            ))}
         </ol>

         {/* <--- Navigation for Mobile ---> */}
         <div className="flex w-full justify-center space-x-10 lg:hidden">
            {page !== 0 && (
               <Button
                  variant="dark"
                  size="xl"
                  onClick={() => handleNavClick(false)}
               >
                  <ArrowLeftCircleIcon className="w-6 h-6 mr-1.5" />
                  <span>Prev</span>
               </Button>
            )}

            {page !== numberOfPages - 1 && (
               <Button
                  variant="dark"
                  size="xl"
                  onClick={() => handleNavClick(true)}
               >
                  <span>Next</span>
                  <ArrowRightCircleIcon className="w-6 h-6 ml-1.5" />
               </Button>
            )}
         </div>
      </>
   )
}
