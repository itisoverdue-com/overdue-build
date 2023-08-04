async function getBlog(slug) {
   const res = await fetch(`/api/blogs/${slug}`)

   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
   }

   return res.json()
}

export default async function BlogSlugPage({ params: { slug } }) {
   const blog = await getBlog(slug)
   return <div>My Post: {slug}</div>
}

// export async function generateStaticParams() {
//    const posts = await fetch('https://.../posts').then((res) => res.json())

//    return posts.map((post) => ({
//      slug: post.slug,
//    }))
//  }
