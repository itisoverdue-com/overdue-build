"use client"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import React from "react"
import Card from "@/components/shared/Card"
import Image from "next/image"

export default function BlogPage() {
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
            <h1>HEI</h1>
            {/* Title, Accent Line, Subheader */}
            {/* <section>
               <Blog blogs={blogs} />
            </section> */}
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
