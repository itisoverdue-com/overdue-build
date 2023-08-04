async function getBlog(id) {
   const BASE_URL = process.env.BASE_URL
   const res = await fetch(`${BASE_URL}/api/blogs/${id}`)

   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
   }

   return res.json()
}

export default async function BlogSlugPage({ params: { id } }) {
   const blog = await getBlog(id)
   return <div>My Post: {id}</div>
}

// export async function generateStaticParams() {
//    const posts = await fetch('https://.../posts').then((res) => res.json())

//    return posts.map((post) => ({
//      slug: post.slug,
//    }))
//  }
