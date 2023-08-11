import { NextResponse } from "next/server"

export async function GET(request, { params: { id } }) {
   const res = await fetch(
      `https://blog.itisoverdue.org/wp-json/wp/v2/posts/${id}?_embed=author,wp:term`
   )
   const data = await res.json()
   return NextResponse.json(data)
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
   _embedded: {
      author: {
         id: number,
         name: string,
         url: string,
         description: string,
         link: string,
      }[],
      wp:term: [
         Category[{id: number, link: string, name: string, slug: string}],
         Tag[{id: string, link: string, name: string, slug: string}]
      ]

   }
*/
