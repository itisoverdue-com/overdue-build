import { NextResponse } from "next/server"
export async function GET() {
   const res = await fetch(
      `https://blog.itisoverdue.org/wp-json/wp/v2/posts?_embed=author&per_page=100&order=desc&status=publish`
   )
   let data = await res.json()
   data = sectionArray(data, 6)

   return NextResponse.json(data)
}

/**
 *
 * @param {array} array
 * @param {number} chunkSize
 * @returns Object of page numbers as keys and "chunkSized" arrays as value
 * Ex.
 *    data = {
 *       0: [{...}, {...}],
 *       1: [{...}, {...}],
 *       2: [{...}]
 *    }
 */
function sectionArray(array, chunkSize) {
   let [res, pageCount] = [{}, 0]

   for (let i = 0; i < array.length; i += chunkSize) {
      res[pageCount] = array.slice(i, i + chunkSize)
      pageCount++
   }
   return res
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
