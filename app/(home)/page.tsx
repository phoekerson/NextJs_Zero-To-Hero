import React from "react";

const page = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await response.text()

  // const response = await fetch (`http://localhost:3000/api/items/${slug}`)
  const data = await response.json()
 return (
  <h1>
    {data.map((post: any)=>(
        <li key={post.id}>{post.title} {post.body}</li>
    ))}
  </h1>
  
 )
}
export default page