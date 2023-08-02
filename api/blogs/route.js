import { NextResponse } from "next/server"
export async function GET() {
   console.log("\n\n\n♥ GET BLOGS")
   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
   console.log(res)
   // const res = await fetch(
   //    "https://blog.itisoverdue.org/wp-json/wp/v2/posts?per_page=100&order=desc&status=publish"
   // )
   // const data = await res.json()

   return NextResponse.json(res)
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
