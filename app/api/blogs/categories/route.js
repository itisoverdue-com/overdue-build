import { NextResponse } from "next/server"
export async function GET() {
   const res = await fetch(
      `https://blog.itisoverdue.org/wp-json/wp/v2/categories?per_page=1&orderby=id&hide_empty`
   )
   const data = await res.json()
   return NextResponse.json(data)
}
