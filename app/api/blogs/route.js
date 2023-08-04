import { NextResponse } from "next/server"
export async function GET() {
   const categories = {}
   const _ = (
      await (await fetch("http://localhost:3000/api/blogs/categories")).json()
   ).forEach((item) => {
      categories[item.id] = {
         name: item.name,
         slug: item.slug,
         blogs: [],
      }
   })

   const res = await fetch(
      `https://blog.itisoverdue.org/wp-json/wp/v2/posts?_embed=author,wp:term&per_page=100&order=desc&status=publish`
   )
   const data = await res.json()
   const normal = sliceArrayByChunks(data, 6)
   const categorized = categorizeBlogs(data, categories)
   return NextResponse.json({ normal, categorized })
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
function sliceArrayByChunks(array, chunkSize) {
   let [res, pageCount] = [{}, 0]

   for (let i = 0; i < array.length; i += chunkSize) {
      res[pageCount] = array.slice(i, i + chunkSize)
      pageCount++
   }
   return res
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
            blogs: sliceArrayByChunks(item.blogs, 6),
         },
      }
   })

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
