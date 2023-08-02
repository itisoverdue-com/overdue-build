import React from "react"
import Card from "@/components/shared/Card"
import Image from "next/image"

export default function Blog({ blogs }) {
   return <div>index</div>
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
