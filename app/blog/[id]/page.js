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
            route="blog"
            segments={["blog"]}
            header={parse(blog.title)}
            backgroundImageSrc={`${blog.image}`}
         />
         <FullBleedContainer sx="bg-background" childSx="py-28 md:py-32">
            {/* <--- Categories ---> */}
            <ul className="flex justify-start items-center flex-wrap">
               <span className="mr-2 mb-2 font-bold ">Topics:</span>
               {blog.categories.map((item) => (
                  <li
                     key={item.id}
                     className="bg-darkest-grey text-white px-2 py-1 rounded-md inline-block mr-2 mb-2"
                  >
                     {item.name}
                  </li>
               ))}
            </ul>

            {/* <--- Title, Author ---> */}
            <div className="flex flex-col items-start space-y-5 mt-14 pb-7 mb-7 border-b-2 border-b-light-grey">
               {/* Title */}
               <h2 className="text-start text-6xl">{parse(blog.title)}</h2>

               {/* Author(s) */}
               <h3 className="flex items-center text-2xl">
                  <span className="bg-primary px-2 py-1 mr-3">Written by:</span>

                  <ol className="after:content-[','] last:after:content-none">
                     {blog.authors.map((item) => (
                        <li key={item.id}>
                           <Link
                              href={item.link}
                              target="_blank"
                              className="inline-flex items-center w-max hover:underline hover:underline-offset-2"
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
            </div>

            {/* <--- Content ---> */}
            <article className="flex flex-col">{parse(blog.content)}</article>

            <p className="text-center mt-20 italic text-gray-400">
               Last updated on{" "}
               {DateTime.fromISO(blog.modified).toLocaleString()}
            </p>
         </FullBleedContainer>
      </div>
   )
}
