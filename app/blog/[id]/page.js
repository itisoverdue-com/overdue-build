import Image from "next/image"
import Link from "next/link"
import parse from "html-react-parser"
import { DateTime } from "luxon"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import "./styles.css"

async function getBlog(id) {
   const BASE_URL = process.env.BASE_URL
   const res = await fetch(`${BASE_URL}/api/blogs/${id}`)

   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
   }

   return res.json()
}

/**
 * Image - blog.jetpack_featured_media_url
 * Date - blog.date
 * Title - blog.title.rendered
 * Content - blog.content.rendered
 * Excerpt - blog.excerpt.rendered
 * Format - blog.format
 * Guid - blog.guid.rendered
 * Modified: blog.modified
 * Template: blog.template
 * Author[]: blog._embedded.author - id, name, url, link
 * Category[]: blog._embedded.wp:term[0] - id, name, slug
 * Slug: blog.slug
 * Tag[]: blog._embedded.wp:term[1] - id, name, slug
 */

export default async function BlogSlugPage({ params: { id } }) {
   const _ = await getBlog(id)
   const blog = {
      id: _.id,
      image: _.jetpack_featured_media_url,
      date: _.date,
      title: _.title.rendered,
      content: _.content.rendered,
      format: _.format,
      guid: _.guid.rendered,
      modified: _.modified,
      authors: _._embedded.author,
      categories: _._embedded["wp:term"][0],
      tags: _._embedded["wp:term"][1],
   }

   return (
      <div>
         <PageHero
            route={blog.id}
            segments={["blog"]}
            header={parse(blog.title)}
            showHeader={false}
            backgroundImageSrc={`${blog.image}`}
         />
         <FullBleedContainer
            sx="bg-background dark:bg-darkest-grey"
            childSx="py-16 md:py-32"
         >
            {/* <--- Title, Author, Categories---> */}
            <div className="mb-7 flex flex-col items-start space-y-5 border-b-2 border-b-light-grey pb-7">
               {/* Title */}
               <h2 className="text-start text-4xl md:text-5xl lg:text-6xl">
                  {parse(blog.title)}
               </h2>

               {/* Author(s) */}
               <h3 className="flex items-center text-lg md:text-xl lg:text-2xl">
                  <span className="mr-3 bg-primary px-2 py-1">Written by:</span>

                  <ol>
                     {blog.authors.map((item) => (
                        <li
                           key={item.id}
                           className="after:content-[','] last:after:content-none"
                        >
                           <Link
                              href={item.link}
                              target="_blank"
                              className="inline-flex w-max items-center hover:underline hover:underline-offset-2"
                           >
                              <Image
                                 src={item.avatar_urls["24"]}
                                 width={24}
                                 height={24}
                                 alt={item.name}
                                 className="mr-1.5"
                              />

                              {item.name}
                           </Link>
                        </li>
                     ))}
                  </ol>
               </h3>

               {/* Categories */}
               <ul className="flex flex-wrap items-center justify-start ">
                  <span className="mb-2 mr-2 border bg-neutral-200 px-2 py-0.5 font-bold text-black">
                     Topics:
                  </span>
                  {blog.categories.map((item) => (
                     <li
                        key={item.id}
                        className="mb-2 mr-2 inline-block after:content-[','] last:after:content-none hover:underline"
                     >
                        {item.name}
                     </li>
                  ))}
               </ul>
            </div>

            {/* <--- Content ---> */}
            <article className="flex flex-col">{parse(blog.content)}</article>

            {/* Last Modified Date */}
            <p className="mt-10  text-center italic text-gray-400 lg:mt-20">
               Last updated on{" "}
               {DateTime.fromISO(blog.modified).toLocaleString()}
            </p>
         </FullBleedContainer>
      </div>
   )
}
