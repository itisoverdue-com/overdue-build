import { NextResponse } from "next/server"
export async function GET(request, { params }) {
   const res = await fetch(
      `https://blog.itisoverdue.org/wp-json/wp/v2/posts/${params.id}`
   )
   const data = await res.json()
   console.log(data)
   return NextResponse.json({ hello: "JANE" })
}
