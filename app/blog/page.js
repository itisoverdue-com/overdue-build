"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import parse from "html-react-parser"
import { DateTime } from "luxon"
import { sliceArrayByChunks } from "@/lib/utils"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Card from "@/components/shared/Card"
import Button from "@/components/shared/Button"
import {
   ArrowLeftCircleIcon,
   ArrowRightCircleIcon,
   ExclamationTriangleIcon,
   GlobeAltIcon,
} from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"

const blogsPerPage = 6
export default function BlogPage() {
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [blogs, setBlogs] = useState(null)
   const [categories, setCategories] = useState(null)
   const [filter, setFilter] = useState("all")
   const [page, setPage] = useState(0)
   const originalBlogs = useRef(null)
   const blogSectionRef = useRef(null)
   const scrollToRef = (ref) => {
      const offset = ref.current.offsetTop * 5
      window.scrollTo({
         top: offset,
         behavior: "smooth",
      })
   }

   useEffect(() => {
      async function fetchBlogs() {
         setLoading(true)
         try {
            // Fetching Blogs
            const blogsRes = await (await fetch("/api/blogs")).json()

            // Fetching Categories
            const categoryRes = await (
               await fetch(
                  "https://blog.itisoverdue.org/wp-json/wp/v2/categories?per_page=20&orderby=id&hide_empty=true"
               )
            ).json()

            // Slicing Blogs by Chunks
            const sliced = sliceArrayByChunks(blogsRes, blogsPerPage)
            originalBlogs.current = sliced

            // Categorizing Blogs
            const categories = {}
            categoryRes.forEach((item) => {
               categories[item.id] = {
                  name: item.name,
                  slug: item.slug,
                  blogs: [],
               }
            })
            const categorized = categorizeBlogs(blogsRes, categories)

            // Setting State
            setCategories(categorized)
            setBlogs(sliced)
         } catch (err) {
            console.log(err)
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

   const handleFilterChange = (type) => {
      setPage(0)
      if (type === "all") {
         setFilter("all")
         setBlogs(originalBlogs.current)
      } else {
         setFilter(type)
         setBlogs(categories[type].blogs)
      }
   }

   function categorizeBlogs(array, categories) {
      let res = categories

      // Adds to the catgories blogs array
      array.forEach((item) => {
         item.categories.forEach((id) => {
            res[id].blogs.push(item)
         })
      })

      // Slices category blog array into chunks
      Object.entries(res).forEach(([key, item]) => {
         res = {
            ...res,
            [key]: {
               ...res[key],
               blogs: sliceArrayByChunks(item.blogs, blogsPerPage),
            },
         }
      })

      return res
   }

   return (
      <div>
         <PageHero
            route="blog"
            header="blog"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/backgrounds/blog_up1rht.jpg"
         />
         <FullBleedContainer
            sx="bg-background dark:bg-darkest-grey"
            childSx="py-16 text-center md:py-32"
         >
            <section ref={blogSectionRef}>
               {error ? (
                  <Error />
               ) : loading ? (
                  <Loading />
               ) : (
                  <>
                     <CategoryFilters
                        categories={categories}
                        filter={filter}
                        handleFilterChange={handleFilterChange}
                     />
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

const CategoryFilters = ({ categories, filter, handleFilterChange }) => {
   const handleClick = (e) => handleFilterChange(e.currentTarget.name)
   return (
      <ul className="mb-6 inline-flex flex-wrap items-center rounded-md border-2 bg-white px-3 py-2 dark:border-dark-grey dark:bg-dark-grey md:mb-12 lg:px-0 lg:py-0">
         <li className="mb-1 mr-3 inline-block text-light-grey dark:bg-lighter-grey dark:text-black lg:mb-0 lg:bg-lightest-grey lg:px-3 lg:py-3 lg:text-dark-grey">
            Filters:
         </li>

         {/* All - Remove Filters */}
         <button
            name="all"
            onClick={handleClick}
            className={`${
               filter === "all"
                  ? "bg-primary px-3 "
                  : "bg-white dark:bg-dark-grey dark:text-white"
            } mb-1 mr-4  rounded-md py-1 transition-all lg:mb-0`}
         >
            All
         </button>

         {/* List of Categories */}
         {Object.entries(categories).map(([key, item]) => (
            <button
               key={key}
               name={key}
               onClick={handleClick}
               className={`${
                  filter === key
                     ? "bg-primary px-4"
                     : "bg-white dark:bg-dark-grey dark:text-white"
               }  mb-1 mr-4  rounded-md py-1 transition-all lg:mb-0`}
            >
               {item.name}
            </button>
         ))}
      </ul>
   )
}

const ListOfBlogs = ({ blogs }) => {
   return (
      <ol className=" mb-12 grid w-full gap-6 md:grid-cols-2 lg:h-[800px] lg:grid-cols-3 lg:gap-10">
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
   )
}

export const BlogCard = ({ date, title, author, slug, image, blogId, sx }) => {
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
   const { day, monthYear } = formatDate(date)
   return (
      <Link href={`/blog/${blogId}`} className={`${sx}`}>
         <Card sx="flex flex-col overflow-hidden shadow-lg w-full aspect-[5/4] bg-white active:scale-95 active:bg-primary md:hover:ring-8 md:hover:ring-primary md:hover:bg-primary md:hover:-translate-y-4 md:hover:shadow-2xl transition-all">
            {/* Card: Image */}
            <div className="relative aspect-video flex-1 bg-light-grey">
               <Image
                  src={image}
                  alt={slug}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 1024px) 470px, 360px"
                  quality={30}
               />
            </div>
            {/* Card: Content */}
            <div className="relative h-full max-h-[30%] px-5 text-start">
               {/* Blog - Title */}
               <h3 className="h-full w-full truncate pb-2 pt-8 text-lg dark:text-black md:text-xl lg:pt-12 lg:text-2xl">
                  {parse(title)}
               </h3>
               {/* Blog - Date */}
               <div className="absolute bottom-3/4 left-5 w-max rounded-lg bg-primary bg-opacity-75 px-3 py-2 shadow-md backdrop-blur-sm">
                  <span className="block text-center text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                     {day}
                  </span>
                  <span className="block  text-center md:text-lg lg:text-xl">
                     {monthYear}
                  </span>
               </div>
               {/* Blog - Author */}
               <p className="absolute bottom-full right-5  w-max rounded-t-lg bg-darker-grey px-4 py-2 text-sm text-primary lg:text-base">
                  <UserIcon className="mb-0.5 mr-1 inline-block h-4 w-4" />{" "}
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
         <ol className="hidden justify-center space-x-4 lg:flex">
            {Array.from({ length: numberOfPages }).map((_item, index) => (
               <button
                  key={index}
                  name={`pagination-${index}`}
                  onClick={handlePaginationClick}
                  className={`${
                     index === page
                        ? "bg-primary dark:bg-primaryDark"
                        : "bg-darker-grey text-white transition-all hover:bg-black hover:text-primary"
                  }  aspect-square w-10 rounded-lg text-xl dark:bg-dark-grey`}
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
                  <ArrowLeftCircleIcon className="mr-1.5 h-6 w-6" />
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
                  <ArrowRightCircleIcon className="ml-1.5 h-6 w-6" />
               </Button>
            )}
         </div>
      </>
   )
}

export const Loading = () => {
   return (
      <div className="mx-auto w-1/2 py-36 text-light-grey md:w-1/4 lg:w-1/6">
         <GlobeAltIcon className="mx-auto  inline-block animate-pulse" />
         <h3 className="mt-3 text-4xl">Loading...</h3>
      </div>
   )
}

const Error = () => {
   return (
      <div className=" mx-auto py-36 text-light-grey lg:w-1/2">
         <ExclamationTriangleIcon className="mx-auto inline-block w-1/4 md:w-1/6 lg:w-1/4" />
         <h3 className="mt-3 text-2xl md:text-4xl">
            Oops, something went wrong.
         </h3>
      </div>
   )
}
