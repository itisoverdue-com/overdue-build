"use client"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import { useState, useEffect, useRef } from "react"
import Card from "@/components/shared/Card"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/shared/Button"
import {
   ArrowLeftCircleIcon,
   ArrowRightCircleIcon,
   ExclamationTriangleIcon,
   GlobeAltIcon,
} from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"
import parse from "html-react-parser"
import { DateTime } from "luxon"

export default function BlogPage() {
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [blogs, setBlogs] = useState(null)
   const [page, setPage] = useState(0)
   const blogSectionRef = useRef(null)
   const scrollToRef = (ref) => {
      const offset = ref.current.offsetTop * 4.8
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
         } catch (err) {
            setError(err)
         }
         setLoading(false)
      }
      fetchBlogs()
   }, [])

   const handlePageChange = (newPage) => {
      setPage(newPage)
      scrollToRef(blogSectionRef)
   }

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
               {error ? (
                  <Error />
               ) : loading ? (
                  <Loading />
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
   function formatDate(date) {
      const [month, day, year] = DateTime.fromISO(date)
         .toLocaleString({
            month: "short",
            day: "2-digit",
            year: "2-digit",
         })
         .split(" ")

      return {
         monthYear: `${month}'${year}`,
         day: `${day.slice(0, 2)}`,
      }
   }
   return (
      <ol className=" grid w-full gap-6 mb-12 md:grid-cols-2 lg:gap-10 lg:grid-cols-3 lg:h-[800px]">
         {blogs.map((item) => (
            <BlogCard
               key={item.id}
               date={formatDate(item.date)}
               image={item.jetpack_featured_media_url}
               title={item.title.rendered}
               author={item._embedded.author[0].name}
               slug={item.slug}
            />
         ))}
      </ol>
   )
}

const BlogCard = ({ date, title, author, slug, image }) => {
   return (
      <Link href={`/blog/${slug}`}>
         <Card sx="flex flex-col overflow-hidden shadow-lg w-full aspect-[5/4] bg-white active:scale-95 active:bg-primary md:hover:ring-8 md:hover:ring-primary md:hover:bg-primary md:hover:-translate-y-4 md:hover:shadow-2xl transition-all">
            {/* Card: Image */}
            <div className="relative aspect-video bg-light-grey">
               <Image
                  src={image}
                  alt={slug}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="450px"
               />
            </div>
            {/* Card: Content */}
            <div className="px-5 pb-5 pt-12 text-start relative ">
               {/* Blog - Title */}
               <h3>{parse(title)}</h3>
               {/* Blog - Date */}
               <div className="bg-primary px-3 py-2 rounded-lg w-max absolute bottom-3/4 bg-opacity-75 backdrop-blur-sm left-5 shadow-md">
                  <span className="text-3xl block text-center font-bold tracking-tighter md:text-4xl lg:text-5xl">
                     {date.day}
                  </span>
                  <span className="md:text-lg  block text-center lg:text-xl">
                     {date.monthYear}
                  </span>
               </div>
               {/* Blog - Author */}
               <p className="text-sm bg-darker-grey text-primary  px-4 py-2 rounded-t-lg w-max absolute bottom-full right-5 lg:text-base">
                  <UserIcon className="w-4 h-4 mr-1 inline-block mb-0.5" />{" "}
                  <span>{author}</span>
               </p>
            </div>
         </Card>
      </Link>
   )
}

const Pagination = ({ numberOfPages, page, handlePageChange }) => {
   const handlePaginationClick = (e) =>
      handlePageChange(parseInt(e.currentTarget.name.split("-")[1]))

   const handleNavClick = (next) =>
      next
         ? handlePageChange((prevState) => prevState + 1)
         : handlePageChange((prevState) => prevState - 1)

   return (
      <>
         {/* <--- Pagination for Desktop ---> */}
         <ol className="lg:flex space-x-4 justify-center hidden">
            {Array.from({ length: numberOfPages }).map((_item, index) => (
               <button
                  key={index}
                  name={`pagination-${index}`}
                  onClick={handlePaginationClick}
                  className={`${
                     index === page
                        ? "bg-primary "
                        : "bg-darker-grey text-white hover:text-primary hover:bg-black transition-all"
                  }  aspect-square w-10 rounded-lg text-xl`}
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

const Loading = () => {
   return (
      <div className="w-1/2 md:w-1/4 lg:w-1/6 mx-auto text-light-grey py-36">
         <GlobeAltIcon className="animate-pulse  mx-auto inline-block" />
         <h3 className="text-4xl mt-3">Loading...</h3>
      </div>
   )
}

const Error = () => {
   return (
      <div className=" lg:w-1/2 mx-auto text-light-grey py-36">
         <ExclamationTriangleIcon className="mx-auto inline-block w-1/4 md:w-1/6 lg:w-1/4" />
         <h3 className="text-2xl md:text-4xl mt-3">
            Oops, something went wrong.
         </h3>
      </div>
   )
}
